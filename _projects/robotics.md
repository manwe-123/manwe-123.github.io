---
layout: projects/project-robotics
theme: robotics
category: engineering
title: "Mental Health Robotics System for Isolated Environments"
subtitle: "A semi-autonomous therapeutic companion robot for isolated Mars colony inhabitants"
date: 2024-12-09
role: "Design and Prototyping Lead"
timeline: "August 2024 - December 2024"
team: "4-person team"
featured: true
display: true
tags:
  - Robotics
  - Arduino
  - Laser Cutting
  - Mechatronics
  - Prototyping
image: "assets/images/projects/robot/main.png"
excerpt: "Designed and built a semi-autonomous companion robot that tracks user proximity and dispenses medical supplies to alleviate mental health struggles in isolated environments."

problem: "Mars colony inhabitants face severe mental health challenges, including isolation, loneliness, and sensory deprivation due to confined living conditions. They need an automated, low-cost companion to provide mental enrichment, medical access, and a sense of home."

solution: "Developed a semi-autonomous mobile robot equipped with an ultrasonic sensor for user tracking, a photoresistor-triggered medical drawer, and an LCD screen for positive messaging, fabricated from lightweight, recyclable materials."

prototype_image:
  src: "/assets/images/projects/robot/prototype.png"
  alt: "Physical wooden robot prototype with an illuminated LCD, front ultrasonic sensor, and wheels."
  caption: "The physical prototype brings the wooden chassis, LCD interface, ultrasonic sensor, and drive wheels together."
  frame: prototype
  width: 828
  height: 1792

concept: "Early brainstorming explored how a compact wheeled companion could combine an expressive screen with access to medical supplies. The sketch records the initial enclosure and interaction ideas before the design was developed in CAD."

sketch_image:
  src: "/assets/images/projects/robot/figure 8.jpg"
  alt: "Hand-drawn wheeled companion robot concept with an LCD screen and a proposed medical tray interaction."
  caption: "Brainstorming sketch exploring the robot's overall form, screen placement, and medical supply interaction."
  frame: sketch
  width: 720
  height: 540

model_image:
  src: "/assets/images/projects/robot/figure 1.png"
  alt: "Annotated purple robot CAD concept identifying the screen, buttons, diffuser, speaker, arms, wheels, medical tray, and distance sensor."
  caption: "Annotated CAD concept showing the proposed component layout. Arms, audio, and aromatherapy were concept features rather than completed prototype functions."
  frame: model
  width: 800
  height: 600

drawing_image:
  src: "/assets/images/projects/robot/figure 6.jpg"
  alt: "Dimensioned orthographic robot enclosure drawing with top, front, and side views; dimensions are in inches."
  caption: "Orthographic drawing documenting the enclosure dimensions and component openings. Dimensions are in inches."
  frame: drawing
  width: 800
  height: 600

requirements: |
  - Improve overall mental health metrics by at least 5%
  - Fully automated operation for user tracking and medical dispensing
  - Withstand low atmospheric pressure and normal base living conditions
  - Total prototype cost under $75
  - Low weight and constructed from recyclable materials

constraints: |
  - Must simulate Mars resource constraints using accessible, recyclable materials
  - Limited to undergraduate lab equipment for fabrication (laser cutter, basic electronics)
  - 1-semester development timeline from concept to final acceptance testing

metrics:
  - name: "Prototype Cost"
    target: "< $75.00"
    achieved: "$44.20"
  - name: "Proximity Tracking"
    target: "< 15 cm"
    achieved: "15 cm"
  - name: "Drawer Actuation"
    target: "< 25 light value"
    achieved: "< 25 light value"

sensing: |
  - **Ultrasonic Sensor**: HC-SR04 equivalent for 15cm proximity tracking and semi-autonomous navigation
  - **Photoresistor**: Light dependent resistor (LDR) for shadow detection to trigger the medical drawer

actuation: |
  - **Drive Motors**: 2x Hobby gear motors with wheels for forward user tracking
  - **Servo Motor**: Micro servo for automated medical drawer lid actuation
  - **Power System**: 2x 9V batteries for independent logic and motor power distribution

mechanical: |
  - **Chassis**: 6x6x6 inch cube fabricated from 1/8" balsa wood and plywood
  - **Fabrication Method**: Laser cut components for precise mechanical fit and structural rigidity
  - **Medical Drawer**: Top-mounted compartment with servo-actuated lid for automated dispensing

components:
  - name: "Arduino Uno"
    spec: "Main microcontroller for sensor processing and actuation"
  - name: "16-Pin Motor Driver Controller"
    spec: "H-bridge for hobby gear motor control"
  - name: "LCD Screen"
    spec: "User interface for displaying positive messages"

fabrication: |
  **Laser Cutting & Assembly:**
  - Cut 1/8" balsa and plywood components using the laser cutter
  - Sanded internal corners to prevent wheel friction and ensure smooth mechanical movement
  
  **Electronics Integration:**
  - Mounted Arduino, breadboard, and motor driver inside the wooden chassis
  - Routed wiring for ultrasonic sensor, photoresistor, and servo motor

testing: |
  Formal acceptance testing was conducted in three phases (Nov 21, Nov 24, Nov 26) to verify sensor accuracy, motor response, and automated dispensing mechanisms under operational conditions.

test_results:
  - name: "Proximity Tracking"
    procedure: "Move robot away from user and measure stopping distance"
    result: "Hobby motors engaged and stopped exactly at 15 cm"
    status: "Pass"
  - name: "Drawer Actuation"
    procedure: "Hover hand over photoresistor to cast a shadow"
    result: "Servo motor triggered and opened lid when light value dropped below 25"
    status: "Pass"
  - name: "Continuous Operation"
    procedure: "Run full system during final presentation"
    result: "System failed due to overheating wire"
    status: "Fail"

worked: |
  - **Sensor Integration**: Ultrasonic and photoresistor logic worked seamlessly for semi-autonomous tracking and automated dispensing
  - **Mechanical Fit**: Laser-cut wooden components provided precise structural rigidity for the electronic modules

failed: |
  - **Power Management**: Exposed wiring on the battery connection overheated and melted during the final presentation due to poor soldering
  - **Mobility**: Robot could only move forward and lacked differential steering for omnidirectional movement

next_steps: |
  - Implement proper wire gauge selection and inline fuses for high-current battery connections
  - Add differential drive steering to allow the robot to turn and follow users dynamically
  - Integrate planned aromatherapy diffuser and audio speakers for multi-sensory therapy

specs:
  software:
    - name: "Arduino IDE"
      version: "2.0"
    - name: "TinkerCAD"
      version: "2024"
  hardware:
    - component: "Microcontroller"
      model: "Arduino Uno"
    - component: "Motors"
      model: "Hobby Gear Motors"
    - component: "Sensor"
      model: "Ultrasonic Sensor HC-SR04"
  materials:
    - type: "Chassis"
      grade: "1/8 inch Balsa Wood and Plywood"
  dimensions:
    - axis: "Length"
      value: "6 inches"
    - axis: "Width"
      value: "6 inches"
    - axis: "Height"
      value: "6 inches"
  weight: "Optimized for low weight (< 1 kg)"
  cost: "$44.20 USD"

---
This project demonstrates the integration of mechanical design, electronics, and embedded programming to solve a real-world human factors challenge in isolated environments.
