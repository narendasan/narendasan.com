+++
title = "Peter Pan: Semantic Image Compression"
description = "A method for compressing images, prioritizing semantically important data"

[taxonomies]
tags = ["cv", "cg", "hackathons"]
+++

> This work was done during the Greylock Hackfest 2016

We entered the 2016 Greylock Hackfest and for the first couple hours didn't know what to work on. We
actually left Facebook HQ where the hackathon was being held to make a run to Fry's to see what hardware they had available.

During this time not having an idea we were browsing Facebook and one of us remarked on how bad the image compression was.
There was noticable artifiacting all over the image. We got to thinking, what we really cared about in the image was
the subject, our friends in this case. The background itself can take the majority of the pixels but ultimately is
much less important. I had been doing research in computer vision for the last couple years and so was starting to
hear a lot about neural networks and their applications. One application is segmentation, being able to seperate out
different objects in an image pixelwise. So we thought well this is an easy way to find the subject of an image. What
if we created a new image compression format where we keep the subject of the image at full resolution but significantly
compress the background? We called our project Peter Pan, a reference to Pied Piper from Silicon Valley who created their
own fictional compression scheme.

![meme](./imgs/meme.png)


## How compression works

### Lossy vs. Lossless

There's two ways to approach compression. One is to find a compressed representation that completely encode the source data without
losing any information. This is important for mediums like text or binaries where potentially a single bit flip will break you program.
This is called lossless compression.

For mediums where its hard to tell between the original and very good imitations there methods which willing accept that some data
will be modified from the original source since they expect people will not be able to tell the difference anyway. This is called lossy compression.
It's common to use lossy compression for audio, video and photos to save a significant amount of space on disk.

### Human centered compression

Some components of an image are more important than others. We as people care more
about the details in the subject than the details in the background in the general
(there are cases like landscape photography where we do care more about the background).

Hence instead of uniformly compressing the entire image, it may be worth while to
compress the background significantly in some lossy way while essentially maintaining the
full resolution of the subject of the image. This also leverages the fact that typically
the background is out of focus and so minor discrepancies are harder to detect. This is almost a hybrid approach
of lossy and lossless compression and allows us to use our bits more wisely.

### System Architecture
As this work was done at a hackathon, we couldn't train some end to end system that from scratch learned human preferences for
compression. Instead we leverage the work done in semantic segmentation using a pretrained model from the Oxford Vision Group. We create
segmentation masks for each subject in the image and separate the subject pixels from
the background pixels. Then we losslessly compress the subject pixels and we downsample (as a cheap
form of lossy compression) the background. This now represents the compressed form of the
image and can be transmitted. We then transfer the compressed image, upsample the background and
overlay the subjects.

### Performance
We did a short performance analysis against the inspiration for this project which is Facebook's
image compression scheme, which notoriously creates noisy images after compression.
We see that for the subjects comparing the full resolution image to the image produced after compression that as you'd expect the discrepancies are only in the background and harder to notice.
For Facebook the differences are spread uniformly and therefore there is a lot of artifacting in the
subject of the image. From a quick visual inspect we see better images from our approach than Facebook's.
Size wise we are on the order of magnitude of 2-3x smaller package size than the image you download from Facebook.


### Example

Here is an example photo of a couple of our friends:

> ![original](imgs/og.jpg)
> Original image


> ![mask](imgs/mask.png)
> Here is the segmentation mask for the semantically important subjects in the photo. Notice that it also picks up the person in the background out of focus.
> Though he is out of focus, it is still important to preserve detail in that component of the image because people will focus on it after moving from the primary subject

> ![pan](imgs/pan.png)
> Peter Pan compressed image. Notice that all detail in the two people in the image has been preserved while there is slight visual artifacting in the background

> ![fb](imgs/fb.jpg)
> Facebook compressed image. Notice the uniform artifacting, both subject and background are treated the same making artifacting more noticeable

### Limitations

You can see in the Peter Pan image that borders between the subject and the background are quite abrupt. This is mostly a result of the time constraint for a hackathon but
running a smoothing pass over the borders would help to make a more cohesive image. This format also has significant edge cases. If the subject takes up the majority of the image then size savings will be limited. The size of the image is now correlated with the semantic content of the image and no longer the size and image entropy. This would make it harder to deploy in a setting like Facebooks.

You can find the source code for Peter Pan here
> [https://github.com/narendasan/peter-pan](https://github.com/narendasan/peter-pan)