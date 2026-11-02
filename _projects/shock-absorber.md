---
layout: projects/project-cad
theme: cad
category: engineering
card_title: "Shock Absorber Assembly"
title: "Shock Absorber Assembly"
subtitle: "A SolidWorks assembly developed from reference geometry, with an exploded bill of materials and seven component drawing sheets."
date: 2025-12-09
role: "Part modeling, assembly & engineering drawings"
timeline: "Fall 2025"
course: "MAE 214 · Final Project"
software: "SolidWorks"
featured: false
display: true
tags:
  - SolidWorks
  - Assembly Design
  - Engineering Drawings
  - Third-angle Projection
image: "/assets/images/projects/cad/assembly.jpg"
image_alt: "Assembled SolidWorks model with a pivot, U-support, mounting bracket, and spring below the support."
image_caption: "The completed CAD assembly from my final project cover: a pivot supported between two bronze bushings, above a spring-and-bracket arrangement."

objective: "For my MAE 214 final project, I modeled a shock absorber assembly in SolidWorks and prepared a drawing package connecting individual part geometry to the complete assembly. The work combines seven custom component designs with standard fastening hardware."
project_context: "The assignment used a fictional design-engineer scenario for a Mercedes-Benz C-Class shock absorber. Reference figures supplied the starting geometry; the brief required students to revise dimensions where needed, account for missing parts, and communicate the assembly through engineering drawings."

project_stats:
  - value: "12"
    label: "BOM line items"
  - value: "13"
    label: "Total part instances"
  - value: "7"
    label: "Component drawing sheets"
  - value: "1"
    label: "Exploded assembly sheet"

contributions:
  - "Modeled the bracket, spacer, shaft, U-support, bushing, pivot, and spring as individual components."
  - "Integrated the components and fastening hardware into the assembled model shown in the final submission."
  - "Created an exploded view with numbered callouts and a bill of materials listing part names, materials, and quantities."
  - "Prepared seven component sheets with orthographic views, isometric views, dimensions, and thread or coil details where applicable."

requirements_intro: "These constraints come from the assignment brief and define the design task. They are separate from the results documented in my drawing package."
requirements:
  - title: "Fit and motion"
    description: "Use the reference figures and supplied motion video to assemble the mechanism, adjusting geometry where necessary for the intended motion."
  - title: "Interference limits"
    description: "The brief permits up to 0.02 in³ of interference for threaded components. All other components must have no interference."
  - title: "Drawing coverage"
    description: "Provide dimensioned third-angle drawings for custom parts, plus an exploded assembly drawing and a bill of materials. The spring must be modeled by the student."
  - title: "Materials and hardware"
    description: "Choose suitable materials, including bronze bushings. Downloaded fasteners are permitted, with a separate appendix requested for their part numbers, descriptions, and materials."

assembly_intro: "The exploded drawing makes the component relationships explicit: the pivot sits between a pair of bronze bushings in the U-support, while the shaft, spring, spacer, bracket, washer, and self-locking nut form the lower stack. A hex-head bolt, castle nut, and cotter pin complete the upper connection."
exploded_image: "/assets/images/projects/cad/exploded-assembly.png"
exploded_caption: "Final submission, sheet 1: exploded and assembled isometric views with the complete bill of materials. Item 6 appears twice because the assembly uses two bushings."
bom_intro: "Transcribed from the submitted assembly sheet: 12 line items and 13 individual part instances. The seven custom component types correspond to the seven individual drawing sheets."
bom:
  - { number: 1, name: "Self-locking nut", material: "Steel", quantity: 1, type: "Standard hardware" }
  - { number: 2, name: "Hex-head bolt", material: "Steel", quantity: 1, type: "Standard hardware" }
  - { number: 3, name: "Pivot", material: "Steel", quantity: 1, type: "Custom component" }
  - { number: 4, name: "Cotter pin", material: "Steel", quantity: 1, type: "Standard hardware" }
  - { number: 5, name: "Castle nut", material: "Steel", quantity: 1, type: "Standard hardware" }
  - { number: 6, name: "Bushing", material: "Bronze", quantity: 2, type: "Custom component" }
  - { number: 7, name: "U-support", material: "Steel", quantity: 1, type: "Custom component" }
  - { number: 8, name: "Spring", material: "Steel", quantity: 1, type: "Custom component" }
  - { number: 9, name: "Shaft", material: "Steel", quantity: 1, type: "Custom component" }
  - { number: 10, name: "Spacer", material: "Steel", quantity: 1, type: "Custom component" }
  - { number: 11, name: "Bracket", material: "Steel", quantity: 1, type: "Custom component" }
  - { number: 12, name: "Washer", material: "Steel", quantity: 1, type: "Standard hardware" }

drawings_intro: "Each sheet pairs the component's 3D form with dimensioned views. Dimensions below are transcribed in inches from the final submission. Select a sheet to enlarge it, or download the PDF for the original vector drawings."
drawings:
  - title: "Bracket"
    src: "/assets/images/projects/cad/bracket.png"
    alt: "Bracket drawing with top, front, side, and isometric views showing its mounting holes and bent profile."
    caption: "Sheet 2 · A 9.500 × 3.000 mounting footprint, 0.313 thickness, two Ø0.500 mounting holes, and a central Ø0.750 hole. The views also locate the bends and their radii."
  - title: "Spacer"
    src: "/assets/images/projects/cad/spacer.png"
    alt: "Annular spacer drawing showing its inner and outer diameters, axial height, and isometric view."
    caption: "Sheet 3 · A ring with Ø2.25 outside diameter, Ø1.75 inside diameter, and 1.00 axial height."
  - title: "Shaft"
    src: "/assets/images/projects/cad/shaft.png"
    alt: "Partially threaded shaft drawing with a 0.75-10 thread callout and a dimensioned end detail."
    caption: "Sheet 4 · Ø0.750 shaft with a 3.125 length dimension, a 0.75-10 × 1.00 threaded portion, and a 0.125 × 0.125 end-detail callout."
  - title: "U-support"
    src: "/assets/images/projects/cad/u-support.png"
    alt: "U-support drawing showing its two upright arms, rounded ends, mounting holes, and bend radii."
    caption: "Sheet 5 · A 3.526 overall width and 5.265 height, 0.313 wall thickness, Ø0.500 pivot holes, and R1.400 rounded ends."
  - title: "Bushing"
    src: "/assets/images/projects/cad/bushing.png"
    alt: "Flanged bronze bushing drawing with orthographic and isometric views and flange dimensions."
    caption: "Sheet 6 · The pair of bronze bushings uses a Ø1.500 body, Ø2.000 flange, 1.250 overall length, and 0.250 flange thickness."
  - title: "Pivot"
    src: "/assets/images/projects/cad/pivot.png"
    alt: "Pivot drawing showing a mounting plate with four holes and its cylindrical bearing interface."
    caption: "Sheet 7 · A 6.500 × 2.400 top plate with four Ø0.250 holes, 0.313 plate thickness, and a Ø1.500 cylindrical opening."
  - title: "Spring"
    src: "/assets/images/projects/cad/spring.png"
    alt: "Helical spring drawing showing the coil shape, wire diameter, overall height, pitch, and revolution count."
    caption: "Sheet 8 · The coil note specifies 1.845 height, 0.50 pitch, and 3.69 revolutions. The drawing separately dimensions 2.005 overall height and Ø0.250 wire."
spring_note: "The spring's 1.845 helix-height note and 2.005 overall-height dimension are both retained from the sheet. They should not be reported as the same free-height measurement. The drawing documents geometry; it does not establish a spring rate or damping coefficient."

material_selection: |
  **Steel structure and hardware.** The bill of materials specifies steel for the bracket, spacer, shaft, U-support, pivot, spring, and all five hardware types. It does not identify steel grades, heat treatments, or coatings.

  **Bronze bearing interfaces.** Both bushings are listed as bronze. Their flanged geometry locates them at the pivot connection in the exploded assembly; the submission does not specify a bronze alloy or lubrication requirement.

manufacturing_considerations: |
  The drawings communicate different fabrication needs: rotational geometry for the shaft, spacer, and bushings; formed profiles and hole locations for the bracket and U-support; and coil geometry for the spring.

  A manufacturing release would still need material grades, general and fit tolerances, surface-finish requirements, and confirmed hardware catalog references. These are next steps beyond the submitted CAD drawing package.

outcomes:
  - title: "A traceable assembly package"
    description: "The final submission contains an assembled model image, an exploded assembly/BOM sheet, and seven individually dimensioned component sheets. The numbered callouts connect every BOM item to its position in the assembly."
  - title: "Component-to-assembly communication"
    description: "Orthographic views capture dimensions and hole locations, while isometric views explain the shape of the formed supports, pivot, bushings, and spring. The shaft and spring sheets add their specific thread and coil callouts."
validation_note: "This is a CAD modeling and documentation project. The supplied PDFs do not include a motion study, interference-detection results, load analysis, or physical testing, so vehicle fit, suspension performance, and compliance with the interference limits remain unverified here."
next_steps:
  - "Record an interference check against the brief's limits and demonstrate the intended assembly motion with the correct degrees of freedom."
  - "Add catalog part numbers and dimensions for the five hardware types in the requested fastener appendix."
  - "Resolve manufacturing fits and tolerances, then analyze spring stiffness, operating loads, and travel before any prototype testing."

skills:
  - SolidWorks Part Modeling
  - Assembly Design
  - Exploded Views & BOMs
  - Third-angle Drawing Layout
  - Thread Callouts
  - Helical Spring Geometry
  - Material Documentation
resources:
  - label: "Download drawing package · 8 sheets (PDF)"
    url: "/assets/files/shock-absorber-drawing-package.pdf"
---
