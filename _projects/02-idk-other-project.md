---
title: "VR Rapid Prototyping Application"
subtitle: "An immersive virtual reality environment for undergraduate engineering design education"
date: 2025-12-01
role: "Prototyping Lead & Documentation Lead"
timeline: "January 2025 - December 2025"
team: "12-person EPICS team"
partner: "Professor Steven Osburn, Fulton Schools of Engineering"
tags:
  - Unity
  - C#
  - VR/AR
  - Systems Engineering
  - Curriculum Design
  - Prototyping
image: "assets/images/vr-hero.jpg"
excerpt: "Developed a virtual reality rapid prototyping environment for Meta Quest headsets, integrating over 100 interactive 3D assets to teach the engineering design process to first-year students."

problem: "Over 30 Meta Quest headsets donated by Honeywell sat unused due to a lack of curriculum integration. The Fulton Schools of Engineering needed a functional application and structured curriculum to utilize this hardware for teaching rapid prototyping and design iteration."

solution: "Developed an interactive VR rapid prototyping environment in Unity for Meta Quest headsets. The application features over 100 interactive 3D assets, simulated physics, and real-time analytics to guide students through the six-step engineering design process."

requirements: |
  - Integrate directly with the FSE 100 introductory engineering curriculum
  - Support deployment across 30+ headsets in standard classroom environments
  - Maintain stable frame rates on standalone hardware to prevent VR motion sickness
  - Track user interactions, errors, and completion times for instructor analytics

constraints: |
  - Zero hardware budget (utilizing existing donated Meta Quest 3 headsets)
  - Standalone headset limitations (no tethered PC rendering available)
  - Must be accessible to students with no prior VR or Unity experience
  - One-semester development timeline for initial functional prototype

metrics:
  - name: "Interactive 3D Assets"
    target: "> 50"
    achieved: "100+"
  - name: "Headset Deployment"
    target: "30 units"
    achieved: "30+ units"
  - name: "Curriculum Modules"
    target: "1 week"
    achieved: "2 weeks"
  - name: "Prototype Cost"
    target: "$0 (Donated)"
    achieved: "$0"

decision_matrix: |
  Evaluated three concepts: Interactive Block Coding, 3D Object Construction, and FSE Assembly Line. 
  Selected 3D Object Construction based on curriculum relevance (30% weight) and student engagement (30% weight). 
  This concept provided the best balance of educational value and ease of implementation for first-year students.

sensing: |
  - **VR Headset Tracking**: Meta Quest 3 inside-out tracking for 6DOF user movement
  - **Controller Input**: Meta Quest Touch controllers for object manipulation and UI interaction
  - **Analytics Logging**: Custom C# scripts tracking interaction time, error rates, and hint usage

actuation: |
  - **Physics Engine**: Unity PhysX for realistic object collisions, gravity, and snapping mechanics
  - **Object Manipulation**: Custom C# grab-and-rotate scripts for intuitive 3D asset handling
  - **UI/UX Feedback**: Spatial UI panels and visual indicators for task progression

mechanical: |
  - **Hardware Platform**: Meta Quest 3 standalone VR headsets
  - **Physical Logistics**: Custom charging carts and sanitation protocols for 30+ units
  - **Classroom Integration**: Pre-class setup checklists and TA training for hardware deployment

components:
  - name: "Meta Quest 3"
    spec: "Standalone VR headset (30+ units donated by Honeywell)"
  - name: "Unity Game Engine"
    spec: "Primary development environment for VR application"
  - name: "Blender"
    spec: "3D modeling and asset modification"
  - name: "Visual Studio"
    spec: "C# scripting and debugging"

fabrication: |
  **Software Development:**
  - Built the core VR environment in Unity, importing and configuring over 100 interactive assets.
  - Wrote custom C# scripts for object physics, collision detection, and user input handling.
  - Developed the analytics logging system to export student performance data to Google Forms.
  
  **Hardware Deployment:**
  - Configured and updated firmware on 30+ Meta Quest 3 headsets.
  - Established physical storage, charging, and sanitation workflows for classroom use.

gallery:
  - src: "/assets/images/projects/vr-unity-editor.jpg"
    caption: "Unity editor scene hierarchy showing the 100+ integrated 3D assets"
  - src: "/assets/images/projects/vr-environment.jpg"
    caption: "First-person view of the VR prototyping workspace"
  - src: "/assets/images/projects/vr-interaction.jpg"
    caption: "User manipulating 3D assets using Meta Quest controllers"
  - src: "/assets/images/projects/vr-headsets.jpg"
    caption: "Deployment setup of 30+ Meta Quest headsets for classroom use"

testing: |
  Testing was conducted in three phases focusing on engagement, immersion levels, and analytics accuracy. 
  Small user groups (3 to 5 students) tested early builds to validate interaction models and frame rate stability before broader deployment.

test_results:
  - name: "Frame Rate Stability"
    procedure: "Run VR prototype continuously for 45 minutes while monitoring performance"
    result: "Maintained stable frame rate, preventing motion sickness"
    status: "Pass"
  - name: "Interaction Model"
    procedure: "Observe users grabbing, rotating, and snapping objects without instructions"
    result: "Users successfully manipulated objects within 2 minutes"
    status: "Pass"
  - name: "Analytics Logging"
    procedure: "Verify C# scripts accurately track time, errors, and hints"
    result: "Data successfully exported and matched real user actions"
    status: "Pass"

worked: |
  - **Asset Optimization**: Successfully integrated 100+ assets without degrading standalone headset performance.
  - **Team Training**: Established Unity workflows that allowed all modeling team members to contribute effectively.
  - **Hardware Logistics**: Created a reliable pre-class maintenance checklist that ensured 100% headset availability.

failed: |
  - **Initial UI Complexity**: Early menu designs required too much reading, causing user frustration. Simplified to visual icons and spatial cues.
  - **Headset Storage**: Initial transport method for 30 headsets was inefficient and risked damage. Redesigned the transport and charging workflow.

next_steps: |
  - Integrate the full 2-week curriculum directly into the VR program flow.
  - Develop comprehensive user manuals and video training modules for professors and TAs.
  - Expand the environment to support other engineering disciplines (Mechanical, Civil, Electrical).
  - Implement adaptive difficulty based on student performance analytics.

specs:
  software:
    - name: "Unity"
      version: "2022.3 LTS"
    - name: "C# Scripting"
      version: ".NET Standard 2.1"
    - name: "Blender"
      version: "3.6"
  hardware:
    - component: "VR Headset"
      model: "Meta Quest 3"
    - component: "Controllers"
      model: "Meta Quest Touch Plus"
  materials:
    - type: "Storage"
      grade: "Hard-shell carrying cases"
    - type: "Sanitization"
      grade: "UV-C light cleaners and silicone covers"
  dimensions:
    - axis: "Virtual Workspace"
      value: "20m x 20m"
    - axis: "Physical Footprint"
      value: "2m x 2m per user"
  weight: "515g per headset (standalone)"
  cost: "$0 (Hardware donated by Honeywell)"
---

# Project Overview

The Fulton Schools of Engineering received a donation of over 30 Meta Quest headsets from Honeywell. Without an existing curriculum or software to run on them, the hardware sat unused. Our EPICS team was tasked with developing a functional VR application and a structured curriculum to integrate this technology into the FSE 100 introductory engineering course. 

The goal was to expose first-year students to virtual reality, teach them the fundamentals of rapid prototyping, and provide a hands-on, interactive alternative to traditional lecture formats.

# Context and Stakeholders

**Community Partner:** Professor Steven Osburn, Fulton Schools of Engineering.
**Target Users:** FSE 100 students, primarily from the SCAI and Computer Science majors.

The primary challenge was balancing technical capability with educational value. The application needed to be engaging enough to hold the attention of first-year students, but structured enough to actually teach the six-step engineering design process. It also had to run reliably on standalone hardware without causing VR motion sickness.

# Technical Architecture

### Hardware Platform
The project utilizes 30+ Meta Quest 3 headsets. Because these are standalone devices, all processing, rendering, and physics calculations must run locally on the headset hardware without a tethered PC.

### Software Stack
- **Unity Game Engine:** The core development platform for building the VR environment.
- **C#:** Used for all scripting, including object physics, user input handling, and analytics logging.
- **Blender:** Used for modifying and optimizing 3D assets for VR performance.

### Core Features
- **Interactive 3D Environment:** Over 100 assets that users can grab, rotate, and snap together.
- **Physics Simulations:** Realistic collisions and gravity to test structural prototypes.
- **Real-Time Analytics:** Custom C# scripts that track completion time, errors, and hint usage, exporting the data for instructor review.

# Design and Development Process

The team evaluated three initial concepts using a weighted decision matrix: Interactive Block Coding, 3D Object Construction, and an FSE Assembly Line. 

We selected **3D Object Construction** because it scored highest in curriculum relevance and student engagement. It provided a direct parallel to physical rapid prototyping, allowing students to iterate on designs virtually before building them physically.

**Iteration Timeline:**
- **Spring 2025:** Developed basic VR movement, object interactions, and simple physics.
- **Fall 2025:** Expanded to a full environment with 100+ assets, complex collision mechanics, and the analytics logging system.

# Engineering Contributions

### Prototyping Lead (Modeling Team) | March 2025 to December 2025
- Built the core VR environment in Unity, integrating over 100 interactive 3D assets with simulated physics and collision mechanics.
- Directed the modeling team by establishing standardized Unity workflows and resolving engine-level rendering blockers.
- Optimized frame rates and asset poly-counts to mitigate VR motion sickness on standalone Meta Quest hardware.

### Documentation Lead | January 2025 to March 2025
- Authored technical reports, Gantt charts, and risk analysis matrices to track design milestones.
- Standardized reporting templates and delivered a final technical transition package detailing system architecture and hardware deployment logistics for future teams.

# Testing and Validation

Testing was conducted in three phases to ensure the system was stable, intuitive, and教育ally effective.

1. **Engagement Testing:** Compared the VR simulation against traditional lecture videos. Measured student engagement via post-session surveys.
2. **Immersion Testing:** Tested low, medium, and high detail environments to find the optimal balance between visual fidelity and frame rate performance.
3. **Analytics Validation:** Verified that the in-game C# logging scripts accurately tracked user behavior and matched actual physical actions.

**Results:** The optimized medium-detail environment maintained a stable frame rate, eliminating motion sickness. The analytics system successfully logged all required performance metrics for the instructor dashboard.

# Educational Impact and Results

- **Scale:** Successfully deployed across 30+ headsets for classroom use.
- **Content:** Delivered a 2-week curriculum complete with lectures, interactive activities, and assessments.
- **Validation:** Met all core functional requirements for user input, physics, and collaboration.
- **Feedback:** Students reported higher engagement compared to traditional lectures, and faculty confirmed the module aligned with FSE 100 learning outcomes.

# Challenges and Lessons Learned

### What Went Well
- Integrating 100+ assets without degrading the performance of standalone headsets.
- Creating a team training program that allowed all members to contribute to Unity development.
- Establishing a reliable pre-class maintenance checklist for the physical headsets.

### Technical Challenges
- **Limited VR Experience:** The team had to rapidly learn Unity and VR design principles. We solved this by iterative testing with small user groups and simplifying mechanics.
- **Hardware Logistics:** Moving and setting up 30 headsets across campus was time-consuming. We solved this by developing strict TA responsibility assignments and transport protocols.
- **Performance vs. Fidelity:** High-detail assets caused frame drops. We solved this by aggressively optimizing polygon counts and baking lighting in Blender.

### Lessons Learned
- Early usability testing with non-VR users is critical. What feels intuitive to a developer is often confusing to a first-time user.
- Educational VR requires simple controls and minimal UI. Overloading the user with menus breaks immersion.
- Physical hardware requires just as much planning as software. Pre-class equipment checks are mandatory.

# Future Development

### Next Steps for Future Teams
- Integrate the full curriculum directly into the VR program flow.
- Develop comprehensive user manuals and video training modules for professors.
- Expand the environment to support other engineering disciplines.

### Potential Enhancements
- Implement dynamic path planning for more complex design challenges.
- Add wireless charging stations for rapid headset turnaround between classes.
- Develop adaptive difficulty based on student performance analytics.
- Create multi-user collaboration features for team-based activities.

# Technical Skills Demonstrated

`Unity Game Engine` `C# Programming` `3D Asset Integration` `Physics Simulation` `VR/AR Systems Deployment` `Educational Curriculum Design` `Systems Integration` `Performance Optimization` `Data Analytics` `Technical Documentation` `Team Leadership` `Stakeholder Communication` `Iterative Design` `UX Testing`

# Project Resources

- [GitHub Repository](#) (Unity project files and C# scripts)
- [Curriculum Documents](#) (Lectures, worksheets, and quizzes)
- [Full Design Document](#) (PDF)
- [Transition Video](#) (Walkthrough for future EPICS teams)
