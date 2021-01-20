---
layout: post
title:  "The DMN Data Types saga"
permalink: /:year/:month/:day/:title:output_ext
date:   2019-09-30 00:00:00 -0300
---

In the last months, I’ve been investing most of my time on new features for the Business Central - DMN editor. It has a considerable number of features, but these days I’m mainly focused on getting a better UX into the Data Types tab.

When we think about any complex problem, it’s hard to figure out a solution that doesn’t require a particular data structure. That’s why the Data Types tab is so frequently used, and consequently has so many feedbacks.

The current version works and looks good. However, it has some gaps (you can try to identify):

[![DMN Data Types DEMO (Before)](/assets/the-dmn-data-types-saga-before.gif "DMN Data Types DEMO (Before)")](/assets/the-dmn-data-types-saga-before.gif)

After some feedbacks, studies, etc. The UX team proposed new enhancements to make the user experience even more productive. Thus, right now, I’m implementing (IMHO) the most valuable one, the drag and drop feature:

[![DMN Data Types DEMO (After)](/assets/the-dmn-data-types-saga-after.gif "DMN Data Types DEMO (After)")](/assets/the-dmn-data-types-saga-after.gif)

Cool, right? On some days, I will post here the link of the PR, showing my strategy to implement this :-)

If you’re a DMN editor user, stay tuned! This enhancement is just one of many others the team is bringing to the editor.
