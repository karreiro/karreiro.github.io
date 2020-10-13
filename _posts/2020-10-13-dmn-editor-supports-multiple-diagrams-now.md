---
layout:    post
title:     "DMN editor supports multiple diagrams now"
date:      2020-10-13 00:00:00 -0300
highlight: true
image:     "/assets/dmn-editor-supports-multiple-diagrams-now-preview.png"
abstract:  "We can finally break the DMN graph into many sub-digrams. It's all about simplifying how we visually express decisions."
---

The [DMN editor](http://dmn.new) was already great for expressing business logic and decomposing complex decisions into multiple nodes.

However, in some advanced use cases, your graph may get complicated, and your model might look like this:

[![Complex diagram screenshot](/assets/dmn-editor-supports-multiple-diagrams-now-1.png "Complex diagram screenshot")](/assets/dmn-editor-supports-multiple-diagrams-now-1.png)

I've removed all labels from this example to focus on the number of nodes and their relationship. Even without acknowledging the decision logic that some elements hold, we easily notice that two subsets compose the decision logic.

This kind of scenario frequently happens on large DMN models since they generally have a tree layout. Now, when you meet a situation like that one, you're able to decompose the model logic into subsets.

[![Complex diagram divided into two subsets screenshot](/assets/dmn-editor-supports-multiple-diagrams-now-2.png "Complex diagram divided into two subsets screenshot")](/assets/dmn-editor-supports-multiple-diagrams-now-2.png)

Creating Decision Requirements Diagrams (DRD) for each subset is relatively straightforward. For composing a new DRD from many nodes, select them and right-click. Also, you can create a diagram from a single node by clicking on the DRD icon:

[![DRD creation demo](/assets/dmn-editor-supports-multiple-diagrams-now-3.gif "DRD creation demo")](/assets/dmn-editor-supports-multiple-diagrams-now-4.gif)

Dividing a problem into smaller and simpler pieces is always an excellent idea, and now we have another approach for that.

We already could decompose a huge business decisions into multiple meaningful nodes. We also could split a DMN model toward various models and reuse their logic by relying on the Included Models tab.

Now, we can finally break the DMN graph into many sub-digrams. It's all about simplifying how we visually express decisions.

Stay tuned for the future updates! ;-)
