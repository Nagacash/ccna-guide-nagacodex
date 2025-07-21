
import { StudyDay } from '../types';

export const studyPlan: StudyDay[] = [
  {
    day: 1,
    date: 'Monday, July 21, 2025',
    title: 'Network Fundamentals',
    examWeight: '20% of Exam',
    tasks: [
      {
        id: 'd1t1',
        title: 'Hour 1: Theory & Concepts',
        details: `
          <p class="mb-2"><strong>Focus:</strong> OSI and TCP/IP Models, Network Components, Network Architectures, TCP vs. UDP, Physical Interfaces and Cabling.</p>
          <ul class="list-disc list-inside space-y-1 text-gray-300">
            <li>Read Odom Vol 1, Chapters 1-3.</li>
            <li>Pay close attention to the function of each layer in OSI/TCP-IP.</li>
            <li>Understand the role of routers, switches (L2/L3), firewalls, APs, WLCs.</li>
          </ul>
          <p class="mt-3 font-semibold text-cyan-300">Self-Check: Can you describe the difference between a hub, switch, and router? What's the purpose of the Data Link layer?</p>
        `,
        pdfPath: '/pdf/ccna.pdf',
      },
      {
        id: 'd1t2',
        title: 'Hour 2: IPv4 Addressing & Subnetting (Crucial!)',
        details: `
          <p class="mb-2"><strong>Focus:</strong> IPv4 Addressing and Subnetting, Private IPv4, IPv6 Addressing and Types, IP Parameters Verification.</p>
          <ul class="list-disc list-inside space-y-1 text-gray-300">
            <li>Read Odom Vol 1, Chapters 4-5.</li>
            <li>Spend significant time on subnetting exercises.</li>
            <li>Practice calculating subnets, host ranges, and broadcast addresses.</li>
            <li>Understand IPv6 address types (Global Unicast, Link-Local, etc.).</li>
          </ul>
        `,
        pdfPath: '/pdf/ccna.pdf',
      },
       {
        id: 'd1t3',
        title: 'Hands-on Lab (Packet Tracer)',
        details: `
          <p class="mb-2"><strong>Task:</strong> Configure IPv4 and IPv6 addresses on multiple routers and PCs. Ping between them. Practice creating different subnet sizes for various departments.</p>
        `,
      },
      {
        id: 'd1t4',
        title: 'Network Topology Builder',
        details: `
          <p class="mb-2"><strong>Task:</strong> Use the network simulator to build a simple network topology with routers, switches, and PCs. Experiment with connecting devices and simulating ping.</p>
        `,
        simulator: true,
      },
    ],
  },
  {
    day: 2,
    date: 'Tuesday, July 22, 2025',
    title: 'Network Access & Switching Concepts',
    examWeight: '20% of Exam',
    tasks: [
      {
        id: 'd2t1',
        title: 'Hour 1: VLANs & Inter-Switch Connectivity',
        details: `
          <p class="mb-2"><strong>Focus:</strong> Switching Concepts (MAC learning, aging), VLANs (normal range), Access Ports (data/voice), Default VLAN, InterVLAN Connectivity, Interswitch Connectivity (Trunks, 802.1Q, Native VLAN).</p>
          <ul class="list-disc list-inside space-y-1 text-gray-300">
            <li>Read Odom Vol 1, Chapters 6-7.</li>
            <li>Understand how switches learn MAC addresses and forward frames.</li>
            <li>Differentiate between access and trunk ports.</li>
          </ul>
          <p class="mt-3 font-semibold text-cyan-300">Self-Check: Why do we use VLANs? What's the purpose of the native VLAN on a trunk?</p>
        `,
        pdfPath: '/pdf/ccna.pdf',
      },
      {
        id: 'd2t2',
        title: 'Hour 2: EtherChannel, STP, and Wireless Fundamentals',
        details: `
          <p class="mb-2"><strong>Focus:</strong> EtherChannel (LACP), Rapid PVST+ STP (Root Port, Root Bridge, Port States, PortFast, BPDU Guard), Cisco Wireless Architectures, AP Modes, WLAN Component Connections, Device Management Access (SSH, Console).</p>
          <ul class="list-disc list-inside space-y-1 text-gray-300">
            <li>Read Odom Vol 1, Chapters 8-9 and 13 (Wireless).</li>
            <li>Understand the role of STP in preventing loops.</li>
          </ul>
        `,
        pdfPath: '/pdf/ccna.pdf',
      },
      {
        id: 'd2t3',
        title: 'Hands-on Lab (Packet Tracer)',
        details: `
          <p class="mb-2"><strong>Task:</strong> Configure VLANs and trunk links between two switches. Implement InterVLAN routing on a router-on-a-stick or Layer 3 switch. Configure an EtherChannel link (LACP). Practice enabling PortFast and BPDU Guard on access ports.</p>
        `,
      },
    ],
  },
  {
    day: 3,
    date: 'Wednesday, July 23, 2025',
    title: 'IP Connectivity & Routing',
    examWeight: '25% of Exam',
    tasks: [
      {
        id: 'd3t1',
        title: 'Hour 1: Routing Table & Static Routing',
        details: `
          <p class="mb-2"><strong>Focus:</strong> Routing Table Components (Code, Prefix, Mask, Next Hop, AD, Metric), Router Forwarding Decisions (Longest Match, AD, Metric), IPv4/IPv6 Static Routing (Default, Network, Host, Floating Static).</p>
          <ul class="list-disc list-inside space-y-1 text-gray-300">
            <li>Read Odom Vol 2, Chapters 10-11.</li>
            <li>Understand the hierarchy of routing decisions.</li>
          </ul>
          <p class="mt-3 font-semibold text-cyan-300">Self-Check: What is the administrative distance of a static route? How does a router choose between two routes to the same destination?</p>
        `,
        pdfPath: '/pdf/ccna.pdf',
        videoId: '3ROdsfEUuhs',
        resources: true,
      },
      {
        id: 'd3t2',
        title: 'Hour 2: OSPFv2 & FHRP',
        details: `
          <p class="mb-2"><strong>Focus:</strong> Single Area OSPFv2 (Neighbor Adjacencies, Point-to-Point, Broadcast, DR/BDR, Router ID), First Hop Redundancy Protocols (HSRP, VRRP, GLBP concepts).</p>
          <ul class="list-disc list-inside space-y-1 text-gray-300">
            <li>Read Odom Vol 2, Chapters 12-13.</li>
            <li>Understand how OSPF neighbors form adjacencies and the role of DR/BDR.</li>
          </ul>
        `,
        pdfPath: '/pdf/ccna.pdf',
      },
      {
        id: 'd3t3',
        title: 'Hands-on Lab (Packet Tracer)',
        details: `
          <p class="mb-2"><strong>Task:</strong> Configure IPv4 and IPv6 static routes, including a floating static route. Implement single-area OSPFv2 on three routers in a multi-access network and verify neighbor adjacencies, routing tables, and DR/BDR elections.</p>
        `,
      },
    ],
  },
  {
    day: 4,
    date: 'Thursday, July 24, 2025',
    title: 'IP Services & Security',
    examWeight: '10% & 15% of Exam',
    tasks: [
      {
        id: 'd4t1',
        title: 'Hour 1: IP Services',
        details: `
          <p class="mb-2"><strong>Focus:</strong> Inside Source NAT (Static, Pools), NTP (Client/Server), DHCP, DNS (Role), SNMP, Syslog, TFTP, FTP (Function), QoS Concepts.</p>
          <ul class="list-disc list-inside space-y-1 text-gray-300">
            <li>Read Odom Vol 2, Chapters 15-16.</li>
            <li>Understand the purpose and configuration of NAT and other network services.</li>
          </ul>
        `,
        pdfPath: '/pdf/ccna.pdf',
      },
      {
        id: 'd4t2',
        title: 'Hour 2: Security Fundamentals',
        details: `
          <p class="mb-2"><strong>Focus:</strong> Security Concepts (Threats, Vulnerabilities), VPNs (Conceptual), Layer 2 Security (DHCP Snooping, Dynamic ARP Inspection, Port Security), Wireless Security (WPA, WPA2, WPA3).</p>
          <ul class="list-disc list-inside space-y-1 text-gray-300">
            <li>Read Odom Vol 2, Chapters 17-18.</li>
            <li>Focus on common Layer 2 attacks and their mitigations.</li>
          </ul>
        `,
        pdfPath: '/pdf/ccna.pdf',
      },
      {
        id: 'd4t3',
        title: 'Hands-on Lab (Packet Tracer)',
        details: `
          <p class="mb-2"><strong>Task:</strong> Configure NAT on a router. Configure DHCP server on a router/switch. Configure NTP. Configure port security on a switch port (static MAC, sticky MAC, violation mode).</p>
        `,
      },
    ],
  },
  {
    day: 5,
    date: 'Friday, July 25, 2025',
    title: 'Automation & Comprehensive Review',
    examWeight: '10% of Exam',
    tasks: [
      {
        id: 'd5t1',
        title: 'Hour 1: Automation and Programmability',
        details: `
          <p class="mb-2"><strong>Focus:</strong> Impact of Automation, Controller-Based vs. Software-Defined Architectures (Overlay, Underlay, Fabric), Northbound/Southbound APIs, REST-based APIs (CRUD, HTTP Verbs), Config Management (Ansible, Terraform), JSON Encoded Data.</p>
          <ul class="list-disc list-inside space-y-1 text-gray-300">
            <li>Read Odom Vol 2, Chapter 20.</li>
            <li>This section is more conceptual for CCNA. Understand the differences and benefits.</li>
          </ul>
          <p class="mt-3 font-semibold text-cyan-300">Self-Check: What is the difference between an overlay and an underlay network? What are common HTTP verbs used in REST APIs?</p>
        `,
        pdfPath: '/pdf/ccna.pdf',
      },
      {
        id: 'd5t2',
        title: 'Hour 2: Comprehensive Review & Practice',
        details: `
          <p class="mb-2"><strong>Activity:</strong> Review all key concepts from Day 1-4 using your notes or by quickly scanning challenging Odom book sections.</p>
          <p class="mb-2"><strong>Practice:</strong> Take a set of 20-30 targeted practice questions from Boson ExSim-Max, covering all domains.</p>
          <p class="mt-3 font-semibold text-red-400">Critical Step: Thoroughly review every question, especially incorrect ones. Understand the 'why' behind the answers.</p>
        `,
      },
    ],
  },
  {
    day: 6,
    date: 'Saturday, July 26, 2025',
    title: 'Full Practice Exam Simulation',
    examWeight: 'Assessment Day',
    tasks: [
      {
        id: 'd6t1',
        title: 'Full Practice Exam',
        details: `
          <p class="mb-2"><strong>Activity:</strong> Take a full-length, timed CCNA practice exam from Boson ExSim-Max.</p>
          <ul class="list-disc list-inside space-y-1 text-gray-300">
            <li>Allocate the full 120 minutes.</li>
            <li>Do not pause or look up answers.</li>
            <li>Treat it as the real exam.</li>
          </ul>
        `,
      },
      {
        id: 'd6t2',
        title: 'Immediate & Thorough Review',
        details: `
          <p class="mb-2"><strong>Activity:</strong> This is the most crucial part of practice exams. Begin the review immediately after finishing.</p>
           <ul class="list-disc list-inside space-y-1 text-gray-300">
            <li>Go through every single question, whether you got it right or wrong.</li>
            <li>Understand the explanations completely to reveal your true weak areas.</li>
          </ul>
          <p class="mt-3 font-semibold text-yellow-300">Note: This day might extend beyond 2 hours. Prioritize completing and reviewing the exam.</p>
        `,
      },
      {
        id: 'd6t3',
        title: 'Free Online Practice Exam',
        details: `
          <p class="mb-2"><strong>Activity:</strong> Take a free online CCNA practice exam to test your knowledge.</p>
        `,
        externalLink: 'https://www.learncisco.net/tests/ccna-200-301',
      },
    ],
  },
  {
    day: 7,
    date: 'Sunday, July 27, 2025',
    title: 'Targeted Review & Final Prep',
    examWeight: 'Final Day',
    tasks: [
      {
        id: 'd7t1',
        title: 'Hour 1: Targeted Weakness Review',
        details: `
          <p class="mb-2"><strong>Activity:</strong> Based on your Day 6 practice exam performance, identify your weakest areas (e.g., OSPF, subnetting speed, specific commands).</p>
          <ul class="list-disc list-inside space-y-1 text-gray-300">
            <li>Go back to the specific chapters in the Official Cert Guide for those weak topics.</li>
            <li>Reread the material and redo any relevant Packet Tracer labs for reinforcement.</li>
          </ul>
        `,
      },
      {
        id: 'd7t2',
        title: 'Hour 2: Final Practice & Mindset',
        details: `
          <p class="mb-2"><strong>Activity:</strong> Take another small set of practice questions (e.g., 10-15) specifically targeting the areas you just reviewed. Quickly skim through your personal notes or a summary of key commands.</p>
          <p class="mt-3 font-semibold text-green-300">Mindset: Focus on positive reinforcement. You've put in the work. Get a good night's sleep. Avoid cramming new material. Be confident in your preparation!</p>
        `,
      },
    ],
  },
];
