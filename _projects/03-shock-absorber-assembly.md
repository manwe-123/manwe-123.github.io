---
layout: project-cad
title: "Shock Absorber Assembly"
subtitle: "Mechanical design and ASME Y14.5 compliant manufacturing documentation for Mercedes-Benz C-Class"
role: "Design Engineer - Academic Project"
timeline: "Aug 2025 - Dec 2025"
software: "SolidWorks"
tags:
  - SolidWorks
  - ASME Y14.5
  - GD&T
  - DFM
  - 3rd Angle Projection

# Project Scenario & Overview
objective: "Initiate the design of a shock absorber for the Mercedes C-Class, creating all parts and a fully constrained assembly."
engineering_mandate: "Be an engineer and amend areas that are not correct, specifically focusing on resolving physical interferences and identifying missing parts."

# Design Constraints & Interference Management
interference_constraints:
  threaded_allowance: "0.02 in³"
  other_components: "Zero interferences allowed"

# Amendment process steps (optional - leave empty to hide)
amendment_steps:
  - step: 1
    description: ""
  - step: 2
    description: ""
  - step: 3
    description: ""
  - step: 4
    description: ""

# Spring specifications
spring_specs:
  height: ""
  pitch: ""
  revolutions: ""

# Key Design Features (3-column grid)
key_features:
  - title: ""
    description: ""
  - title: ""
    description: ""
  - title: ""
    description: ""

# Optional: Custom BOM (if not provided, defaults will be used)
# bom:
#   - number: 1
#     name: "Shock Body (Outer Tube)"
#     type: "custom"
#     material: "Steel AISI 1018"
#     quantity: 1
#   - number: 2
#     name: "Piston Rod"
#     type: "custom"
#     material: "Steel AISI 1045, Chrome Plated"
#     quantity: 1
#   - number: 3
#     name: "Socket Head Cap Screw"
#     type: "standard"
#     material: "Steel"
#     quantity: 1
#     mcmaster_carr: "91292A***"
objective: "Design a fully constrained automotive shock absorber assembly with complete manufacturing documentation, including fully dimensioned 2D drawings, section views, thread and keyway callouts, and GD&T per ASME Y14.5 standards."

bom:
  - number: 1
    name: "Self Locking Nut"
    material: "Steel"
    quantity: 1
  - number: 2
    name: "Hex Head Bolt"
    material: "Steel"
    quantity: 1
  - number: 3
    name: "Pivot"
    material: "Steel"
    quantity: 1
  - number: 4
    name: "Cotter Pin"
    material: "Steel"
    quantity: 1
  - number: 5
    name: "Castle Nut"
    material: "Steel"
    quantity: 1
  - number: 6
    name: "Bushing"
    material: "Bronze"
    quantity: 2
  - number: 7
    name: "U-Support"
    material: "Steel"
    quantity: 1
  - number: 8
    name: "Spring"
    material: "Steel"
    quantity: 1
  - number: 9
    name: "Shaft"
    material: "Steel"
    quantity: 1
  - number: 10
    name: "Spacer"
    material: "Steel"
    quantity: 1
  - number: 11
    name: "Bracket"
    material: "Steel"
    quantity: 1
  - number: 12
    name: "Washer"
    material: "Steel"
    quantity: 1

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

# Optional: Custom manufacturing processes
# manufacturing_processes: |
#   - **CNC Turning:** Used for cylindrical parts...
#   - **CNC Milling:** Employed for flat features...
#   - **McMaster-Carr Sourcing:** Standard fasteners downloaded from library...

# Optional: Custom lessons learned
# lessons_learned:
#   - challenge: "Interference Resolution: Initial dimensions caused physical clashes in the assembly."
#     resolution: "Systematically applied mechanical mates, utilized SolidWorks interference detection, and amended part dimensions to achieve zero interferences outside of the threaded allowance."
#   - challenge: ""
#     resolution: ""

# Optional: Custom skills list
# skills:
#   - SolidWorks Part Modeling
#   - GD&T
#   - Section Views
#   - Interference Detection
#   - Dimensional Analysis

# Optional: Custom resource links
# resources:
#   - label: "📄 Download Compilation Document (PDF)"
#     url: "/path/to/pdf"
#   - label: "🔧 View SolidWorks Files"
#     url: "https://github.com/your-repo"
#   - label: "📐 ASME Y14.5 Reference"
#     url: "https://www.asme.org/"
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
  
  REQUIRED FIELDS TO FILL IN:
  - objective: Brief description of the design objective
  - engineering_mandate: The mandate to amend incorrect areas
  - interference_constraints.threaded_allowance: Allowed interference for threaded parts
  - interference_constraints.other_components: Interference rule for other parts
  - amendment_steps: 4 steps describing the amendment process
  - spring_specs: Height, pitch, and revolutions of the compression spring
  - key_features: 3 key design features with titles and descriptions
  
  OPTIONAL SECTIONS (uncomment to use):
  - bom: Custom Bill of Materials (type: "custom" or "standard")
  - drawing_pairs: Side-by-side 3D/2D comparisons
  - gallery: Additional image gallery
  - material_selection: Custom material details
  - manufacturing_processes: Custom manufacturing details
  - lessons_learned: Challenge/Resolution pairs
  - skills: Technical skills demonstrated
  - resources: Download/view links
  
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
