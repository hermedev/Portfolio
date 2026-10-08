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
  codeSnippet?: {
    filename: string;
    description: string;
    code: string;
  };
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
  tagline: "Nearly 2 years of experience crafting high-performance 2D & 3D games for Mobile and WebGL. Specializing in multiplayer networking (Photon Fusion & Mirror), gameplay systems, and mobile optimization.",
  phone: "+91 7560855307",
  email: "midhun123tvm@gmail.com",
  location: "Trivandrum, Kerala, India",
  linkedIn: "https://www.linkedin.com/in/midhun-babu-2a3749276/",
  github: "https://github.com/hermedev",
  photo: "/src/assets/midhun/midhun_photo.jpg",
  experienceYears: "Nearly 2 Years",
  summary: "Unity Game Developer specializing in multiplayer architecture, networked state synchronization, and performance optimization using C#, Photon Fusion, Photon PUN, and Mirror. Proven experience shipping mobile and WebGL titles, implementing complex gameplay loops like vehicle drift physics, AI traffic, MMORPG castle PvP systems, and mobile memory reduction via Addressables and object pooling."
};

export const PROJECTS: Project[] = [
  {
    id: "tokyo-ludo",
    title: "Tokyo Ludo",
    category: "Studio Project",
    company: "Carina Softlabs Inc.",
    tagline: "Multiplayer board game featuring Photon Fusion Shared Mode migration, networked state sync, and real-time turn management.",
    genre: "Multiplayer Board Game",
    platforms: ["Mobile (Android/iOS)", "Multiplayer"],
    techStack: ["Unity", "C#", "Photon Fusion", "Photon PUN", "UI Toolkit", "Network State Sync"],
    image: "/src/assets/images/tokyo_ludo_gameplay_1791381401710.jpg",
    featured: true,
    overview: "Tokyo Ludo is a dynamic multiplayer mobile board game developed at Carina Softlabs Inc. Midhun led the architectural migration from legacy Photon PUN (Master Client model) to modern Photon Fusion Shared Mode, ensuring rock-solid session stability, minimal packet overhead, and smooth reconnection handling.",
    keyContributions: [
      "Led the migration of multiplayer architecture from Photon PUN (Master Client) to Photon Fusion Shared Mode, redesigning networked state synchronization, session management, and reconnection handling.",
      "Built the full game UI and gameplay flow, including turn management, pawn movement animations, and state transitions.",
      "Diagnosed and resolved critical networked race conditions and desync bugs, dramatically improving room connection stability."
    ],
    architectureHighlights: [
      {
        title: "Photon Fusion Shared Mode Migration",
        description: "Re-architected client-authoritative state synchronization to eliminate reliance on host disconnect dropouts, establishing tick-accurate turn tokens."
      },
      {
        title: "Deterministic Turn State Machine",
        description: "Engineered a robust state machine managing rolling phases, legal pawn move queries, turn timers, and auto-skip disconnect fallbacks."
      }
    ],
    links: [
      { label: "Carina Softlabs Inc.", url: "https://carinasoftlabs.com", type: "external" },
      { label: "Developer GitHub", url: "https://github.com/hermedev", type: "github" }
    ],
    codeSnippet: {
      filename: "LudoTurnNetworkManager.cs",
      description: "Photon Fusion Networked Turn State Management",
      code: `using Fusion;
using UnityEngine;

namespace TokyoLudo.Multiplayer
{
    public class LudoTurnNetworkManager : NetworkBehaviour
    {
        [Networked] public int CurrentPlayerIndex { get; set; }
        [Networked] public TickTimer TurnTimer { get; set; }
        [Networked] public NetworkBool IsDiceRolled { get; set; }

        public override void Spawned()
        {
            if (Object.HasStateAuthority)
            {
                StartNewTurn(0);
            }
        }

        public void StartNewTurn(int nextPlayer)
        {
            CurrentPlayerIndex = nextPlayer;
            IsDiceRolled = false;
            TurnTimer = TickTimer.CreateFromSeconds(Runner, 15f);
        }

        public override void FixedUpdateNetwork()
        {
            if (TurnTimer.Expired(Runner) && Object.HasStateAuthority)
            {
                // Auto-advance turn if player timeouts
                AdvanceToNextTurn();
            }
        }

        private void AdvanceToNextTurn()
        {
            StartNewTurn((CurrentPlayerIndex + 1) % 4);
        }
    }
}`
    }
  },
  {
    id: "warvox",
    title: "Warvox",
    category: "Studio Project",
    company: "Carina Softlabs Inc.",
    tagline: "MMORPG featuring Governor & Castle PvP systems, zone-based dungeon instancing, and proximity voice chat.",
    genre: "MMORPG / PvP Fantasy",
    platforms: ["PC", "Mobile", "Multiplayer"],
    techStack: ["Unity", "C#", "Mirror / Fusion", "Proximity Voice", "URP", "VFX/SFX Balancing"],
    image: "/src/assets/images/warvox_mmorpg_siege_1791381412869.jpg",
    featured: true,
    overview: "Warvox is an ambitious fantasy MMORPG title at Carina Softlabs Inc. Midhun developed core PvP governance systems, zone-based instanced dungeons, and spatialized voice communication for guild raids.",
    keyContributions: [
      "Built the Governor and Castle PvP system, including contract creation, defense terms, tax mechanisms, and validation logic.",
      "Implemented zone-based dungeon instancing allowing multiple parties to run isolated dungeon encounters without server overload.",
      "Integrated a proximity-based 3D voice chat system enabling natural spatial audio during massive castle sieges.",
      "Worked on weapon skill balancing by tweaking gameplay parameters, animation triggers, and integrating dynamic VFX/SFX."
    ],
    architectureHighlights: [
      {
        title: "Castle PvP Contract & Defense Engine",
        description: "Implemented custom contract validation state verifying guild bids, defender rosters, siege timers, and automatic castle ownership transfer."
      },
      {
        title: "Proximity Spatial Audio Integration",
        description: "Configured real-time 3D audio attenuation curves and player distance filters to deliver clear voice communication during 50+ player castle skirmishes."
      }
    ],
    links: [
      { label: "Studio Info", url: "https://carinasoftlabs.com", type: "external" },
      { label: "Developer GitHub", url: "https://github.com/hermedev", type: "github" }
    ]
  },
  {
    id: "cheezy-wheelz",
    title: "Cheezy Wheelz",
    category: "Studio Project",
    company: "Carina Softlabs Inc.",
    tagline: "3D open-world food delivery simulator with motorcycle drift mechanics, AI traffic, GPS navigation, and mobile optimization.",
    genre: "3D Open-World Delivery Simulation",
    platforms: ["Mobile (Android)", "3D Physics"],
    techStack: ["Unity", "C#", "Motorcycle Physics", "AI NavMesh", "GPS Minimap", "Addressables", "Object Pooling"],
    image: "/src/assets/images/cheezy_wheelz_delivery_1791381427184.jpg",
    featured: true,
    overview: "Cheezy Wheelz is an open-world motorcycle food delivery game developed for mobile devices. Midhun engineered the complete core delivery gameplay loop, custom motorcycle physics extensions, pedestrian/vehicle AI traffic, and optimized the mobile memory footprint.",
    keyContributions: [
      "Built the core gameplay loop: a time-based food delivery system where delivery time and food temperature dynamically determine player rewards.",
      "Extended a third-party motorcycle physics package with responsive wheelie, lean angle, and drift mechanics.",
      "Developed AI pedestrian and traffic systems with intersection detection and dynamic path variation.",
      "Designed a real-time GPS waypoint and minimap navigation system guiding delivery routes through busy city streets.",
      "Optimized mobile performance using object pooling, Addressables for city assets, and dynamic NavMesh management."
    ],
    architectureHighlights: [
      {
        title: "Dynamic Food Temperature & Delivery Scoring",
        description: "Engineered real-time thermal decay calculations affected by speed, weather, and delivery time that calculate tip bonuses and ratings."
      },
      {
        title: "Intersection AI & Traffic Management",
        description: "Built spline-based vehicle traffic with Raycast vehicle avoidance, traffic light yield triggers, and dynamic NavMesh obstacle management."
      }
    ],
    links: [
      { label: "Studio Showcase", url: "https://carinasoftlabs.com", type: "external" },
      { label: "Developer GitHub", url: "https://github.com/hermedev", type: "github" }
    ],
    codeSnippet: {
      filename: "FoodDeliveryTemperatureController.cs",
      description: "Delivery Temperature & Reward Calculation System",
      code: `using UnityEngine;

namespace CheezyWheelz.Gameplay
{
    public class FoodDeliveryTemperatureController : MonoBehaviour
    {
        [SerializeField] private float initialTemperature = 100f; // Celsius
        [SerializeField] private float coolingRatePerSecond = 0.85f;
        [SerializeField] private float minimumTemperatureThreshold = 35f;

        private float _currentTemperature;
        private float _deliveryStartTime;

        public void StartDelivery()
        {
            _currentTemperature = initialTemperature;
            _deliveryStartTime = Time.time;
        }

        private void Update()
        {
            if (_currentTemperature > minimumTemperatureThreshold)
            {
                _currentTemperature -= coolingRatePerSecond * Time.deltaTime;
            }
        }

        public (int reward, string rating) CompleteDelivery(int baseReward)
        {
            float elapsed = Time.time - _deliveryStartTime;
            float temperatureRatio = Mathf.Clamp01(_currentTemperature / initialTemperature);
            
            int finalReward = Mathf.RoundToInt(baseReward * (0.6f + (temperatureRatio * 0.8f)));
            string rating = temperatureRatio > 0.8f ? "Piping Hot! 5-Stars" : 
                           temperatureRatio > 0.5f ? "Warm & Tasty 4-Stars" : "Lukewarm 3-Stars";

            return (finalReward, rating);
        }
    }
}`
    }
  },
  {
    id: "game-2048",
    title: "2048 Game",
    category: "Indie / WebGL",
    tagline: "Full-featured 2D puzzle board game built for WebGL with tile-merging logic, smooth animations, and high score tracking.",
    genre: "2D Board Puzzle",
    platforms: ["WebGL / Browser", "Mobile Friendly"],
    techStack: ["Unity 2022", "C#", "WebGL", "2D Grid Algorithms", "PlayerPrefs"],
    image: "/src/assets/midhun/game_2048.png",
    featured: true,
    overview: "A clean, responsive, and scalable 2048 clone developed by Midhun in Unity and compiled for WebGL. Features 4x4 matrix grid logic, smooth tile sliding animations, swipe/arrow key inputs, game-over detection, and persistent high scores.",
    keyContributions: [
      "Built a complete 2048 clone for WebGL with tile-merging logic, grid system, and keyboard / swipe controls.",
      "Added high score tracking, game-over detection, restart handling, and smooth tile lerp animations.",
      "Optimized WebGL export for instant in-browser loading with low memory footprint."
    ],
    architectureHighlights: [
      {
        title: "Matrix Tile Shift & Merge Logic",
        description: "Implemented clean 2D array row and column shifting algorithms that handle single-merge per turn rules matching the original 2048 specifications."
      }
    ],
    links: [
      { label: "Play WebGL Game Live", url: "https://rerwqef.github.io/2024-WebGame/", type: "webgl" },
      { label: "GitHub Repository", url: "https://github.com/hermedev", type: "github" }
    ]
  },
  {
    id: "killzone",
    title: "KillZone",
    category: "Indie / WebGL",
    tagline: "Action-packed 2D platform runner game inspired by Killer Bean, where players eliminate enemies and escape the compound.",
    genre: "2D Action Platform Runner",
    platforms: ["PC / Mobile", "2D Platformer"],
    techStack: ["Unity", "C#", "2D Physics", "Animation State Machine", "Weapon Mechanics"],
    image: "/src/assets/midhun/killzone.png",
    featured: true,
    overview: "KillZone is a fast-paced 2D action platform runner. The player controls an operative equipped with dual pistols, navigating obstacle-laden levels, eliminating patrol guards with precision shooting, dodging bullets, and escaping before the timer expires.",
    keyContributions: [
      "Developed responsive player movement physics with jumping, sliding, and weapon aiming.",
      "Built enemy patrol AI with vision cones and reactive shooting behaviors.",
      "Implemented dynamic camera framing following player combat maneuvers."
    ],
    architectureHighlights: [
      {
        title: "2D Combat & Hit Detection",
        description: "Raycast and projectile-based hit registration with particle impact sparks and ragdoll reactions."
      }
    ],
    links: [
      { label: "Watch Gameplay Video", url: "https://youtu.be/AHaBcDjm4Qw", type: "youtube" },
      { label: "GitHub Profile", url: "https://github.com/hermedev", type: "github" }
    ]
  },
  {
    id: "driving-master",
    title: "Driving Master",
    category: "Indie / WebGL",
    tagline: "3D parking simulator challenging players to navigate tight obstacle courses and park accurately before time runs out.",
    genre: "3D Vehicle Simulator",
    platforms: ["Mobile / PC", "3D Physics"],
    techStack: ["Unity 3D", "C#", "WheelCollider Physics", "Parking Zone Triggers"],
    image: "/src/assets/midhun/driving_master.png",
    featured: true,
    overview: "Driving Master is a precision 3D car parking simulator game. Players must maneuver vehicles through obstacle-strewn parking lots, sharp reverse corners, and narrow barriers without scratching the paint, successfully stopping inside designated parking boxes.",
    keyContributions: [
      "Integrated realistic WheelCollider vehicle physics with steering angle limits, acceleration curves, and braking.",
      "Engineered parking bay alignment detection evaluating parking box angle, boundary overlap, and stationary state.",
      "Created multi-tier level progression with countdown timers and collision penalty counters."
    ],
    architectureHighlights: [
      {
        title: "Precision Parking Trigger Box System",
        description: "Trigger volume evaluating all 4 wheels inside parking bounds with dot product alignment checks before rewarding completion stars."
      }
    ],
    links: [
      { label: "Watch Gameplay Video", url: "https://youtu.be/89gjgZfeGvE", type: "youtube" },
      { label: "GitHub Profile", url: "https://github.com/hermedev", type: "github" }
    ]
  },
  {
    id: "brick-breaker",
    title: "Brick Breaker Game",
    category: "Indie / WebGL",
    tagline: "Classic arcade brick breaking game created during early Unity training, featuring life counters, destroy VFX, and score tracking.",
    genre: "Arcade / Physics 2D",
    platforms: ["WebGL (Unity Play)", "Browser"],
    techStack: ["Unity", "C#", "Physics 2D", "Particle VFX", "Unity Play WebGL"],
    image: "/src/assets/midhun/brickbreaker.png",
    featured: false,
    overview: "Created in Midhun's 3rd week of learning Unity, Brick Breaker showcases core physics understanding, paddle controls, ball reflection angles, brick destruction particle effects, lives management, and game over loops.",
    keyContributions: [
      "Built 2D paddle movement with physics ball bounces and variable rebound angles based on paddle hit position.",
      "Added particle shatter effects upon brick destruction and audio feedback.",
      "Published directly to Unity Play for instant web browser gameplay."
    ],
    architectureHighlights: [
      {
        title: "Paddle Angle Deflection",
        description: "Calculates normalized offset from paddle center to redirect ball trajectories dynamically."
      }
    ],
    links: [
      { label: "Play on Unity Play", url: "https://play.unity.com/en/games/0000d80e-5106-460c-a98c-5f703e5e8348/brickbreacker", type: "unityplay" },
      { label: "GitHub Profile", url: "https://github.com/hermedev", type: "github" }
    ]
  },
  {
    id: "rubiks-cube",
    title: "Rubik's Cube 3D Simulation",
    category: "Prototype",
    tagline: "Interactive 3D Rubik's cube simulator exploring face rotation matrices and slice grouping algorithms in Unity.",
    genre: "3D Puzzle Simulation",
    platforms: ["PC / Prototype"],
    techStack: ["Unity 3D", "C#", "Transform Parenting", "Vector Rotation Math"],
    image: "/src/assets/midhun/cube.png",
    featured: false,
    overview: "A 3D simulation prototype replicating the classic Rubik's cube. Explores dynamic runtime parenting of individual sub-cubes to rotating face pivots, preserving coordinate alignment across multiple 90-degree rotations.",
    keyContributions: [
      "Developed face selection and rotational pivot hierarchy in 3D space.",
      "Managed cubelet re-parenting and alignment snap calculations post-turn."
    ],
    architectureHighlights: [
      {
        title: "Dynamic Pivot Grouping",
        description: "Dynamically identifies all 9 cubelets sharing a normal axis plane, parents them to a temporary rotation pivot, and un-parents back to root."
      }
    ],
    links: [
      { label: "Watch Prototype Video", url: "https://youtu.be/_RUn2X7c8N8", type: "youtube" },
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
    category: "Unity Skill Set",
    description: "2D/3D development, render pipelines, cinematics, and animation.",
    skills: ["2D/3D Game Development", "Multiplayer", "AR/VR", "URP", "HDRP", "Cinemachine", "Timeline", "Animator"]
  },
  {
    category: "Performance and Optimization",
    description: "Mobile frame budgeting, draw call reduction, and memory management.",
    skills: ["Unity Profiler", "Object Pooling", "Occlusion Culling", "Addressables", "Sprite Atlas"]
  },
  {
    category: "Version Control",
    description: "Source code versioning, repository management, and team collaboration.",
    skills: ["Git", "GitHub", "Perforce"]
  },
  {
    category: "Other Engines",
    description: "Multi-platform authoring and creative game engines.",
    skills: ["Terra Studio", "Roblox"]
  }
];

export const WORK_HISTORY: Experience[] = [
  {
    role: "Unity Game Developer",
    company: "Carina Softlabs Inc",
    period: "11/2024 – 08/2026",
    location: "Indore, India",
    type: "Work",
    summary: "Worked as a full-time Unity Game Developer developing commercial multiplayer, MMORPG, and 3D simulation titles.",
    achievements: [
      "Led Tokyo Ludo multiplayer architecture migration from Photon PUN to Photon Fusion Shared Mode, overhauling state sync and reconnect handling.",
      "Engineered Governor & Castle PvP contracts, zone-based instanced dungeons, and proximity voice chat in Warvox MMORPG.",
      "Developed motorcycle wheelie/drift physics, AI traffic systems, GPS navigation, and temperature-based delivery mechanics in Cheezy Wheelz 3D.",
      "Applied mobile optimization techniques including Addressables, pre-warmed object pools, and dynamic NavMesh management."
    ],
    technologies: ["Unity", "C#", "Photon Fusion", "Photon PUN", "Mirror", "URP", "Addressables", "NavMesh"]
  },
  {
    role: "Unity Game Development Course",
    company: "Brototype",
    period: "2023 – 2024",
    location: "Trivandrum, India",
    type: "Course",
    summary: "Intensive hands-on game development training specializing in Unity engine, C# scripting, and production game mechanics.",
    achievements: [
      "Mastered 2D and 3D game architectures, gameplay programming, and math for game developers.",
      "Built multiple playable prototypes including 2048 WebGL, 2D platformers, and parking simulators.",
      "Strengthened problem-solving through data structures, algorithms, and code reviews."
    ],
    technologies: ["Unity", "C#", "OOP", "Data Structures", "2D/3D Physics", "WebGL"]
  },
  {
    role: "Higher Secondary (Commerce)",
    company: "G.H.S.S. Kilimanoor",
    period: "2021 – 2023",
    location: "Trivandrum, India",
    type: "Education",
    summary: "",
    achievements: [],
    technologies: []
  }
];
