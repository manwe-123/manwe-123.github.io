---
layout: projects/project-robotics
theme: robotics
category: engineering
card_title: "Baymax Companion Robot"
title: "Mental Health Robotics System for Isolated Environments"
subtitle: "Baymax: an Arduino companion robot prototype for a Mars-colony design scenario"
date: 2024-12-09
role: "CAD, Embedded Programming & Prototyping"
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
excerpt: "Designed and built a companion robot prototype combining ultrasonic proximity control, an LCD interface, and a photoresistor-triggered storage lid in a laser-cut wooden enclosure."

problem: "The ASU 101 'Mars in the Making' project asked our team to address isolation, homesickness, and limited interaction in a hypothetical Mars colony. We focused on a low-cost companion concept that could approach a user, display a greeting, and make a small supply compartment accessible. The intended users were colony inhabitants, with colony leaders and NASA researchers identified as stakeholders in the scenario."

solution: "Our four-person team built Baymax, a wooden, wheeled Arduino prototype with two input sensors and three outputs: drive motors, a servo-operated storage lid, and an LCD. It moves forward while the user is beyond a 15 cm threshold, stops nearby, and displays 'Good Morning' and 'Place Hand Above' prompts. Covering the top-mounted photoresistor opens the supply compartment. The prototype passed the documented functional acceptance checks on November 26; a later presentation was stopped after battery wiring overheated."

contributions:
  - "Created the CAD model, dimensioned orthographic drawing, and design-description material for the final report."
  - "Built the TinkerCAD circuit and code, assembled the physical circuit, and programmed the Arduino."
  - "Helped construct the exterior, added artwork to the back of the prototype, and troubleshot integration issues with the team."
contributions_note: "Appendix C attributes these tasks to me. Teammates contributed laser cutting, enclosure measurements, tray construction, woodwork, soldering, code edits, and troubleshooting."

prototype_image:
  src: "/assets/images/projects/robot/prototype.png"
  alt: "Physical wooden robot prototype with an illuminated LCD, front ultrasonic sensor, and wheels."
  caption: "The physical prototype brings the wooden chassis, LCD interface, ultrasonic sensor, and drive wheels together."
  frame: prototype
  width: 828
  height: 1792

concept: "We compared three concepts: a Daylight Simulator, the Baymax companion robot, and a Mood Button wearable. The decision matrix prioritized a sense of home, maintenance, and interaction, and selected Baymax. Early sketches and CAD explored articulated arms, mood buttons, speakers, and a diffuser. We reduced the build to proximity-based movement, an LCD greeting, and a servo-operated lid to deliver a functioning classroom prototype."

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
  caption: "Dimensioned drawing of the original Baymax CAD concept. Its proposed screen, arms, and accessory openings differ from the simplified 6-inch wooden prototype; dimensions are in inches."
  frame: drawing
  width: 800
  height: 600

requirements: |
  - **Project goal:** improve mental health by at least 5%; the team did not quantify this outcome or establish therapeutic effectiveness
  - **Automation:** approach the user, stop nearby, display a greeting, and open a supply lid in response to a hand shadow
  - **Budget:** keep the listed prototype materials below $75
  - **Scenario requirements:** tolerate base living conditions and low atmospheric pressure, and avoid harm to users; environmental qualification was not performed
  - **Design criteria:** low maintenance, durability, low weight, interaction, and a sense of home

constraints: |
  - Must simulate Mars resource constraints using accessible, recyclable materials
  - Limited to undergraduate lab equipment for fabrication (laser cutter, basic electronics)
  - 1-semester development timeline from concept to final acceptance testing

metrics:
  - name: "Listed Materials Cost"
    target: "< $75.00"
    achieved: "$44.20 in the report's materials table"
  - name: "Proximity Control"
    target: "Move beyond 15 cm; stop nearby"
    achieved: "Passed the November 26 functional check; no precision study"
  - name: "Drawer Actuation"
    target: "Open when the photoresistor is covered"
    achieved: "Passed after wiring repair; code uses a raw light threshold of 25"
  - name: "Mental Health Goal"
    target: "5% improvement"
    achieved: "Not quantitatively evaluated"

sensing: |
  - **Ultrasonic sensor:** trigger on Arduino pin 2 and echo on pin 3; pulse duration is converted to distance using `distance = duration × 0.034 / 2`
  - **Photoresistor:** read on A0 to detect a hand shadow over the top compartment; 25 is a raw analog-reading threshold, not a calibrated light level

actuation: |
  - **Drive motors:** two hobby gear motors controlled through a 16-pin motor driver; the implemented motion is forward-only
  - **Servo:** attached to pin 8, with 90° used for the closed position and 0° for the open position in the report's code
  - **LCD:** a 16 × 2 character display with a greeting and a prompt to place a hand above the lid
  - **Power:** the materials table lists two 9 V batteries; power delivery and battery wiring became key reliability issues during integration

control_logic:
  - "Read the photoresistor and send an ultrasonic trigger pulse, then convert the echo duration to distance."
  - "If distance is greater than 15 cm, drive both wheels forward and clear the LCD. Otherwise, stop the drive motors and enter the interaction branch."
  - "Within the stopped interaction branch, keep the lid closed when the light reading is above 25. At 25 or below, open the lid for 5 seconds and then close it."
  - "Display 'Good Morning' for 5 seconds, then 'Place Hand Above' for 3 seconds. These blocking delays pause new sensor readings and limit response speed."
control_note: "The report's early descriptions use several different approach distances. This summary follows the 15 cm threshold in Appendix A's Arduino code and Appendix B's acceptance procedure."

circuit_image:
  src: "/assets/images/projects/robot/report-circuit.png"
  alt: "TinkerCAD wiring diagram connecting an Arduino Uno, ultrasonic sensor, photoresistor, servo, LCD, motor driver, and two drive motors."
  caption: "Appendix A's TinkerCAD circuit documents the sensing, display, servo, and motor-control wiring used to develop the prototype."
  frame: circuit
  width: 1336
  height: 674

mechanical: |
  - **Chassis:** a nominal 6 × 6 × 6 inch body made from 1/8-inch balsa wood and plywood
  - **Front face:** a 3.15 × 1.42 inch LCD above the ultrasonic sensor, leaving the user-facing messages and distance measurement unobstructed
  - **Supply compartment:** a top-mounted, three-compartment tray with a hinged lid moved by a small wooden linkage on the servo; users retrieve items themselves
  - **Wheel packaging:** powered rear wheels and passive front wheels; the enclosure corners were sanded to remove interference with the wheel circumference

components:
  - name: "Arduino Uno"
    spec: "Main microcontroller for sensor processing and actuation"
  - name: "16-Pin Motor Driver Controller"
    spec: "H-bridge for the two hobby gear motors"
  - name: "LCD Screen"
    spec: "16 × 2 character interface for greeting and hand-placement prompts"

fabrication: |
  **Laser Cutting & Assembly:**
  - Laser-cut 1/8-inch balsa and plywood panels and assembled the enclosure around the electronics
  - Added a hinged lid and a servo-driven wooden linkage for the supply tray
  - Sanded the enclosure corners after testing revealed wheel friction
  
  **Electronics Integration:**
  - Integrated the Arduino, breadboard, motor driver, LCD, sensors, and servo inside the chassis
  - Adjusted battery power while debugging delayed motor response
  - Restored the servo connection after rewiring had interrupted the photoresistor-to-lid interaction

build_gallery:
  - src: "/assets/images/projects/robot/report-front.png"
    alt: "Front view of the wooden Baymax prototype with a blue LCD, ultrasonic sensor, and red drive wheels."
    caption: "Final prototype front view, showing the LCD and ultrasonic sensor placement (Figure 6, p. 6)."
    frame: build
    width: 262
    height: 319
  - src: "/assets/images/projects/robot/report-medical-tray.png"
    alt: "Top view of the robot with its hinged supply lid lifted, revealing the divided wooden tray and servo mechanism."
    caption: "The hinged top lid provides access to the supply compartments; the servo replaces the original articulated-arm concept (Figure 7, p. 6)."
    frame: build
    width: 214
    height: 322
  - src: "/assets/images/projects/robot/report-interior.png"
    alt: "Open wooden enclosure revealing the Arduino, breadboard, wiring, motors, and rear of the LCD."
    caption: "Interior integration photo from Appendix A. The crowded wiring illustrates the packaging and cable-management work still needed."
    frame: build
    width: 556
    height: 639

testing: |
  Informal checks on November 21 and 24 exposed motor-power, wheel-friction, and servo-wiring issues. The report states that the functional acceptance checks passed on November 26 after repairs. These checks verified movement, stopping, LCD output, and lid operation; they did not establish sensor precision, long-term reliability, environmental suitability, or a measurable mental-health benefit.

test_history:
  - date: "November 21, 2024"
    result: "LCD and lid actuation worked, but the drive motors responded late or not at all. The team investigated battery power and mechanical interference."
  - date: "November 24, 2024"
    result: "After power adjustments and sanding the wheel-clearance area, movement and LCD response worked. The lid no longer responded because a servo connection had been disturbed."
  - date: "November 26, 2024"
    result: "The team corrected the servo wiring and reported passing all functional acceptance checks by the end of class."
  - date: "Final presentation"
    result: "The robot approached the user, but smoke from the battery wiring forced the demonstration to stop. A previously recorded working demonstration was shown instead."

clearance_image:
  src: "/assets/images/projects/robot/report-wheel-clearance.png"
  alt: "Robot enclosure beside exposed electronics, with a red curve marking the wooden corner that rubbed against a wheel."
  caption: "Figure 11 marks the wheel-interference area in red. Sanding this corner reduced friction during the November troubleshooting sessions (p. 12)."
  frame: clearance
  width: 342
  height: 238

test_results:
  - name: "Proximity Tracking"
    procedure: "Move robot away from user and measure stopping distance"
    result: "Forward motion and stopping around the 15 cm threshold passed the documented functional check"
    status: "Pass"
  - name: "Drawer Actuation"
    procedure: "Hover hand over photoresistor to cast a shadow"
    result: "Covering the photoresistor opened the lid after the servo wiring was restored"
    status: "Pass"
  - name: "LCD Interaction"
    procedure: "Place a hand in front of the robot near the stopping threshold"
    result: "LCD greeting passed the acceptance check; the code also includes a hand-placement prompt"
    status: "Pass"
  - name: "Continuous Operation"
    procedure: "Run full system during final presentation"
    result: "Demonstration stopped after battery-to-breadboard wire insulation began melting; continuous operation was not established"
    status: "Fail"

worked: |
  - **Functional integration:** after troubleshooting, the sensors drove the intended wheel, LCD, and lid responses in the acceptance checks
  - **Mechanical iteration:** removing wheel interference improved movement without rebuilding the enclosure
  - **Scope reduction:** replacing articulated arms with a hinged supply lid made the interaction achievable within the course prototype

failed: |
  - **Power wiring:** insulation on the battery-to-breadboard connection melted during the presentation. The team attributed this to a poorly soldered connection and exposed wiring; the report does not document a measured electrical root-cause analysis
  - **Mobility:** the robot could only move forward, so it could not navigate toward a user outside the sensor's forward direction
  - **Response time:** blocking delays for the lid and LCD messages prevent continuous sensor updates
  - **Validation coverage:** the 5% mental-health goal, low-pressure operation, and long-duration reliability were not demonstrated

next_steps: |
  - Rebuild and insulate the power connections, add strain relief and suitable overcurrent protection, and verify motor current under load before repeating endurance tests
  - Add differential drive steering to allow the robot to turn and follow users dynamically
  - Replace blocking delays with timed states so sensing continues during LCD messages and lid movement
  - Repeat acceptance checks after every wiring change and add battery-runtime and repeated-cycle testing
  - Revisit the proposed speakers and diffuser only after the core power, motion, and enclosure systems are reliable

specs:
  software:
    - name: "Arduino IDE"
      version: "Version not specified in the report"
    - name: "TinkerCAD"
      version: "Circuit simulation and code prototyping"
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
  weight: "Not measured in the report"
  cost: "$44.20 listed materials; the table does not include an Arduino line item"

report_url: "/assets/files/robotics-final-design-report.pdf"

---
This academic prototype combined mechanical design, electronics, and embedded programming to explore a companion-robot interaction in a hypothetical Mars-colony scenario.
