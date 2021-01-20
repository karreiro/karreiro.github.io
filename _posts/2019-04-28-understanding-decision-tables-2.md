---
layout: post
title:  "Understanding Decision Tables - Part 2"
permalink: /:year/:month/:day/:title:output_ext
date:   2019-04-28 00:00:00 -0300
---

We’ve discussed the purpose of Decision Tables in my previous post ([Understanding Decision Tables - Part 1](/2019/04/21/understanding-decision-tables-1.html)) to understand how this technique emerges and solves problems involving significant amounts of rules.

Now I’d like to share with you an interesting approach for applying this kind of technique on your project by using the DMN standard. Naturally, this standard covers many other topics related to the decision logic, but here I’ll highlight just the Decision Table part.

If you want to learn more about other aspects, you can check the [DMN Cookbook](https://methodandstyle.com/dmn-cookbook/) and the [DMN specification](https://www.omg.org/spec/DMN/About-DMN/).


### DMN Decision Tables

The DMN relies on Decision Tables for handling complex rule sets, and it’s an excellent example of how to set up an environment by using a ubiquitous language[^1] between developers and domain experts.

Different from approaches based on low-level code implementations, the DMN standard has a modeling notation, that ables domain experts to build executable models by using DMN modelers.

There are many approaches to consume these models. You can check this step-by-step [tutorial](/2018/11/30/dmn-as-the-brain-of-your-financial-bot.html) to quickly learn how to execute a DMN model via a REST API.

But, how to **make** a DMN Decision Table? Ok, to effectively create a Decision Table we need to identify three crucial elements: input columns, output columns, and the hit policy.


#### 1. Inputs Columns

Generally, this section is called *conditions* on regular Decision Tables, but in the DMN world, headers for these columns are called *input expressions* and the rows below are called *input entries*:

[![Decision Table input](/assets/decision-table-input.png "Decision Table input")](/assets/decision-table-input.png)

Each row represents a conditional statement for an output row.

#### 2. Outputs Columns

These columns represent the result of a performed rule. The header is called *output label*, and rows below are called *output entries*:

[![Decision Table output](/assets/decision-table-output.png "Decision Table output")](/assets/decision-table-output.png)

Generally, Decision Tables have only one output, but they may have more output columns.

#### 3. Hit Policy

Decision Tables usually have several rules, and generally, only one row should be triggered by a given input. However, when multiple rows match, the hit policy decides the output.

> If some input value combination causes multiple rules to match, the rules are said to _overlap_. The **hit policy** code in the upper left corner of the table determines how to handle rule overlaps. [^2]

[![Decision Table hit policy](/assets/decision-table-hit-policy.png "Decision Table hit policy")](/assets/decision-table-hit-policy.png)

There are many hit policies for handling overlapping scenarios: Unique (U), Any (A), Priority (P), First (F), Output order (O), Rule order (R), and Collect (C). Their names are pretty self-descriptive, but you can go deeper and read more about it on the [DMN spec (section: 8.2.10 Hit policy)](https://www.omg.org/spec/DMN/About-DMN/).


### Let's try!

I hope you’ve enjoyed this overview of Decision Tables under the DMN perspective. If it’s your first time reading about decision standards, I highly recommend you to write some pet project and try to exercise this new mindset.

Have fun! ;-)

---

[^1]: _Ubiquitous Language is the term Eric Evans uses in Domain Driven Design for the practice of building up a common, rigorous language between developers and users. This language should be based on the Domain Model used in the software - hence the need for it to be rigorous, since software doesn't cope well with ambiguity._ – Martin Fowler about [Ubiquitous Language](https://martinfowler.com/bliki/UbiquitousLanguage.html).

[^2]: Silver, Bruce; Tirelli, Edson. DMN Cookbook: 50 Decision Modeling Recipes to Accelerate Your Business Rules Projects with Trisotech, Red Hat, and Drools ([Page 99](https://www.amazon.com/DMN-Cookbook-Decision-Accelerate-Trisotech/dp/0982368186))



