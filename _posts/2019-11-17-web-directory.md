---
layout: post
title: "Naren's Web Directory"
description: "Throwback to a time before mine (and Google)"
thumb_image: "about.jpg"
tags: [web]
---

{% include image.html path="directory/zuck-header.jpg" path-detail="directory/zuck-header.jpg" alt="zuck"  algin="center"%}

## Dumping Facebook 

Sophomore year of college I started becoming more aware of the all the data I was posting online, mostly because I realized how much time I was spending on Facebook in the first place. Before it was on the first page of my home screen and always opened in a browser tab. Whenever I had a free moment on the bus or an empty URL bar in the browser I would find myself moving to hit the 'f' icon, or typing 'f' in to the URL bar without thinking and end up aimlessly scrolling Facebook.  Once I realized it, I started to consider why I used Facebook, what was I getting out of it? and also what was the true cost of using the service. In middle and high school I did things like backfilling all the places I've been, where I worked, what my interests were and more out of some sense of completion, that the more comprehensive your profile is  the better. But now I was wondering, why does everyone (and Facebook) need to know that I went to Botswana and really like the All Blacks and Bill Nye the Science Guy?  

So at this time of increased skepticism regarding Facebook, I was starting to notice reports about tracking pixels, reports of experimentation on users without consent, the addition of the M assistant in Messenger and some of the dark patterns associated with the like button (obviously this sort of criticism really took off after the election of Trump). I was also looking more into "Big Data" as they referred to what Facebook was doing then as I was diving deeper into my work on Computer Vision and Machine Learning.  As I learned more about what is required to develop effective systems like the ones Facebook was making and especially the incentives that Facebook has to design systems in particular ways, I grew a lot more wary of them and similar services on the internet (which is why I don't have an Instagram). 
The straw that broke the camels back was this paper from Prof. Karahalios group at UIUC *[“I always assumed that I wasn’t really that close to [her]”:Reasoning about invisible algorithms in the news feed"](http://social.cs.uiuc.edu/papers/pdfs/Eslami_Algorithms_CHI15.pdf)* which pointently raises questions about the effects these recommendation engines have on us (and if we notice at all). 

But Facebook has it's uses. First of all its a great *facebook*, an index of people you know. By criticism it's a really powerful local organizing tool and messaging platform. These are also the features that Facebook toutes as it tries to posture itself as a force for good and they are justified in bringing them up because it's a unique feature of their platform. And this is why I haven't "gone off the grid" and deactivated my account, especially while I was in college organizing things. But I have significantly curtailed my use and limit it to the features that truly have the best exchange rate if you will between the utility and the costs.  So I still have Messenger installed on my phone for the random message I need to send / receive from someone I talked to last 3 years ago and until Facebook got rid of the Events app (and replaced it with a recommender app for local events) I had that too. But I have a strong preference not to use Messenger and most conversations that go long enough get ported to Wire, Signal, maybe Telegram or if necessary iMessage/SMS.

However these aren't the core uses of Facebook for many people. The core use is the News Feed. To its credit, it really is an effective discovery method for new content especially about your friends (the same can be said for other infinite scroll social media platforms). However, as has become abundantly clear ( shown by Prof. Karahalios and others), content is not shown to you purely because it might be relevant or interesting to you. Social media companies like other curators have their own motives for showing or suppressing content. Where these motives align with your interest, you have a healthy symbiosis. For example, if I'm looking to buy a new bike, seeing potentially paid advertising for a bike might actually be pretty nice. Or a cool story on the EF Education First team was written in Bicycle Magazine that the magazine promoted. Or just making the service useful enough to keep you on the platform consuming ads would be a worthwhile tradeoff. But a lot of times irrelevant or erroneous content is shown because it's paid for in the most charitable case, in the more sinister case, its promoted in a faustian bargain to further increase user engagement on the platform, i.e. Facebook looks to illicit a reaction, positive or negative (it doesn't matter) over providing relevant or informative content in a bid to get you to keep coming back. After falling for a couple instances of disinformation being promoted on Facebook, It became clear this is not a reasonable way to get news.  

### Alternative forms of curation on the Internet

So how does one get news without a recommendation engine? Very millenial / Gen Z question I know. One can try the newsy subreddits of Reddit. But again, I found myself aimlessly scrolling it to waste time, so I uninstalled that app too. Again there are also concerns about if the aggregate opinion of Reddit is an effective way to rank news or content. Much like Facebook has an incentive to promote incendiary content because its more engaging, the promotion of content on reddit is based on a measure of how engaging it is. So again without the pressures of decorum, nuance and factual accuracy, you end up seeing the id of society embodied on reddit. The things that are most popular on Reddit are things that make you super happy (/r/aww, /r/wholesomememes, etc.) or make you super angry (/r/PublicFreakout, /r/IdiotsInCars and /r/trashy) ([https://redditmetrics.com/](https://redditmetrics.com/)) or some other strong emotion. Other link aggregators (HackerNews etc.) have the same problems. 

So if you can't use a model that you don't control and you can't use the crowd, what about the old fashioned way - Editorial Boards of reputable publications? After getting rid of reddit on my phone too, for the next few years I mostly frequented between a couple tech sites and common news sources, essentially websites I committed to memory or that were on my bookmarks toolbar. However, for whatever journalists say about their moral responsibility, in the end they also publish to satisfy their own ends and the work is curated by a few on the editorial board. By wholly relying on one or a few sources, you are left in the same position you would be using Facebook, albeit at a different scale. 

So how do you solve this problem? You could demand Facebook, Reddit or the New York Times change, but its' unclear how successful you'd be given the things they would be potentially giving up. There is also a helplessness that creeps in if you rely on others to change vs taking action yourself. All the content is out there on the internet, you can muddle through it if you wished, but choose not to because its hard and this is valid. So, then how do you effectively find stuff to read that's interesting and engaging but on your own accord? Well the answer is pretty clear if you ask me, you make your own feed (a.k.a RSS). 

The difference between RSS and other feed systems is you are in charge of the sources and the way its filtered. It's easy enough to set up an RSS feed that just shows you the postings of the day or if you're ambitious you can take it further. There's a whole bunch of clients you can use, I use Reeder4 on my mac and phone ([https://reederapp.com/](https://reederapp.com/)), and I have a shared feed in a discord server I am in using a bot we made which posts the new posts every morning ([https://github.com/the-round-table](https://github.com/the-round-table/trtbot)). The beauty of RSS is it gives you a mechanism to diversify the curation your exposed to without additional cognitive load. It's not an issue if you read a lot of New York Times articles if you also read the Journal and the Washington Post and your hometown newspaper, but the issue you face without RSS is to remember to check out all of those sources. As to my usage patterns issue, it has the benefit of being based around pulls (i.e. you need to ask for more content for more content to show - I think this is a fundamental problem introduced with the shift to smartphones) and inherently limited by the content being published. 

There is a key flaw though (that curated feeds are really good at) and thats the discovery of the new. RSS is static with regard to sources. So while some cool new source might appear on Reddit or Facebook because someone else frequents that site, you'll never find it if you're not looking it. It's easy enough to continue to use Reddit, Facebook, Twitter or HackerNews and remain vigilant for new sources, but these are stochastic events based on your feeds catching your interest and may draw you back into the algorithmic or crowd feed fold. 

## The Web Directory

Turns out this is a solved problem, coming from a time before Web 2.0 or even Google. How do you find cool places on the web if you don't have a search engine or you don't know what you're looking for? With a directory of course! When the internet was small enough that all the important websites could fit on a page or a few, websites like [yahoo.com](https://web.archive.org/web/19961017235908/http://www2.yahoo.com/) served as the phone book of the internet, categorizing cool or interesting sites so that people could find their way around. 

So the practice was if I was looking for a website on rugby or just interesting place to go, I'd go to yahoo.com and just look in the sport section for relevant sounding websites. People also maintained their own [personal lists](http://werbach.com/hotlist.html) (called web hotlists) containing their discoveries on the web. So if I'm looking for interesting places on the web, I can hop to a buddy's website and see what they were reading.

I think this is a practice that should comeback (with RSS) as a way to live a curated feed free life. People should use RSS to receive their daily news with the feeds they care about, and people should maintain lists or directories of interesting websites so that others can benefit from their exploration. Those who are paying attention may say this another form of curation, and this is true. But the web needs curation, don't take the rejection of managed feeds or editorial boards as a some sign that we don't. There are millions of exabytes of data out there, people need help parsing through it. Google is great for when you know vaguely what you're looking for. But if you have no idea, you just want compelling content, where do you go if you don't want someone making the decisions for you? Secondly, the onus is on you the consumer when it comes to RSS to construct a feed that represents the breath of topics and perspectives you want to see, not anyone else. Ultimately this is the difference between RSS and other feeds. 

There is a similar old idea I've seen pop up again called Web Rings, which is a group of self referential websites. Members of the ring will link to other members, either to drive traffic towards them or to optimize for SEO. A pretty cool one is this one from XXIIVV [webring.xxiivv.com](https://webring.xxiivv.com/#).

So as a step in this direction, I'm putting up my own [Web Directory](https://www.narendasan.com/directory.html). Its pretty plain right now (I may attach a formated OPML file with the entries so its easy to import into a RSS reader later), but it includes a list of the websites, youtube channels and podcasts I enjoy. I may add other formats to this, but the rule I'm keeping to is the source must either be a website or consumable by RSS (or both). I hope that you do the same and if you do you should tweet me or whatever other form of communication you prefer [@narendasan](https://www.twitter.com/narendasan). I'd love to see it, I'm always looking for more content.  

{% include image.html path="directory/directory.png" path-detail="directory/directory.png" alt="directory"  algin="center"%}

## Post Script (Twitter & YouTube)

So even though I basically got rid of Facebook as a news feed and I frequent a few specific subreddits, I still have a couple recommendation engines in my life, YouTube and Twitter. 

YouTube is an interesting case. Video is not cheap to host, especially compared to a website. And there is no GitHub pages for Video (yet). So there is structural pressure to upload to a service (this centralizes video on a few sites). The additional pressures to actually make a living of content creation, further centralizes video on the one or two services that have that yield the most revenue, for short form video this is YouTube. I don't know how to change this. There are some alternatives (PeerTube, FloatPlane etc.) but for now YouTube is the home of video on the internet, and as much as I want to make decisions for myself, I'd much rather watch the guys at [Mahalo My Dude]() or [Squidge Rugby](). So I resort to trying to use the subscriptions tab when I remember to still maintain as much control over what I'm seeing as possible. But by default you are given an algorithmic feed and so there is cognitive load associated with switching over. But people may not know or may have forgotten that there is actually RSS support for youtube channels, so you may be able to bypass the YouTube recommendation engine that way. 

### How to subscribe to YouTube Channels over RSS

#### Get RSS updates for a single channel

To get an RSS feed of a single channel’s uploads, paste the channel URL into your RSS reader.

#### Get RSS updates for all subscriptions

To import all your YouTube subscriptions to your RSS reader, you can use our OPML file download feature:

1. Download the OPML file by clicking **Export subscriptions** at the bottom of your [Manage Subscriptions](https://www.youtube.com/subscription_manager) page. This will download a file named "subscription_manager.xml".
2. Import the OPML file in your RSS reader.  
   - In Feedly, for example, this can be found in Organize in the left panel, then Import OPML.

For Twitter, again I feel the issue is that the format is unique. Not everyone has a blog, but everyone has a Twitter account. Especially for academia, I probably would not hear about a good percentage of the work in ML/DL that I would be interested in without Twitter. My solution here is to strongly prefer the use of self curated lists as well as setting the main feed to "Latest Tweets show up as they happen", which avoids the cognitive load you need to deal with on YouTube. I also to avoid the use issues I had with Facebook and Reddit don't install the Twitter app on my phone. I manage feeds of accounts for Academia, Tech, Open Source, Sports, Colorado and more. So ultimately I end up treating like I treat my RSS feed, mostly check them about once a day.

### How to set your timeline to latest tweets

 1 .  Click on the sparkle ✨
{% include image.html path="directory/linear-feed-1.png" path-detail="directory/linear-feed-1.png" alt="Step 1."  algin="center"%}

 2 .  Select "See latest Tweets instead"
{% include image.html path="directory/linear-feed-2.png" path-detail="directory/linear-feed-2.png" alt="Step 2."  algin="center" %}

 3 .  Now you should see the feed chronologically
{% include image.html path="directory/linear-feed-3.png" path-detail="directory/linear-feed-3.png" alt="Step 3."  algin="center" %}

> Note the fine print though **"You'll be switched back to Home after you've been away for a while"** its unclear how this really works and when you will be switched back, here is what Twitter said 
{% include image.html path="directory/feed-setting.png" path-detail="directory/feed-setting.png" alt="settings for the feed tweet" %}
