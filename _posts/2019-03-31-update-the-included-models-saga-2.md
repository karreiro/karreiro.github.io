---
layout: post
title:  "The Included Models saga [2]"
permalink: /:year/:month/:day/:title:output_ext
date:   2019-03-31 00:00:00 -0300
---

My efforts for including external models in DMN files keeps evolving and getting even more challenging. Now, I users can _include_ other models into a DMN model:

[![Included Models demo](/assets/included-models-demo-2.gif "Included Models demo")](/assets/included-models-demo-2.gif)

Yeah, it seems like a small step, but the possibilities for this feature are enormous.

In the next three weeks, I (and my teammates) will be working hard to support external Data Types and imported nodes in the diagram - this will entirely close the reusability cycle. Finally, users will be able to do everything they want with foreign models :-)

If you're interested in the code that makes the feature above real, or having trouble sleeping, check my pull request [here](https://github.com/kiegroup/kie-wb-common/pull/2562).

Additionally, this is the first PR where I needed to write some extra code related to the new _Submarine_ initiative, if you want to know more about it, check this interesting [post](http://blog.athico.com/2019/03/quarking-drools-how-we-turned-13-year.html).
