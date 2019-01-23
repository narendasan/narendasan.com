---
layout: post
title: "TensorRT Python API"
description: "Making NVIDIA's Neural Network Optimizer accessible to the everyday data scientist"
thumb_image: "about.jpg"
tags: [cv, ai]
---

When one thinks of neural networks, probably the first thing they think of is a deep learning framework like Tensorflow or PyTorch. The creation of deep learning frameworks were crutial to the adoption of deep learning in the products we use every day. Instead of having to write your own CUDA kernels to leverage the parallelization power of a GPU, you can easily structure compenents together into a graph and managed the training of that graph all in python, letting the frameworks handle all the hard parts. But this is only half of the solution to making deep learning a viable tool to do useful work. 

Once the weights have been finalized and the training completed you are left with something that while may be good at its particular task, is far less efficent than it could be. Many people when deploying neural network models, take the extra step to optimize their model before deploying it so as to get the maximum throughput through the network. There are a couple projects that look to be the Tensorflow or PyTorch of this deployment phase (also known as the inference phase). Those include Facebooks GLOW compiler, DLVM, ONNC, nGraph, TVM and XLA. NVIDIA creates one specifically for optimizing networks on their GPUs for inference called TensorRT. If you want to know more about the optimizations that TensorRT does, take a look at these blog posts: [https://devblogs.nvidia.com/tag/tensorrt/](https://devblogs.nvidia.com/tag/tensorrt/).

In January of 2017 when I joined NVIDIA for a 8 month co-op, TensorRT 2.1 just came out. At the time for a user to optimize a network they had a couple of options, all of which required setting up a large C++ infrastructure around the model injest. 
At the time the only supported "parser" was for Caffe Models, and everyone else would have to manually extract weights and read them into a network definition API. Here was a minimal example from around then: 

The user would start by creating an injest system that would take a Caffe model, parse it then create an engine.
#### TensorRT Engine Builder 
{% highlight c++ %}
IBuilder* builder = createInferBuilder(gLogger);
​    
// parse the caffe model to populate the network, then set the outputs
INetworkDefinition* network = builder->createNetwork();
​    
CaffeParser parser;
auto blob_name_to_tensor = parser.parse(“deploy.prototxt”,
​                                        trained_file.c_str(),
​                                        *network,
​                                        DataType::kFLOAT);
​    
// specify which tensors are outputs
network->markOutput(*blob_name_to_tensor->find("prob"));
​    
// Build the engine
builder->setMaxBatchSize(1);
builder->setMaxWorkspaceSize(1 << 30); 
ICudaEngine* engine = builder->buildCudaEngine(*network);
{% endhighlight %}

Then using the engine they would setup an inference pipeline, that would manage transfering data to the GPU and results back. 
#### TensorRT Engine Executor 
{% highlight c++ %}
// The execution context is responsible for launching the 
// compute kernels
IExecutionContext *context = engine->createExecutionContext();

// In order to bind the buffers, we need to know the names of the 
// input and output tensors.
int inputIndex = engine->getBindingIndex(INPUT_LAYER_NAME),
int outputIndex = engine->getBindingIndex(OUTPUT_LAYER_NAME);

// Allocate GPU memory for Input / Output data
void* buffers = malloc(engine->getNbBindings() * sizeof(void*));
cudaMalloc(&buffers[inputIndex], batchSize * size_of_single_input);
cudaMalloc(&buffers[outputIndex], batchSize * size_of_single_output);

// Use CUDA streams to manage the concurrency of copying and executing
cudaStream_t stream;
cudaStreamCreate(&stream);

// Copy Input Data to the GPU
cudaMemcpyAsync(buffers[inputIndex], input, 
​                batchSize * size_of_single_input, 
​                cudaMemcpyHostToDevice, stream);

// Launch an instance of the GIE compute kernel
context.enqueue(batchSize, buffers, stream, nullptr);

// Copy Output Data to the Host
cudaMemcpyAsync(output, buffers[outputIndex], 
​                batchSize * size_of_single_output, 
​                cudaMemcpyDeviceToHost, stream));

// It is possible to have multiple instances of the code above
// in flight on the GPU in different streams.
// The host can then sync on a given stream and use the results
cudaStreamSynchronize(stream);
{% endhighlight %}

For people who had the resources to develop this sort of infrastrucutre it was entirely worth it to get the performace benifits, but to say the least it was in accessible for prototyping and light applications. 

## Enter the TensorRT Python API

For actual deployments C++ is fine, if not preferable to Python,  especially in the embedded settings I was working in. However, there is  still quite a bit of development work to be done between having a  trained model and putting it out in the world. One example is quantization.

#### A Quick Primer on Quantization

Typically (at least in 2017), neural networks are trained at FP32 precision. This is mostly due to the hardware available at that time specializing in FP32 math. But this precision has a lot more granularity than is necessary and ultimately you can get significant performance improvements by lowering the precision (to FP16 or INT8 or INT9 for example). For INT8 in particular, you need to go through a process called quantization that maps the range of weights onto an 8bit space. 

In TensorRT there are APIs that help do this quantization for you in a way that hopefully minimizes the precision lost by using this less granular representation. This and other advanced features are usually what need to be experimented with before deploying a model but having to set up quantization infrastructure in C++ just for experiments is a lot of work. 

### Wrapping a C++ Library

So instead of having to rewrite a library in Python there are APIs and tools you can use to wrap an existing library and expose a python interface. This is in fact the approach that libraries like PyTorch and Tensorflow use, a C++ core with a Python Frontend. There are couple tools that people use that automate the process of wrapping a library, one is SWIG which is able to auto generate an interface based on a header file and an interface file and PyBind11 a newer library that takes more work to define an interface but is lighter weight. For easy of prototyping and the shear amount of code to wrap I chose to use SWIG in my initial versions of the Python API for TensorRT but in later versions this was ported to PyBind11. 

TensorRT also requires directly interfacing with the CUDA Device API to transfer over data to a GPU and manage that memory through inference. There are a few python libraries that provide this capability. The one used officially with the TensorRT API is PyCUDA, but effort was put in to make sure other libraries such as CuPy also work. 

If you are going through the trouble to make a nice python API you should also try to abstract out a lot of the boilerplate that comes with a library targeted at C++ which I did in the `utils ` sub package so as to maintain as much similarity between the C++ and Python APIs in the main package but allow for higher level features else where. 

At this point I was able to do a lot of the basic work you'd want to do with TensorRT in Python:

#### TensorRT Engine Builder in Python

{% highlight py %}

import tensorrt as trt
import uff
from tensorrt.parsers import caffeparser
G_LOGGER = trt.infer.ConsoleLogger(trt.infer.LogSeverity.ERROR)
OUTPUT_LAYERS = ['prob']
MODEL_PROTOTXT = './data/mnist/mnist.prototxt'
CAFFE_MODEL = './data/mnist/mnist.caffemodel'
engine = trt.utils.caffe_to_trt_engine(G_LOGGER,
                                       MODEL_PROTOTXT,
                                       CAFFE_MODEL,
                                       1,
                                       1 << 20,
                                       OUTPUT_LAYERS,
                                       trt.infer.DataType.FLOAT)

{% endhighlight %}

#### TensorRT Engine Executor in Python

{% highlight py %}
runtime = trt.infer.create_infer_runtime(G_LOGGER)
context = engine.create_execution_context()
img = img.astype(np.float32)
output = np.empty(10, dtype = np.float32)

d_input = cuda.mem_alloc(1 * img.size * img.dtype.itemsize)
d_output = cuda.mem_alloc(1 * output.size * output.dtype.itemsize)
bindings = [int(d_input), int(d_output)]

stream = cuda.Stream()
cuda.memcpy_htod_async(d_input, img, stream)
context.enqueue(1, bindings, stream.handle, None)
cuda.memcpy_dtoh_async(output, d_output, stream)
stream.synchronize()
print ("Prediction: " + str(np.argmax(output)))
{% endhighlight %}

### Leveraging the Python Ecosystem

There are some great things about python that make life a lot easier. Data manipulation with NumPy for one is a massive benefit, so is being able to directly interface with other deep learning frameworks and tools. So one of the first things I added as soon as the library was wrapped was NumPy compatibility. This means that you can use NumPy arrays not only for your data, but also to transfer your weights around. This allows people using libraries like PyTorch (*note: this was before ONNX came out*) to extract their weights into NumPy arrays and then load them into TensorRT all in Python. 

#### Importing a PyTorch Model Manually

{% highlight py %}
# Given a net
class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.conv1 = nn.Conv2d(1, 20, kernel_size=5)
        self.conv2 = nn.Conv2d(20, 50, kernel_size=5)
        self.conv2_drop = nn.Dropout2d()
        self.fc1 = nn.Linear(800, 500)
        self.fc2 = nn.Linear(500, 10)

    def forward(self, x):
        x = F.max_pool2d(self.conv1(x), kernel_size=2, stride=2)
        x = F.max_pool2d(self.conv2(x), kernel_size=2, stride=2)
        x = x.view(-1, 800)
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return F.log_softmax(x)

model = Net()
weights = model.state_dict()

G_LOGGER = trt.infer.ConsoleLogger(trt.infer.LogSeverity.ERROR)
builder = trt.infer.create_infer_builder(G_LOGGER)

network = builder.create_network()

#Name for the input layer, data type, tuple for dimension
data = network.add_input("data", trt.infer.DataType.FLOAT, (1, 28, 28))
assert(data)

#-------------
conv1_w = weights['conv1.weight'].cpu().numpy().reshape(-1)
conv1_b = weights['conv1.bias'].cpu().numpy().reshape(-1)
conv1 = network.add_convolution(data, 20, (5,5),  conv1_w, conv1_b)
assert(conv1)
conv1.set_stride((1,1))

#-------------
pool1 = network.add_pooling(conv1.get_output(0), trt.infer.PoolingType.MAX, (2,2))
assert(pool1)
pool1.set_stride((2,2))

#-------------
conv2_w = weights['conv2.weight'].cpu().numpy().reshape(-1)
conv2_b = weights['conv2.bias'].cpu().numpy().reshape(-1)
conv2 = network.add_convolution(pool1.get_output(0), 50, (5,5), conv2_w, conv2_b)
assert(conv2)
conv2.set_stride((1,1))

#-------------
pool2 = network.add_pooling(conv2.get_output(0), trt.infer.PoolingType.MAX, (2,2))
assert(pool2)
pool2.set_stride((2,2))

#-------------
fc1_w = weights['fc1.weight'].cpu().numpy().reshape(-1)
fc1_b = weights['fc1.bias'].cpu().numpy().reshape(-1)
fc1 = network.add_fully_connected(pool2.get_output(0), 500, fc1_w, fc1_b)
assert(fc1)

#-------------
relu1 = network.add_activation(fc1.get_output(0), trt.infer.ActivationType.RELU)
assert(relu1)

#-------------
fc2_w = weights['fc2.weight'].cpu().numpy().reshape(-1)
fc2_b = weights['fc2.bias'].cpu().numpy().reshape(-1)
fc2 = network.add_fully_connected(relu1.get_output(0), 10, fc2_w, fc2_b)
assert(fc2)

fc2.get_output(0).set_name("prob")
network.mark_output(fc2.get_output(0))

builder.set_max_batch_size(1)
builder.set_max_workspace_size(1 << 20)

engine = builder.build_cuda_engine(network)
network.destroy()
builder.destroy()
{% endhighlight %}

This was a new capability introduced by the Python API because of Python and NumPy. 

We can also use NumPy and other tools like SciPy to do some of the data preprocessing required for inference and the quantization pipeline. 

#### Quantization with TensorRT Python

This blog post describes using the Python API to do the majority of the work for INT8 Quantization and deploying on a embedded platform:

[https://devblogs.nvidia.com/int8-inference-autonomous-vehicles-tensorrt/?utm_content=buffer46af6&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer](https://devblogs.nvidia.com/int8-inference-autonomous-vehicles-tensorrt/?utm_content=buffer46af6&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer])

### Higher level APIs

Using Python allows for a lot of abstracted work. One of the things introduced in the Python API is the Lite API a essentially one liner to create an engine and run it. 

{% highlight python %}
#Post Processing Callback, Should take a 5D Tensor, run post processing and return a single object
def analyze(output_data):
    #Results from the engine are returned as a list of 5D numpy arrays: 
    #        (Number of Batches x Batch Size x C x H x W)
    output = output_data.reshape(len(LABELS))
    # Get result
    top = np.argmax(output)
    top = LABELS[top]
    # Get top5
    top5 = np.argpartition(output, -5, axis=-1)[-5:]
    top5 = top5[np.argsort(output[top5])][::-1]`
    top5_classes = []
    for i in top5:
        top5_classes.append((LABELS[i], output[i]))
    return [top, top5_classes]

#Arguments to create lite engine 
network = {"framework":"tf",                                     #Source framework
           "path":DATA+"/resnet50/resnet50-infer-5.pb",          #Path to frozen model
           "input_nodes":{"input":(3,224,224)},                  #Dictionary of input nodes and their associated dimensions
           "output_nodes":["GPU_0/tower_0/Softmax"],             #List of output nodes
           "logger_severity":LogSeverity.INFO,                   #Debugging info
           "postprocessors":{"GPU_0/tower_0/Softmax":analyze}}   #Postprocessor function table

engine = Engine(**network)
{% endhighlight %}

And that defines a full pipeline with pre/post processing allowing for integration with other apps easily. The lite api also supports a variety of batching formats automatically so its pretty easy to just throw data at it and get results out. 

Take a look at the examples in the TensorRT distribution for demonstrations of this.

## Enabling other applications

Since it's now easy to integrate TensorRT its pretty straightforward to include optimized deep learning models in your projects. This enables a lot of cool new applications in spaces such as smart cities, robotics and web applications. 





