---
layout: post
title: "The Fairview High School Mobile App"
description: "Making an Mobile Client for the student run LMS at Fairview High School"
thumb_image: "about.jpg"
tags: [mobile, ruby, rubyonrails, js, jquery, web]
---

In 2010 the administration of Fairview High School decided to support a set of students work
to make a better website for the High School. Up until then students were forced to use a SharePoint to get assignments and documents for class, which made life pretty difficult for students and teachers.

Ultimately, these students created a Ruby on Rails Content Management System for the High School that would manage homework,
calendars, files and assignments for all classes. Over time as control of the code base has been passed from class to class, members of the Web Team as it is called now, have added features to make the site better. Some examples are a Khan Academy like learning and quiz system called Classroom, a personal assignment and class manager and more. 

My main contribution to the site other than leading Web Team and a nice little easter egg I hid in the site _(type *still around* and hit enter)_ was to introduce the Fairview High School Mobile Application. 

At the time things like React Native were not invented yet so having to support both iOS and Android would have been a challenge for 10 developers working parttime. The cross platform approach we took was to make an HTML5 Web Application that can be installed on the home screen of the Phone. 

The entire system was build on Jquery Mobile and Ruby On Rails. The entire styling of the web site needed to be redone and it was a chance to modernize some of the styling of the site (This was when skeudomorphism started to fall out of favor). The site was not responsive as responsive frameworks were uncommon at that time. Ultimately a full new frontend was created and a shim was placed to allow both frontends to use the same backend. 

You can take a look at the prototype (the actual application is closed source) and remind yourself of web development circa 2012.

> Prototype of the Site: [https://github.com/narendasan/fhs-mobile](https://github.com/narendasan/fhs-mobile)

> [fairviewhs.org](fairviewhs.org)

> [Web Team](https://www.fairviewhs.org/sites/webteam)


