---
layout: post
title: "ChatGPT's Plugin System Poses an Existential Risk to the Open Web"
description: "ChatGPT poses threats to fundamental assumptions we make about the web and how we use it, the implications of which can be far reaching and hard to comeback from"
thumb_image: "about.jpg"
tags: [AI, IR, speculation]
---

##### Sections 1 and 2 are motivation and background if you care, Section 3 is the real meat of the essay.



## ChatGPT is more Information Retrieval UI than Artificial Intelligence

<details>
> (In the AGI sense)

Generative AI is having its moment right now and OpenAI's ChatGPT is at the center of it. The "humanness" of the conversations one has with these chatbots have many pundits busy wondering if this is the dawn of the end of humanity or a break down in the economy is imminent. Meanwhile, many in the research community have pointed out the fundamentally iterative improvements in underlying ML technology behind the system and are hesitant to ascribe too much to these systems (yet). Personally, I lean towards the iterative improvement camp when viewing these systems in the artificial intelligence context.

However, I believe (and many others have pointed this out in one way or another) that the fundamental contribution of systems like ChatGPT is a step-change difference in the performance and particularly the usability of _information retrieval systems_[^1]. Chatbot systems based on LLMs bring us as close as we have come to the realization of science fiction inspired technology where a user can converse with a system using natural language to parse, extract and manipulate information[^2]. Examples like code being written on the fly, articles being summarized and essays being generated, can be thought of as a form of _artificial intellegence_ but I argue that they should be more thought of as an alternative to existing information synthesis workflows[^3].

Abstractly, lots of knowledge work: programming, research, writing, art, can be thought of as a loop of searching a knowledge base, evaluating results, identifying the key ideas, synthesizing new ones and repeating [^4]. The primary difficulty is the searching step. 70 years ago, this required going to physical repositories of information like libraries, museums, reading a lot of books and papers, listening to talks, performances etc. 40 years ago, people started making queryable and traversable repositories (e.g. hypertext[^5] and the "World Wide Web"[^6]) and until yesterday tools like Google would be used to search through them, finding relevant information / inspiration. Today and tomorrow it seems more and more likely that this role (and part of the synthesis role as well – a topic for another essay) will be replaced by systems like ChatGPT.

</details>

##  Chatbots are a Better UI For Information Retrieval

<details>
Systems like ChatGPT wrap up the open web in a neat box. You can "speak" directly to them, you don't need to reformat your question into a pseudo-natural query language[^7] that many of us have learned to speak fluently. And, because it understands context, it is easy to refine your questions to tune the results. Language models both encode a compressed knowledge base (provided by training on the open web)[^8] and have the capability to leverage other knowledge bases[^9] to provide results. Of course, due to the nature of language models the issue of "hallucination" is an issue but any competent and principled knowledge worker can easily check the results and refine if necessary. Information retrieval is hard to do but easy to verify. To this end, these systems seem like a wonderful step forward in the accessibility of using the web.

User Interfaces, I'd argue, are one if of not **the** most important factor for technology adoption at any level. I cannot be convinced that computers would be as prevalent a tool as they are without the Graphical User Interface[^10] and more recently Multi-Touch. Anyone who has used a command line can explain the cognitive load required to operate a system at that level. There is for sure more control at a lower level, but it requires users to have a strong mental model of the state of the system. GUIs require very little of that. Adoption of the web itself has been mediated by UI step changes as well, first the Graphical Web Browser[^11], then Search Engines[^12]. Systems like ChatGPT are the next step in that lineage for the web and just like how GUIs abstract much of the operating system from the user, ChatGPT can abstract much of the web.

Previous versions of the web in a box have failed precisely because the UIs were not capable enough. Voice assistants like Alexa, Ok Google, Siri and Duplex struggle firstly because voice is likely not the ideal modality for these sort of UIs, speech varies in so many ways e.g. timbre, accents, background noise. Language models solve this by using text. Text is uniform, discrete, there are fewer sources of confusion. Second voice assistants "don't work"; it is a frustrating experience trying to get one of these things to do anything of slight complexity correctly. Even if the assistant heard you correctly, it does not understand what to do or how to do it. Without explicit developer integrations, voice assistants are next to useless. Critically, language models have proven their ability to provide meaningful and interesting results on their own without external resources and more importantly, also have been shown to have the ability to traverse the web to find new information[^9]. LM-based chatbots provide a smooth onramp from the open HTML web to the chatbot world. Much like how Facebook created a MySpace bridge to make it easier to switch[^13], LM-based chatbots do not need to wait for developers to integrate with them to be useful.
</details>

## "OpenAI" vs. the Open Web

The recent announcement of "plugins" for ChatGPT[^14] has me concerned. Not about any sort of existential risk due to runaway AGI in the near to mid-term, but about the prospects for the open web as we know it. In the past 30 years the "World Wide Web"[^15] has become the near complete repository of human knowledge and it is the reason why systems like ChatGPT even have a chance to exist. But some of its most valuable qualities are not foundational to its job as a knowledge base, namely the fact it is human readable/browsable, open and (provided you are connected) equally accessible to all. Some corners of the knowledge base may be more curated, organized and searchable than others (e.g. Wikipedia, StackOverflow, Reddit) and some parsing and retrieval tools may be better than others (e.g. Google - until 3-5 years ago) but whenever anyone anywhere in the world opens a web browser, they for the most part have the same access as anyone else to any part of the knowledge base.
<details>
Services like Facebook, Instagram, where content is hidden behind a login screen I'd argue are not part of the open web in the same way that content in paywalled research repositories aren't. They serve as hints of what a ChatGPT based web looks like
</details>


The fact that it feels like LM-based chatbots are the next step in interacting with the internet creates a forcing function to be a first class member in that world and plugins seem like it will be the mechanism to do so. Will people find you or your service if you're not integrated into ChatGPT? Google already has been criticized for centralizing and arbitrating traffic on the web[^16] and many actors have taken to optimizing their content to best fit Google. The implications of this new UI takes that world a step further. Ultimately, what backstopped Google's information was human readable, openly accessible content. There is always the ability to push through or go around Google and get to some sort of readable webpage. Language models (especially hosted ones) themselves have absolutely no human readable themselves, and with plugins the need for a human readable raw corpus goes out the door once people have transitioned to using LM-based systems other than for potentially new training data. Content can more easily be centralized in privately maintained and heavily accessed controlled repositories and mediated through primarily web APIs with no requirement for an open readable option.

There are a lot of questions we need to be finding the answers to before this transition happens.
- In a world where ChatGPT-like systems are the dominant UI paradigm for the web, what happens to the large corpus of human readable and browsable content?
- What happens when not just information retrieval but information insertion into the knowledge base is moderated through systems like ChatGPT?
- How does ChatGPT (really how does OpenAI) decide who gets to service your question and what information gets added to the knowledge base?
- How does OpenAI get compensated for this middle man service and what incentives does that produce?

To get an idea of what some potential futures look like, look to existing integrated platforms and previous iterations of recommender systems. Look at how applications integrate into WeChat[^17]. Look at how YouTube creators try to divine the whims of the "YouTube Algorithm" and more importantly look at all the content left by the wayside, inaccessible to anyone because YouTube decided its not "relevant"[^18]. One could imagine HTML pages going the way of books, replaced by databases hooked up to ChatGPT where users can retrieve information, do key actions and insert new information to improve the knowledge base without needing to create or edit a website. What if ChatGPT becomes your main interface into social networks. Perhaps in the future you would ask ChatGPT "What are my friends up to?" or to post a status update. This feels like it will be an easier information synthesis workflow than the current paradigm but it sacrifices a lot of the benefits that the open web brought with it, like those discussed above namely being decentralized, open and human readable. Unfortunately, as we have seen time and time again, people will sacrifice a lot for better user experiences[^19].

There is this notion of an approaching fissure in the web splitting it into a robot web and
a human web. Many discussions of this idea focus on the ability to tell real from fake, generated from handcrafted. But I do not think this discourse focuses enough on the notion of control and freedom. Who manages and owns the web when its UI is chatbots? Where do individuals fit in? Will there be an option for a chatbot-less web experience? What gets promoted and hidden and how is that decided? If recommendation systems are so bad that they are blamed for everything from increasing depression[^20] to inciting atrocities[^21], this has the potential to be way worse.

The worst case scenario is extreme but I think the likelihood of significant negative externalities from a transition to LM-Based IR systems is non-zero (and much larger than the likelihood of malicious AGI in the coming years). For the first time in a long time, the human readable web has real competition and I do not think it is clear who is going to win.

> This essay was handwritten without the aid of large language models


[^1]: [https://en.wikipedia.org/wiki/Information_retrieval](https://en.wikipedia.org/wiki/Information_retrieval)
[^2]: [https://www.youtube.com/watch?v=1ZXugicgn6U](https://www.youtube.com/watch?v=1ZXugicgn6U)
[^3]: [https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1068946/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1068946/)
[^4]: [https://library.suu.edu/LibraryResearch/information-synthesis](https://library.suu.edu/LibraryResearch/information-synthesis)
[^5]: [https://en.wikipedia.org/wiki/Hypertext](https://en.wikipedia.org/wiki/Hypertext)
[^6]: [https://en.wikipedia.org/wiki/World_Wide_Web](https://en.wikipedia.org/wiki/World_Wide_Web)
[^7]: [https://support.google.com/websearch/answer/2466433?hl=en](https://support.google.com/websearch/answer/2466433?hl=en)
[^8]: [https://aclanthology.org/D19-1250/](https://aclanthology.org/D19-1250/)
[^9]: [https://openai.com/research/webgpt](https://openai.com/research/webgpt)
[^10]: [https://en.wikipedia.org/wiki/Graphical_user_interface](https://en.wikipedia.org/wiki/Graphical_user_interface)
[^11]: [https://en.wikipedia.org/wiki/Mosaic_(web_browser)](https://en.wikipedia.org/wiki/Mosaic_(web_browser))
[^12]: [https://en.wikipedia.org/wiki/Search_engine](https://en.wikipedia.org/wiki/Search_engine)
[^13]: [https://locusmag.com/2023/01/commentary-cory-doctorow-social-quitting/](https://locusmag.com/2023/01/commentary-cory-doctorow-social-quitting/)
[^14]:[https://openai.com/blog/chatgpt-plugins](https://openai.com/blog/chatgpt-plugins)
[^15]:[https://en.wikipedia.org/wiki/World_Wide_Web](https://en.wikipedia.org/wiki/World_Wide_Web)
[^16]:[https://www.documentcloud.org/documents/7273448-DOC.html](https://www.documentcloud.org/documents/7273448-DOC.html)
[^17]: [https://jingdaily.com/wechat-ecosystem/](https://jingdaily.com/wechat-ecosystem/)
[^18]: [https://www.youtube.com/watch?v=ogzsDTBh1T0](https://www.youtube.com/watch?v=ogzsDTBh1T0)
[^19]: [https://www.npr.org/sections/therecord/2011/03/18/134598010/for-better-or-worse-mp3s-are-the-format-of-choice](https://www.npr.org/sections/therecord/2011/03/18/134598010/for-better-or-worse-mp3s-are-the-format-of-choice)
[^20]: [https://healthcare.utah.edu/healthfeed/2022/09/impact-of-social-media-teens-mental-healt](https://healthcare.utah.edu/healthfeed/2022/09/impact-of-social-media-teens-mental-health)
[^21]: [https://thediplomat.com/2020/05/facebooks-apology-for-its-role-in-sri-lankas-anti-muslim-riots-should-spark-change/](https://thediplomat.com/2020/05/facebooks-apology-for-its-role-in-sri-lankas-anti-muslim-riots-should-spark-change/)
