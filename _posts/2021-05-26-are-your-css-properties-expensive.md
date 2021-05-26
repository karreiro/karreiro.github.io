---
layout: post
title: "Are your CSS properties expensive?"
date: 2021-05-26 00:00:00 +0000
---

Working in a web IDE is a challenging but fun trial. I frequently face the edge of browser capabilities and often need to find bottlenecks to ensure a good user experience. Today, I will show you one of these challenges.

First of all, let's remember that our browsers have five major phases during the rendering lifecycle:

<img src="/assets/2-browser-phases.jpg" style="display: block; width: 65%; margin: 2rem auto" alt="The five major phases during the rendering lifecycle on browsers: JavaScript, Style, Layout, Paint, and Composite" title="The five major phases during the rendering lifecycle on browsers: JavaScript, Style, Layout, Paint, and Composite" />
<span class="source">Image source: https://developers.google.com/web/fundamentals/performance/rendering</span>

Generally, we pay too much attention to the first one. However, today, I will show how the second and the third one may impact your web app's performance. Check this simple example:

[![Example of expensive client-side operation](/assets/1-expensive-css-demo.gif "Example of expensive client-side operation")](/assets/1-expensive-css-demo.gif)

The JavaScript code of the "**Click me**" button is:

```javascript
const button = document.querySelector("button");
const elements = document.querySelectorAll(".element");

button.onclick = (e) => {
  elements.forEach((element) => element.classList.add("element--left"));
};
```

When users click on that button, all 5000 elements receive the new CSS class and move. That seems a bit drastic, but some operations in an IDE may affect other components at a comparable level.

Now, let’s finally check the following two examples and understand how different CSS properties impact the page’s performance differently.

---

### 1. The slow approach

All right, let's take a look at the performance of this page:

[![Example of slow CSS properties in action](/assets/3-expensive-css-slow.png "Example of slow CSS properties in action")](/assets/3-expensive-css-slow.png)

**It takes 567ms during the rendering phase**! This approach relies on the `transform` property to move the elements and the `opacity` to change their color when they move.


### 2. The fast approach

Now, let's quickly tweak our CSS logic a bit to do the same thing but getting a considerable faster result:

[![Example of fast CSS properties in action](/assets/4-expensive-css-fast.png "Example of fast CSS properties in action")](/assets/4-expensive-css-fast.png)

**It takes only 92ms for rendering now** 🚀 We just changed the CSS by using `margin-left` instead of the `transform` property and the `color` instead of the `opacity`.

---

Some CSS properties demand more browser resources than others. During my investigations, I found that the following properties may harm your web app performance, so let's keep one or two eyes on them:

- `border-radius`
- `box-shadow`
- `opacity`
- `transform`
- `filter`
- `position: fixed`

Happily, some new properties may help us, like the new `content-visibility`, which enables the user agent to skip some elements from the rendering phase [^1].

I hope that after this reading, you may think about CSS as a powerful, measurable, and understandable tool :-)

--

[^1]: `content-visibility`: the new CSS property that boosts your rendering performance - [https://web.dev/content-visibility](https://web.dev/content-visibility)




