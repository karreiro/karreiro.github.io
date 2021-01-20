---
layout: post
title:  "How to write a Go REST API in 2019"
permalink: /:year/:month/:day/:title:output_ext
date:   2019-08-19 00:00:00 -0300
---

Some weeks ago, I read about different approaches for APIs styles. I've written a little bit about gRPC, but then I've realized that I've never implemented a simple CRUD with Go :O

There's a bunch of libraries and frameworks to help with that kind of application, like Revel, Beego, Web.go, Gorilla, Gin, Martini, and many others.

After spending some time understanding the pros and cons of the options, I could found the perfect combination (for me, of course). I've decided to pick **Gin** as the router since it's one of the fastest options, the **GORM** as the ORM since it has the highest score in the [libhunt](https://go.libhunt.com/categories/529-orm).

So, let's build our minimalistic service!

### 1) Setup
The `init` method is called before the `main` by convention. So we use it to initialize some variables and call  `db.AutoMigrate(&User{})` to ensure that our table of users will be available:
<script src="https://gist.github.com/karreiro/61a40ef4d23992faf26b089590fce5d3.js"></script>

### 2) CRUD operations
With our database initialized, we can write each CRUD operation in a different method, just like this:

<script src="https://gist.github.com/karreiro/cc9631a4cc56de95004e8754f7d6017a.js"></script>

Look at the different methods we're calling into `db` (`gorm.DB`) and into `c` (`gin.Context`) instances ;-)

### 3) Router
OK, we've finally finished all the operations. Now, we can expose our API with the router provided by Gin. So, let's define our REST services for the `users` resource:
<script src="https://gist.github.com/karreiro/6f0054b55babf19f66d82e8665ce4ccf.js"></script>


### Conclusion

Yey! Our service is done. Notice that I've left some examples of calls with cURL into the code. Try them!

There are many other options to implement this out there. But I found the combination of Gin and GORM a right balance between readability and performance.

Here's the full example https://github.com/karreiro/go-rest-demo :-) I hope you've enjoyed it!
