---
layout: post
title:  "How to build a game with DMN"
date:   2019-07-21 00:00:00 -0300
---

Some days ago, I showed a compelling use case of a DMN model as the brain of my financial bot. He still, eventually, gives me some advice to save money.
 
The gRPC framework is another interesting topic that we recently visited.
 
This week, we're going to merge these two things into this old-school text-based game -- the **DMN Dungeon Demo**.
 
Let's say we want to create a DMN model to describe the first room of our game. The challenge is: _Our hero woke up in a room completely locked. She can't remember how she reached there, and she needs to get out._

The solution to this circumstance is: _After five turns, an enemy will appear with the key of the door in a necklace. The enemy has an HP of 10.
With a sword, each hit of the hero takes 5 HP points from the enemy, so the player can defeat the opponent before dying.
However, without a sword, each hit of the hero takes only 1 HP. In this case, the hero dies before the enemy.
With the enemy defeat, the hero can finally open the door with the key._

Here's the DMN file that describes everything that happens in the room, including combat mechanisms, interactions with items, and the moment that enemies appear:
![DMN file that describes everything that happens](/assets/dmn-file-ddd.png "DMN file that describes everything that happens")

The repository for the game is [here](https://github.com/karreiro/ddd) (notice that each DMN file represent a room). Check a quick demo:
[![Demo](/assets/ddd-demo.gif "Demo")](/assets/ddd-demo.gif)

This repository uses a naive implementation to recognize user commands. A future enhancement would involve natural language processing :-)

I hope you've enjoyed it!
