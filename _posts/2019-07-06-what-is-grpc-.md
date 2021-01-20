---
layout: post
title:  "What is gRPC?"
permalink: /:year/:month/:day/:title:output_ext
date:   2019-07-06 00:00:00 -0300
---

Micro-services architecture changed the way the industry thinks about scalability, deployment, and programming models. That’s a fact. We’re a step ahead now, thinking about tracing, resilience, elasticity, and high performance.

When we think about such kind of architecture, we imagine many nodes sending and receiving requests. ***Communication*** seems like the most valuable aspect.

Today most of the micro-services rely on REST APIs to handle communication. When people say REST, they are not just talking about the paradigm; actually, they suggest APIs that rely on JSON over HTTP/1.1. It’s a clear, simple, and human readable solution.

However, this conventional approach has some trade-offs:
- HTTP/1.1 is a verbose protocol
- JSON is a verbose message format that requires a parser
- Consumers need to write their REST clients
- Interfaces are not type-safe
- Generally, it requires a documentation

All problems above are not the end of the world, but if you want to avoid them, you might want to check [gRPC](https://grpc.io).

> gRPC is a modern open-source high-performance RPC framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking, and authentication. [^1]

gRPC relies on Protocol Buffers, or _protobufs_, for describing services, methods, and messages. See:

<script src="https://gist.github.com/karreiro/501add9efbe23da4c094359104724db0.js"></script>

With the definition, a powerful compiler turns that into the code for a wide variety of programming languages, like Java, Ruby, Go, and JavaScript. Thus, consumers don’t need to write their clients. Instead, they can just import the generated code.

See how simple it's to write a Java API server:
<script src="https://gist.github.com/karreiro/b83d859ce255637417ac05c55ce6901f.js"></script>

And now, we can consume it into a Go client:
<script src="https://gist.github.com/karreiro/1005687597062549c1988a473e61d40f.js"></script>

gRPC relies on HTTP/2 as its transport layer. So, it supports full-duplex streams, in other words, the client app can request data at the same time the server app sends response data.

Summarising all the advantages that gRPC brings:
- Protobufs binaries are faster than JSON
- HTTP/2 brings new features and is less verbose than HTTP/1.1
- Client libraries are generated for free
- Typed interfaces document all resources
- Lower response times

Of course, there are trade-offs in both approaches. gRPC has a learning curve and couples the app with the framework. But given the benefits, it's clear why large organizations like Netflix, CoreOS, and Cisco adopted it.


[^1]: https://grpc.io
