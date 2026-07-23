---
layout: project-cad
theme: cad
category: engineering
title: "Shock Absorber Assembly"
subtitle: "Mechanical design and ASME Y14.5 compliant manufacturing documentation for Mercedes-Benz C-Class"
role: "Design Engineer - Academic Project"
timeline: "Aug 2025 - Dec 2025"
software: "SolidWorks"
featured: true
tags:
  - SolidWorks
  - ASME Y14.5
  - GD&T
  - DFM
  - 3rd Angle Projection

# Project Scenario & Overview
objective: "Initiate the design of a fully functional shock absorber assembly for the Mercedes-Benz C-Class, modeling all custom components and integrating standard hardware to create a fully constrained, interference-free mechanical system."
engineering_mandate: "Act as a Design Engineer to critically evaluate initial reference dimensions, amending part geometries to eliminate physical interferences, identify missing components, and ensure the assembly functions as a proper dynamic suspension system."

# Design Constraints & Interference Management
interference_constraints:
  threaded_allowance: "0.02 in³"
  other_components: "Zero interferences allowed"

# Amendment process steps
amendment_steps:
  - step: 1
    description: "Analyzed initial reference dimensions and identified physical clashes between the shaft, spacer, and U-support during virtual assembly."
  - step: 2
    description: "Adjusted the shaft length and spacer thickness to eliminate axial interferences while maintaining the required overall assembly length."
  - step: 3
    description: "Verified radial clearances between the bronze bushings and the steel shaft, ensuring smooth linear motion without binding."
  - step: 4
    description: "Ran SolidWorks Interference Detection to confirm zero interferences across all non-threaded components, strictly adhering to the 0.02 in³ allowance for threaded fasteners."

# Spring specifications
spring_specs:
  height: "1.845 inches"
  pitch: "0.50 inches"
  revolutions: "3.69"

# Key Design Features (3-column grid)
key_features:
  - title: "Shaft Geometry"
    description: "Features a 0.75-10 thread specification and a precise 0.125\" x 0.125\" keyway for secure torque transmission and component alignment."
  - title: "Bronze Bushings"
    description: "Utilizes SAE bronze bushings to provide a low coefficient of friction and high wear resistance against the steel shaft, eliminating the need for continuous lubrication."
  - title: "Custom Compression Spring"
    description: "Modeled from scratch with specific geometric parameters (1.845\" free height, 0.50\" pitch, 3.69 revolutions) to ensure accurate dynamic suspension behavior."

# Bill of Materials
bom:
  - number: 1
    name: "Self Locking Nut"
    type: "standard"
    material: "Steel"
    quantity: 1
    mcmaster_carr: "Yes"
  - number: 2
    name: "Hex Head Bolt"
    type: "standard"
    material: "Steel"
    quantity: 1
    mcmaster_carr: "Yes"
  - number: 3
    name: "Pivot"
    type: "custom"
    material: "Steel"
    quantity: 1
    mcmaster_carr: "No"
  - number: 4
    name: "Cotter Pin"
    type: "standard"
    material: "Steel"
    quantity: 1
    mcmaster_carr: "Yes"
  - number: 5
    name: "Castle Nut"
    type: "standard"
    material: "Steel"
    quantity: 1
    mcmaster_carr: "Yes"
  - number: 6
    name: "Bushing"
    type: "custom"
    material: "Bronze"
    quantity: 2
    mcmaster_carr: "No"
  - number: 7
    name: "U-Support"
    type: "custom"
    material: "Steel"
    quantity: 1
    mcmaster_carr: "No"
  - number: 8
    name: "Spring"
    type: "custom"
    material: "Steel"
    quantity: 1
    mcmaster_carr: "No"
  - number: 9
    name: "Shaft"
    type: "custom"
    material: "Steel"
    quantity: 1
    mcmaster_carr: "No"
  - number: 10
    name: "Spacer"
    type: "custom"
    material: "Steel"
    quantity: 1
    mcmaster_carr: "No"
  - number: 11
    name: "Bracket"
    type: "custom"
    material: "Steel"
    quantity: 1
    mcmaster_carr: "No"
  - number: 12
    name: "Washer"
    type: "standard"
    material: "Steel"
    quantity: 1
    mcmaster_carr: "Yes"

drawing_pairs:
  - title: "Shaft Assembly Detail"
    model_3d: "/assets/images/shock-absorber/shaft-3d.png"
    drawing_2d: "/assets/images/shock-absorber/shaft-drawing.png"
  - title: "U-Support Internal Geometry"
    model_3d: "/assets/images/shock-absorber/usupport-3d.png"
    drawing_2d: "/assets/images/shock-absorber/usupport-drawing.png"

gallery:
  - src: "/assets/images/shock-absorber/assembly-exploded.png"
    caption: "Exploded isometric view of the complete 12-component shock absorber assembly"
  - src: "/assets/images/shock-absorber/assembly-constrained.png"
    caption: "Fully constrained assembly verifying mechanical fit and component movement"
  - src: "/assets/images/shock-absorber/drawing-sheet-shaft.png"
    caption: "Manufacturing-ready 2D drawing of the shaft, detailing 0.75-10 threads and 0.125\" keyway"
  - src: "/assets/images/shock-absorber/drawing-sheet-spring.png"
    caption: "Spring specification drawing detailing pitch, revolutions, and free height"

material_selection: |
  **Steel Components:** Selected for all primary load-bearing and structural parts (bracket, shaft, pivot, U-support) due to high tensile strength and durability under dynamic suspension loads.
  
  **Bronze Bushings:** Specified for bearing surfaces to provide a low coefficient of friction and high wear resistance against the rotating steel shaft, eliminating the need for continuous external lubrication.

manufacturing_processes: |
  - **CNC Turning & Milling:** Required for custom machined components like the shaft, spacer, and pivot to achieve tight dimensional tolerances and precise surface finishes.
  - **Fabrication:** The U-support and bracket utilize milled or laser-cut profiles with drilled mounting holes.
  - **Standard Hardware:** Bolts, nuts, washers, and cotter pins are off-the-shelf McMaster-Carr components, reducing custom manufacturing complexity and cost.
  - **Compression Spring:** Manufactured to specific geometric parameters (Height: 1.845", Pitch: 0.50", 3.69 revolutions).

lessons_learned:
  - challenge: "Properly dimensioning and tolerancing the 0.125\" x 0.125\" keyway for manufacturing."
    resolution: "Researched standard ANSI keyway dimensions and applied appropriate geometric tolerances to the 2D drawing to ensure proper torque transmission and shaft fit."
  - challenge: "Communicating complex internal geometries and thread specifications to a machinist."
    resolution: "Utilized detailed section views and local detail callouts on the 2D drawings to clearly convey internal features and the 0.75-10 thread specification without cluttering the primary views."
  - challenge: "Ensuring all 12 components assembled without physical interferences."
    resolution: "Systematically applied mechanical mates (concentric, coincident, distance) and utilized SolidWorks interference detection tools to verify clearances before finalizing the drawing package."

skills:
  - SolidWorks Part Modeling
  - SolidWorks Assembly Design
  - ASME Y14.5 Drafting Standards
  - 2D Engineering Drawing Creation
  - GD&T Application
  - Section & Detail Views
  - Thread Specification & Callouts
  - Keyway Design
  - Material Selection
  - Standard Hardware Integration
  - Parametric Modeling & Design Intent
  - Interference Detection

resources:
  - label: "📄 Download Drawing PDFs"
    url: "/assets/pdfs/shock-absorber-drawings.pdf"
  - label: "🔧 View SolidWorks Files"
    url: "https://github.com/manwe-123/shock-absorber-cad"
  - label: "📚 ASME Y14.5 Reference"
    url: "https://www.asme.org/codes-standards/find-codes-standards/y14.5-dimensioning-tolerancing"
---

<!-- 
  This is the Shock Absorber Assembly project page (Mercedes-Benz C-Class).
  The layout handles all the content structure automatically.
  
  The page includes:
  - Constraint Callout Box (interference rules)
  - Bill of Materials table (with custom/standard distinction)
  - Spring specification highlight
  - Key Design Features grid
  - Side-by-side 3D/2D drawing comparisons
  - Image gallery with zoomable lightbox
  - Materials & Manufacturing sections
  - Design Validation & Lessons Learned
  - Technical Skills tag grid
  - Resource download buttons
-->
