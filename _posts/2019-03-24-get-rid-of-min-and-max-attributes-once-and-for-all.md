---
layout: post
title:  "Get rid of \"min\" and \"max\" HTML 5 attributes once and for all"
permalink: /:year/:month/:day/:title:output_ext
date:   2019-03-24 00:00:00 -0300
---

Recently, I needed to implement a very straight forward HTML input. I know we do this kind of thing all the time, but I had some interesting insights I’d like to share. Check these input elements and validation notes:

[![HTML inputs](/assets/html-inputs.png "HTML inputs")](/assets/html-inputs.png)

Pretty simple, nothing too challenging. However, when I tried those `min` and `max` HTML 5 attributes, I got a very unexpected behavior: nothing. Input constraints work only when users set the value by using the browser widget, but they don't prevent typed values.

I quickly googled for some solution, and I could not find anything reasonable - I would need to use a lib, or write some JavaScript for solving this.

Given those alternatives, I chose the second one and tried to write the lightest and simplest workaround for making `min` and `max` attributes work as expected. See:

<script src="https://gist.github.com/karreiro/0f706e7dca56b962a5d3d3413d2965d0.js"></script>

Even being super simple, the approach above seems like something that should not be required.

Maybe I’m misunderstanding the purpose of `max` and `min` attributes, but I’ve checked the [HTML 5.2 spec](https://www.w3.org/TR/html52/sec-forms.html#the-min-and-max-attributes), and I still believe they should work like my JavaScript implementation.

Anyway, what **you** think? I'd appreciate some ideas :-)
