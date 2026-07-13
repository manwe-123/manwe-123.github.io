---
title: "Autonomous Mobile Robot Platform"
subtitle: "A self-navigating robot for indoor warehouse inventory management"
date: 2024-05-15
role: "Lead Mechanical Designer"
timeline: "Jan 2024 - May 2024"
team: "3-person team"
tags:
  - Robotics
  - CAD
  - Arduino
  - 3D Printing
image: "assets/images/14F375D7-0896-49FB-9C8B-10815BAE71DA.JPG"
excerpt: "Designed and built an autonomous mobile robot capable of navigating warehouse environments and scanning RFID tags for inventory tracking."

problem: "Warehouses require efficient inventory tracking systems. Manual counting is time-consuming and error-prone. We needed a low-cost autonomous solution that could navigate between shelving units and scan RFID tags."

solution: "Developed a differential-drive mobile robot with LIDAR-based SLAM navigation, equipped with an RFID reader and camera system. The robot autonomously patrols predefined routes and uploads inventory data to a central database."

requirements: |
  - Navigate corridors 1.5m wide with ±10cm accuracy
  - Operate for 4+ hours on single battery charge
  - Support payload of 5kg for sensors and electronics
  - Total cost under $500 for prototype

constraints: |
  - Limited to undergraduate lab equipment for fabrication
  - Battery capacity restricted by weight budget
  - 3-month development timeline

metrics:
  - name: "Navigation Accuracy"
    target: "±10 cm"
    achieved: "±5 cm"
  - name: "Battery Life"
    target: "4 hours"
    achieved: "4.5 hours"
  - name: "Total Cost"
    target: "$500"
    achieved: "$475"

sensing: |
  - **LIDAR**: RPLIDAR A1M8 for 360° range finding and SLAM
  - **IMU**: MPU6050 for orientation and acceleration
  - **Wheel Encoders**: Quadrature encoders for odometry

actuation: |
  - **Drive Motors**: 2× NEMA 17 stepper motors with A4988 drivers
  - **Wheel Configuration**: Differential drive with caster support
  - **Power System**: 3S LiPo battery (11.1V, 5000mAh)

mechanical: |
  - **Chassis**: 6061-T6 aluminum frame with laser-cut acrylic panels
  - **Wheel Mounts**: 3D printed PETG housings with ball bearings
  - **Sensor Brackets**: Parametric Fusion 360 designs

components:
  - name: "Arduino Mega 2560"
    spec: "Main controller"
  - name: "Raspberry Pi 4"
    spec: "SLAM processing"
  - name: "RPLIDAR A1M8"
    spec: "360° LIDAR sensor"

fabrication: |
  **Frame Construction:**
  - Aluminum extrusions cut to length on bandsaw
  - Drill press used for mounting holes
  
  **3D Printed Components:**
  - Wheel hubs and motor mounts printed in PETG
  - Total print time: ~40 hours

gallery:
  - src: "/assets/images/projects/robot-cad.jpg"
    caption: "CAD assembly in SolidWorks"
  - src: "/assets/images/projects/robot-frame.jpg"
    caption: "Aluminum frame during assembly"
  - src: "/assets/images/projects/robot-final.jpg"
    caption: "Completed robot platform"

testing: |
  Testing was conducted in three phases: component testing, subsystem testing, and integration testing.

test_results:
  - name: "Straight Line Accuracy"
    procedure: "Drive 10m straight, measure deviation"
    result: "±3 cm over 10m"
    status: "Pass"
  - name: "Battery Endurance"
    procedure: "Continuous operation until cutoff"
    result: "4.5 hours"
    status: "Pass"

worked: |
  - **Modular Design**: Made troubleshooting much easier
  - **Parametric CAD**: Quick adjustments saved significant time

failed: |
  - **Initial Wheel Choice**: Slipped on smooth concrete; redesigned with rubber coating
  - **Undersized Battery Connector**: XT30 overheated; upgraded to XT60

next_steps: |
  - Implement dynamic path planning
  - Add wireless charging capability

specs:
  software:
    - name: "SolidWorks"
      version: "2023"
    - name: "Arduino IDE"
      version: "2.0"
  hardware:
    - component: "Microcontroller"
      model: "Arduino Mega 2560"
    - component: "Motors"
      model: "NEMA 17 Stepper"
  materials:
    - type: "Frame"
      grade: "6061-T6 Aluminum"
    - type: "Printed Parts"
      grade: "PETG"
  dimensions:
    - axis: "Length"
      value: "380 mm"
    - axis: "Width"
      value: "280 mm"
    - axis: "Height"
      value: "250 mm"
  weight: "8.2 kg"
  cost: "$475 USD"
---

This project demonstrates the integration of mechanical design, electronics, and embedded programming to solve a real-world logistics challenge.
