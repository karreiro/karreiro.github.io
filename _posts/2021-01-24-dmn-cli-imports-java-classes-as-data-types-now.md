---
layout: post
title: "DMN-cli imports Java classes as data types now"
date: 2021-01-24 00:00:00 -0300
archived: false
---

Some months ago, I created [the DMN-cli project](/2020/08/12/the-dmn-cli-is-finally-available.html) 🎉, which is a tool that allows you to manage DMN models via command-line easily. The primary purpose is to provide a simple infrastructure to automate operations into your models via cli.

Today I introduced the new fetch-types command into the DMN-cli. Now users can fetch DMN data types from:

- a Java project (by relying on .class files) by executing `dmn-cli fetch-types <JAVA_PROJECT_PATH>`
- a JSON file with a list of data types by quickly typing `dmn-cli fetch-types <JSON_FILE_PATH>`

The DMN-cli generates the `"types.dmn"` model when users execute the command fetch-types, see:

<iframe width="100%" height="450" src="https://www.youtube.com/embed/jY1R1UR-IsQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The generated model can be easily included on other DMN files whenever users need to use those types - you can the `"types. dmn"` a data types library.

If you want to try it, check [dmn-cli.com](https://dmn-cli.com) for details :-)
