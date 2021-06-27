---
layout: post
title:  "The Included Models saga"
permalink: /:year/:month/:day/:title:output_ext
date:   2019-03-07 00:00:00 -0300
archived: true
---

In the last three weeks, I've been investing most of my time in the DMN editor, and the "Included Models" feature is the special part of the work I did there.

When we think about programming, reusability is one of the most important topics. It enables us to take a piece of knowledge and apply it all over the solution, without the need of thinking about that specific logic again.

The "Included Models" tab represents the start for that kind of reusability into the DMN editor. Right now users can import DMN files with references to external DMN files, and edit them, see:
[![Included Models demo](/assets/included-models-demo.gif "Included Models demo")](/assets/included-models-demo.gif)

That is just the beginning of the feature. In the future PRs, users will be able to reuse nodes from external files and add new DMN models.

If you're curious about the implementation for this, check the code [here](https://github.com/kiegroup/kie-wb-common/tree/master/kie-wb-common-dmn/kie-wb-common-dmn-client/src/main/java/org/kie/workbench/common/dmn/client/editors/included).
