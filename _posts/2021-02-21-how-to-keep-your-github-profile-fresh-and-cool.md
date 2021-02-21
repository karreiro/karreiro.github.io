---
layout: post
title: "How to keep your Github profile fresh and cool"
date: 2021-02-21 00:00:00 +0000
---

I recently discovered this Github feature where we can have a **README.md** on our public profile. It works like a personal index for me, where I can share my blog, digital garden, etc.

I saw some people doing very creative pages, and I decided to do a minimalist one for myself :-)

Since I already have a RSS feed on my blog, I wondered if I could build some mechanism to automatically update my **README.md** with new posts.

And... at the end of the day, it's quite easy. So, let me show you how you can do that in **2 simple steps**!

## 1) The 'README.md' repository

First of all, I created this `.github/workflows/build.yml` file on my [https://github.com/karreiro/karreiro](https://github.com/karreiro/karreiro) repository.

<script src="https://gist.github.com/karreiro/c417b73c892c6616a6fad81179e5a123.js"></script>

Notice that I've configured the repository to be hourly refreshed. So, every time this job runs, my `update_readme.rb` Ruby script is triggered, and a new **README.md** is pushed if there's something new.

## 2) The Ruby script

You can write your own script or [re-use mine](https://github.com/karreiro/karreiro/blob/main/update_readme.rb) ;-)

I use a "template" file with this `{posts}` element to hold my posts. It's quite simple:

<script src="https://gist.github.com/karreiro/ce3bfd2224ba4e5abbade26e441f8e36.js"></script>

The whole logic lives [here](https://github.com/karreiro/karreiro).

## It's alive!

That's it! Now, I don't need to update the **README.md** by myself anymore! Have you recently done any trivial automation like that? 😅 If so, I'd really like to read about it in the comments.

I hope you've enjoyed this quick tutorial!
