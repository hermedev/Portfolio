export interface Project {
  id: string;
  title: string;
  category: 'Studio Project' | 'Indie / WebGL' | 'Prototype';
  company?: string;
  tagline: string;
  genre: string;
  platforms: string[];
  techStack: string[];
  image: string;
  featured: boolean;
  overview: string;
  keyContributions: string[];
  architectureHighlights: {
    title: string;
    description: string;
  }[];
  links: {
    label: string;
    url: string;
    type: 'webgl' | 'youtube' | 'github' | 'unityplay' | 'external';
  }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Work' | 'Course' | 'Education';
  summary: string;
  achievements: string[];
  technologies: string[];
}

export const MIDHUN_INFO = {
  name: "Midhun Babu B",
  handle: "hermedev",
  title: "Unity Game Developer",
  tagline: "Unity developer focused on gameplay systems, multiplayer features, and playable WebGL/mobile projects.",
  phone: "+91 7560855307",
  email: "midhun123tvm@gmail.com",
  location: "Trivandrum, Kerala, India",
  linkedIn: "https://www.linkedin.com/in/midhun-babu-2a3749276/",
  github: "https://github.com/hermedev",
  photo: "/src/assets/midhun/midhun_photo.jpg",
  experienceYears: "Nearly 2 Years",
  summary: "Unity Game Developer with experience across mobile, WebGL, and multiplayer game projects. Comfortable building gameplay systems, UI flow, networked features, and performance-minded Unity scenes using C#."
};

export const PROJECTS: Project[] = [
  {
    id: "tokyo-ludo",
    title: "Tokyo Ludo",
    category: "Studio Project",
    company: "Carina Softlabs Inc.",
    tagline: "Multiplayer board game work focused on turn flow, UI, Photon networking, and connection stability.",
    genre: "Multiplayer Board Game",
    platforms: ["Mobile", "Multiplayer"],
    techStack: ["Unity", "C#", "Photon Fusion", "Photon PUN", "UI"],
    image: "/src/assets/images/tokyo_ludo_gameplay_1791381401710.jpg",
    featured: true,
    overview: "Tokyo Ludo is a multiplayer mobile board game developed at Carina Softlabs Inc. My work covered gameplay flow, UI screens, turn handling, and Photon networking tasks during the move from Photon PUN toward Photon Fusion.",
    keyContributions: [
      "Worked on Photon PUN to Photon Fusion migration tasks, including session flow and networked state handling.",
      "Built and refined UI/gameplay flow for turns, pawn movement, and player feedback.",
      "Debugged connection, turn-order, and sync issues during multiplayer testing."
    ],
    architectureHighlights: [
      {
        title: "Multiplayer Turn Flow",
        description: "Handled dice roll, pawn movement, turn change, and reconnect-related state across Photon sessions."
      },
      {
        title: "UI and State Feedback",
        description: "Connected gameplay states to clear UI feedback so players could understand active turns and valid actions."
      }
    ],
    links: [
      { label: "Carina Softlabs Inc.", url: "https://carinasoftlabs.com", type: "external" },
      { label: "GitHub Profile", url: "https://github.com/hermedev", type: "github" }
    ]
  },
  {
    id: "warvox",
    title: "Warvox",
    category: "Studio Project",
    company: "Carina Softlabs Inc.",
    tagline: "MMORPG feature work across PvP systems, dungeon flow, voice chat, and gameplay balancing.",
    genre: "MMORPG / PvP Fantasy",
    platforms: ["PC", "Mobile", "Multiplayer"],
    techStack: ["Unity", "C#", "Mirror", "Photon", "URP", "VFX/SFX"],
    image: "/src/assets/images/warvox_mmorpg_siege_1791381412869.jpg",
    featured: true,
    overview: "Warvox is a fantasy MMORPG project at Carina Softlabs Inc. I contributed to PvP gameplay features, dungeon-related systems, proximity voice chat integration, and iteration on weapon skills.",
    keyContributions: [
      "Worked on Governor and Castle PvP features, including contract setup, defense rules, and validation logic.",
      "Implemented dungeon flow tasks for separating parties into their own gameplay spaces.",
      "Integrated proximity voice chat and tested audio behavior during multiplayer sessions.",
      "Adjusted weapon skill values, animation triggers, VFX, and SFX based on gameplay testing."
    ],
    architectureHighlights: [
      {
        title: "PvP Rules and Validation",
        description: "Built logic for guild contracts, defender setup, and rule checks around castle PvP flow."
      },
      {
        title: "Voice and Combat Iteration",
        description: "Worked on proximity voice behavior alongside weapon skill tuning and combat feedback."
      }
    ],
    links: [
      { label: "Studio Info", url: "https://carinasoftlabs.com", type: "external" },
      { label: "GitHub Profile", url: "https://github.com/hermedev", type: "github" }
    ]
  },
  {
    id: "cheezy-wheelz",
    title: "Cheezy Wheelz",
    category: "Studio Project",
    company: "Carina Softlabs Inc.",
    tagline: "3D delivery game work covering motorcycle controls, delivery flow, AI traffic, GPS, and mobile optimization.",
    genre: "3D Open-World Delivery",
    platforms: ["Mobile", "3D Physics"],
    techStack: ["Unity", "C#", "Vehicle Physics", "AI", "NavMesh", "Addressables"],
    image: "/src/assets/images/cheezy_wheelz_delivery_1791381427184.jpg",
    featured: true,
    overview: "Cheezy Wheelz is a mobile 3D food delivery game. My work focused on the delivery loop, motorcycle control feel, AI traffic/pedestrian behavior, minimap navigation, and mobile performance improvements.",
    keyContributions: [
      "Built delivery mission flow with pickup, route guidance, timers, completion, and rewards.",
      "Tuned motorcycle controls using an existing vehicle physics setup, including wheelie and drift feel.",
      "Worked on AI traffic and pedestrian movement with route variation and intersection checks.",
      "Added GPS/minimap guidance for delivery routes.",
      "Improved mobile performance with object pooling, Addressables, and scene optimization."
    ],
    architectureHighlights: [
      {
        title: "Delivery Gameplay Loop",
        description: "Connected pickup, navigation, delivery timing, reward calculation, and result feedback into one playable loop."
      },
      {
        title: "Mobile Scene Optimization",
        description: "Used pooling and asset loading improvements to keep city gameplay more stable on mobile."
      }
    ],
    links: [
      { label: "Studio Showcase", url: "https://carinasoftlabs.com", type: "external" },
      { label: "GitHub Profile", url: "https://github.com/hermedev", type: "github" }
    ]
  },
  {
    id: "game-2048",
    title: "2048 Game",
    category: "Indie / WebGL",
    tagline: "Playable Unity WebGL version of 2048 with tile movement, merging, score, and restart flow.",
    genre: "2D Board Puzzle",
    platforms: ["WebGL / Browser", "Mobile Friendly"],
    techStack: ["Unity", "C#", "WebGL", "2D Grid Logic", "PlayerPrefs"],
    image: "/src/assets/midhun/game_2048.png",
    featured: true,
    overview: "A Unity WebGL 2048 project built to practice grid logic, input handling, tile animation, scoring, and browser export.",
    keyContributions: [
      "Built tile-merging logic, grid movement, keyboard/swipe input, and restart flow.",
      "Added score tracking, game-over detection, and smooth tile movement.",
      "Exported the project to WebGL and tested it in browser."
    ],
    architectureHighlights: [
      {
        title: "Grid Logic",
        description: "Used a 2D grid structure to handle movement, merging, score changes, and game-over checks."
      }
    ],
    links: [
      { label: "Play WebGL Game", url: "https://rerwqef.github.io/2024-WebGame/", type: "webgl" },
      { label: "GitHub Profile", url: "https://github.com/hermedev", type: "github" }
    ]
  },
  {
    id: "killzone",
    title: "KillZone",
    category: "Indie / WebGL",
    tagline: "2D action platformer prototype with movement, shooting, enemies, and simple level goals.",
    genre: "2D Action Platformer",
    platforms: ["PC / Mobile", "2D Platformer"],
    techStack: ["Unity", "C#", "2D Physics", "Animation", "Weapons"],
    image: "/src/assets/midhun/killzone.png",
    featured: true,
    overview: "KillZone is a 2D action platformer prototype made in Unity. It focuses on player movement, weapon handling, enemy behavior, and camera follow during combat.",
    keyContributions: [
      "Developed player movement with jumping, sliding, aiming, and shooting.",
      "Built enemy patrol and shooting behavior.",
      "Implemented camera follow and basic combat feedback."
    ],
    architectureHighlights: [
      {
        title: "2D Combat Loop",
        description: "Combined player aiming, enemy damage, projectiles, and impact feedback for a simple combat loop."
      }
    ],
    links: [
      { label: "Watch Gameplay", url: "https://youtu.be/AHaBcDjm4Qw", type: "youtube" },
      { label: "GitHub Profile", url: "https://github.com/hermedev", type: "github" }
    ]
  },
  {
    id: "driving-master",
    title: "Driving Master",
    category: "Indie / WebGL",
    tagline: "3D parking game prototype with vehicle controls, parking detection, timers, and obstacles.",
    genre: "3D Vehicle Simulator",
    platforms: ["Mobile / PC", "3D Physics"],
    techStack: ["Unity", "C#", "WheelCollider", "Triggers"],
    image: "/src/assets/midhun/driving_master.png",
    featured: true,
    overview: "Driving Master is a 3D parking simulator prototype focused on vehicle control, level progression, collision checks, and parking-zone completion.",
    keyContributions: [
      "Implemented car movement using Unity vehicle physics.",
      "Created parking zone checks for position, alignment, and stop state.",
      "Added level progression with timer and collision penalties."
    ],
    architectureHighlights: [
      {
        title: "Parking Validation",
        description: "Used trigger checks and angle validation to decide whether the vehicle was parked correctly."
      }
    ],
    links: [
      { label: "Watch Gameplay", url: "https://youtu.be/89gjgZfeGvE", type: "youtube" },
      { label: "GitHub Profile", url: "https://github.com/hermedev", type: "github" }
    ]
  },
  {
    id: "brick-breaker",
    title: "Brick Breaker",
    category: "Prototype",
    tagline: "Early Unity training project based on classic brick breaker mechanics.",
    genre: "Arcade / Physics 2D",
    platforms: ["Unity Play", "Browser"],
    techStack: ["Unity", "C#", "Physics 2D", "Unity Play"],
    image: "/src/assets/midhun/brickbreaker.png",
    featured: false,
    overview: "A small Unity Play project made while learning Unity basics. It covers paddle movement, ball physics, scoring, lives, and restart flow.",
    keyContributions: [
      "Built paddle movement, ball bounce behavior, score, and lives.",
      "Added simple effects and audio feedback when bricks are destroyed.",
      "Published the project to Unity Play."
    ],
    architectureHighlights: [
      {
        title: "Paddle Deflection",
        description: "Adjusted ball direction based on where it hits the paddle."
      }
    ],
    links: [
      { label: "Play on Unity Play", url: "https://play.unity.com/en/games/0000d80e-5106-460c-a98c-5f703e5e8348/brickbreacker", type: "unityplay" },
      { label: "GitHub Profile", url: "https://github.com/hermedev", type: "github" }
    ]
  },
  {
    id: "rubiks-cube",
    title: "Rubik's Cube 3D",
    category: "Prototype",
    tagline: "3D puzzle prototype exploring cube face selection, rotation, and transform parenting.",
    genre: "3D Puzzle Prototype",
    platforms: ["PC / Prototype"],
    techStack: ["Unity", "C#", "Transforms", "Vector Math"],
    image: "/src/assets/midhun/cube.png",
    featured: false,
    overview: "A Unity prototype for practicing 3D transforms, runtime parenting, face selection, and rotation snapping.",
    keyContributions: [
      "Developed face selection and rotation pivot logic.",
      "Managed cube piece grouping, rotation, and snap alignment."
    ],
    architectureHighlights: [
      {
        title: "Temporary Pivot Grouping",
        description: "Groups selected cube pieces under a temporary pivot, rotates them, then returns them to the cube hierarchy."
      }
    ],
    links: [
      { label: "Watch Prototype", url: "https://youtu.be/_RUn2X7c8N8", type: "youtube" },
      { label: "GitHub Profile", url: "https://github.com/hermedev", type: "github" }
    ]
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: "Programming",
    description: "Core object-oriented programming, data structures, and algorithms.",
    skills: ["C#", "OOP", "Data Structures & Algorithms"]
  },
  {
    category: "Networking & Multiplayer",
    description: "Networked state synchronization, room systems, and client-server architecture.",
    skills: ["Photon PUN", "Photon Fusion", "Mirror"]
  },
  {
    category: "Unity Development",
    description: "Gameplay, UI, animation, and scene workflows.",
    skills: ["2D/3D Gameplay", "UI", "URP", "Cinemachine", "Animator"]
  },
  {
    category: "Performance",
    description: "Mobile frame budgeting, draw call reduction, and memory management.",
    skills: ["Unity Profiler", "Object Pooling", "Addressables", "Sprite Atlas"]
  },
  {
    category: "Version Control",
    description: "Source code versioning and repository management.",
    skills: ["Git", "GitHub"]
  }
];

export const WORK_HISTORY: Experience[] = [
  {
    role: "Unity Game Developer",
    company: "Carina Softlabs Inc",
    period: "11/2024 - Present",
    location: "Indore, India",
    type: "Work",
    summary: "Worked as a Unity Game Developer on commercial mobile, multiplayer, and 3D gameplay projects.",
    achievements: [
      "Contributed to Photon multiplayer work on Tokyo Ludo, including turn flow, sync issues, and migration tasks.",
      "Worked on PvP, dungeon, proximity voice, and skill-balancing features for Warvox.",
      "Built delivery gameplay, vehicle-control tuning, AI traffic, and GPS/minimap features for Cheezy Wheelz.",
      "Used object pooling, Addressables, and scene optimization for mobile performance."
    ],
    technologies: ["Unity", "C#", "Photon Fusion", "Photon PUN", "Mirror", "URP", "Addressables", "NavMesh"]
  },
  {
    role: "Unity Game Development Course",
    company: "Brototype",
    period: "2023 - 2024",
    location: "Trivandrum, India",
    type: "Course",
    summary: "Hands-on game development training focused on Unity, C# scripting, and playable prototypes.",
    achievements: [
      "Practiced 2D and 3D gameplay programming, Unity workflows, and game-development math.",
      "Built playable prototypes including 2048 WebGL, 2D platformers, and parking simulators.",
      "Strengthened problem-solving through data structures, algorithms, and code reviews."
    ],
    technologies: ["Unity", "C#", "OOP", "Data Structures", "2D/3D Physics", "WebGL"]
  },
  {
    role: "Higher Secondary (Commerce)",
    company: "G.H.S.S. Kilimanoor",
    period: "2021 - 2023",
    location: "Trivandrum, India",
    type: "Education",
    summary: "",
    achievements: [],
    technologies: []
  }
];
