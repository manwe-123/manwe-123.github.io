---
layout: projects/project-vr
theme: vr
category: engineering
card_title: "VR Prototyping Workshop"
title: "VR Rapid Prototyping Application"
subtitle: "Unity environments and object-construction activities for ASU's FSE 100 engineering curriculum"
date: 2025-12-01
role: "Documentation Lead (Spring) & Unity Prototyping Lead (Fall)"
timeline: "Spring–Fall 2025"
team: "12-person EPICS team"
featured: true
display: true
tags:
  - Unity
  - VR/AR
  - 3D Modeling
  - Rapid Prototyping
  - Engineering Education
image: "assets/images/projects/vr/main.png"
excerpt: "Led Spring documentation and Fall Unity prototyping for an EPICS project introducing FSE 100 students to VR through object construction and the engineering design process."

problem: "Honeywell donated more than 30 VR headsets to ASU, but FSE 100 lacked a curriculum and activity structure for using them. Professor Steven Osburn partnered with our EPICS team to introduce first-year students, initially those in SCAI and computer science, to engineering applications of VR."
solution: "The team selected a virtual object-construction activity and initially explored a bookshelf. Our 12 members then evaluated a table, bookshelf, and bench as the model for the activity and settled on a table. The experience pairs a Unity environment with design decisions, prototype iteration, and reflection; the earlier bookshelf worksheet illustrates the intended learning structure. The curriculum was planned as four class sessions over two weeks, combining short lectures with practical activities."
document_status: "The Fall 2025 design document records an evolving prototype and curriculum, with no formal test results in its delivery checklist. My retrospective project account adds an asset-optimization iteration: reducing polygon counts improved frame rate and reduced discomfort during headset testing. The numerical examples below illustrate that improvement; classroom learning outcomes and quantified comfort results remain unverified."

prototype_video:
  src: "/assets/images/projects/vr/prototype-demo.mp4"
  poster: "/assets/images/projects/vr/prototype-poster.jpg"
  title: "Final-semester VR prototype: table assembly"
  description: "This final-semester recording shows the selected table-assembly exercise in the VR workshop, following the team's comparison of a table, bookshelf, and bench."
  caption: "From the on-screen reference to positioning the tabletop and legs in the virtual workspace. This clip demonstrates prototype interaction, without establishing classroom learning or performance results."
  duration: "0:40"
  width: 1280
  height: 720

documentation_contributions:
  - "Authored the complete 2-week curriculum guide for instructors and TAs"
  - "Created technical documentation for future EPICS teams taking over the project"
  - "Developed assessment rubrics aligned with ABET learning outcomes"
  - "Produced video tutorials and quick-start guides for classroom deployment"
  - "Maintained project wiki with version-controlled design decisions and meeting notes"

contributions:
  - "Served as Prototyping Lead for Modeling in the Fall 2025 workload distribution."
  - "Created Unity activities and designed the virtual rooms, as recorded in the team-member accomplishments table."
  - "Reworked 3D assets to reduce polygon counts after another frame-rate issue appeared; headset testing showed improved frame rate and decreased discomfort."
  - "Worked within the Unity prototyping group alongside separate scripting, curriculum, research, and documentation leads."
contributions_note: "My role changed between semesters: Documentation Lead in Spring 2025, then Unity Prototyping Lead in Fall 2025. The Fall design document reflects the later team's role assignments; my Spring documentation work and asset-optimization iteration are included here from my project account."

performance_testing:
  summary: "During headset testing, another frame-rate problem interrupted the intended smooth interaction with the virtual environment. I reworked the assets to reduce polygon counts. The optimized version ran more smoothly, and users experienced less discomfort. This was a practical iteration on the prototype; a controlled study of motion sickness was not documented."
  approach:
    - title: "Reduce Geometry Cost"
      description: "The implemented change was a reduction in asset polygon counts. Simpler meshes reduce geometry-processing work when that part of the rendering pipeline is limiting performance. Profiling is still needed to distinguish geometry cost from draw calls, shaders, physics, and other bottlenecks."
    - title: "Preserve the Assembly Task"
      description: "The design tradeoff is to spend geometry on recognizable silhouettes and important assembly surfaces, with less detail on small decorative or hidden features. Mesh simplification should preserve the visual cues students need to position and connect components."
    - title: "Compare Performance & Comfort"
      description: "The reported outcome was higher frame rate and less discomfort after the asset rework. A smoother experience supports the activity, but frame rate alone does not establish the cause or size of a change in motion sickness."
  example_note: "Illustrative engineering scenario — these before/after values are invented examples, not recovered profiler logs, participant averages, or measurements from the cited studies. The actual project outcome is the qualitative improvement described above. Triangle count is used here as the rendering metric rather than source-model polygon count."
  example_metrics:
    - name: "Rendered triangles per frame"
      before: "250,000"
      after: "150,000"
      change: "40% reduction"
    - name: "Application frame rate"
      before: "60 FPS"
      after: "72 FPS"
      change: "20% increase"
    - name: "Equivalent frame interval (1000 / FPS)"
      before: "16.67 ms"
      after: "13.89 ms"
      change: "2.78 ms shorter; 16.7% reduction"
  example_interpretation: "In this example, reducing geometry helps the application reach a 72 Hz rendering target. That target gives approximately 13.89 ms per frame; at 90 Hz the budget would be 11.11 ms. These are calculated frame intervals, not measured GPU times or motion-to-photon latency. A 40% triangle reduction does not imply a 40% frame-rate improvement."
  comfort_result: "Project observation: discomfort decreased after the lower-polygon assets were introduced. No participant count, baseline symptom scores, or standardized questionnaire results were provided, so no percentage reduction in motion sickness is claimed."
  protocol_intro: "A repeatable follow-up test would compare the original and optimized builds under the same conditions. This protocol describes how to quantify the iteration; it is not presented as a completed experiment."
  protocol:
    - "Use the same headset model, refresh-rate setting, render resolution, lighting, locomotion, and table-assembly task. Change only the asset meshes for the first comparison."
    - "Profile on the headset with Unity's profiling tools and a device performance overlay. Distinguish application FPS from compositor output or synthesized frames."
    - "After a consistent warm-up, record several equal-duration runs of each build. Log median FPS, 95th-percentile CPU and GPU frame times, missed frames, and rendered triangle counts."
    - "Check that the simplified assets retain their silhouettes, assembly alignment, grabbing behavior, and collision behavior."
    - "For a consented comfort comparison, record baseline and post-session discomfort, exposure duration, breaks, and withdrawals. Counterbalance build order and stop a session when discomfort occurs. Report participant count and individual changes rather than a single unsupported percentage."
  research:
    - title: "Geometry Optimization"
      text: "Unity recommends first identifying the rendering bottleneck. When vertex processing is limiting the GPU, reducing unnecessary triangles and using level of detail are appropriate ways to reduce work. This supports the optimization approach, not a specific improvement percentage."
      label: "Unity rendering-performance guidance"
      url: "https://docs.unity3d.com/6000.0/Documentation/Manual/OptimizingGraphicsPerformance.html"
    - title: "Frame-Time Budget"
      text: "Meta's Quest optimization case study uses about 13.9 ms for 72 FPS and 11.1 ms for 90 FPS, and recommends separating CPU, GPU, vertex, and fragment bottlenecks. Those budgets are reference points for profiling this prototype."
      label: "Meta Quest optimization case study"
      url: "https://developers.meta.com/vr/blog/showdown-on-quest-part-2-how-we-optimized-the-pc-vr-demo-for-meta-quest-2/"
    - title: "Frame Rate & Simulator Sickness"
      text: "Wang and colleagues (2023) compared 60, 90, 120, and 180 FPS in two VR scenarios and reported lower simulator-sickness symptoms at the higher frame rates, identifying 120 FPS as important in those conditions. The study did not test this project or a 60-to-72 FPS change; its findings cannot supply this project's comfort effect size."
      label: "Wang et al., IEEE TVCG (2023)"
      url: "https://experts.illinois.edu/en/publications/effect-of-frame-rate-on-user-experience-performance-and-simulator/"

concept_selection:
  intro: "We compared three concepts using curriculum relevance (30%), ease of implementation (20%), student engagement (30%), and educational value (20%). The team chose 3D Object Construction for its practical classroom setup, interactivity, and potential to reuse the activity with different objects."
  concepts:
    - name: "Interactive Block Coding"
      relevance: 8
      ease: 4
      engagement: 6
      value: 8
      weighted: "6.6 / 10"
    - name: "3D Object Construction"
      relevance: 7
      ease: 8
      engagement: 9
      value: 7
      weighted: "7.8 / 10"
      selected: true
    - name: "FSE Assembly Line"
      relevance: 4
      ease: 4
      engagement: 9
      value: 9
      weighted: "6.5 / 10"
  note: "Weighted scores are calculated from the document's individual ratings and weights. The printed Block Coding total is inconsistent with its component scores; the recalculated value is shown here. These are concept-selection judgments, not student-test results."

model_selection:
  intro: "After choosing object construction, all 12 team members evaluated three possible models: a table, a bookshelf, and a bench. The team selected the table for the prototype activity."
  scoring: "Illustrative reconstruction: the scores and weights below were created to explain the selection rationale; they are not recorded team averages or individual ballots. Ease of implementation and aesthetics use 1–10 scales, with higher scores preferred. Design difficulty uses 1–10, with lower scores preferred."
  formula: "Weighted score = 0.40 × ease + 0.35 × (11 − difficulty) + 0.25 × aesthetics."
  options:
    - name: "Table"
      ease: 8.5
      difficulty: 3.0
      aesthetics: 8.0
      weighted: "8.20 / 10"
      selected: true
    - name: "Bookshelf"
      ease: 6.5
      difficulty: 6.5
      aesthetics: 9.0
      weighted: "6.43 / 10"
    - name: "Bench"
      ease: 7.5
      difficulty: 4.5
      aesthetics: 7.5
      weighted: "7.15 / 10"
  rationale: "In this reconstruction, the table's simple top-and-leg structure offers clear assembly steps and fewer alignment challenges. The bookshelf scores highest for aesthetics, but its multiple shelves and upright supports increase modeling and interaction difficulty. The bench offers a middle ground, with more structural alignment than the table."

activity_steps:
  - title: "Identify the Problem"
    description: "Define the object's purpose, requirements, and constraints. The earlier worksheet uses a bookshelf; the selected prototype activity uses a table."
  - title: "Research & Brainstorm"
    description: "Explore existing designs, materials, and features, then generate alternatives as a team."
  - title: "Choose a Design"
    description: "Compare options for functionality, feasibility, appearance, and available resources."
  - title: "Build a Prototype"
    description: "Construct the virtual object from components within the room."
  - title: "Test & Iterate"
    description: "Identify a design issue, make a significant change, and explain how the change improves the prototype."
  - title: "Communicate & Reflect"
    description: "Document design decisions, discuss collaboration, and explain where VR could support future engineering work."

workstreams:
  - title: "Unity Environment"
    description: "Rooms, game objects, and component placement support the construction task. This is the area of my documented prototyping contribution."
  - title: "C# Interactions"
    description: "The functional decomposition assigns sticking, snapping, menu UI, and object spawning to the scripting workstream. The update section reports basic movement, grab/rotate/inspect interactions, collisions, and scripted challenges."
  - title: "Curriculum & Assessment"
    description: "The curriculum workstream covers lectures, worksheets, pre/post quizzes, and review surveys. Synchronized in-headset worksheet prompts and shared-object collaboration are proposed features."
  - title: "Maintenance & Handoff"
    description: "My Spring documentation included instructor guidance, tutorials, quick-start resources, and technical handoff material for future EPICS teams. The Fall design document calls for additional equipment logs and finalized manuals for the integrated activity."

artifacts:
  - src: "/assets/images/projects/vr/design-room.jpeg"
    alt: "Two Unity editor views of a furnished virtual room with shelves, tables, seating, and an open activity area."
    caption: "Spring 2025 room-environment concept from the design document (PDF p. 24)."
    width: 318
    height: 339
  - src: "/assets/images/projects/vr/bookshelf-concept.jpeg"
    alt: "Sketch of a virtual room with colored shelf panels and upright components ready for a bookshelf assembly exercise."
    caption: "Fall 2025 bookshelf activity concept: students collect parts around the room and assemble an object (PDF p. 25)."
    width: 831
    height: 537
  - src: "/assets/images/projects/vr/functional-decomposition.png"
    alt: "Functional decomposition separating the FSE 100 VR activity into C# scripting, curriculum, Unity modeling, and maintenance workstreams."
    caption: "System decomposition showing the team's four workstreams and their responsibilities (PDF p. 25)."
    width: 1408
    height: 820
  - src: "/assets/images/projects/vr/worksheet-design-process.png"
    alt: "Sample FSE 100 virtual-bookshelf worksheet outlining six engineering design steps and a rapid-prototyping reflection."
    caption: "Draft worksheet connecting virtual construction to design decisions, iteration, and reflection (PDF p. 29)."
    width: 636
    height: 635

requirements: |
  - **Class format:** four sessions over two weeks, with short lectures and hands-on VR activities
  - **Interaction:** beginner-friendly controls for picking up, moving, and manipulating objects; a game-like structure with 3–4 levels is a design target
  - **Participation:** every student should use a headset, with rotation or sharing when inventory is insufficient
  - **Timing:** complete an activity within a 50–75 minute class, allowing for setup and troubleshooting
  - **Scope:** introduce VR use in engineering; teaching students to develop VR applications is outside this activity's scope

metrics:
  - name: "Visual Quality"
    target: "Mean survey rating ≥ 6 / 10"
    achieved: "Survey planned; no aggregate results published"
  - name: "Engineering Applications"
    target: "≥ 75% explain a use of VR prototyping"
    achieved: "Reflection assessment planned"
  - name: "VR Fundamentals"
    target: "At least 75% demonstrate basic understanding and headset use"
    achieved: "Post-lesson quiz and operation checks planned"
  - name: "Activity Duration"
    target: "50–75 minutes, including technical delays"
    achieved: "Timed classroom validation pending"

research_questions:
  - id: "RQ1"
    title: "Engagement & Learning"
    question: "How can a VR game teach engineering concepts while keeping students engaged?"
    plan: "Compare VR activities with lecture videos covering the same topics and duration. Use observed participation, engagement surveys, and short quizzes."
  - id: "RQ2"
    title: "Immersion & Detail"
    question: "What level of graphical and physical detail best balances learning, attention, and practical constraints?"
    plan: "Compare low-, medium-, and high-detail environments with 20–30 students; record quiz scores, engagement, completion time, and errors. My asset-reduction iteration produced a reported improvement in frame rate and comfort; the controlled detail-level study and numerical comfort results remain pending."
  - id: "RQ3"
    title: "Assessment & Instructor Feedback"
    question: "How can gameplay data help measure understanding and support instructors?"
    plan: "Compare quiz-only, gameplay analytics, and mixed assessment. The update section reports an early logging script, prototype dashboard, and Google Form output; validated correlations and predictive accuracy are not provided."

development_phases:
  - period: "Spring 2025"
    title: "Documentation Leadership & Initial Environment Concept"
    tasks:
      - "Selected Unity and began learning the development tools."
      - "Explored a furnished-room environment for the VR activity."
      - "As Documentation Lead, authored the curriculum guide, technical handoff documentation, and assessment rubrics."
      - "Produced tutorials and quick-start guides, and maintained the project wiki, design decisions, and meeting notes."
  - period: "Fall 2025"
    title: "Activity Prototyping & Curriculum Development"
    tasks:
      - "Developed Unity activities and room designs; explored bookshelf construction."
      - "Reworked high-polygon assets in a performance iteration, improving frame rate and reducing discomfort in headset testing (retrospective account)."
      - "The team developed quizzes, worksheets, interviews, and review-survey plans."
      - "Separated environment, scripting, curriculum, and maintenance responsibilities."
  - period: "Next-Semester Handoff Plan"
    planned: true
    title: "Integration & Classroom Validation"
    tasks:
      - "Integrate the curriculum into the program and finalize in-game tasks and logistics."
      - "Update the Spring documentation for the integrated activity and run the planned classroom tests."

constraints: |
  - **Equipment:** use the donated Meta Quest inventory; the document reports 30+ units but identifies headset availability as an ongoing constraint
  - **Transport and charging:** coordinate movement from ECG storage to FSE 100 classrooms, charging turnaround, and staff access
  - **Room layouts:** provide clear VR boundaries despite variable classroom space and fixed furniture
  - **Connectivity:** account for classroom Wi-Fi differences affecting online worksheets or synchronization
  - **Usability and comfort:** polygon reduction improved the prototype's reported frame rate and comfort; broader accessibility, stable frame delivery, and comfort settings still require systematic evaluation
  - **Support:** plan for controller pairing, software updates, sanitation, inspection logs, and instructor/TA troubleshooting

next_steps_list:
  - title: "Finish the Integrated Activity"
    description: "Connect the curriculum, construction task, and worksheet; resolve program flow, object interactions, and the proposed save/load behavior."
  - title: "Validate the Learning Experience"
    description: "Run the planned usability, timed-session, engagement, and knowledge checks before claiming classroom outcomes."
  - title: "Prepare Instructor Handoff"
    description: "Update and consolidate the Spring curriculum guide, tutorials, quick-start resources, and technical documentation for the final activity. Add the equipment maintenance log and review the handoff with the community partner."
  - title: "Evaluate Proposed Extensions"
    description: "Assess synchronized worksheet prompts, shared-object collaboration, analytics, and the optional Design Maze after the core activity works reliably."

specs:
  software:
    - name: "Unity"
      version: "Virtual environment and interactions; version not specified"
    - name: "Blender"
      version: "3D modeling workflow"
    - name: "Visual Studio Code / C#"
      version: "Team scripting workstream"
  hardware:
    - component: "VR Platform"
      model: "Donated Meta Quest headsets"
  cost: "$0 reported spending for Spring and Fall 2025; future upkeep is not included"

design_document_url: "/assets/files/vr-design-excerpts.pdf"
design_document_note: "Selected pages from the Fall 2025 EPICS design document cover scope, concepts, the proposed activity, prototype updates, and verification plans. The existing demo is separate prototype evidence."
---
