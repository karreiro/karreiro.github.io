---
layout: post
title: "New enhancements on DMN editor decision services experience"
date: 2021-03-02 00:00:00 +0000
---

The user experience for decision service nodes is something we're incrementally enhancing in the DMN editor. [Kogito 0.8.4](https://github.com/kiegroup/kogito-tooling/releases) will introduce a new feature that significantly enhances how users call decision services.

Imagine you have a DMN model like this one:

[![Example of DMN model with a decision service](/assets/new-enhancements-on-dmn-editor-decision-services-experience-1.png "Example of DMN model with a decision service")](/assets/new-enhancements-on-dmn-editor-decision-services-experience-1.png)

Also, imagine that you need to invoke the decision service "**user message**" into the "**Example**" node with a Literal Expression. How can you do that? 🤔

You probably would need to guess the parameters' order, which is quite frustrating (*of course - we may be wrong!*). On Kogito 0.8.4, users will be able to select a decision service and see the order of parameters, like this:

[![Example of DMN model with a selected decision service](/assets/new-enhancements-on-dmn-editor-decision-services-experience-2.png "Example of DMN model with a selected decision service")](/assets/new-enhancements-on-dmn-editor-decision-services-experience-2.png)

So, now it's much easier to call "**user message**" now, as we can clearly see the order of our parameters is "**Age (number)**" and then "**Name (string)**". Also, now we know the answer to the question above and we can call our decision service:

[![Example of DMN model with a literal expression calling a decision service](/assets/new-enhancements-on-dmn-editor-decision-services-experience-3.png "Example of DMN model with a literal expression calling a decision service")](/assets/new-enhancements-on-dmn-editor-decision-services-experience-3.png)

If you're wondering what this model returns, check this example of DMN model call and output:

```ruby
require 'httparty'

body = {
  'Name': 'Kojima',
  'Age': 57,
}

resp = HTTParty.post("http://localhost:8080/example",
                    body: body.to_json,
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    basic_auth: { username: 'kieserver', password: 'kieserver1!' })

puts resp
# {
#    "user message":"function user message( Age, Name )",
#    "upcase":"THE USER KOJIMA IS 57 YEARS OLD.",
#    "Example":"THE USER GUILHERME IS 29 YEARS OLD.",
#    "concat":"The user Kojima is 57 years old.",
#    "Age":57,
#    "Name":"Kojima"
# }
```


Straightforward, right? :-) We'll release Kogito 0.8.4 in a few days with other surprising news... but, if you really wanna try it right now, download my latest VSCode plugin build [here](https://drive.google.com/file/d/1TQFTMHmscrCYJ5X_UY0TjTyzL1wiABh5/view?usp=sharing).

Stay tuned! :-)
