+++
title = "ChatGPT's Plugin System Poses an Existential Risk to the Open Web"
description = "ChatGPT poses threats to fundamental assumptions we make about the web and how we use it that exceed its threats to humanity in the near to medium term. The implications of blindly accepting this transistion could be far reaching and hard to return from"

[taxonomies]
tags = ["ai", "ir", "commentary", "speculation"]
+++

##### Sections 1 and 2 are motivation and background if you care, Section 3 is the real meat of the essay.



## ChatGPT is more Information Retrieval UI than Artificial Intelligence

> (In the AGI sense)

Generative AI is having its moment right now and OpenAI's ChatGPT is at the center of it. The "humanness" of the conversations one has with these chatbots have many pundits busy wondering if this is the dawn of the end of humanity or a break down in the economy is imminent. Meanwhile, many in the research community have pointed out the fundamentally iterative improvements in underlying ML technology behind the system and are hesitant to ascribe too much to these systems (yet). Personally, I lean towards the iterative improvement camp when viewing these systems in the artificial intelligence context.

However, I believe (and many others have pointed this out in one way or another) that the fundamental contribution of systems like ChatGPT is a step-change difference in the performance and particularly the usability of [_information retrieval systems_](https://en.wikipedia.org/wiki/Information_retrieval). Chatbot systems based on LLMs bring us as close as we have come to the realization of science fiction inspired technology where a user can converse with a [system using natural language to parse, extract and manipulate information](https://www.youtube.com/watch?v=1ZXugicgn6U). Examples like code being written on the fly, articles being summarized and essays being generated, can be thought of as a form of _artificial intelligence_ but I argue that they should be more thought of as an alternative to [existing information synthesis workflows](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1068946/).

Abstractly, lots of knowledge work: programming, research, writing, art, can be thought of as a [loop](https://library.suu.edu/LibraryResearch/information-synthesis) of searching a knowledge base, evaluating results, identifying the key ideas, synthesizing new ones and repeating. The primary difficulty is the searching step. 70 years ago, this required going to physical repositories of information like libraries, museums, reading a lot of books and papers, listening to talks, performances etc. 40 years ago, people started making queryable and traversable repositories (e.g. [hypertext](https://en.wikipedia.org/wiki/Hypertext) and the ["World Wide Web"](https://en.wikipedia.org/wiki/World_Wide_Web)) and until yesterday tools like Google would be used to search through them, finding relevant information / inspiration. Today and tomorrow it seems more and more likely that this role (and part of the synthesis role as well – a topic for another essay) will be replaced by systems like ChatGPT.


##  Chatbots are a Better UI For Information Retrieval

Systems like ChatGPT wrap up the open web in a neat box. You can "speak" directly to them, you don't need to reformat your question into a [pseudo-natural query language](https://support.google.com/websearch/answer/2466433?hl=en) that many of us have learned to speak fluently. And, because it understands context, it is easy to refine your questions to tune the results. Language models both encode a [compressed knowledge base](https://aclanthology.org/D19-1250/) (provided by training on the open web) and have the [capability to leverage other knowledge bases](https://openai.com/research/webgpt) to provide results. Of course, due to the nature of language models the issue of "hallucination" is an issue but any competent and principled knowledge worker can easily check the results and refine if necessary. Information retrieval is hard to do but easy to verify. To this end, these systems seem like a wonderful step forward in the accessibility of using the web.

User Interfaces, I'd argue, are one if of not **the** most important factor for technology adoption at any level. I cannot be convinced that computers would be as prevalent a tool as they are without the [Graphical User Interface](https://en.wikipedia.org/wiki/Graphical_user_interface) and more recently Multi-Touch. Anyone who has used a command line can explain the cognitive load required to operate a system at that level. There is for sure more control at a lower level, but it requires users to have a strong mental model of the state of the system. GUIs require very little of that. Adoption of the web itself has been mediated by UI step changes as well, first the [Graphical Web Browser](https://en.wikipedia.org/wiki/Mosaic_(web_browser)), then [Search Engines](https://en.wikipedia.org/wiki/Search_engine). Systems like ChatGPT are the next step in that lineage for the web and just like how GUIs abstract much of the operating system from the user, ChatGPT can abstract much of the web.

Previous versions of the web in a box have failed precisely because the UIs were not capable enough. Voice assistants like Alexa, Ok Google, Siri and Duplex struggle firstly because voice is likely not the ideal modality for these sort of UIs, speech varies in so many ways e.g. timbre, accents, background noise. Language models solve this by using text. Text is uniform, discrete, there are fewer sources of confusion. Second voice assistants "don't work"; it is a frustrating experience trying to get one of these things to do anything of slight complexity correctly. Even if the assistant heard you correctly, it does not understand what to do or how to do it. Without explicit developer integrations, voice assistants are next to useless. Critically, language models have proven their ability to provide meaningful and interesting results on their own without external resources and more importantly, also have been shown to have the ability to traverse the web to find new information. LM-based chatbots provide a smooth onramp from the open HTML web to the chatbot world. Much like how Facebook created a MySpace bridge to [make it easier to switch](https://locusmag.com/2023/01/commentary-cory-doctorow-social-quitting/), LM-based chatbots do not need to wait for developers to integrate with them to be useful.

## "OpenAI" vs. the Open Web

The recent announcement of ["plugins" for ChatGPT](https://openai.com/blog/chatgpt-plugins) has me concerned. Not about any sort of existential risk due to runaway AGI in the near to mid-term, but about the prospects for the open web as we know it. In the past 30 years the "World Wide Web" has become the near complete repository of human knowledge and it is the reason why systems like ChatGPT even have a chance to exist. But some of its most valuable qualities are not foundational to its job as a knowledge base, namely the fact it is human readable/browsable, open and (provided you are connected) equally accessible to all. Some corners of the knowledge base may be more curated, organized and searchable than others (e.g. Wikipedia, StackOverflow, Reddit) and some parsing and retrieval tools may be better than others (e.g. Google - until 3-5 years ago) but whenever anyone anywhere in the world opens a web browser, they for the most part have the same access as anyone else to any part of the knowledge base.

The fact that it feels like LM-based chatbots are the next step in interacting with the internet creates a forcing function to be a first class member in that world and plugins seem like it will be the mechanism to do so. Will people find you or your service if you're not integrated into ChatGPT? Google already has been criticized for [centralizing and arbitrating traffic on the web](https://www.documentcloud.org/documents/7273448-DOC.html) and many actors have taken to optimizing their content to best fit Google. The implications of this new UI takes that world a step further. Ultimately, what backstopped Google's information was human readable, openly accessible content. Google fundamentally prefers HTML, the interconnections between HTML pages serve at the foundation of its approach to extracting knowledge. Therefore, to an extent Google encourages the open human readable web (perhaps not in its ideal form) and as a sideffect there remains the ability to push through or go around Google and still get to some sort of readable content. Language models (especially hosted ones) themselves are absolutely not human readable, and with plugins the need for an open human-readable raw corpus becomes optional once people have transitioned to using LM-based systems. Even additional training data can be captured monitoring human input and by querying plugins, things OpenAI can include as conditions of being part of their ecosystem. Content can more easily be centralized in privately maintained, heavily accessed controlled repositories and mediated through primarily web APIs with no requirement for an open readable option.

If this is indeed what happens, what happens to the large corpus of human readable and browsable content? Will it just atrophy over time? What happens when not just information retrieval but information insertion into the knowledge base is moderated through systems like ChatGPT? Society already has an incredibly strained relationship with content middlemen, e.g. Google, Meta, Twitter. It is not clear what these actors' responsibilities are, or if they should have these responsibilities in the first place. The move to Chatbot UIs pushes us even more towards companies mediating discourse and access to knowledge in society. This raises the questions: how does ChatGPT (really how does OpenAI) decide who gets to service your question and what information gets added to knowledge bases, how does OpenAI get compensated for this middle man service and what incentives does that produce? It feels incredibly uncomfortable that we seem to be careening towards an uncertain future without considering the values we might be leaving behind.

To get an idea of what some potential futures may be look to existing integrated platforms and previous iterations of recommender systems. For example, how [applications integrate into WeChat](https://jingdaily.com/wechat-ecosystem/). WeChat mediates the interface and access users have to applications and applications to users. This middle man position provides a [convenient gateway for censorship](https://citizenlab.ca/2020/05/wechat-surveillance-explained/). We can see shades of this already in systems like [Bing AI](https://twitter.com/SamuelBickett/status/1639737947707547657). Look at how YouTube creators try to divine the whims of the "YouTube Algorithm" and more importantly look at all the content left by the wayside, inaccessible to anyone because [YouTube decided its not "relevant"](https://www.youtube.com/watch?v=ogzsDTBh1T0). Also look at social media in general. Social media platforms - Facebook, Instagram, etc. have over the last decade pulled the individual off the **open** web. Where as in the late 90s and early 00s, it may be common to see people maintaining a website for themselves or a perhaps a business or hobby, these sites for the most part have been subsumed by simply an Instagram page. For many these accounts are their sole personal presence on the web. Behind these walled gardens owners mediate what you and others can see, how you see it, what is permissable and what the incentives of the platform are. Access to the information in these closed parts of the web are set via negotiations between large actors or by signing an opaque end user license.

Without the UI of the web continuing to incentivize HTML, one could imagine this format going the way of books, mostly replaced by databases hooked up to Chatbots where users can retrieve information, do key actions and insert new information to improve the knowledge base without needing to find, read, then create or edit a website. For knowledge work perhaps this looks like hooking up an S3 bucket to ChatGPT, asking it to browse the information, extract some key information, and help you compose a new document which is stored in the bucket. For the individual currently using closed social media apps, perhaps in the future you would ask ChatGPT "What are my friends up to?" or to post a status update. Both for generic knowledge work and many of the common things individuals do on the web, this feels like it will be an easier information synthesis workflow than the current paradigm. However, it sacrifices a lot of the benefits that the open web brought with it, like those discussed above namely being decentralized, open and human traversable and readable. Unfortunately, as we have seen time and time again, [people will sacrifice a lot for better user experiences](https://www.npr.org/sections/therecord/2011/03/18/134598010/for-better-or-worse-mp3s-are-the-format-of-choice).

There is this notion of an approaching fissure in the web splitting it into a web for robots and a web for humans. Many discussions of this idea focus on the ability to tell real from fake, generated from handcrafted. But I do not think this discourse focuses enough on the notions of control and freedom. How will the web change when its UI changes so fundamentally? What formats do we incentivize and what values do those formats encode? Who manages and owns the web when its UI is chatbots and what are the incentives of actors? Where do individuals fit in? Is there still space for an open, readable web? And most crucially: What are we giving up when this change happens? Recommendation systems which in many ways are the precursors to chatbots have been blamed for everything from [increasing depression](https://healthcare.utah.edu/healthfeed/2022/09/impact-of-social-media-teens-mental-health) to [inciting atrocities](https://thediplomat.com/2020/05/facebooks-apology-for-its-role-in-sri-lankas-anti-muslim-riots-should-spark-change). We would be fools to blindly make this transition without thinking through what we would like the future to look like, and what values we would like to preserve.

The worst case scenario is extreme but I think the likelihood of significant negative externalities relating to information access, mediation and the health of the human readable web from a transition to LM-Based IR systems is non-zero (and much larger than the likelihood of malicious AGI in the coming years). It took 30 years for the open web to take the form it has today and it seems like there is no guarantee now that it will continue on the trajectory it has been on. For the first time in a long time, the human readable web has real competition and I do not think it is clear who is going to win.

> This essay was handwritten without the aid of large language models

> Update 3/26/23:
> I thought this thread speaks well to of some the ideas presented here: [https://twitter.com/peternixey/status/1640002493630369792](https://twitter.com/peternixey/status/1640002493630369792)