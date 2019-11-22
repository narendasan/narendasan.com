---
layout: post
title: "Naren's Web Directory"
description: "Throwback to a time before mine (and Google)"
thumb_image: "about.jpg"
tags: [web]
---

{% include image.html path="directory/zuck-header.jpg" path-detail="directory/zuck-header.jpg" alt="zuck"  algin="center"%}

## Dumping Facebook 

Sophomore year of college I started becoming more aware of the all the data I was posting online, mostly because I realized how much time I was spending on Facebook in the first place. Before it was on the first page of my home screen and always opened in a browser tab. Whenever I had a free moment on the bus or an empty URL bar in the browser I would find myself moving to hit the 'f' icon, or typing 'f' in to the URL bar without thinking and end up aimlessly scrolling Facebook.  Once I realized it, I started to consider why I used Facebook, what was I getting out of it and also what was the true cost of using the service? In middle and high school I did things like backfilling all the places I've been, where I worked, what my interests were and more out of some sense of completion, that the more comprehensive your profile is  the better. But now I was wondering, why does everyone (and Facebook) need to know that I went to Botswana and really like the All Blacks and Bill Nye the Science Guy?  

So at this time of increased skepticism regarding Facebook, I was starting to notice reports about tracking pixels, reports of experimentation on users without consent, the addition of the M assistant in Messenger and some of the dark patterns associated with the like button (obviously this sort of criticism really took off after the election of Trump). I was also looking more into "Big Data" as they referred to what Facebook was doing then as I was diving deeper into my work on Computer Vision and Machine Learning.  As I learned more about what is required to develop effective systems like the ones Facebook was making and especially the incentives that Facebook has to design systems in particular ways, I grew a lot more wary of them and similar services on the internet (Instagram, TicTok, etc.). The straw that broke the camels back was this paper from Prof. Karahalios group at UIUC *[“I always assumed that I wasn’t really that close to [her]”:Reasoning about invisible algorithms in the news feed"](http://social.cs.uiuc.edu/papers/pdfs/Eslami_Algorithms_CHI15.pdf)* which poignantly raises questions about the effects these recommendation engines have on us (and if we notice at all). 

But Facebook has it's uses. First of all its a great *facebook*, an index of people you know. By extension it's a really powerful local organizing tool and messaging platform. These are also the features that Facebook toutes as it tries to posture itself as a force for good and they are justified in bringing them up because it's a unique feature of their platform. And this is why I haven't "gone off the grid" and deactivated my account, especially while I was in college organizing things. But I have significantly curtailed my use and limit it to the features that truly have the best exchange rate if you will between the utility and the costs.  So I still have Messenger installed on my phone for the random message I need to send / receive from someone I talked to last 3 years ago and until Facebook got rid of the Events app (and replaced it with a recommender app for local events) I had that too. But I have a strong preference not to use Messenger and most conversations that go long enough get ported to Wire, Signal, maybe Telegram or if necessary iMessage/SMS.

However these aren't the core uses of Facebook for many people. The core use is the News Feed. To its credit, it really is an effective discovery method for new content especially about your friends. However, as has become abundantly clear (shown by Prof. Karahalios and others), content is not shown to you purely because it might be relevant or interesting to you. Eslami et al. shows that $> 50\% $ of respondents in the study were previously unaware that there was a curation model operating the News Feed. "[They also] found participants often attributed missing stories to their friends’ decisions to exclude them rather than to Facebook News Feed algorithm.  Social media companies like other curators have their own motives for showing or suppressing content. Where these motives align with your interest, you have a healthy symbiosis. For example, if I'm looking to buy a new bike, seeing potentially paid advertising for a bike might actually be pretty nice. Or a cool story on the EF Education First team was written in Bicycle Magazine that the magazine promoted. Or just making the service useful enough to keep you on the platform consuming ads would be a worthwhile tradeoff. But a lot of times irrelevant or erroneous content is shown because it's paid for in the most charitable case, in the more sinister case, its promoted in a faustian bargain to further increase user engagement on the platform, i.e. Facebook looks to illicit a reaction, positive or negative (it doesn't matter) over providing relevant or informative content in a bid to get you to keep coming back. After falling for a couple instances of disinformation being promoted on Facebook, it became clear this is not a reasonable way to get news.  

### Alternative forms of curation on the Internet

So how does one get news without a recommendation engine? Very millenial / Gen Z question I know. One can try the newsy subreddits of Reddit. I found myself aimlessly scrolling it to waste time on Reddit too, so I uninstalled that app as well. But one again, there are also concerns about if the aggregate opinion of Reddit is an effective way to rank news or content. Similar to how Facebook has an incentive to promote incendiary content because it's more engaging, the promotion of content on Reddit is based on a measure of how engaging it is. So again without the pressures of decorum, nuance and factual accuracy enforced in real life, you end up seeing the id of society embodied on reddit. The things that are most popular on Reddit are things that make you super happy (/r/aww, /r/wholesomememes, etc.) or make you super angry (/r/PublicFreakout, /r/IdiotsInCars and /r/trashy) ([https://redditmetrics.com/](https://redditmetrics.com/)) or some other strong emotion. Other link aggregators (HackerNews etc.) have the similar problems. 

So if you can't use a model that you don't control and you can't use the crowd, what about the old fashioned way - Editorial Boards of reputable publications? After getting rid of Reddit on my phone too, for the next few years I mostly frequented between a couple tech sites and common news sources, essentially websites I committed to memory or that were on my bookmarks toolbar. However, for whatever journalists say about their moral responsibility, in the end they also publish to satisfy their own ends and the work is curated by a few on the editorial board. By wholly relying on one or a few sources, you are left in the same position you would be using Facebook, albeit at a different scale. Fox News is the most obvious example of this happening, but the same would happen if I only read the Jacobin or CNN or MSNBC. You can try to diversify, but I found that its a lot harder to habit form frequenting a broad range of sites over just going to the first couple sites on your home page or bookmarks bar. 

## A Theory of Curation for the Internet

So how do you solve this problem? You could demand Facebook, Reddit or the New York Times change, but its' unclear how successful you'd be given the things they would be potentially giving up. Is the answer tear down all curation and muddle your way through it all yourself? No. The web needs curation, don't take the rejection of managed feeds or editorial boards as a some sign that we don't. There are millions of exabytes of data out there, people need help parsing through it. Google is great for when you know what specifically you're looking for. But if you have just a vague notion of a topic or no idea and just want compelling content, it's much more effective to use someone else's expertise as a filter. 

The issue with curation as it is right now is that agency has been taken from the user (by their own choice to be clear) and they have become purely a consumer. In exchange for not expending much effort to get a wide variety of selected "interesting and relevant" content, you have little to no recourse when it comes to what you see and how it's shown to you. The level of input you have is explicitly declaring your interests to the service (subscribing to subreddits or liking sources), interactions with the site (which are tracked), explicit "like/dislike" buttons or complaining to maybe nudge the engine one way or another. A great example of this lack of agency is the anxiety people feel when it comes to clicking on a weird video, not because they aren't curious about it but because it might screw up their YouTube recommendations. This seems fundamentally broken. 

Aggregators as well whether they are Facebook, Reddit or the New York Times aim to abstract away the content producer from the feed. It's beneficial to them if you do not notice the difference between a long form New Yorker piece and a quiz from BuzzFeed or an article from a wire service from one researched for years by the investigative reporting staff. It keeps you on their site, consuming their ads. But in doing that you lose the advantages that come with curators, why you'd want one in the first place. A good curator, has a consistent voice and a domain of expertise and by extension a context that their arguments are presented in. By using the New York Times, Facebook or Reddit as your "broker" for content from content "wholesalers" you lose context in addition to the loss in agency.  

### Nesting Dolls of Curators

The best example of a healthy ecosystem of curation is podcasts. For podcasts, you don't have a generic feed of content ordered by a third party, you have a collection of feeds, each curated by one or a few people that end up coalescing into a customized feed for each person. When looking for podcasts we don't look for specific episodes we care about from a generic feed, we look for good voices who over time produce interesting and varied content. We are essentially trying to collect a set of curators who in aggregate give you a broad and diverse view of the world, each of them bringing a different experience and expertise to the table. The onus is now on you the consumer when it comes to podcasts to construct a feed that represents the breath of topics and perspectives you want to see, not anyone else. If you want to create a close minded eco-chamber, that's your prerogative but you should have the opportunity to do otherwise.

Unbeknownst to many, the way podcasts work is based on the open standard RSS. Content producers attach a generic feed to their website which RSS Readers can use to get a list of content published that day. RSS. RSS fell out of favor with the death of Google Reader and gradually people adopting Facebook, Twitter and Reddit. But what it did have was a similar curation model to podcasts. People chose what to subscribe to and were delivered all content from those subscriptions. From there they can choose how to filter through that feed. 

It's easy enough to set up an RSS feed that just shows you the postings of the day or if you're ambitious you can take it further. There's a whole bunch of clients you can use, I use Reeder4 on my mac and phone ([https://reederapp.com/](https://reederapp.com/)), and I have a shared feed in a discord server I am in using a bot we made which posts the new posts every morning ([https://github.com/the-round-table/trtbot](https://github.com/the-round-table/trtbot)). The beauty of RSS is it gives you a mechanism to diversify the curation you're exposed to without the additional cognitive load. The issue you face without RSS is to remember to check out all of those sources. This is not an issue if you automatically poll all the sources you've written down as interesting.  As to my usage patterns issue, which started this journey, it has the benefit of being based around pulls (i.e. you need to ask for more content for more content to show), and inherently limited by the content being published, so you can't build the habit of endlessly refreshing the page to get more content. 

But both Podcasts and RSS are based around multiple levels of curation, there is curation in the sources and this is done by the user, and there is curation in each source, done by the source themselves. The user has the ability to change the sources they see at their will but will need to go through all the content sources put out, the nice thing is that they get to choose what metrics are used to organize content. It gives the user recourse to change the feed as they like while also benefiting from the value curators provide.

RSS is not a complete solution however. The key flaw (that curated feeds are really good at and is probably why people switched) is the discovery of the new is *really* hard with RSS by itself. RSS is static with regard to sources. So while some cool new source might appear on Reddit or Facebook because someone else frequents that site, you'll never find it if you're not looking it. It's easy enough to continue to use Reddit, Facebook, Twitter or HackerNews and remain vigilant for new sources which you add to your RSS feed, but these are stochastic events based on Reddit, Facebook etc. catching your interest and may draw you back into the algorithmic or crowd feed fold. 

#### The Web Directory

Turns out this too was solved previously, coming from a time before Web 2.0 or even Google. How do you find cool places on the web if you don't have a search engine or you don't know what you're looking for? How do you know what's even out there on the Web? With a directory of course! When the internet was small enough that all the important websites could fit on a page or a few, websites like [yahoo.com](https://web.archive.org/web/19961017235908/http://www2.yahoo.com/) served as the phone book of the internet, categorizing cool or interesting sites so that people could find their way around. 

So the practice was if I was looking for a website on rugby or just interesting place to go, I'd go to yahoo.com and just look in the sport section for relevant sounding websites. People also maintained their own [personal lists](http://werbach.com/hotlist.html) (called web hotlists) containing their discoveries on the web. So if I'm looking for interesting places on the web, I can hop to a buddy's website and see what they were reading. 

I believe this is the missing piece to make self crafted feeds (via RSS or some other protocol) relevant as a method to find and discover new content. There needs to be ways to explore and discover new sources. Podcasts do this in a wide variety of ways; they cross promote themselves, apps have special discovery views, but the best way (in terms of how many podcasts I've liked from this method) I believe has been word of mouth, i.e. the curation of sources from people whose opinions I already respect.  I think this is a practice that needs to comeback (with RSS) as part of the infrastructure to live a curated feed free life. In order for people to be able to effectively use RSS to find content on the internet, there needs to easy ways to explore what is out there at the source level. Allowing others to benefit from your exploration through a directory is an easy way to develop this infrastructure. There is a similar old idea I've seen pop up again called Web Rings, which is a group of self referential websites. Members of the ring will link to other members, either to drive traffic towards them or to optimize for SEO. A pretty cool one is this one from XXIIVV [webring.xxiivv.com](https://webring.xxiivv.com/#). Regardless of how you do it though, the support must be out there for people so they can make decisions about what they want to see themselves. 

So as a step in this direction, I'm putting up my own [Web Directory](https://narendasan.com/directory.html). Its pretty plain right now (~~I may attach a formated OPML file with the entries so its easy to import into a RSS reader later~~ **UPDATE:** You can now find an OPML file with all the sources [here](../naren-web-directory.opml)), but it includes a list of the websites, youtube channels and podcasts I enjoy. I may add other formats to this, but the rule I'm keeping to is the source must either be a website or consumable by RSS (or both). I hope that you do the same and if you do you should tweet me or whatever other form of communication you prefer [@narendasan](https://www.twitter.com/narendasan). I'd love to see it, I'm always looking for more content.  

{% include image.html path="directory/directory.png" path-detail="directory/directory.png" alt="directory"  algin="center"%}

## Post Script (Twitter & YouTube)

So even though I basically got rid of Facebook as a news feed and I frequent a few specific subreddits, I still have a couple recommendation engines in my life, YouTube and Twitter. 

YouTube is an interesting case. Video is not cheap to host, especially compared to a website. And there is no GitHub pages for Video (yet). So there is structural pressure to upload to a service (this centralizes video on a few sites). The additional pressures to actually make a living of content creation, further centralizes video on the one or two services that have that yield the most revenue, for short form video this is YouTube. I don't know how to change this. There are some alternatives (PeerTube, FloatPlane etc.) but for now YouTube is the home of video on the internet, and as much as I want to make decisions for myself, I'd much rather watch the guys at [Mahalo My Dude](https://www.youtube.com/channel/UCeWaURbVb0kEFTpN2pB38cw) or [Squidge Rugby](https://www.youtube.com/channel/UCu2oaGQ6Dds6g9lqfexUFbQ). So I resort to trying to use the subscriptions tab when I remember to still maintain as much control over what I'm seeing as possible. But by default you are given an algorithmic feed and so there is cognitive load associated with switching over. But people may not know or may have forgotten that there is actually RSS support for youtube channels, so you may be able to bypass the YouTube recommendation engine that way. 

### How to subscribe to YouTube Channels over RSS

#### Get RSS updates for a single channel

To get an RSS feed of a single channel’s uploads, paste the channel URL into your RSS reader.

> This seems to only work for channels associated with Users on YouTube (look for `/user/` in the url to tell the difference)

You can subscribe to "channel channels" by finding the external channel id in the URL and using this URL template

```
https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID
```

So for [Royal Ocean Film Society](https://www.youtube.com/channel/UCWq-qJSudqKrzquTVep9Jwg) who's url is [https://www.youtube.com/channel/UCWq-qJSudqKrzquTVep9Jwg](https://www.youtube.com/channel/UCWq-qJSudqKrzquTVep9Jwg), the RSS feed would be [https://www.youtube.com/feeds/videos.xml?channel_id=UCWq-qJSudqKrzquTVep9Jwg](https://www.youtube.com/feeds/videos.xml?channel_id=UCWq-qJSudqKrzquTVep9Jwg)


You can also subscribe to specific playlist similarly using the following template

```
https://www.youtube.com/feeds/videos.xml?playlist_id=PLAYLIST_ID
```

So to subscribe to all the [*It's Alive*](https://www.youtube.com/playlist?list=PLKtIunYVkv_SUyXj_6Fe53okfzM9yVq1F) ([https://www.youtube.com/playlist?list=PLKtIunYVkv_SUyXj_6Fe53okfzM9yVq1F](https://www.youtube.com/playlist?list=PLKtIunYVkv_SUyXj_6Fe53okfzM9yVq1F)) videos from Bon Appetit, you would use [https://www.youtube.com/feeds/videos.xml?playlist_id=PLKtIunYVkv_SUyXj_6Fe53okfzM9yVq1F](https://www.youtube.com/feeds/videos.xml?playlist_id=PLKtIunYVkv_SUyXj_6Fe53okfzM9yVq1F)


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
