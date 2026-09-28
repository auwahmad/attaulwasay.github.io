/**
* Projects Data Source
* Centralized file for maintaining research and freelance projects.
*/

const academicProjects = [
  {
    id: "proj-1",
    tag: "Control Systems & MATLAB",
    title: "Floating Ball PID Control System",
    description: "Designed a 3D-printed levitation base in SolidWorks, driven by Arduino UNO and Simulink PID tuning via ultrasonic sensor.",
    tools: ["MATLAB", "Simulink", "Arduino", "SolidWorks", "PID Control"],
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
    ],
    links: [
      { name: "View Case Study", url: "#" },
      { name: "GrabCAD Model", url: "https://grabcad.com/dashboard" }
    ],
    has3dViewer: false
  },
  {
    id: "proj-2",
    tag: "Hardware-In-The-Loop (HIL)",
    title: "Ball Balancing Control System",
    description: "Formulated first-principles mathematical modeling in Simulink, validated with HIL testing.",
    tools: ["Simulink", "QUARC", "Quanser QLab", "LEGO EV3", "HIL Testing"],
    images: [
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80"
    ],
    links: [
      { name: "Technical Paper", url: "#" }
    ],
    has3dViewer: false
  },
  {
    id: "proj-3",
    tag: "Robotics & Kinematics",
    title: "SCORBOT 5-Axis Kinematic Manipulator Modeling",
    description: "Implemented coordinate frame transformations, Forward/Inverse Kinematics using DH parameters in MATLAB.",
    tools: ["MATLAB", "Robotics System Toolbox", "DH Parameters", "Kinematics"],
    images: [],
    links: [
      { name: "GitHub Repo", url: "#" }
    ],
    has3dViewer: true // Activates 3D Placeholder canvas
  },
  {
    id: "proj-4",
    tag: "Autonomous Mobile Robotics",
    title: "Mobile Robot Odometry & Localization",
    description: "Built wheel encoder-based dead reckoning algorithms and System Identification on Arduino engineering kit.",
    tools: ["Arduino", "System ID", "Odometry", "ROS", "C++"],
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
    ],
    links: [
      { name: "Demo Video", url: "#" }
    ],
    has3dViewer: false
  }
];

const freelanceProjects = [
  {
    id: "free-1",
    tag: "Upwork Client Contract",
    title: "Precision Industrial Enclosure & DFM Assembly",
    description: "Delivered complete 3D mechanical CAD modeling, sheet metal development, and DFM assembly analysis.",
    tools: ["SolidWorks", "Sheet Metal", "DFM", "Assembly Modeling"],
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    ],
    links: [
      { name: "Upwork Verification", url: "https://www.upwork.com/freelancers/~01959fb6a9b89adb92?mp_source=share" }
    ],
    has3dViewer: false
  },
  {
    id: "free-2",
    tag: "Freelancer.com Project (SANATKAAR)",
    title: "Complex Surface Modeling & Mechanical Mechanism",
    description: "Designed ergonomic plastic consumer casing with interlocking snapping mechanisms for injection molding.",
    tools: ["SolidWorks Surfacing", "Motion Study", "Plastic Injection DFM"],
    images: [],
    links: [
      { name: "Freelancer Profile", url: "https://www.freelancer.com/u/SANATKAAR" }
    ],
    has3dViewer: true // Activates 3D Placeholder canvas
  },
  {
    id: "free-3",
    tag: "CAD Visualization & Rendering",
    title: "Photorealistic CAD Rendering & Technical Animation",
    description: "Created photorealistic product renders and 360-degree exploded view animations in SolidWorks Composer.",
    tools: ["SolidWorks Composer", "Rendering", "Exploded View Animation"],
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
    ],
    links: [
      { name: "GrabCAD Gallery", url: "https://grabcad.com/dashboard" }
    ],
    has3dViewer: false
  }
];
