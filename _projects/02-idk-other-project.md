---
title: "VR Rapid Prototyping Application"
subtitle: "An immersive virtual reality engineering design curriculum for introductory students"
date: 2025-12-15
role: "Prototyping Lead (Modeling) & Documentation Lead"
timeline: "January 2025 - December 2025"
team: "12-person EPICS team"
tags:
  - VR/AR
  - Unity
  - C#
  - Systems Integration
  - Curriculum Design
  - Meta Quest
image: "assets/images/vr-prototyping-hero.jpg"
excerpt: "Engineered a virtual reality rapid prototyping environment and a two-week curriculum to integrate 30+ donated Meta Quest headsets into the introductory engineering design course."

problem: "Over 30 Meta Quest headsets donated by Honeywell sat unused in storage for months due to a lack of curriculum integration. The Fulton Schools of Engineering needed a way to utilize this hardware to teach introductory engineering design concepts interactively, without requiring students to have prior VR experience."

solution: "Developed an interactive 3D Object Construction VR environment built in Unity, featuring over 100 physics-enabled assets and an analytics tracking system. Paired the software with a comprehensive two-week curriculum to seamlessly integrate the hardware into the FSE 100 course."

requirements: |
  - Deploy across 30+ standalone Meta Quest headsets without external PC tethering
  - Maintain a stable frame rate to prevent VR motion sickness for beginner users
  - Integrate interactive physics and collision mechanics for realistic prototyping
  - Develop a beginner-friendly two-week curriculum aligned with FSE 100 learning outcomes
  - Achieve a total project cost of $0 utilizing donated hardware and free software

constraints: |
  - Hardware limited to standalone Meta Quest 3 and 3S headsets with mobile-grade processing limits
  - Target audience consists of first-year students with zero prior VR or Unity experience
  - Strict one-semester development timeline for the initial functional prototype
  - Classroom logistics required rapid setup, sanitization, and charging protocols for 30+ units

metrics:
  - name: "Interactive Assets"
    target: "50+ assets"
    achieved: "100+ assets"
  - name: "Hardware Deployed"
    target: "30 headsets"
    achieved: "30+ headsets"
  - name: "Curriculum Length"
    target: "1 week"
    achieved: "2 weeks"
  - name: "Project Cost"
    target: "$0"
    achieved: "$0"

hardware_platform: |
  - **Headsets**: Meta Quest 3 and Meta Quest 3S (Standalone VR)
  - **Controllers**: Touch Plus controllers with hand tracking capabilities
  - **Infrastructure**: 30-unit charging cart and dedicated classroom storage in ECG

software_stack: |
  - **Engine**: Unity Game Engine (Primary development and build platform)
  - **Scripting**: C# for user interactions, physics logic, and analytics logging
  - **3D Modeling**: Blender for asset creation, modification, and optimization
  - **Version Control**: Git and GitHub for team collaboration and code management

core_features: |
  - **Physics & Collisions**: Simulated gravity, object snapping, and collision detection for realistic assembly
  - **Asset Library**: Over 100 interactive 3D components for rapid virtual prototyping
  - **Analytics Engine**: Custom C# scripts tracking completion time, error rates, and hint usage
  - **User Interface**: Minimalist, beginner-friendly menus designed to reduce cognitive load in VR

development_process: |
  **Phase 1: Documentation & Planning (Jan 2025 - Mar 2025)**
  - Authored technical reports, risk analysis matrices, and Gantt charts to track design milestones.
  - Standardized reporting templates and delivered a final technical transition package for future EPICS teams.
  
  **Phase 2: Prototyping & Systems Integration (Mar 2025 - Dec 2025)**
  - Transitioned to Prototyping Lead to build the core Unity environment.
  - Integrated over 100 interactive 3D assets, applying physics and collision mechanics.
  - Established standardized Unity workflows and resolved engine-level rendering blockers.
  - Optimized frame rates and asset polygon counts to ensure stable performance on standalone mobile headsets.

gallery:
  - src: "/assets/images/projects/vr-unity-editor.jpg"
    caption: "Unity editor scene hierarchy showing the 100+ asset library"
  - src: "/assets/images/projects/vr-environment.jpg"
    caption: "First-person view of the interactive VR prototyping workspace"
  - src: "/assets/images/projects/vr-headsets.jpg"
    caption: "Deployment setup of the 30+ Meta Quest headsets in the classroom"
  - src: "/assets/images/projects/vr-curriculum.jpg"
    caption: "Sample worksheet and curriculum materials for student integration"

testing: |
  Testing was conducted across three primary research phases to validate both the software performance and the educational efficacy of the curriculum.

test_results:
  - name: "Engagement vs. Traditional Methods"
    procedure: "Compared VR simulation engagement against standard lecture videos using 1-10 scale surveys"
    result: "VR environment yielded significantly higher engagement and concept retention scores"
    status: "Pass"
  - name: "Immersion Level Optimization"
    procedure: "Tested Low, Medium, and High detail environments to balance visual fidelity with standalone headset performance"
    result: "Medium detail provided the optimal balance, maintaining 90Hz frame rate without causing motion sickness"
    status: "Pass"
  - name: "Analytics Validation"
    procedure: "Tracked in-game completion times and error rates, comparing them against post-session quiz scores"
    result: "Successfully established a data-driven feedback loop correlating in-game performance with concept mastery"
    status: "Pass"

worked: |
  - **Asset Pipeline Optimization**: Successfully integrated 100+ assets without degrading the frame rate on standalone hardware
  - **Team Training**: Established technical workflows that allowed all modeling team members to contribute to Unity development efficiently
  - **Curriculum Alignment**: Partnered directly with faculty to ensure the VR mechanics perfectly matched the FSE 100 engineering design process

failed: |
  - **Hardware Logistics**: Managing the charging, transport, and sanitization of 30+ headsets across campus created significant bottlenecks before class
  - **VR Literacy Barrier**: Initial testing showed first-year students struggled with basic VR locomotion, requiring us to simplify the control scheme and add a mandatory tutorial module

next_steps: |
  - Implement multi-user collaboration so students can co-design the same virtual object from different headsets
  - Integrate the full curriculum directly into the VR program with automated grading via Canvas
  - Develop dynamic path planning for more complex, multi-stage engineering design challenges

specs:
  software:
    - name: "Unity"
      version: "2025 LTS"
    - name: "Blender"
      version: "3.6"
  hardware:
    - component: "Headset"
      model: "Meta Quest 3 / 3S"
  materials:
    - type: "Digital Assets"
      grade: "Optimized FBX/OBJ meshes"
    - type: "Curriculum"
      grade: "PDF / Canvas LMS"
  dimensions:
    - axis: "Virtual Workspace"
      value: "10m x 10m x 4m"
    - axis: "Physical Footprint"
      value: "2m x 2m per user (Guardian Boundary)"
  weight: "N/A (Software)"
  cost: "$0 USD (Donated Hardware)"
---

This project demonstrates the integration of software engineering, systems deployment, and educational curriculum design to solve a real-world hardware utilization challenge.
