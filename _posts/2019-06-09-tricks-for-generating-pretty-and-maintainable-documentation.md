---
layout: post
title:  "Tricks for generating pretty and maintainable Documentation"
date:   2019-06-09 00:00:00 -0300
---

This week I invested some time adding documentation support for DMN files. Soon, Business Central users will be able to generate documentation describing every detail about their DMN files.

[![Documentation feature demo](/assets/documentation-dmn-demo.gif "Documentation feature demo")](/assets/documentation-dmn-demo.gif)

Luckily, I noticed that Business Central had a similar feature for BPMN files. Thus I could just re-use part of the code :-) 

When I thought about this documentation feature for the first time, I planned a different approach - more server-side guided. However, the current implementation is client-side full, and it works so well that I changed my mind.

The flow is super simple. When users want to see the documentation, we:
1. Get the Diagram
2. Process the Diagram to create the Diagram Document Model
3. Render the Diagram Document Model into a Mustache template
4. Open a new `window` in the browser
5. Replace the `window.document.body` with the Mustache template
6. And, finally, we `window.print()` it!

I enjoyed this strategy to print documents. With this we don't need to hide DOM elements from our printable page; we can use CSS to customize the report; and the use of Mustache leave the door open for an eventual future refactoring, that can move the logic to a server-side service.

Finally, I'd like to mention another exciting thing I learned. There's a world of some "unknown" CSS properties for paged media (`print`), like `page-break-before`, `orphan`, and `window`. It's a good thing to explore.

Well, I hope you can eventually re-use some of these tips in your project :-)
