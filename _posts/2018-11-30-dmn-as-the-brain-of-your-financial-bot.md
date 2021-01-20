---
layout: post
title:  "DMN as the brain of your Financial Bot"
permalink: /:year/:month/:day/:title:output_ext
date:   2018-11-30 00:00:00 -0300
---

October was a great month at work :-)

The DMN editor (the tool I've been working in last weeks) was released as a tech preview in the Business Central, and I could write an exciting blog post presenting its features to the community. You can read more about it [here](http://blog.athico.com/2018/10/new-dmn-editor-preview.html) 🤓

With the new editor, users can create their DMN diagrams and make them available as a REST service. There are many complex and challenging use cases for this new feature, but I'm going to demonstrate an easy and fun one here.

Do you remember the bot we wrote in the last post?
[![Demo](/assets/demo-bot.gif "Demo")](/assets/demo-bot.gif)

Great! In summary, our bot receives the value of an expense, classifies it, stores, and finally, he answers "Ok, fine!". No more than that.

Today, we're going to make our dummy bot smarter. We want to ask:

<b>_- Is a good idea to buy a Nintendo Switch?_</b>

..and get something like this as an answer:

<b>_- Hmmm... Yes, you can! You have the budget for this._</b>

Impressive, right? Ok, let's do this in three simple steps.


### 1) Setup the environment

The first step is to enable the DMN editor, as it's available as a tech preview and hidden by default. Just go to `Settings -> Roles`, select the role you're logged in (for example, "admin") and remove the "DMN Designer" exception in the "Permissions" section.

Now that you have the DMN Editor enabled, let's create a new project: Go to "Projects", click on "Add asset" and then open the "DMN Preview". Here you can explore the editor and create your DMN file.

You can check more details about this step [here](http://blog.athico.com/2018/10/new-dmn-editor-preview.html), but if you can see the following screen, you're fine :-)
[![DMN Editor](/assets/dmn-editor.png "DMN Editor")](/assets/dmn-editor.png)


### 2) The Brain 🧠

As you're probably expecting, the brain of our bot will be a DMN file. The diagram I've created to represent the logic of the mind is this one:
[![DMN Diagram](/assets/dmn-diagram.gif "DMN Diagram")](/assets/dmn-diagram.gif)

We have four input nodes (`Current Month`, `Current Week`, `Balance` and `Expense Value`) and two decision nodes (`Is special month?` and `Message`). The input nodes represent the variables provided by us in the REST service request. This data is used by the decision nodes to produce an output.

Two Decision Tables help each decision node to determine their output. For example, take a look at the Decision Table (DT) for the `Is special month?` element:
[![Is special month?](/assets/is-special-month.png "Is special month?")](/assets/is-special-month.png)

Notice that the default output is false, but when the `Current Month` is `"January"`, `"May"`, `"August"` or `"December"` the produced output is `true`. I've added a short description to each rule, but this is optional ;-)

With that node and its simple DT, our bot can discover if I'm in a festive month (when I generally expend more money). But now let's take a look at the significant node, the `Message`, which is responsible for the message that our bot says.

In the DT for the `Message`, we're considering three input variables (`Current Week`, `Balance`, `Expense Value`) and the output from the `Is special month?` node:
[![Message](/assets/message.png "Message")](/assets/message.png)

Notice what rule 5 says: _"When the balance is more or equals to 500, we're in a special month, doesn't a matter what week of the month we are, and the value of the expense is less than 500"_, and considering these conditions, our bot says: "Generally, I would say 'yes', but I think you're going to have other important expenses this month".

It's pretty impressive the huge amount of complex scenarios we can represent using Decision Tables, isn't? 😃



### 3) Calling the DMN model from Ruby

Finally, go to `Projects -> Your project` and click on "Deploy" to deploy our DMN model in a KIE Server. 

Calling our model is pretty straightforward, see an example in Ruby:
<script src="https://gist.github.com/karreiro/d85c1a1dce8ef3a38821a3584ab02a4b.js"></script>

### The End 🤖

Probably you already have an idea about how to integrate the script above with the bot we coded together in the last bot. So, I won't spoiler you. I'm sure you'll have some fun implementing it ;-)

Here's my bot integrated with the KIE Server (using the DMN model above):
<a href="/assets/dmn-bot-demo.gif">
  <img src="/assets/dmn-bot-demo.gif" alt="DMN Bot Demo" title="DMN Bot Demo" style="width: 45%;">
</a>

I hope you enjoyed reading this, and remember...

Have fun :-)
