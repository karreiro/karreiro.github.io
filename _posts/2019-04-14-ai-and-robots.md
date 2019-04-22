---
layout: post
title:  "AI and robots"
date:   2019-04-14 00:00:00 -0300
---

Some years ago I frequented mastering classes at the University of Campinas (UNICAMP). UNICAMP is an excellent university, and I was living very close to the campus, so I decided to have a different kind of _happy hour_ for some months and learn about Artificial Intelligence.

The AI class (focused on robotic practices) explored very diverse topics like electronic components, AI algorithms, and techniques to apply all the theory we learned in the _real world_, which full of new challenging circumstances.

I want to share with you this demo, which is one of the projects that I could work in this class:

<iframe width="100%" height="450" src="https://www.youtube.com/embed/GQ_KEVNSUXE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

The main topics I presented in this video are:
- FuzzyLogic - the FuzzyLogic controls the intensity of the power that the wheel joint needs to move the robot to the correct direction;
- Pathfinding Algorithm - the algorithm helps the robot to calculate the correct trajectory to achieve the desired goal;
- Extended Kalman filter - this theory helps the robot to estimate its current location in the room;
- Robotic components - the kinematic model and the components of the robot are essential topics and impact in the implementation of the algorithms;
- V-REP simulator - this simulator required a Java and Lua integration to make the simulation work with the algorithms written in Java.

It was an exciting project, but I was shy about the code base, so I decided to keep it private when I worked on this. But today I've realized how cool this project is, so I'm sharing it with you. Feel free to check the code [here](https://github.com/karreiro/final-project) and [here](https://github.com/karreiro/pathfinding-lab).

I hope you're feeling inspired to learn about robotics. It can be as simple or as complex as you want, so have fun! :-)
