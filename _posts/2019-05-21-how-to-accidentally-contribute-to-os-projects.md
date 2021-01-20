---
layout: post
title:  "How to accidentally contribute to OS projects"
permalink: /:year/:month/:day/:title:output_ext
date:   2019-05-21 00:00:00 -0300
---

After writing a simple pong game, as I mentioned in my last post, I'm still studying Go. This week I challenged myself to write a more exciting thing, so I decided to write a Go program that controls a Stardew Valley[^1] game :-)

I found this tiny lib that helped my program to trigger keyboard events: https://github.com/micmonay/keybd_event. It's a pretty straightforward lib, however, I noticed it had an issue with macOS, and I could help with the fix I get my first Go PR merged 🎉

[![My first Go PR](/assets/first-go-pr.png "My first Go PR")](/assets/first-go-pr.png)

I could solve my initial challenge in less than one hour, and it didn't seem hard enough. So I spent some time making enhancements, and I could make tweets control my Stardew Valley game.

It works by consuming the Twitter Streaming API - of course, it's still super simple, but the result is fun, see:

<iframe width="100%" height="450" src="https://www.youtube.com/embed/Hg18OEGVMj8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Even with this cool video, personally, the most rewarding part in this small project was to get my PR on [keybd_event](https://github.com/micmonay/keybd_event) lib merged :-) It's always rewarding to contribute in OS projects.

[^1]: Stardew Valley is a farming simulation role-playing video game developed by Eric "ConcernedApe" Barone and originally published by Chucklefish (https://en.wikipedia.org/wiki/Stardew_Valley)
