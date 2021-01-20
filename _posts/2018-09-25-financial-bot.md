---
layout: post
title:  "Financial Bot"
permalink: /:year/:month/:day/:title:output_ext
date:   2018-09-25 00:00:00 -0300
---

Today I'd like to share with you one of the many adventures that I had in my free time with weekend projects.

I'm not the most organized person with my financial life, however, I'm always trying to improve on that :-) I tried apps, lists, claiming for advice.. but nothing worked.

There are many aspects of your money you can control, and that's awesome and super complex. But all aspects depend on one thing: you need to get rid of unnecessary expenses. You need to know how much you spent, and how much you can spend in the next few days.

Unfortunately, that's not easy. Every app that I tried is kind of bureaucratic, and I needed many steps and too much thinking to create a simple entry of a new expense. In the perfect world, I would have an assistant, and I could just say: - Jarvis, I spent 12 bucks with beer this evening, ok?
...and done, you know?

That's what I did, look:
[![Demo](/assets/demo-bot.gif "Demo")](/assets/demo-bot.gif)

This is a super simple bot, and you could try to make your own, I guarantee that you'll have some hours of fun improving the behavior of it.

You just need to use two APIs: I) the one you will receive messages from Telegram, and II) the one that will send messages to telegram.

In my case, I'm using google spreadsheets as my database, because I found it easy to control. But you can use whatever you want to persist and process your entries.

Sometimes I get bored and I really would like to program something fun to improve my life, but I'm out of ideas. I had a very good time implementing this small project and I hope you have too. This is something really useful, easy to begin, and can be as complex as you want.

Check a draft [https://github.com/karreiro/financial-bot](https://github.com/karreiro/financial-bot) and see how simple the bot can be.

I hope you enjoyed reading this, and remember...

Have fun :-)
