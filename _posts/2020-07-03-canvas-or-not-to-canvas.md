---
layout: post
title:  "Canvas or not to Canvas?"
permalink: /:year/:month/:day/:title:output_ext
date:   2020-07-03 00:00:00 -0300
---

The canvas is the most fascinating and powerful window on modern browsers. Whenever I see something intriguing that goes beyond what I visually would expect, I realize it’s a canvas trick.

However, breaking paradigms brings new challenges like accessibility, maintainability, and performance. Such flexibility comes with assuming trade-offs and the cost of re-implementing features that browsers deliver for free when we’re using standard HTML elements like input elements, text area elements, etc.

That’s why it’s essential to deeply understand how canvas works and if your use case really requires it.

Last week I faced this interesting article: [https://blog.scottlogic.com/2019/05/28/drawing-2d-charts-with-webgl.html](https://blog.scottlogic.com/2019/05/28/drawing-2d-charts-with-webgl.html). I highly recommend the reading if you plan to build a canvas-based component, even if it’s not a chart.

In the end, it shows [this excellent comparison](https://bl.ocks.org/DevAndyLee/raw/a901617de28912b1e3cbdc6e86d7ac26/). So, even when you decided that you need to build a component based on canvas to solve your problem, you also need to take care of the approach you use to paint it. Otherwise, you might get poor performance.

As a general rule, you can assume WebGL is faster, more verbose, and do not handle texts very well. In comparison, the 2D context is a bit slower but easier to maintain and handle fonts fine. Of course, these are just some details. I believe the most valuable metric to track is the frames-per-second. If you can keep your component responsive and running 60fps, you super-OK from the performance perspective (you can check that using Google Chrome developer tools).

There’s no doubt that canvas components are an exciting choice, but they always bring a cost. So, it’s essential to be diligent, choose carefully, and consider all constraints :-)
