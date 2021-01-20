---
layout: post
title:  "Understanding Decision Tables - Part 1"
permalink: /:year/:month/:day/:title:output_ext
date:   2019-04-21 00:00:00 -0300
---

Some business models are too complicated, and only when you need to translate them to code, you realize you have a problem - a massive amount of conditional statements.

Sometimes you can apply designer patterns, extract logic, and make your code readable by performing simple techniques. However, sometimes that’s not enough to clean the room and seems impossible to track which condition is triggering the desired action. In this kind of scenario, the Decision Table comes in.

> A Decision Table improves understandability by representing the group of conditions as a table, where each column shows the outcome for a particular combination of conditions. [^1]

It's a very flexible technique, and it has been used for a variety of enterprise business applications, or even for supervised learning algorithms. See an example of how a Decision Table can replace complex programming logic by a simple tabular representation [^2]:

[![Decision Table](/assets/decision-table.png "Decision Table")](/assets/decision-table.png)

It’s so readable that domain-experts can read, understand, and change rules. Of course, these procedures depend on the adopted architectural approach; it's much easier to edit a Decision Table in a pretty web application than in a plain CSV file.

There are many flavors of architectures for applying Decision Tables in your projects. You can use them in a vertical orientation, with rules as columns; or in a horizontal orientation, with rules as rows (like the image above). You can adopt robust and scalable solutions like the Drools engine, or even custom simple implementations like these: [https://rosettacode.org/wiki/Decision_tables](https://rosettacode.org/wiki/Decision_tables).

Now that you're familiar with Decision Tables, we can explore other exciting aspects of this topic in my future posts, like good practices for writing rules, or even interesting architectural approaches for implementing this.

I hope you enjoyed reading this, and remember...

Have fun! :-)

---

[^1]: Fowler, Martin. Domain Specific Languages ([Chapter 48. Decision Table](https://learning.oreilly.com/library/view/domain-specific-languages/9780132107549/ch48.html)),

[^2]: You can check some Decision Tables in action at my previous [post](/2018/11/30/dmn-as-the-brain-of-your-financial-bot.html) that uses a DMN model as the brain of my financial bot.



