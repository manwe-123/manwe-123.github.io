---
title: "VR Rapid Prototyping Application"
subtitle: "Immersive VR engineering curriculum for introductory design courses"
date: 2025-12-01
role: "Prototyping Lead & Documentation Lead"
timeline: "Jan 2025 - Dec 2025"
team: "12-person team"
tags:
  - VR/AR
  - Unity
  - C#
  - 3D Modeling
  - Curriculum Design
image: "assets/images/projects/vr-hero.jpg"
excerpt: "Developed an interactive VR rapid prototyping environment for Meta Quest headsets, integrating 100+ assets and physics simulations to teach engineering design processes."

problem: "Over 30 Meta Quest headsets donated by Honeywell sat unused due to a lack of curriculum integration. The Fulton Schools of Engineering needed an interactive, immersive way to teach introductory engineering design concepts without requiring physical lab materials."

solution: "Engineered a comprehensive VR rapid prototyping application in Unity featuring 100+ interactive 3D assets, physics-based manipulation, and a structured 2-week curriculum framework that allows students to collaboratively design and test virtual prototypes."

requirements: |
  - Feature 3-4 interactive levels with gamified engineering challenges
  - Support intuitive user input (grabbing, rotating, assembling objects)
  - Maintain stable frame rates to prevent VR motion sickness
  - Complete the full activity within a standard 50-75 minute class period
  - Beginner-friendly for students with no prior VR experience

constraints: |
  - Limited to 30+ standalone Meta Quest headsets (no PC-tethered rendering)
  - Hardware restricted to undergraduate lab equipment and donated headsets
  - 1-semester deadline to deliver a functional, curriculum-aligned prototype

metrics:
  - name: "Interactive Assets"
    target: "50+ assets"
    achieved: "100+ assets"
  - name: "Frame Rate Stability"
    target: "72+ FPS"
    achieved: "Stable 72-90 FPS"
  - name: "Activity Completion"
    target: "< 75 mins"
    achieved: "50-60 mins"

sensing: |
  - **Hand & Controller Tracking**: Meta Quest native hand tracking and XR controller input for precise object manipulation
  - **Spatial Awareness**: Unity Guardian system integration to ensure physical safety during immersive sessions
  - **Analytics Logging**: Custom C# scripts to track user completion time, interaction errors, and hint usage

actuation: |
  - **Physics Engine**: Unity physics simulation for realistic object collisions, gravity, and mass properties
  - **Interaction Mechanics**: Grab, rotate, snap, and assemble virtual components using the XR Interaction Toolkit
  - **UI/UX Feedback**: Real-time visual and haptic feedback for successful component mating and task completion

mechanical: |
  - **Virtual Environment**: Modeled and optimized 3D workspaces, including virtual workbenches and assembly zones
  - **Asset Topology**: Retopologized and optimized 100+ 3D models to ensure high visual fidelity without compromising standalone VR performance
  - **Ergonomic Design**: Positioned interactive elements and UI within comfortable reach zones to minimize user fatigue

components:
  - name: "Meta Quest 3S"
    spec: "Standalone VR headset (30+ units)"
  - name: "Unity Engine"
    spec: "Primary development platform and physics simulator"
  - name: "XR Interaction Toolkit"
    spec: "Framework for VR input and object manipulation"

fabrication: |
  **3D Asset Creation & Optimization:**
  - Modeled and modified 100+ interactive components in Blender and Unity
  - Baked lighting and optimized mesh polygons to maintain 90 FPS on standalone headsets
  
  **Software Development:**
  - Programmed custom C# scripts for object snapping, physics toggling, and analytics logging
  - Iteratively tested interaction mechanics with small user groups to refine UI and controls

gallery:
  - src: "/assets/images/projects/vr-unity-editor.jpg"
    caption: "Unity editor showing the 100+ asset hierarchy and scene layout"
  - src: "/assets/images/projects/vr-environment.jpg"
    caption: "In-VR view of the interactive rapid prototyping workspace"
  - src: "/assets/images/projects/vr-headsets.jpg"
    caption: "Deployment setup with 30+ Meta Quest headsets"

testing: |
  Testing was conducted in three phases aligned with our research questions: component functionality (tracking and physics), subsystem immersion (balancing visual fidelity with performance), and integration (measuring learning outcomes and engagement).

test_results:
  - name: "Frame Rate & Sickness"
    procedure: "Run prototype continuously for 60 mins, monitor FPS and user feedback"
    result: "Maintained 72-90 FPS; zero reports of VR motion sickness"
    status: "Pass"
  - name: "Interaction Accuracy"
    procedure: "Test object snapping and rotation with 5 non-VR users"
    result: "Intuitive controls achieved; average time to first correct interaction < 2 mins"
    status: "Pass"
  - name: "Curriculum Alignment"
    procedure: "Faculty review of the 2-week lesson plan and VR activity flow"
    result: "Confirmed alignment with FSE 100 engineering design process outcomes"
    status: "Pass"

worked: |
  - **Iterative Prototyping**: Testing with small user groups early on prevented major UI/UX overhauls later
  - **Asset Optimization**: Aggressive polygon reduction and baked lighting allowed high-fidelity visuals on standalone headsets
  - **Faculty Collaboration**: Continuous feedback from Prof. Osburn ensured the VR activity directly supported course learning objectives

failed: |
  - **Initial High-Poly Assets**: Early models caused frame drops and VR sickness; required complete retopology of the environment
  - **Headset Logistics**: Managing charging, updates, and sanitization for 30+ headsets across multiple classrooms proved highly time-consuming
  - **Network Dependencies**: Wi-Fi drops in certain classrooms delayed worksheet syncing and asset loading

next_steps: |
  - Integrate the full 2-week curriculum directly into the VR application with guided tutorials
  - Implement multi-user collaboration so students can co-design the same virtual prototype
  - Develop a comprehensive instructor dashboard to view real-time student analytics

specs:
  software:
    - name: "Unity"
      version: "2022 LTS"
    - name: "C#"
      version: ".NET Standard 2.1"
    - name: "Blender"
      version: "3.6"
  hardware:
    - component: "VR Headset"
      model: "Meta Quest 3S"
    - component: "Input"
      model: "Touch Plus Controllers / Hand Tracking"
  materials:
    - type: "Digital Assets"
      grade: "Optimized FBX/OBJ meshes"
  dimensions:
    - axis: "Virtual Space"
      value: "10m x 10m x 4m"
  weight: "N/A (Software)"
  cost: "$0 (Headsets donated by Honeywell, software free)"
---

This project demonstrates the integration of software engineering, 3D asset optimization, and educational curriculum design to transform unused hardware into an interactive engineering learning platform.
