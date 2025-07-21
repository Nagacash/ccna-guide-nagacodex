export interface QnaItem {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
}

export const qnaData: QnaItem[] = [
    // Network Fundamentals
    {
        question: "Which layer of the OSI model is responsible for logical addressing and path determination?",
        options: ["Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)", "Layer 7 (Application)"],
        correctAnswerIndex: 1,
        explanation: "Layer 3, the Network Layer, is responsible for providing logical addresses (IP addresses) to devices and determining the best path for data to travel across the network using routing protocols."
    },
    {
        question: "A switch operates primarily at which layer of the OSI model?",
        options: ["Layer 1 (Physical)", "Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)"],
        correctAnswerIndex: 1,
        explanation: "A standard Layer 2 switch operates at the Data Link layer. It makes forwarding decisions based on MAC (Media Access Control) addresses, which are physical addresses."
    },
    {
        question: "Which of the following is a private IPv4 address range according to RFC 1918?",
        options: ["172.32.10.5", "10.1.1.25", "192.169.1.1", "8.8.8.8"],
        correctAnswerIndex: 1,
        explanation: "The RFC 1918 private IP address ranges are 10.0.0.0/8, 172.16.0.0/12 (from 172.16.0.0 to 172.31.255.255), and 192.168.0.0/16. The address 10.1.1.25 falls within the Class A private range."
    },
    {
        question: "What is the PDU (Protocol Data Unit) at the Transport Layer?",
        options: ["Frame", "Packet", "Segment", "Bit"],
        correctAnswerIndex: 2,
        explanation: "The PDU at Layer 4 (Transport) is called a Segment (for TCP) or Datagram (for UDP). Packets are at Layer 3, Frames at Layer 2, and Bits at Layer 1."
    },
    {
        question: "An administrator needs to connect two switches together and allow traffic from multiple VLANs to pass between them. What type of port should be configured?",
        options: ["Access Port", "Trunk Port", "Console Port", "Routed Port"],
        correctAnswerIndex: 1,
        explanation: "A Trunk Port is used to carry traffic for multiple VLANs between switches. It uses a tagging protocol like 802.1Q to identify which VLAN each frame belongs to."
    },
    {
        question: "What is the broadcast address for the IP address 192.168.10.140 with a subnet mask of 255.255.255.224?",
        options: ["192.168.10.128", "192.168.10.159", "192.168.10.191", "192.168.10.255"],
        correctAnswerIndex: 1,
        explanation: "A mask of 255.255.255.224 (/27) has a block size of 32. The subnets are .0, .32, .64, .96, .128, .160, etc. The IP 192.168.10.140 falls in the .128 subnet. The next subnet is .160, so the broadcast address for the .128 subnet is 192.168.10.159."
    },
    {
        question: "Which type of UTP cable would you use to connect a PC's network card directly to a switch port?",
        options: ["Crossover", "Rollover", "Straight-through", "Coaxial"],
        correctAnswerIndex: 2,
        explanation: "A straight-through cable is used to connect dissimilar devices, such as a PC (DTE) to a switch (DCE)."
    },
    {
        question: "Which IPv6 address type is used for communication on a single local link and is not routable?",
        options: ["Global Unicast", "Unique Local", "Link-Local", "Multicast"],
        correctAnswerIndex: 2,
        explanation: "Link-Local addresses (starting with FE80::/10) are automatically configured on any IPv6-enabled interface and are used for communication within a single network segment. They are not routed."
    },
    {
        question: "Which of these is a valid representation of the IPv6 address 2001:0db8:0000:0000:abcd:0000:0000:1234?",
        options: ["2001:db8::abcd::1234", "2001:db8:0:0:abcd::1234", "2001:db8::abcd:0:0:1234", "2001:db8::abcd:1234"],
        correctAnswerIndex: 1,
        explanation: "Leading zeros in each hextet can be omitted (0db8 -> db8, 0000 -> 0). A single instance of consecutive all-zero hextets can be replaced with '::'. So, '0000:0000' becomes '0:0'. However, '::' can only be used once. Therefore, '2001:db8:0:0:abcd::1234' is a correct compressed form."
    },
    {
        question: "What is the primary difference between TCP and UDP?",
        options: ["TCP is connection-oriented, UDP is connectionless", "TCP uses port numbers, UDP does not", "UDP is faster but less reliable than TCP", "Both A and C are correct"],
        correctAnswerIndex: 3,
        explanation: "TCP is a connection-oriented protocol that provides reliable, ordered delivery of data, including error checking and flow control. UDP is a connectionless, 'best-effort' protocol that is faster but does not guarantee delivery. Both statements A and C are correct descriptions of the key differences."
    },

    // Network Access
    {
        question: "Which protocol is used to prevent switching loops in a network with redundant paths?",
        options: ["VTP (VLAN Trunking Protocol)", "HSRP (Hot Standby Router Protocol)", "STP (Spanning Tree Protocol)", "DHCP (Dynamic Host Configuration Protocol)"],
        correctAnswerIndex: 2,
        explanation: "The Spanning Tree Protocol (STP) is designed to prevent broadcast storms and logical loops in a switched network by logically blocking redundant paths while keeping them available as backups."
    },
    {
        question: "What is the purpose of a 'router-on-a-stick' configuration?",
        options: ["To connect two routers together", "To enable inter-VLAN routing using a single router interface", "To provide wireless access", "To create a static route"],
        correctAnswerIndex: 1,
        explanation: "A 'router-on-a-stick' configuration is a method for performing inter-VLAN routing. A single physical router interface is configured as a trunk link and uses subinterfaces, each tagged for a different VLAN, to route traffic between them."
    },
    {
        question: "Which of the following is NOT a benefit of using VLANs?",
        options: ["Reduces the size of broadcast domains", "Increases network security", "Combines multiple broadcast domains into one larger domain", "Improves network organization"],
        correctAnswerIndex: 2,
        explanation: "VLANs segment a physical network into multiple logical networks, thereby creating multiple, smaller broadcast domains. They do not combine broadcast domains; they divide them."
    },
    {
        question: "Which Cisco feature should be enabled on access ports to prevent a lengthy delay when a host connects, while still providing loop protection?",
        options: ["PortFast", "BPDU Guard", "Root Guard", "UplinkFast"],
        correctAnswerIndex: 0,
        explanation: "PortFast causes a switch port to enter the forwarding state almost immediately, bypassing the listening and learning states of STP. This is intended for ports connected to end devices (like PCs or servers) and should never be used on ports connecting to other switches."
    },
    {
        question: "What is the purpose of LACP (Link Aggregation Control Protocol)?",
        options: ["To negotiate a trunk link between switches automatically", "To bundle multiple physical links into a single logical link", "To provide a backup gateway address", "To prevent unauthorized switches from joining the network"],
        correctAnswerIndex: 1,
        explanation: "LACP is an industry-standard protocol used to create an EtherChannel, which bundles several physical Ethernet links into one logical channel for increased bandwidth and redundancy."
    },
    {
        question: "In a Cisco wireless network, what component is responsible for central management of multiple Access Points (APs)?",
        options: ["Wireless LAN Controller (WLC)", "RADIUS Server", "Access Point (AP)", "SSID"],
        correctAnswerIndex: 0,
        explanation: "A Wireless LAN Controller (WLC) provides a single point of management for multiple APs, handling tasks like configuration, firmware updates, and security policies in a centralized architecture."
    },
    {
        question: "Which wireless security standard is considered the most secure for modern networks?",
        options: ["WEP", "WPA", "WPA2", "WPA3"],
        correctAnswerIndex: 3,
        explanation: "WPA3 is the latest and most secure Wi-Fi security standard, offering stronger encryption and authentication methods compared to its predecessors WPA2, WPA, and the deprecated WEP."
    },
    {
        question: "A switch learns MAC addresses by inspecting which part of an incoming frame?",
        options: ["Source MAC address", "Destination MAC address", "Source IP address", "Destination IP address"],
        correctAnswerIndex: 0,
        explanation: "A switch builds its MAC address table by examining the source MAC address of every frame that enters an interface. It then associates that MAC address with the interface it was learned on."
    },
    {
        question: "What is the function of the 'native VLAN' on an 802.1Q trunk?",
        options: ["It carries all management traffic by default.", "It is the only VLAN allowed on the trunk.", "It carries untagged traffic.", "It is always VLAN 1 and cannot be changed."],
        correctAnswerIndex: 2,
        explanation: "The native VLAN is a specific VLAN on an 802.1Q trunk where traffic is sent and received untagged. Both switches on either end of the trunk must agree on the native VLAN for it to work correctly."
    },
    {
        question: "Which of the following describes a 'split-tunnel' VPN configuration?",
        options: ["All traffic from the remote user is sent through the VPN tunnel.", "Only traffic destined for the corporate network is sent through the VPN tunnel.", "The VPN tunnel is split into two separate encryption streams.", "Two VPNs are active simultaneously."],
        correctAnswerIndex: 1,
        explanation: "In a split-tunnel VPN, only traffic meant for the private corporate network is tunneled. All other traffic (like general web browsing) goes directly to the internet from the user's local network. This saves bandwidth on the corporate VPN gateway."
    },

    // IP Connectivity
    {
        question: "What is the default administrative distance of OSPF?",
        options: ["90", "100", "110", "120"],
        correctAnswerIndex: 2,
        explanation: "The default administrative distance (AD) for OSPF is 110. AD is used by routers to select the best path when there are two or more different routes to the same destination from two different routing protocols."
    },
    {
        question: "In OSPF, what is the role of the Designated Router (DR)?",
        options: ["To act as the primary gateway for all hosts", "To manage the routing table for the entire area", "To reduce the number of adjacencies on a multi-access network", "To authenticate all OSPF routers"],
        correctAnswerIndex: 2,
        explanation: "On multi-access networks (like Ethernet), OSPF elects a Designated Router (DR) and a Backup Designated Router (BDR). All other routers on the segment form a full adjacency only with the DR and BDR, which reduces the amount of OSPF traffic and simplifies the link-state database."
    },
    {
        question: "Which command would you use on a Cisco IOS router to see a summary of interfaces, their IP addresses, and their status?",
        options: ["show interfaces", "show ip route", "show version", "show ip interface brief"],
        correctAnswerIndex: 3,
        explanation: "'show ip interface brief' is a widely used command that provides a concise summary of all interfaces, including their assigned IP address (if any) and their operational and administrative status ('up/up', 'down/down', etc.)."
    },
    {
        question: "A network administrator configures a static route. What is its default administrative distance?",
        options: ["0", "1", "90", "110"],
        correctAnswerIndex: 1,
        explanation: "A static route has a default administrative distance of 1, making it highly preferred over most dynamically learned routes. A directly connected route has an AD of 0."
    },
    {
        question: "What is the primary purpose of a First Hop Redundancy Protocol (FHRP) like HSRP?",
        options: ["To load balance traffic across multiple links", "To provide a redundant default gateway for hosts on a subnet", "To prevent routing loops", "To encrypt traffic between routers"],
        correctAnswerIndex: 1,
        explanation: "FHRPs like HSRP, VRRP, and GLBP are designed to provide a fault-tolerant default gateway. They create a virtual router with a virtual IP address that hosts can use, ensuring connectivity even if the primary physical router fails."
    },
    {
        question: "When a router has multiple routes to the same destination in its routing table, what is the first criterion it uses to select the best path?",
        options: ["Lowest Metric", "Highest Bandwidth", "Longest Prefix Match", "Lowest Administrative Distance"],
        correctAnswerIndex: 2,
        explanation: "The router always uses the most specific route, which is the one with the longest prefix match. For example, a route to 10.1.1.0/24 is more specific than a route to 10.1.0.0/16 and will be preferred for a packet destined to 10.1.1.5."
    },
    {
        question: "If a router has two routes to the same destination network with the same prefix length, what criterion does it use next to determine the best path?",
        options: ["Lowest Administrative Distance", "Lowest Metric", "Lowest Router ID", "Oldest Route"],
        correctAnswerIndex: 0,
        explanation: "After the longest prefix match, the router compares the Administrative Distance (AD) of the routing protocols. The route learned via the protocol with the lower AD is installed in the routing table. For example, an EIGRP route (AD 90) would be preferred over an OSPF route (AD 110)."
    },
    {
        question: "What is a floating static route used for?",
        options: ["To create a route that changes its destination", "To provide a backup route that is only used if a primary route fails", "To load balance traffic with another static route", "To route traffic for a specific application"],
        correctAnswerIndex: 1,
        explanation: "A floating static route is a static route configured with a higher administrative distance than the primary route. This causes it to be 'floating' (not used) until the primary route disappears from the routing table, at which point it is installed as a backup."
    },
    {
        question: "In single-area OSPFv2, all routers in the area must have an identical what?",
        options: ["Router ID", "Link-State Database (LSDB)", "Process ID", "Interface cost"],
        correctAnswerIndex: 1,
        explanation: "The fundamental goal of OSPF is for all routers within a single area to build an identical Link-State Database (LSDB). This database is a map of the entire area's topology, which each router then uses to calculate the best paths."
    },
    {
        question: "Which command configures a default static route on a Cisco router?",
        options: ["ip route 0.0.0.0 0.0.0.0 [next-hop-ip]", "ip route default [next-hop-ip]", "ip route any any [next-hop-ip]", "default-gateway [next-hop-ip]"],
        correctAnswerIndex: 0,
        explanation: "A default route, also known as the gateway of last resort, is configured using the network address 0.0.0.0 and subnet mask 0.0.0.0. It matches any destination IP address for which there is no more specific route in the routing table."
    },

    // IP Services
    {
        question: "Which port number does SSH use by default?",
        options: ["21", "23", "22", "80"],
        correctAnswerIndex: 2,
        explanation: "Secure Shell (SSH) uses TCP port 22 by default to provide secure remote access and command execution. Port 23 is for Telnet (insecure), 21 for FTP, and 80 for HTTP."
    },
    {
        question: "What is the primary function of NAT (Network Address Translation)?",
        options: ["To assign IP addresses to hosts automatically", "To translate private IP addresses to public IP addresses", "To resolve domain names to IP addresses", "To synchronize time across network devices"],
        correctAnswerIndex: 1,
        explanation: "NAT is used to translate the private (RFC 1918) IP addresses used inside a local network into one or more public IP addresses for communication on the internet. This conserves the limited supply of public IPv4 addresses."
    },
    {
        question: "A user opens a web browser and types 'www.cisco.com'. Which protocol is used first to resolve this name to an IP address?",
        options: ["HTTP", "DHCP", "DNS", "SMTP"],
        correctAnswerIndex: 2,
        explanation: "The Domain Name System (DNS), which typically uses UDP port 53, is responsible for translating human-readable domain names (like www.cisco.com) into machine-readable IP addresses that routers can use to forward packets."
    },
    {
        question: "An administrator configures a router to obtain an IP address automatically from an ISP. Which service is the router acting as a client for?",
        options: ["DNS", "NTP", "DHCP", "SNMP"],
        correctAnswerIndex: 2,
        explanation: "The Dynamic Host Configuration Protocol (DHCP) is used to automatically assign IP addresses, subnet masks, default gateways, and DNS server information to clients on a network."
    },
    {
        question: "What is the purpose of NTP (Network Time Protocol)?",
        options: ["To manage network devices remotely", "To transfer files between a host and a server", "To synchronize clocks on network devices", "To provide secure access to the command line"],
        correctAnswerIndex: 2,
        explanation: "NTP is a protocol used to accurately synchronize the clocks of computers and network devices over a network. This is crucial for logging, troubleshooting, and security purposes."
    },
    {
        question: "Which protocol allows a network management station to query and configure network devices?",
        options: ["Syslog", "NTP", "FTP", "SNMP"],
        correctAnswerIndex: 3,
        explanation: "Simple Network Management Protocol (SNMP) is used for collecting information from, and configuring, network devices like routers, switches, and firewalls on an IP network."
    },
    {
        question: "Which type of NAT translates multiple private IP addresses to a single public IP address using different port numbers?",
        options: ["Static NAT", "Dynamic NAT", "PAT (Port Address Translation)", "NAT Passthrough"],
        correctAnswerIndex: 2,
        explanation: "PAT, also known as NAT Overload, is the most common type of NAT. It maps multiple private IP addresses to a single public IP address by using unique source port numbers to distinguish between the different internal connections."
    },
    {
        question: "What is the role of a Syslog server?",
        options: ["To store device configuration backups", "To authenticate users", "To receive and store log messages from network devices", "To provide IP addresses to hosts"],
        correctAnswerIndex: 2,
        explanation: "A Syslog server acts as a central repository for log messages generated by network devices. Centralizing logs simplifies monitoring, troubleshooting, and security analysis."
    },
    {
        question: "In the context of Quality of Service (QoS), what is 'jitter'?",
        options: ["The delay for a packet to travel from source to destination", "The percentage of packets that are lost in transit", "The variation in the delay of received packets", "The amount of available bandwidth"],
        correctAnswerIndex: 2,
        explanation: "Jitter is the variation in packet delay. High jitter can severely impact real-time applications like VoIP and video conferencing, causing robotic or garbled audio."
    },
    {
        question: "Which of the following is NOT part of the DHCP DORA process?",
        options: ["Discover", "Offer", "Request", "Authorize"],
        correctAnswerIndex: 3,
        explanation: "The DHCP process for a client to obtain an IP lease is a four-step process known by the acronym DORA: Discover, Offer, Request, and Acknowledge. 'Authorize' is not part of this process."
    },

    // Security Fundamentals
    {
        question: "A network administrator needs to create an access list that blocks FTP traffic from a specific subnet but allows all other traffic. Which type of ACL is required?",
        options: ["Standard Numbered ACL", "Extended Named ACL", "Reflexive ACL", "Dynamic ACL"],
        correctAnswerIndex: 1,
        explanation: "An Extended ACL is required because it can filter traffic based on source IP, destination IP, and protocol/port numbers (like TCP ports 20 and 21 for FTP). A Standard ACL can only filter on the source IP address."
    },
    {
        question: "Where should a standard ACL be placed to be most effective?",
        options: ["As close to the source as possible", "As close to the destination as possible", "On the router with the highest IP address", "On any router in the path"],
        correctAnswerIndex: 1,
        explanation: "Because standard ACLs only filter based on the source address and permit or deny the entire protocol suite, they should be placed as close to the destination as possible to avoid unintentionally blocking traffic to other destinations."
    },
    {
        question: "Which switch port security feature allows a switch to learn a specific MAC address and bind it to an interface?",
        options: ["Static", "Dynamic", "Sticky", "Violation"],
        correctAnswerIndex: 2,
        explanation: "Sticky MAC learning allows a switch to dynamically learn MAC addresses and then 'stick' them to the running configuration as if they were manually configured static entries. This provides security without extensive manual configuration."
    },
    {
        question: "What is the primary function of DHCP Snooping?",
        options: ["To assign IP addresses", "To prevent rogue DHCP servers from operating on the network", "To track which user has which IP address", "To encrypt DHCP traffic"],
        correctAnswerIndex: 1,
        explanation: "DHCP Snooping is a Layer 2 security feature that validates DHCP messages. It allows administrators to configure trusted ports (where a legitimate DHCP server resides) and untrusted ports, dropping malicious DHCP offer messages from untrusted ports."
    },
    {
        question: "What does the 'established' keyword in an extended ACL allow?",
        options: ["It allows all traffic from an established company network.", "It allows return traffic from sessions that were initiated inside the network.", "It allows only connections that have been up for more than 5 minutes.", "It allows traffic that is part of an established VPN tunnel."],
        correctAnswerIndex: 1,
        explanation: "The 'established' keyword is used for TCP traffic. It checks if the ACK or RST bit is set in the TCP header, which indicates that the packet is part of an existing connection. This is a common way to implement a stateful-like firewall on a router, allowing outbound connections and their return traffic while blocking new inbound connections."
    },
    {
        question: "What is the numerical range for a standard IPv4 ACL?",
        options: ["1-99 and 1300-1999", "100-199 and 2000-2699", "700-799", "There are no numerical ranges for standard ACLs."],
        correctAnswerIndex: 0,
        explanation: "Standard numbered IPv4 ACLs use the ranges 1-99 and 1300-1999. Extended numbered ACLs use the ranges 100-199 and 2000-2699."
    },
    {
        question: "What is the implicit, final entry in any Access Control List?",
        options: ["An implicit permit any any", "An implicit deny any any", "An implicit log", "There is no implicit entry."],
        correctAnswerIndex: 1,
        explanation: "At the end of every ACL, there is an invisible, implicit 'deny any any' statement. This means that if a packet does not match any of the configured permit statements in the ACL, it will be dropped."
    },
    {
        question: "Dynamic ARP Inspection (DAI) relies on which other technology to function correctly?",
        options: ["Port Security", "Spanning Tree Protocol (STP)", "Access Control Lists (ACLs)", "DHCP Snooping"],
        correctAnswerIndex: 3,
        explanation: "DAI works by intercepting ARP requests and replies and validating them against a trusted database. This database of valid IP-to-MAC address bindings is built by DHCP Snooping."
    },
    {
        question: "Which of these is a Layer 2 attack?",
        options: ["DDoS Attack", "Phishing", "MAC Address Spoofing", "SQL Injection"],
        correctAnswerIndex: 2,
        explanation: "MAC Address Spoofing is a Layer 2 attack where an attacker changes their device's MAC address to impersonate another device, potentially bypassing security filters or intercepting frames."
    },
    {
        question: "An administrator wants to secure remote management access to a router. Which of the following is the most secure method?",
        options: ["Configure a strong password for Telnet.", "Use SSH with a strong password.", "Use HTTP for access.", "Configure an ACL to allow Telnet from any source."],
        correctAnswerIndex: 1,
        explanation: "SSH (Secure Shell) encrypts the entire remote management session, including the password exchange and all commands. Telnet sends all information, including passwords, in clear text, making it highly insecure."
    },

    // Automation & Programmability
    {
        question: "In a Software-Defined Networking (SDN) architecture, which plane is responsible for forwarding traffic?",
        options: ["Control Plane", "Data Plane", "Management Plane", "Application Plane"],
        correctAnswerIndex: 1,
        explanation: "The Data Plane (or Forwarding Plane) is responsible for the actual forwarding of packets based on instructions from the Control Plane. In SDN, the Data Plane resides on the network devices themselves (e.g., switches)."
    },
    {
        question: "Which of the following describes a Northbound API in an SDN environment?",
        options: ["It allows the SDN controller to communicate with network devices.", "It allows applications to communicate with the SDN controller.", "It is used for communication between two network devices.", "It is used to manage the physical hardware of the controller."],
        correctAnswerIndex: 1,
        explanation: "Northbound APIs are used for communication between the SDN controller and the applications or orchestration layers running 'above' it. They allow applications to programmatically request network services."
    },
    {
        question: "What data format is commonly used by REST APIs for its human-readable and lightweight nature?",
        options: ["XML", "HTML", "YAML", "JSON"],
        correctAnswerIndex: 3,
        explanation: "JSON (JavaScript Object Notation) is the most widely used data format for REST APIs. It uses key-value pairs and is easy for both humans to read and machines to parse."
    },
    {
        question: "Which HTTP verb is typically used in a REST API to retrieve data from a resource?",
        options: ["POST", "PUT", "GET", "DELETE"],
        correctAnswerIndex: 2,
        explanation: "The GET method is used to request and retrieve data from a specified resource on a server. It is a read-only operation."
    },
    {
        question: "Tools like Ansible and Puppet are examples of what type of automation tool?",
        options: ["Configuration Management", "Network Monitoring", "Ticketing System", "Code Compiler"],
        correctAnswerIndex: 0,
        explanation: "Ansible, Puppet, and Chef are popular configuration management tools used to automate the provisioning, configuration, and management of servers and network devices, ensuring they are maintained in a desired, consistent state."
    },
    {
        question: "What is a key characteristic of a controller-based network architecture compared to a traditional network?",
        options: ["The control plane and data plane are on every device.", "The control plane is centralized on a controller.", "Configuration is done manually on each device.", "It uses hubs instead of switches."],
        correctAnswerIndex: 1,
        explanation: "In a controller-based architecture like SDN, the control plane (the 'brains' that make routing and forwarding decisions) is decoupled from the network devices and centralized on an SDN controller. The devices are left with the data plane (the 'muscle' that forwards traffic)."
    },
    {
        question: "Which of the following is a key component of a Cisco DNA Center solution?",
        options: ["An underlay network", "A network fabric", "An overlay network", "All of the above"],
        correctAnswerIndex: 3,
        explanation: "Cisco DNA Center manages a network fabric which consists of an underlay (the physical routers and switches) and an overlay (the virtual network running on top of the underlay). All are essential components."
    },
    {
        question: "Which HTTP verb in a REST API is idempotent and used to fully replace an existing resource?",
        options: ["GET", "POST", "PUT", "PATCH"],
        correctAnswerIndex: 2,
        explanation: "PUT is used to create or replace a resource at a specific URI. It is idempotent, meaning that making the same PUT request multiple times will have the same effect as making it once. POST is used to create a new resource and is not idempotent."
    },
    {
        question: "What is the difference between an overlay and an underlay network?",
        options: ["The overlay is physical, the underlay is virtual.", "The underlay is the physical network, the overlay is the virtual network built on top.", "They are the same concept.", "The underlay uses APIs, the overlay does not."],
        correctAnswerIndex: 1,
        explanation: "The underlay refers to the physical network infrastructure (routers, switches, cabling) responsible for delivering packets. The overlay is a logical, virtual network that is built on top of the underlay, creating its own tunnels and topology."
    },
    {
        question: "A developer is writing a script to add a new VLAN to a switch using a REST API. Which HTTP verb would they most likely use?",
        options: ["GET", "POST", "DELETE", "HEAD"],
        correctAnswerIndex: 1,
        explanation: "The POST method is used to create a new subordinate resource. In this context, the developer is creating a new VLAN, which is a resource on the switch, so POST is the appropriate verb."
    },
    
    // Mixed Review Questions
    {
        question: "A router receives a packet destined for 172.16.32.5. The routing table has routes for 172.16.0.0/16 and 172.16.32.0/20. Which route will be used?",
        options: ["172.16.0.0/16", "172.16.32.0/20", "Neither, the packet will be dropped", "Both routes will be used to load balance"],
        correctAnswerIndex: 1,
        explanation: "The router will use the route with the longest prefix match. The /20 prefix is more specific than the /16 prefix, and the destination address 172.16.32.5 falls within the 172.16.32.0/20 range."
    },
    {
        question: "Which Cisco proprietary protocol is used for negotiating a trunking link?",
        options: ["802.1Q", "LACP", "PAgP", "DTP"],
        correctAnswerIndex: 3,
        explanation: "Dynamic Trunking Protocol (DTP) is a Cisco proprietary protocol that can automatically negotiate a trunk link between two switches. 802.1Q is the trunking standard itself, not a negotiation protocol. LACP and PAgP are for EtherChannel negotiation."
    },
    {
        question: "Which FHRP is an open standard and allows for an active/standby model?",
        options: ["HSRP", "VRRP", "GLBP", "SLB"],
        correctAnswerIndex: 1,
        explanation: "Virtual Router Redundancy Protocol (VRRP) is an IETF open standard that provides router redundancy. It uses an active/standby model similar to Cisco's proprietary HSRP."
    },
    {
        question: "How many usable host addresses are available in a subnet with a /28 prefix length?",
        options: ["14", "16", "30", "32"],
        correctAnswerIndex: 0,
        explanation: "A /28 prefix leaves 4 bits for the host portion (32-28=4). The number of total addresses is 2^4 = 16. Subtracting the network and broadcast addresses leaves 14 usable host addresses."
    },
    {
        question: "What is the administrative distance of an eBGP learned route?",
        options: ["1", "20", "170", "200"],
        correctAnswerIndex: 1,
        explanation: "Routes learned from an external BGP (eBGP) peer have a default administrative distance of 20. Routes learned from an internal BGP (iBGP) peer have an AD of 200."
    },
    {
        question: "Which of the following is an example of a Link-State routing protocol?",
        options: ["RIPv2", "EIGRP", "OSPF", "BGP"],
        correctAnswerIndex: 2,
        explanation: "OSPF and IS-IS are link-state routing protocols. They build a complete map (LSDB) of the network topology. RIP is a distance-vector protocol, and EIGRP is an advanced distance-vector protocol. BGP is a path-vector protocol."
    },
    {
        question: "What is the default STP priority value on a Cisco switch?",
        options: ["0", "1", "32768", "65535"],
        correctAnswerIndex: 2,
        explanation: "The default priority for Spanning Tree Protocol on all Cisco switches is 32768. The switch with the lowest Bridge ID (Priority + MAC address) becomes the root bridge."
    },
    {
        question: "What command enables IPv6 routing on a Cisco router?",
        options: ["ipv6 enable", "ip routing ipv6", "ipv6 unicast-routing", "ipv6 route enable"],
        correctAnswerIndex: 2,
        explanation: "IPv6 forwarding is disabled by default on Cisco routers. The global configuration command 'ipv6 unicast-routing' is required to enable the router to forward IPv6 packets."
    },
    {
        question: "Which command shows the MAC address table on a Cisco switch?",
        options: ["show arp", "show mac-address-table", "show ip mac", "show switch port"],
        correctAnswerIndex: 1,
        explanation: "The command 'show mac-address-table' (or 'show mac address-table') displays the Layer 2 forwarding table, which lists learned MAC addresses, their associated VLAN, and the port they were learned on. 'show arp' displays the Layer 3 to Layer 2 address mapping on a router or L3 switch."
    },
    {
        question: "Which of these allows a switch to power a connected device, like an IP phone or an AP?",
        options: ["PoE", "LACP", "WLC", "DTP"],
        correctAnswerIndex: 0,
        explanation: "Power over Ethernet (PoE) is a technology that allows network cables to carry electrical power. A PoE-capable switch can power devices such as wireless access points, IP cameras, and VoIP phones."
    }
];
