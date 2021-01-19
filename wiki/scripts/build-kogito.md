---
layout: wiki
title: Build Kogito web apps
last_updated: 2021-01-19
---

Here's how to build Kogito web apps:

```
// execute on kie-wb-common root dir
mvn clean install -DskipTests -Denforcer.skip -pl kie-wb-common-stunner/kie-wb-common-stunner-sets/kie-wb-common-stunner-bpmn/kie-wb-common-stunner-bpmn-kogito-runtime -am

// execute on kie-wb-common root dir
mvn clean install -DskipTests -Denforcer.skip -pl kie-wb-common-dmn/kie-wb-common-dmn-webapp-kogito-runtime -am

// execute on drools-wb root dir
mvn clean install -DskipTests -Denforcer.skip -pl drools-wb-screens/drools-wb-scenario-simulation-editor/drools-wb-scenario-simulation-editor-kogito-runtime -am -T 2 -B
```
