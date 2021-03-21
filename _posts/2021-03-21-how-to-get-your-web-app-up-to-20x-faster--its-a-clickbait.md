---
layout: post
title: "How to get your web app up to 20x faster (it's a clickbait)"
date: 2021-03-21 00:00:00 +0000
---

I've recently realized how slow DOM may get if we're not diligent enough with our web components' needs. Some of them may get too greedy with the browser resources and slow down the whole web app for a trivial reason.

Let's take the `onmouseover` event as an example of an endless source of events. It's important to notice that not all web components need to respond to all of those events - as **Component A** is doing:

[![Example of a web component getting fewer updates by following the approach proposed in this post](/assets/how-to-get-a-web-app-up-to-20x-faster.gif "Example of DMN model with a decision service")](/assets/how-to-get-a-web-app-up-to-20x-faster.gif)

In many cases, what's **Component B** is doing is just fine. With that in mind, we can do similar optimizations to achieve the same UX results without stressing DOM too much:

```javascript
// == Component A ==

let counter = 1;
const cursorInfo = document.getElementById("cursor-info-1");

document.onmousemove = function (event) {
  cursorInfo.textContent = `
    (x: ${event.x}, y: ${event.y}),  refresh counter: ${counter++}
  `;
};

// == Component B ==

let lastCall = 0;
let counter = 1;
const cursorInfo = document.getElementById("cursor-info-2");

document.onmousemove = function (event) {
  clearTimeout(lastCall);
  lastCall = setTimeout(() => {
    cursorInfo.textContent = `
      (x: ${event.x}, y: ${event.y}),  refresh counter: ${counter++}
    `;
  }, 50);
};
```

I did a similar thing some days ago. In my case, the source of events was another component that was broadcasting too many messages.

At the end of the day, it's not about blaming the source of events. Each part of the application needs to be more careful with the impact of DOM interactions, individually. Otherwise, together, they can critically impact web apps' performance.

[Here's the full example](/snippet?gist_id=4aaccd0716eb562491890305b3a0b8fe) of the code above.

I hope you enjoyed this quick tip! :-)
