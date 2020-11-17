---
layout:    post
title:     "DMN editor opens 1.1 and 1.3 assets now"
date:      2020-11-17 00:00:00 -0300
---

The DMN editor continues evolving towards making users' lives as simple as possible. On Kogito 0.8.1, we introduce a new mechanism to open DMN 1.1 and 1.3 assets.

We're still saving your model as a DMN 1.2 asset at conformance level 3. However, now any 1.1 or 1.3 model, non including DMN 1.3 features, is converted to 1.2.

In other words, you can now open DMN 1.1, 1.2, and 1.3 models in the editor, as you can see :-)

[![DMN editor opening a DMN 1.3 asset](/assets/dmn-1-1-and-1-3-assets.gif "DMN editor opening a DMN 1.3 asset")](/assets/dmn-1-1-and-1-3-assets.gif)

As you probably have already noticed, this is a baby step toward fully-supporting the DMN 1.3 spec, but it's already great news. If you're using an older version of the editor, or even if you have DMN models from other vendors persisted as DMN 1.1 or 1.3, you're now able to open them on VSCode, Online Editor, and on any other Kogito channel.

Thinking on the tooling's future, we've also introduced a backward compatibility [test suite](https://github.com/kiegroup/kie-wb-common/pull/3482) with almost every file pushed in the [dmn-tck](https://github.com/dmn-tck/tck) repository. It ensures that new Kogito releases will continue supporting older DMN versions without any regression.

We'll release Kogito 0.8.1 in a few days with other surprising news. Stay tuned! ;-)
