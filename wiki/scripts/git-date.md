---
layout: wiki
title: Git date
last_updated: 2021-01-19
---

### Usage:

```
$ git-date today - 1.hour
```

```
$ git-date today - 2.weeks + 1.hour
```

### Source:

```ruby
require 'active_support/all'

today = Time.now
commands = ARGV.join.size > 0 ? ARGV.join : 'today'
new_date = eval(commands)

git_date = "#{new_date.strftime("%a %b %d")} #{new_date.strftime("%T")} #{new_date.strftime("%Y")}"
git_command = "git commit --amend --no-edit --date=\"#{git_date}\""

system(git_command)
```
