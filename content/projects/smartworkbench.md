+++
authors = ["Hugo Veríssimo", "..."]
title = "Smart Workbench"
date = "2025-06-16"
repository = "https://github.com/SmartWorkMCD"
description = "Automation and optimization project for production lines using computer vision and machine learning"
tags = [
    "python",
    "computer-vision",
    "algorithms",
    "docker"
]
+++

As part of the Master's Degree in Data Science at the University of Aveiro, in the Seminar course, our class created a fictitious startup called Smart Workbench, aiming to develop a system based on unstructured data (cameras) and structured data (timings and logs) to automate and optimize a production line.

The goal was to maximize line efficiency by reducing wait times and increasing productivity through data analysis and the use of machine learning and deep learning algorithms, helping predict failures, optimize processes, and reduce operators' cognitive load.

Project participation:

- Hand Tracking Module: I developed a hand detection model using the MediaPipe library, which identifies and tracks operators' hands in real-time. This module is essential to understand operator interaction with the production line and detect specific actions for optimization, serving as input to the system.

- Object Detection Module: I was responsible for data collection (images and label creation) and model validation for object detection using YOLO and RF-DETR libraries, advanced techniques for this task. This module identifies and classifies objects on the line, enabling detailed process analysis, bottleneck identification, and anomaly detection.

- Task Division Module: I developed an algorithm to efficiently distribute tasks among operators based on data collected from previous modules, using binary linear programming. This module optimizes the line by ensuring a balanced and productive task distribution, reducing wait times.

<div style="display: flex; align-items: center; gap: 20px; list-style-type: disc; margin-block-start: 1em; margin-block-end: 1em; padding-inline-start: 40px;">

  <div style="flex: 1;">
    <li>Implementation and Integration: I participated in implementing the modules on Raspberry Pi and Coral Edge TPUs, including assembling projectors, cameras, and devices. I integrated all modules to ensure efficient real-time operation. Implementation was done via Docker, facilitating integration, portability, and execution in various environments (servers or embedded devices). The system uses MQTT for decentralized communication between three workstations, enabling minimal data exchange while ensuring efficiency and speed.</li>
  </div>

  <img src="https://hugoverissimo21.github.io/images/IMG_6906.jpg" width="30%">

</div>

This project represents a comprehensive solution for automating and optimizing production lines using modern computer vision and machine learning technologies.
