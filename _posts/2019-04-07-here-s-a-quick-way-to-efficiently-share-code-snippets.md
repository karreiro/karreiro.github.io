---
layout: post
title:  "Here's a quick way to efficiently share code snippets"
permalink: /:year/:month/:day/:title:output_ext
date:   2019-04-07 00:00:00 -0300
---

When you work remotely, you notice you need a tool for many everyday tasks. I frequently need to share code snippets with my teammates to explain something, and IMHO the best tool for that is [Gist](https://gist.github.com/) - a very simple and straightforward service.

However, **Gist** does not have preview features for some file extensions :-(

Thus, I decided to implement this feature in my blog (inspired by [Stephen Grider playgrounds](https://github.com/StephenGrider/JSPlaygrounds)). I tried to find a lib to help me with that, but I could not find anything as neat as I expected.

[![Live Preview demo](/assets/live-preview-code-snippets.png "Live Preview demo")](/assets/live-preview-code-snippets.png)

So, I wrote this simple preview from scratch (see [the demo](/snippet?gist_id=3e5fbf6b363f30eed0268e0a01190096)) for sharing HTML code snippets by using Gist API. I just need to pass the gist id as a query parameter, and everything appears automatically.

If you like it and want to reuse in your blog, check [this commit](https://github.com/karreiro/karreiro.github.io/commit/8741ef7331498f927d5de8c41eeb04a75f55dd8f) and make it work into your project :-) It's very convenient.
