---
layout: wiki
title: Visual notation
last_updated: 2021-02-02
---

- _Text annotation_: Text annotations consist of a square bracket followed by an explanatory text or a comment.
- _Business Knowledge Model (BKM)_: BKMs encapsulate business knowledge as reusable functions. The decision logic can hold a FEEL function, a Java method invocation, or a PMML invocation.
- _Input data_: Input data elements denote information used as input for one or more decisions. When enclosed within a Business Knowledge Model (BKM), they indicate parameters for the BKM node.
- _Decision Service_: Decision services may enclose a set of reusable decisions (not shown in the element to the right). They can be invoked internally by another decision, or externally by a BPMN process or another DMN model.
- _Knowledge source_: A knowledge source denotes an authority for a BKM or a decision node.
- _Decision_: Decisions determine an output value depending on: I) their input data (input nodes or the output value from other decisions); II) their decision logic - boxed expressions that may reference functions from BKM nodes Congratulations! You've learned about all DRD components!
