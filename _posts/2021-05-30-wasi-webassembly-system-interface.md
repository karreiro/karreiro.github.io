---
layout: post
title: "WASI: WebAssembly System Interface"
date: 2021-05-30 00:00:00 +0000
archived: false
---

In the latest two weeks, I had the opportunity of watching many QCon Plus talks. One of my favorite ones was the "**WASI: A New Kind of System Interface**" from Lin Clark [^1], an excellent explanation of WASI and why the **Bytecode Alliance** is so important.

[![QCon Plus - WASI: A New Kind of System Interface screenshot](/assets/wasi-webassembly-system-interface-qcon-plus.png "QCon Plus - WASI: A New Kind of System Interface screenshot")](/assets/wasi-webassembly-system-interface-qcon-plus.png)

I believe the main exciting point of the talk lives in the fact that WebAssembly is designed to run on the Web, but it’s not limited to Web [^2]. Many developers are already taking advantage of WASM capabilities to use whatever language they want in near-native performance.

However, that kind of WASM usage was losing some main principles of WebAssembly, and applications were getting too aware of the environment for performing operations involving, for example, IO. That’s where WASI shines.

WASI exposes system interfaces to WebAssembly [^3] programs and hides all the implementation details so that you may have a file system based on cloud, Git, or even ext4. It does that by relying on an abstract modular OS that preserves the effectiveness of standard WASM applications.

If you want to know more about this, I highly recommend the **Bytecode Alliance website** - [bytecodealliance.org](https://bytecodealliance.org) - it's an excellent source of apprehensible information :-)

---

[^1]: QCon Plus talk: ["WASI: A New Kind of System Interface", from Lin Clark](https://plus.qconferences.com/plus2021/presentation/wasi-new-kind-system-interface)
[^2]: `github@WebAssembly/design/NonWeb.md` - [https://github.com/WebAssembly/design/blob/main/NonWeb.md](https://github.com/WebAssembly/design/blob/main/NonWeb.md)
[^3]: `github@WASI/docs/WASI-overview.md` - [https://github.com/WebAssembly/WASI/blob/main/docs/WASI-overview.md#wasi-webassembly-system-interface](https://github.com/WebAssembly/WASI/blob/main/docs/WASI-overview.md#wasi-webassembly-system-interface)
