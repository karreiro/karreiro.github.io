---
layout: post
title:  "How to introduce your app to users"
permalink: /:year/:month/:day/:title:output_ext
date:   2020-07-17 00:00:00 -0300
highlight: true
image: "/assets/how-to-introduce-an-app-for-users-preview.png"
abstract: "Today I could test the new Kogito VSCode extension, which supports DMN models now."
---

Introducing a web or mobile application is not a challenge when dealing with a simple and straightforward solution. However, that's not always possible. Some tools are intrinsically complicated, and users will need to deal with it.

**That doesn't mean that we need to leave everything upon users back.**

As you probably already know, I develop the DMN tooling for the Kogito platform. It's a relatively complex application:

[![DMN editor screen](/assets/how-to-introduce-an-app-for-users-1.png "DMN editor screen")](/assets/how-to-introduce-an-app-for-users-1.png)

However, once users realize each component's meaning, they consequently understand part of the DMN spec and how to use the DMN editor.

There are several strategies for explaining things to users: the DMN editor already has [excellent documentation](https://docs.jboss.org/kogito/release/latest/html_single/#_using_dmn_models_in_kogito_services); it also has the [Learn DMN in 15 minutes](http://learn-dmn-in-15-minutes.com) website - which is a 15 minutes course of how DMN works; also we try to teach things to users by having an intuitive user interface.

All approaches above are valid, but none of them gives us 100% certainty that users will know how to use our editor. That why I've introduced a fourth strategy, the Guided Tour:

[![Guided Tour demo](/assets/how-to-introduce-an-app-for-users-2.gif "Guided Tour demo")](/assets/how-to-introduce-an-app-for-users-2.gif)

The Guided Tour is a component embed in the editor interface that brings the learning process to the moment that users most want to learn how to use the editor. You can give it a try on [dmn.new](http://dmn.new).

The component seems as simple as a floating div. Still, there are many exciting things behind it: I) how we react to user interactions; II) how we _querySelect_ elements in the DMN canvas diagram; III) how we maintain all those steps across different components.

If you want to know more about one of these three or any other topic, please leave a comment. I will happily share the details :-)
