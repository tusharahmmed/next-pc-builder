const category = [
  "processor",
  "motherboard",
  "ram",
  "power",
  "storage",
  "monitor",
  "others",
];

const others = [
  {
    name: "Matias Wireless Aluminum Tenkeyless Keyboard for Mac (Space Gray)",
    category: "others",
    img: "/products/others/keyboard.jpg",
    status: "In Stock",
    price: 8700,
    description:
      "The space gray Wireless Aluminum Tenkeyless Keyboard from Matias is designed with an Apple-like aesthetic and Mac-friendly function keys. It utilizes wireless connectivity via Bluetooth and features convenient multimedia keys that can manage volume, pause/play, skipping between tracks, screen brightness, and more.",
    features: [
      "MPN: FK408BTB",
      "Model: Matias Wireless Tenkeyless",
      "Multimedia Keys",
      "Bluetooth Connectivity",
      "Wireless Keyboard Design",
      "Mac-Friendly Function Keys",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Layla Johnson"},
    ],
  },
  {
    name: "Logitech MX Master 3 Advanced Wireless 7 Button Mouse",
    category: "others",
    img: "/products/others/mouse.jpg",
    status: "In Stock",
    price: 2500,
    description:
      "MX Master 3 is an advanced Master series mouse, designed for creatives and engineered for coders. It has 7 buttons: Left/Right-click, Back/Forward, App-Switch, Wheel mode-shift, Middle click. Scroll 1,000 lines in 1 second.",
    features: [
      "MPN: 910-005698",
      "Model: MX Master 3",
      "Wireless operating distance: 32.81 ft (10 m)",
      "Advanced 2.4 GHz wireless technology",
      "Up to 70 days on a full charge",
      "200 to 4000 dpi",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Caleb Neal"},
    ],
  },
  {
    name: "Edifier Airpulse A300 Pro Hi-Res Audio Bluetooth Speaker with Stand",
    category: "others",
    img: "/products/others/speaker.jpg",
    status: "In Stock",
    price: 7800,
    description:
      "Edifier Airpulse A300 Pro is Certified with Hi-Res audio to ensure world-class quality. This speaker supports a wide range of input types, including USB, coaxial, Bluetooth, and AUX.",
    features: [
      "MPN: Airpulse A300Pro +ST",
      "Model: Airpulse A300 Pro",
      "Input types: including USB, coaxial, Bluetooth & AUX",
      "Certified with Hi-Res audio",
      "Xmos Processor",
      "6.5-inch Aluminum Mid-woofer",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Caleb Neal"},
    ],
  },
];
const monitor = [
  {
    name: 'ViewSonic XG270QG 27" 2K QHD 165Hz Nano IPS Gaming Monitor',
    category: "monitor",
    img: "/products/monitor/1.webp",
    status: "In Stock",
    price: 109900,
    description:
      'The ViewSonic XG270QG 27" 2k QHD Gaming Monitor should be as inspiring as your adventures. It should give you the best experience power possible, without dominating your desktop.',
    features: [
      "Model: XG270QG",
      "Resolution: QHD (2560 x 1440)",
      "Display: IPS, LED, 1ms",
      "Ports: HDMI, 3.5mm Audio, USB 3.2",
      "Features: Speaker, Flicker-Free, Low Blue Light",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Layla Johnson"},
    ],
  },
  {
    name: 'BenQ EW3880R 37.5" 4K UHD Curved Monitor',
    category: "monitor",
    img: "/products/monitor/2.webp",
    status: "In Stock",
    price: 105400,
    description:
      'BenQ EW3880R 37.5" monitor combines ultra slim bezels with hidden cable management. Complementing BenQ with Low Blue Light Technology and Flicker-Free performance for extended viewing comfort, industry-leading Brightness Intelligence Technology delivers exquisite details in any ambient lighting environment.',
    features: [
      "Model: EW3880R",
      "Resolution: 4K UHD (3840x 1600)",
      "Display: IPS, 60Hz, 4ms",
      "Ports: 2x HDMI, 1x DP, 1x Type-C",
      "Features: Eye Care, Flicker Free, Low Blue Light",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Caleb Neal"},
    ],
  },
  {
    name: "LG 34GN850-B 34-Inch Curved UltraGear Nano IPS 144Hz Gaming Monitor",
    category: "monitor",
    img: "/products/monitor/3.webp",
    status: "In Stock",
    price: 125000,
    description:
      "LG 34GN850-B Gaming Monitor featured with 34-inch UltraWide QHD (3440x1440) Curved, Nano IPS 1ms (GtG), VESA DisplayHDR 400, NVIDIA G-SYNC Compatible and 144Hz Refresh Rate(160Hz - Overclock).",
    features: [
      "Model: 34GN850-B",
      "Resolution: QHD (3440x1440)",
      "Display: IPS, 144Hz, 1ms GtG",
      "Ports: 2x HDMI, 1xDP, 3x USB, Headphone Out",
      "Features: G-Sync, Free Sync",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Caleb Neal"},
    ],
  },
];

const storage = [
  {
    name: "TwinMOS 128GB M.2 2280 SATAIII SSD",
    category: "storage",
    img: "/products/storage/1.webp",
    status: "In Stock",
    price: 1600,
    description:
      "The TwinMOS 128GB M.2 2280 SATAIII SSD is an excellent choice for a SATA-based solid-state drive (SSD) in an existing PC or MAC desktop or laptop computer. The TwinMOS 128GB M.2 2280 SATAIII SSD is designed to be high performance and help realize faster booting times, quicker application launches, and better overall system performance.",
    features: [
      "MPN: NGFFDGBM2280",
      "Model: M.2 2280 SATAIII",
      "Interface: SATA III 6Gb/s",
      "Form Factor: M.2 2280",
      "Read Speed: Up to 580 MB/s",
      "Write Speed: Up to 550 MB/s",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Layla Johnson"},
    ],
  },
  {
    name: "Gigabyte 128GB M.2 2280 PCIe 3.0x2 NVMe SSD",
    category: "storage",
    img: "/products/storage/2.webp",
    status: "In Stock",
    price: 2000,
    description:
      "The Gigabyte M.2 PCIe SSD 128GB uses the Host Memory Buffer(HMB) feature to use the Direct Memory Access(DMA) of PCI Express which allows the SSD to use some of the DRAM on your PC.",
    features: [
      "MPN: GP-GSM2NE3128GNTD",
      "Model: Gigabyte M.2 PCIe",
      "Capacity: 128GB",
      "Form Factor: M.2 2280",
      "PCI-Express 3.0 x2, NVMe 1.3",
      "HMB, TRIM & S.M.A.R.T supported",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Caleb Neal"},
    ],
  },
  {
    name: "PNY CS1031 256GB M.2 NVMe SSD",
    category: "storage",
    img: "/products/storage/3.webp",
    status: "In Stock",
    price: 2390,
    description:
      "Excellent choice for an NVMe upgrade from a SATA based solid state drive (SSD) in an existing NVMe enabled PC or MAC desktop or laptop computer. Transfer speed faster than a traditional SATA based Storage. Non-volatile up to 30 times more robust than HDDs. Extended protection and peace of mind.",
    features: [
      "Model: CS1031",
      "Faster boot-up",
      "Read: up to 1,700 MB/s",
      "Write: up to 1,100 MB/s",
      "Better System Performance",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Caleb Neal"},
    ],
  },
];
const power = [
  {
    name: "Antec META V550 550W Power Supply",
    category: "power",
    img: "/products/power/1.webp",
    status: "In Stock",
    price: 3200,
    description:
      "The Antec META V550 is a 550-watt power supply unit that comes with a 24-pin connector (520mm in length), an 8-pin connector for EPS12V (4+4-pin) (550mm in length), an 8-pin connector for PCI-E (6+2-pin) (550mm in length), two 6-pin connectors for SATA (400mm in length each), two 6-pin connectors for SATA (400mm in length each) and one FDD connector.",
    features: [
      "Model: META V550",
      "Produces less noise and less heat",
      "Industrial grade protections",
      "120mm Silent Fan",
      "Thermal Manager",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Layla Johnson"},
    ],
  },
  {
    name: "ASUS ROG THOR 1200P2 GAMING 80 Plus Platinum 1200W Power Supply",
    category: "power",
    img: "/products/power/2.webp",
    status: "In Stock",
    price: 50000,
    description:
      "The inbuilt OLED monitor in the ROG Thor 1200P Platinum Power Supply Unit provides a real-time display of power consumption. Now you can easily check how much electricity your apparatus is using. To improve component lifespan, the ROG Thor 1200W Platinum has a 135mm unique Wing-blade fan.",
    features: [
      "Model: THOR 1200P2",
      "80 Plus Platinum certification for energy efficiency",
      "Built with 100% Japanese capacitors",
      "OLED Power Display",
      "IP5X dust-resistance",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Caleb Neal"},
    ],
  },
  {
    name: "MSI MPG A1000G PCIE5 1000W 80 Plus Gold Full Modular Power Supply",
    category: "power",
    img: "/products/power/3.webp",
    status: "In Stock",
    price: 21500,
    description:
      "The MSI MPG A1000G PCIE5 is a powerful and reliable power supply unit designed to meet the demanding needs of high-performance gaming and computing systems. With its 1000W output capacity, it can handle even the most power-hungry components, making it an excellent choice for enthusiasts and gamers alike.",
    features: [
      "Model: MPG A1000G PCIE5",
      "Output Capacity: 1000W",
      "Modular: Full modular design",
      "Efficiency Rating: 80 PLUS Gold (up to 90%)",
      "Supports Nvidia GeForce RTX 40 Series GPU",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Caleb Neal"},
    ],
  },
];
const ram = [
  {
    name: "Adata Premier 32GB DDR4 3200MHz SO-DIMM RAM",
    category: "ram",
    img: "/products/ram/1.webp",
    status: "In Stock",
    price: 9500,
    description:
      "The Adata Premier 32GB DDR4 3200MHz SO-DIMM Laptop RAM is a top-of-the-line memory module designed for use in high-performance laptops. This RAM module is built to the DDR4 standard, which provides several advantages over previous DRAM generations, including faster data transfer speeds and lower energy consumption.",
    features: [
      "MPN: AD4S3200732G22-RGN",
      "Model: Premier 32GB",
      "Capacity: 32GB",
      "Speed: 3200MHz",
      "CAS Latency: CL22",
      "Operating Voltage: DDR4 STD 1.2V",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Layla Johnson"},
    ],
  },
  {
    name: "Transcend JetRAM 32GB DDR4 3200Mhz SO-DIMM RAM",
    category: "ram",
    img: "/products/ram/2.webp",
    status: "In Stock",
    price: 9500,
    description:
      "The Transcend JetRAM 32GB DDR4 3200Mhz SO-DIMM Laptop RAM is manufactured with true ETT grade, brand-name DRAM chips that have passed Transcend's strict screening process and testing. The modules provide excellent compatibility and fully-tested reliability, which is ideal for PC upgrades at an attractive price.",
    features: [
      "MPN: JM3200HSE-32G",
      "Model: JetRAM",
      "Capacity: 32GB",
      "Speed: 3200MHz",
      "CAS Latency: CL22",
      "Operating Voltage: DDR4 STD 1.2V",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Caleb Neal"},
    ],
  },
  {
    name: "G.Skill Ripjaws 16GB DDR5 4800MHz SO-DIMM RAM",
    category: "ram",
    img: "/products/ram/3.webp",
    status: "In Stock",
    price: 6500,
    description:
      "The G.Skill Ripjaws 16GB DDR5 4800MHz SO-DIMM Laptop RAM is a high-performance memory upgrade designed for laptops and small form factor PCs. It offers faster data transfer speeds and higher energy efficiency compared to DDR4, making it ideal for users seeking improved system performance. This memory module has a capacity of 16GB and operates at a speed of 4800MHz.",
    features: [
      "MPN: F5-4800S4039A16GX1-RS",
      "Model: Ripjaws",
      "16GB 4800MHz DDR5 Capacity",
      "CAS Latency: 40-39-39-76",
      "Form Factor: SO-DIMM",
      "DRAM Voltage: 1.10V",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Caleb Neal"},
    ],
  },
];

const processor = [
  {
    name: "Intel Core i9-12900KS 12th Gen Alder Lake Processor",
    category: "processor",
    img: "/products/processor/1.jpg",
    status: "In Stock",
    price: 73500,
    description:
      "Power up your productivity, gaming, and content-creation experiences by installing the Intel Core i9-12900KS 3.4 GHz 16-Core LGA 1700 Processor into your desktop computer system. Built using a Hybrid Core architecture with the Intel 7 process, this 12th generation desktop processor's 16 cores combine the performance of eight Efficient-cores and eight 3.4 GHz Performance-cores. The low-voltage Efficient-cores handle background tasks for multitasking while the Performance-cores provide speed for demanding applications and games. The built-in Intel Thread Director ensures that the two work seamlessly together by dynamically and intelligently assigning workloads to the right core at the right time to maximize performance.",
    features: [
      "8 cores and 16 threads",
      "Base clock speed of 3.7 GHz with a maximum turbo frequency of 5.3 GHz",
      "Intel Xe Graphics GPU",
      "Supports up to 128 GB of DDR5 memory",
      "10nm SuperFin manufacturing process",
      "Intel Turbo Boost Max Technology 3.0",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [{message: "This product quality is very good", user: "Mr. Azam"}],
  },
  {
    name: "AMD Ryzen 9 5950X Processor",
    category: "processor",
    img: "/products/processor/3.jpg",
    status: "In Stock",
    price: 57900,
    description:
      "Since his early days skating around London, from comic bookstores to modern museums, lifelong Avengers fan & painter/muralist Tristan Eaton, has always been drawn to two things: the Marvel Universe and exploring the intersection of pop culture and high art. Excited to tap into his passions, he applied his signature graffiti and collage artistic style to the world’s best known Super Heroes, creating a custom piece of art, exclusively for Intel. And now, you can enjoy Tristan’s Marvel’s Avengers artwork when you pick up an Intel Core i9-10900K Desktop Processor featuring Marvel’s Avengers Collector’s Edition Packaging. Packed into this exciting title are things like richer armor destruction, with more debris flying in more pieces and more places. Your favorite Avengers' signature heroic moves now create more detailed rubble and debris that stay on the screen longer, so you can really see the full effect. Even the water looks better on a high-end Intel-powered processor. With the optimal balance of cores, threads, and frequency, any interaction with water becomes a richer, more responsive experience.",
    features: [
      "Base Frequency	3.4GHz",
      "Total L3 Cache: 64MB",
      "Cores 16",
      "Maximum Turbo Frequency Up to 4.9GHz",
      'AMD "Zen 3" Core Architecture',
      "Maximum Speed Up to 3200MHz",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [{message: "Good", user: "Debbie Howell"}],
  },
  {
    name: "Intel 10th Gen Core I9-10900k 10 Core Processor",
    category: "processor",
    img: "/products/processor/2.jpg",
    status: "In Stock",
    price: 62500,
    description:
      "Power up your computing experience with the AMD Ryzen 9 5950X 3.4 GHz 16-Core AM4 Processor, which features 16 cores and 32 threads to help quickly load and multitask demanding applications. Designed for socket AM4 motherboards using the powerful Zen 3 architecture, the 7nm 5th generation Ryzen processor offers significantly improved performance compared to its predecessor. With a base clock speed of 3.4 GHz and a max boost clock speed of 4.9 GHz in addition to 64MB of L3 Cache, the ADM Ryzen 9 5950X is built to deliver the performance needed to smoothly handle tasks ranging from content creation to immersive gaming experiences. Other features include support for PCIe Gen 4 technology an200 MHz DDR4 RAM with compatible motherboards. This AMD Ryzen 9 5950X Processor processor has a 105W TDP (Thermal Design Power) and does not include a cooling solution. Please note that it does not have an integrated GPU, so a dedicated graphics card is required",

    features: [
      "Base Frequency	3.70 GHz",
      "Total Cache: 20M",
      "Cores 10",
      "Maximum Turbo Frequency Up to 5.30 GHz",
      "Intel UHD Graphics 630",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [{message: "Good", user: "Pauline Hill"}],
  },
];

const motherboard = [
  {
    name: "MSI MEG X670E ACE DDR5 AMD AM5 E-ATX Motherboard",
    category: "motherboard",
    img: "/products/motherboard/1.jpg",
    status: "In Stock",
    price: 96950,
    description:
      "The MSI MEG X670E ACE Motherboard supports AMD's Ryzen 7000-series processors with up to 16 Zen 4 cores as well as dual-channel DDR5 memory, Maximum Memory Capacity of up to 128GB. It features a 22+2+1 phases power design with 90A Power Stage and dual CPU power connectors ready to unleash the maximum performance. It has a stacked Fin Array, Direct Touch VRM Heat-pipe, MOSFET Baseplate, 7W/mK thermal pads, double-sided M.2 Shield Frozr, and Frozr AI software to ensure extreme performance with low temperature. The motherboard is made of an 8 Layer PCB with 2oz Thickened Copper that provides higher performance and long-lasting system stability without any compromise. ",
    features: [
      "CPU Supports AMD Ryzen 7000 Series Desktop Processors Socket AM5",
      "Audio Realtek ALC4082 Codec + ESS ES9280AQ Combo DAC/HPA 7.1-Channel High Definition Audio Supports S/PDIF output Supports up to 32-Bit/384 kHz playback on front panel",
      "PCI 3x PCI-E x16 slot Supports x16/x0/x4, x8/x8/x4 PCI_E1 PCIe 5.0 supports up to x16 (From CPU) PCI_E2 PCIe 5.0 supports up to x8 (From CPU) PCI_E3 PCIe 5.0 supports up to x4 (From CPU)",
      "Maximum Memory 128GB",
      "Graphics	1x Type-C Display port Supports DisplayPort 1.4 with HBR3, maximum resolution of 4K 120Hz",
      "Chipset AMD X670",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Layla Johnson"},
    ],
  },
  {
    name: "Asus ROG MAXIMUS Z690 FORMULA 12th Gen ATX Motherboard",
    category: "motherboard",
    img: "/products/motherboard/2.jpg",
    status: "In Stock",
    price: 76150,
    description:
      "The Asus ROG MAXIMUS Z690 FORMULA is an exceptional ATX motherboard designed for the 12th generation Intel Core, Pentium Gold, and Celeron processors. It offers top-of-the-line features and performance to satisfy the demands of gaming enthusiasts and content creators alike.",
    features: [
      "Intel® LGA 1700 socket: Ready for 13th Gen Intel® Core™ Processors and 12th Gen Intel® Core™, Pentium® Gold, and Celeron® Processors.",
      "Intelligent Control: ASUS-exclusive tools including AI Overclocking, AI Cooling, AI Networking and Two-Way AI Noise Cancelation for easy configuration.",
      "Robust Power Solution: 20+1 teamed power stages rated for 105 A, ProCool II power connectors, MicroFine alloy chokes and premium metallic capacitors.",
      "Optimized Thermal Design: Enlarged VRM heatsinks with EK CrossChill III solution, high-conductivity thermal pads, triple M.2 heatsinks and two M.2 backplates, and ROG Water-Cooling Zone. ",
      "High-Performance Networking: Onboard WiFi 6E, Marvell® AQtion 10 Gb Ethernet, and ASUS LANGaurd. ",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Caleb Neal"},
    ],
  },
  {
    name: "ASUS ROG MAXIMUS XIII EXTREME INTEL Z590 LGA 1200 ATX MOTHERBOARD",
    category: "motherboard",
    img: "/products/motherboard/3.jpg",
    status: "In Stock",
    price: 70500,
    description:
      "ASUS ROG Maximus XIII Extreme Motherboard Intel® Socket LGA 1200 for 11th Gen Intel® Core™ processors and 10th Gen Intel Core, Pentium® Gold and Celeron® processors. Intelligent Control: ASUS-exclusive software and firmware utilities that simplify setup and improve performance: AI Overclocking, AI Cooling, AI Networking and Two-Way AI Noise-Cancelation.",
    features: [
      "Intel® LGA 1700 socket: Ready for 13th Gen Intel® Core™ Processors and 12th Gen Intel® Core™, Pentium® Gold, and Celeron® Processors.",
      "Intelligent Control: ASUS-exclusive tools including AI Overclocking, AI Cooling, AI Networking and Two-Way AI Noise Cancelation for easy configuration.",
      "Robust Power Solution: 20+1 teamed power stages rated for 105 A, ProCool II power connectors, MicroFine alloy chokes and premium metallic capacitors.",
      "Optimized Thermal Design: Enlarged VRM heatsinks with EK CrossChill III solution, high-conductivity thermal pads, triple M.2 heatsinks and two M.2 backplates, and ROG Water-Cooling Zone. ",
      "High-Performance Networking: Onboard WiFi 6E, Marvell® AQtion 10 Gb Ethernet, and ASUS LANGaurd. ",
    ],
    individual_rating: 5,
    average_rating: 5,
    reviews: [
      {message: "This product quality is very good", user: "Caleb Neal"},
    ],
  },
];
