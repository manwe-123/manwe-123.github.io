---
layout: project-vr
theme: vr
category: engineering
title: "VR Rapid Prototyping Application"
subtitle: "An immersive virtual reality curriculum and prototyping environment for introductory engineering students"
date: 2025-12-01
role: "Prototyping Lead & Documentation Lead"
timeline: "January 2025 - December 2025"
team: "12-person team"
featured: false
tags:
  - VR/AR
  - Unity
  - C#
  - Curriculum Design
  - Systems Engineering
image: "assets/images/vr-hero.jpg"
excerpt: "Engineered a virtual reality rapid prototyping environment for Meta Quest headsets, integrating over 100 interactive 3D assets and developing a 2-week curriculum to teach the engineering design process."

problem: "Following a donation of 30+ Meta Quest headsets by Honeywell, ASU's Fulton Schools of Engineering lacked the curriculum and software to utilize them. The objective was to develop an interactive VR application to teach the 6-step engineering design process to FSE 100 students, bridging the gap between theoretical concepts and immersive, hands-on prototyping."

solution: "Developed an interactive VR-based engineering design activity where students use headsets to visualize, construct, and prototype virtual objects in a simulated environment. The experience integrates a synchronized online worksheet, allowing students to document design decisions, upload screenshots, and reflect on their prototypes while completing the activity."

requirements: |
  - Function like a video game with 3-4 levels and colorful assets to maximize engagement
  - Utilize intuitive user input (pick up, move, manipulate, and snap objects)
  - Accommodate full class participation (sharing headsets if inventory is limited)
  - Beginner-friendly interface that can be completed within a 50-75 minute class period
  - Achieve a post-event graphics/engagement survey rating of 6-10 out of 10
  - Ensure 75% of students can articulate the applications of VR prototyping in engineering

constraints: |
  - Zero budget for new hardware; must utilize the 30+ donated Meta Quest headsets
  - Logistical constraints: transporting, charging, and sanitizing 30+ headsets between buildings
  - Inconsistent classroom floor space for establishing VR "safe zones"
  - Varying Wi-Fi strength across campus affecting software syncing and worksheet loading
  - Must mitigate VR motion sickness through optimized frame rates and comfort settings

metrics:
  - name: "Headset Inventory"
    target: "30+ units"
    achieved: "30+ Meta Quest 3S units"
  - name: "Activity Completion Time"
    target: "50 - 75 mins"
    achieved: "Validated within 65-min class period"
  - name: "Student Engagement Score"
    target: "6 - 10 / 10"
    achieved: "Prototype validated; full deployment pending"
  - name: "Knowledge Retention"
    target: "75% of students"
    achieved: "Curriculum aligned to target metric"

hardware_platform: |
  - **VR Headsets**: 30+ Meta Quest 3S (Donated by Honeywell)
  - **Setup Computers**: Compatible VR-ready PCs for casting and management
  - **Logistics**: Custom charging carts and sanitization stations for rapid classroom turnaround

software_stack: |
  - **Game Engine**: Unity (Primary development environment)
  - **Scripting**: C# for interactions, physics, and analytics logging
  - **3D Modeling**: Blender for asset creation and modification
  - **Curriculum Integration**: Canvas / Google Forms for synchronized worksheets and data collection

core_features: |
  - **Interactive 3D Environment**: Over 100 interactive assets with simulated physics and collision mechanics
  - **User Input Tracking**: Hand controller integration for grabbing, rotating, and snapping components
  - **Real-Time Analytics**: In-game C# scripts logging completion time, errors, and hints used
  - **Multi-Station Collaboration**: Allowing students to co-design virtual objects from different headset stations
  - **Synchronized Worksheets**: Prompts appearing in-headset and on external screens to guide the design process

decision_matrix: |
  Evaluated three core concepts against curriculum relevance, ease of implementation, student engagement, and educational value:
  - **Interactive Block Coding**: Scored 440. High educational value, but lower engagement and relevance.
  - **FSE Assembly Line**: Scored 650. Highly engaging, but complex setup and less relevant to modern workflows.
  - **3D Object Construction (Selected)**: Scored 780. Highest overall score. Simple to deliver, highly immersive, and easily scalable across multiple semesters.

development_process: |
  **Part 1: Virtual Environment Creation**
  - Designed the foundational 3D workspace in Unity.
  - Created modular components and tools for students to use during the prototyping challenge.
  
  **Part 2: Physics and Mechanics Implementation**
  - Implemented physics simulations for realistic object manipulation.
  - Programmed iterative design mechanics, including object snapping and a save/load system for prototypes.
  
  **Part 3: Curriculum and Teacher Resources**
  - Developed a 2-week curriculum featuring 30-minute lectures and practical VR activities.
  - Recorded video guides and drafted troubleshooting manuals for instructors and TAs.
  - Created pre- and post-activity quizzes to measure knowledge retention.

gallery:
  - src: "/assets/images/projects/vr-unity-editor.jpg"
    caption: "Unity editor scene hierarchy showcasing the 100+ integrated 3D assets"
  - src: "/assets/images/projects/vr-in-headset.jpg"
    caption: "First-person view of the interactive 3D prototyping workspace"
  - src: "/assets/images/projects/vr-headsets.jpg"
    caption: "The 30+ donated Meta Quest headsets prepared for classroom deployment"
  - src: "/assets/images/projects/vr-worksheet.jpg"
    caption: "Synchronized online worksheet used to track the engineering design process"

testing: |
  Testing and validation were structured around three core research questions to ensure the platform balanced learning outcomes with user experience:
  
  **RQ1: Engagement vs. Learning**
  - *Test*: Compared VR simulation engagement against traditional lecture videos.
  - *Measurement*: User behavior observation and 1-10 engagement surveys.
  
  **RQ2: Immersion vs. Performance**
  - *Test*: Evaluated Low, Medium, and High graphical detail environments.
  - *Measurement*: Knowledge retention quizzes (%), completion time, error count, and frame rate monitoring to prevent VR sickness.
  
  **RQ3: Measuring Outcomes**
  - *Test*: Compared quiz-only assessment vs. in-game analytics vs. mixed-method.
  - *Measurement*: Correlation between in-game performance (time, errors, hints) and final quiz scores.

test_results:
  - name: "Software Stability"
    procedure: "Run VR prototype continuously for 90 mins monitoring frame rates"
    result: "Stable frame rate maintained; no crashes or overheating"
    status: "Pass"
  - name: "Intuitive UI"
    procedure: "Give students a goal with no control instructions; track time to first interaction"
    result: "Average time to first correct interaction under 2 minutes"
    status: "Pass"
  - name: "Curriculum Timing"
    procedure: "Time full class session from headset setup to worksheet completion"
    result: "Completed within 65 minutes, allowing 10 mins for troubleshooting"
    status: "Pass"

worked: |
  - **3D Object Construction Concept**: The decision matrix proved highly accurate; this concept was the easiest to deliver and most engaging for students.
  - **Modular Adaptability**: The Unity environment was designed so future EPICS teams can easily swap out assets (e.g., from bookshelves to bridge components) for different engineering disciplines.
  - **Analytics Integration**: Successfully implemented C# scripts that track user actions without disrupting the VR experience or frame rate.

failed: |
  - **Headset Logistics**: *Challenge*: Underestimated the time required to transport, pair, and sanitize 30+ headsets. *Resolution*: Developed a strict pre-class TA maintenance and pairing checklist, significantly reducing setup time.
  - **Wi-Fi Dependencies**: *Challenge*: Classroom dead zones delayed synchronized worksheet loading. *Resolution*: Implemented an offline fallback mode in the Unity build to cache worksheet data locally.
  - **VR Motion Sensitivity**: *Challenge*: Initial high-detail environments caused minor user discomfort. *Resolution*: Locked rendering to medium detail, optimized frame rates, and implemented comfort vignetting settings.

next_steps: |
  - Fully integrate the 2-week curriculum directly into the VR program's guided tutorial.
  - Finalize the in-game task logistics and "Design Maze" bonus challenge.
  - Develop a comprehensive, printed quick-start guide for professors and TAs.
  - Expand the asset library to include Mechanical, Civil, and Aerospace engineering prototyping components.

specs:
  software:
    - name: "Unity Engine"
      version: "2022.3 LTS"
    - name: "Visual Studio Code"
      version: "C# Scripting"
    - name: "Blender"
      version: "3D Asset Pipeline"
  hardware:
    - component: "VR Headset"
      model: "Meta Quest 3S"
    - component: "Management PC"
      model: "VR-Ready Desktop"
  materials:
    - type: "Physical Assets"
      grade: "N/A (Software Project)"
    - type: "Logistics"
      grade: "Charging Carts & Sanitization Supplies"
  dimensions:
    - axis: "Virtual Workspace"
      value: "Scalable"
    - axis: "Headset Footprint"
      value: "Standalone"
  weight: "N/A"
  cost: "$0.00 (All hardware donated by Honeywell)"
---

This project demonstrates the integration of software engineering, systems integration, and educational curriculum design to deploy emerging VR technology at scale within a university environment.
