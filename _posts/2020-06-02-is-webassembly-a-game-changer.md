---
layout:    post
title:     "Is WebAssembly a game changer?"
permalink: /:year/:month/:day/:title:output_ext
date:      2020-06-02 00:00:00 -0300
---

Yes!

Since the latest December, when WebAssembly (WASM) became the fourth language to run natively in browsers following HTML, CSS, and JavaScript [^1], performance discussions from web applications perspective started gaining even more protagonism.

Now, it's possible to compile high-level language code into a binary, run it into the browser and get near-native performance.

[![WASM drawing](/assets/is-webassembly-a-game-changer.png "WASM drawing")](/assets/is-webassembly-a-game-changer.png)
<span class="source">Image source: https://hacks.mozilla.org/2017/02/creating-and-working-with-webassembly-modules</span>

WASM binaries allow a new level of control, execution, and brings new opportunities for web applications, as Philippe Le Hégaret (W3C Project Lead) says:

> "The arrival of WebAssembly expands the range of applications that can be achieved by simply using Open Web Platform technologies. In a world where machine learning and Artificial Intelligence become more and more common, it is important to enable high performance applications on the Web, without compromising the safety of the users"

WebAssembly binaries are transcending the browser and are currently exploring other environments. This modern infrastructure leads to new standards, vulnerabilities, and challenges. To address these matters, the Bytecode Alliance has emerged as an open-source organization aiming to provide state-of-the-art foundations to develop runtime environments and language toolchains where security, efficiency, and modularity can all coexist across a wide range of devices and architectures, through WebAssembly [^2].

Alright, but how do you write this kind of artifact? Okay, from the programming language perspective, you have many options: Rust, AssemblyScript (which similar to Typescript), Emscripten (C/C++), etc. - check [this list](https://github.com/appcypher/awesome-wasm-langs).

I'm personally focusing on Rust right now. It has almost the same performance as C++, but with safer memory management, no garbage collection, and mature WASM support.

I hope you enjoy WASM as I'm enjoying it :-)

-

[^1]: World Wide Web Consortium (W3C) brings a new language to the Web as WebAssembly becomes a W3C Recommendation - https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en

[^2]: Bytecode Alliance - Mission https://bytecodealliance.org/mission
