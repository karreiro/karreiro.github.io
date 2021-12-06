---
layout: post
title:  "[DMN pro-tip] BKM nodes"
permalink: /:year/:month/:day/:title:output_ext
date:   2020-01-20 00:00:00 -0300
archived: true
---

I've been working a lot in a new project: [learn-dmn-in-15-minutes.com](http://learn-dmn-in-15-minutes.com) :-) It's a work in progress, but it's getting an excellent shape!

The idea is to cover every primary aspect of the DMN into this _quick-but-complete_ course. While it's not completely done, you can check here some pro-tips.

Generally, I tend to create my DMN models by using only Decision nodes, Input nodes, and FEEL expressions. However, some time we want to invoke something more complex, like Java code, and you can do that with DMN!

See how simple it is:

1) Create a Business Knowledge Model (BKM) node:
<img src="/assets/pro-tip-bkm-nodes-1.png" class="custom-width" style="max-width: 60%" alt="Step 1" title="Step 1" />

2) Add some decision logic to specify the method you want to invoke from the Java world (Notice: you can **only** call static methods):
<img src="/assets/pro-tip-bkm-nodes-2.png" class="custom-width" style="max-width: 75%" alt="Step 2" title="Step 2" />

3) Create a decision node with an input node:
<img src="/assets/pro-tip-bkm-nodes-3.png" class="custom-width" style="max-width: 60%" alt="Step 3" title="Step 3" />

4) Call your BKM there:
<img src="/assets/pro-tip-bkm-nodes-4.png" class="custom-width" style="max-width: 60%" alt="Step 4" title="Step 4" />

5) Let's see it working:
<img src="/assets/pro-tip-bkm-nodes-5.png" class="custom-width" style="max-width: 100%" alt="Step 5" title="Step 5" />

Ta-daa! I hope you enjoyed it!

Stay tuned other DMN pro-tips :-)
