---
layout: wiki
title: Execution
last_updated: 2021-02-02
---

Once you know most of the DMN features, you probably want to execute your model to see it in action. Let's do it in _3 simple steps_!

### 1) Setup the Kogito REST API

First of all, download all Kogito examples from [github.com/kiegroup/kogito-examples/archive/0.8.0.zip](https://github.com/kiegroup/kogito-examples/archive/0.8.0.zip) and unzip it (you can try to download the latest release as well, but currently I'm using the 0.8.0 version):

```
# Download it:
wget https://github.com/kiegroup/kogito-examples/archive/0.8.0.zip

# Unzip it:
unzip 0.8.0.zip
```

Now, let's open the DMN Quarkus example and run it:

```
# Go to the DMN Quarkus example directory:
cd kogito-examples-0.8.0/dmn-quarkus-example

# Run the example:
mvn clean compile quarkus:dev -DskipTests=true
```

OK! Open the http://localhost:8080/swagger-ui to check the Swagger UI:

![Execution Swagger UI](../assets/execution-swagger-ui.png)

If you're seeing something like the screen above... Great! 🎉 You're running the Kogito REST API!

You may learn more about everything behind this server here. However, if you're wondering about this /Traffic%20Violation URL API, keep reading! :-)

### 2) The DMN Traffic Violation model

The /Traffic%20Violation URL appears in the DMN example swagger because this projects already includes a DMN asset, the Traffic Violation.dmn file:

```
# Check the DMN model inside of the `dmn-quarkus-example` directory
ls src/main/resources
```

You can click in the canvas area to check the properties of the model in the properties panel (the panel on the right side of the screen). Once you open that panel, you can see the name of the model and update it, if you desire to.

You can also explore, change, or enhance this sample model, by accessing the DMN online editor on [kiegroup.github.io/kogito-online](https://kiegroup.github.io/kogito-online):

![Execution explore model](../assets/execution-explore-model.gif)

Explore the decision logic on the "Should the driver be suspended?" and "Fine" nodes. Thus, you may find out how this model makes decisions.

### 3) Execute your model

Finally, it's time to execute the Traffic Violation model! Open a new terminal window and execute the POST request below:

```
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/Traffic%20Violation --data '
{
  "Driver" : {
    "Name" : "John Doe",
    "Points" : 14,
    "City" : "Sao Paulo"
  },
  "Violation" : {
    "Type" : "speed",
    "Speed Limit" : 100,
    "Actual Speed" : 120
  }
}'
```

Notice that the decision "Should the driver be suspended?" returns "No" for the input values above.

Now, let's execute this request:

```
curl -X POST -H 'Content-Type: application/json' http://localhost:8080/Traffic%20Violation --data '
{
  "Driver" : {
    "Name" : "John Doe",
    "Points" : 14,
    "City" : "Sao Paulo"
  },
  "Violation" : {
    "Type" : "speed",
    "Speed Limit" : 100,
    "Actual Speed" : 140
  }
}'
```

The new value for Violation.Actual Speed changes the decision node Should the driver be suspended? to return "Yes".
