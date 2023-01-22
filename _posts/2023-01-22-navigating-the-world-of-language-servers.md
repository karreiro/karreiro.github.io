---
layout: post
title: "Navigating the world of Language Servers"
date: 2023-01-22 00:00:00 +0000
archived: false
---

We all use language servers, even before we learn to program, still, it took me a few years to finally notice what they really are.

Have you ever thought about that?

[![Language Server demo](/assets/language-server-demo.png "Language Server demo")](/assets/language-server-demo.png)

The editor knows we can call `fill` or `filter`! How does the editor know that `elements` is an array of numbers? How do those things work under the hoods?!

The language server does that magic! ✨

The editor (e.g. VS Code) plays the client-side role and takes care of presenting UI elements and firing UI events. On the other side, each language has its LSP implementation to take care of realizing possible methods, variables, etc. Hmm, ok.. things may be getting a bit confusing, so let’s take a step back, and get some terms out of our way first:

- **LSP (Language Server Protocol)** is an Open-Source [project](https://github.com/Microsoft/language-server-protocol) that defines a common protocol for language servers. So, for example, when users press `Ctrl + Space` in the editor, it knows it needs to send the `"textDocument/completion"` message to the language server to get some code completions. On the other side, language servers follow that standard and answer that message

- **Language Server** is a process that receives requests and provides responses. As you're probably wondering [each language has its language server](https://microsoft.github.io/language-server-protocol/implementors/servers/): Rust has Rust Analyzer, Liquid has Theme Check, TypeScript has the typescript-language-server, and so on

- **Intelligent code completion** refers to context-aware code completion features, like in the example [above](/assets/language-server-demo.png) (notice that the suggestions had the context of the `elements` variable and cursor position)

- **IntelliSense** is a set of code editing features built into VS Code. I've noticed that sometimes this term is used interchangeably with intelligent code completion, but IntelliSense incorporates [more features](https://code.visualstudio.com/docs/editor/intellisense#_intellisense-features) than that

So, when you want suggestions and press `Ctrl + Space`, the following process happens in a matter of a couple of milliseconds:

[![Language Server Protocol overview](/assets/language-server-overview.png "Language Server Protocol overview")](/assets/language-server-overview.png)

- Notice how the language server builds an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) to get more information about the current context
- After that, it considers the cursor (`█`) position and realizes it needs to list fields for the `foo` variable
- With the AST, it knows that `foo` is a `product`
- With the metadata for types, it also knows that `product` objects have the fields `available`, `collections`, and `compare_at_price`
- Finally, the language server answers that JSON-RPC message with proper suggestions.


### The fun part

There are many roles to play when it comes about building a good editor DX. Language servers clearly have one the most challenging, fun, and critical ones, as they need to understand what’s happening in the code even when it’s broken to guide developers towards the solution.

Months ago, I built [a tiny context-aware language server](https://karreiro.com/2021/03/30/how-the-new-feel-code-completion-works-under-the-hoods) for the [FEEL](https://learn-dmn-in-15-minutes.com/learn/the-feel-language) language, and these weeks I've been working on the [Liquid](https://shopify.github.io/liquid) context-aware code-completion. Now, I can notice so many patterns, but also how the language design heavily impacts the language server implementations.

If you’re interested in learning more about that hands-on part or the conceptual part of building a language servers, please don’t hesitate to reach out to me. I’m planning to write even more articles related to LSP and how to make our lives as developers more fun. Follow my RSS feed to stay updated on the latest posts :)

