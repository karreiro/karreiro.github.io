---
layout: wiki
title: Data Types
last_updated: 2021-02-02
---

You'll frequently handle data when you build a DMN model, and when you think about data, you need to think about types.

Sometimes you will face very simple situations, like this:

![Data Types 1](../assets/data-types-1.png)

On this example, the decision node, possibly a decision table, checks the input nodes Age and Driver license type. In this example the values for these input nodes are, respectively, the number 28 and the string "Class", since this person looks old enough and has the properly license, the decision node returns the boolean true.

![Data Types 2](../assets/data-types-2.png)

> The [DMN Specification](https://www.omg.org/spec/DMN/About-DMN/) often refers to data types as Item Definitions, both names means strictly the same thing.
