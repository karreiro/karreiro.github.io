---
layout: post
title:  "Building a browser game - Chapter 1: The DOM performance"
permalink: /:year/:month/:day/:title:output_ext
date:   2019-09-15 00:00:00 -0300
---

These days I was feeling nostalgic about JavaScript. My adventures with Go has been fun, but I was missing to write some code that runs on the browser and makes colorful-things pop. Also, I had an exciting idea, and I decided to make it happen with a web app.

Summarising, I'll try to build a tower defense game browser-based with crafting mechanics. I'm taking it as a relaxing project. So, I'm not rushing with it, and I'm trying to enjoy each challenge slowly.

I've decided not to implement the game on canvas. DOM API is so rich that I've decided to try it. However, I was expecting some delays to render complex structures, so my first challenge was to validate an approach to render a big bunch of blocks. 

⚠️ I limited the resources of my machine to record the following GIFs and make them more expressive, so they run faster in the _"real world"_.

Here's the first try (notice how slow!):

[![First try](/assets/dom-performance-first-try.gif "First try")](/assets/dom-performance-first-try.gif)


Here's the second try. Tried some optmizations by using `setTimeout` to give some idea of progress:

[![Second try](/assets/dom-performance-second-try.gif "Second try")](/assets/dom-performance-second-try.gif)


And.. finally the best that I could achive until now, where I'm rendering only **visible** elements:

[![Third try](/assets/dom-performance-third-try.gif "Third try")](/assets/dom-performance-third-try.gif)

I'm not entirely confident about using this DOM-based approach. However, I'm going to develop this proof of concept more by adding complex interactions. With this first iteration completed, I will have a better idea of the feasibility.

If you're interested in some code, you can take a look [here](https://github.com/karreiro/blocks-performance-test/blob/master/index.js#L132-L150).

I hope you enjoy it ;-)
