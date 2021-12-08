---
layout: post
title:  "Less code == less tests"
permalink: /:year/:month/:day/:title:output_ext
date:   2019-01-28 00:00:00 -0300
archived: false
---

Generally, I try to cover almost 100% of the code I write with unit tests (except getters, setters, and very particular scenarios).

I don't think this brings any guarantee that my code base is perfect, but it helps me to find hidden design problems and even bugs. However, it's easy to fall into a bike-shedding vortex when you have such a strict goal, and today I'm going to share one of my mind-spirals with you :P

See these two options for implementing the "same thing":

<script src="https://gist.github.com/karreiro/ef3aaeded7e2c37e1c55e84187e9eef7.js"></script>

They look pretty similar, right? Option one is more verbose, while option two maybe seems cleaner, but they don't look that different at all.

In the first approach, we're analyzing the `Optional` variable `user`, and checking if it's present, to actively perform the save action.

While in the second approach, we're just delegating the check to the `Optional` implementation, we're just calling a method and passing a lambda as a parameter without creating any new branch.

Thus, if we have less logic implemented in the second option, this will directly impact its unit tests. See the difference:

<script src="https://gist.github.com/karreiro/1e3efd6f68ed318272b9810584445460.js"></script>

Of course, this is not a huge issue. But it's interesting to think if we're not writing too much code, or testing things that we shouldn't even write. Less code is always cleaner and fun.

I hope you enjoy this small digression and remember...

Have fun :-)
