export interface PortInfo {
    port: string;
    protocol: string;
    service: string;
}

export const commonPorts: PortInfo[] = [
    { port: '20, 21', protocol: 'TCP', service: 'FTP (File Transfer Protocol)' },
    { port: '22', protocol: 'TCP', service: 'SSH (Secure Shell)' },
    { port: '23', protocol: 'TCP', service: 'Telnet' },
    { port: '25', protocol: 'TCP', service: 'SMTP (Simple Mail Transfer Protocol)' },
    { port: '53', protocol: 'TCP/UDP', service: 'DNS (Domain Name System)' },
    { port: '67, 68', protocol: 'UDP', service: 'DHCP (Dynamic Host Configuration Protocol)' },
    { port: '69', protocol: 'UDP', service: 'TFTP (Trivial File Transfer Protocol)' },
    { port: '80', protocol: 'TCP', service: 'HTTP (Hypertext Transfer Protocol)' },
    { port: '110', protocol: 'TCP', service: 'POP3 (Post Office Protocol v3)' },
    { port: '123', protocol: 'UDP', service: 'NTP (Network Time Protocol)' },
    { port: '143', protocol: 'TCP', service: 'IMAP (Internet Message Access Protocol)' },
    { port: '161, 162', protocol: 'UDP', service: 'SNMP (Simple Network Management Protocol)' },
    { port: '443', protocol: 'TCP', service: 'HTTPS (HTTP Secure)' },
    { port: '514', protocol: 'UDP', service: 'Syslog' },
];

export interface OsiLayer {
    layer: number;
    name: string;
    description: string;
}

export const osiLayers: OsiLayer[] = [
    { layer: 7, name: 'Application', description: 'Network process to application. Provides UI to user (e.g., HTTP, FTP, SMTP).' },
    { layer: 6, name: 'Presentation', description: 'Data representation, encryption, and decryption (e.g., JPEG, GIF, TLS/SSL).' },
    { layer: 5, name: 'Session', description: 'Interhost communication, managing sessions between applications.' },
    { layer: 4, name: 'Transport', description: 'End-to-end connections and reliability (e.g., TCP, UDP).' },
    { layer: 3, name: 'Network', description: 'Path determination and logical addressing (e.g., IP, ICMP). Routers operate here.' },
    { layer: 2, name: 'Data Link', description: 'Physical addressing (e.g., Ethernet, MAC addresses). Switches operate here.' },
    { layer: 1, name: 'Physical', description: 'Media, signal, and binary transmission. Hubs and cables operate here.' },
];

export interface CliCommand {
    command: string;
    description: string;
}

export interface CliGroup {
    mode: string;
    commands: CliCommand[];
}

export const cliCommands: CliGroup[] = [
    {
        mode: 'Verification Commands (Privileged EXEC)',
        commands: [
            { command: 'show ip interface brief', description: 'Displays a summary of IP interface status.' },
            { command: 'show ip route', description: 'Displays the IP routing table.' },
            { command: 'show running-config', description: 'Displays the current active configuration.' },
            { command: 'show interfaces', description: 'Displays statistics for all interfaces.' },
            { command: 'show vlan brief', description: 'Displays a summary of VLANs.' },
            { command: 'show ip ospf neighbor', description: 'Displays OSPF neighbors.' },
        ],
    },
    {
        mode: 'Configuration Commands (Global Config)',
        commands: [
            { command: 'interface [type/num]', description: 'Enter interface configuration mode.' },
            { command: 'ip address [ip] [mask]', description: 'Assign an IP address and mask to an interface.' },
            { command: 'hostname [name]', description: 'Set the device hostname.' },
            { command: 'vlan [num]', description: 'Create a VLAN.' },
            { command: 'ip route [dest] [mask] [next-hop]', description: 'Configure a static route.' },
        ],
    },
];

export interface FhrpInfo {
    acronym: string;
    fullName: string;
    origin: string;
    approach: string;
    loadBalancing: string;
}

export const fhrpData: FhrpInfo[] = [
    {
        acronym: 'HSRP',
        fullName: 'Hot Standby Router Protocol',
        origin: 'Cisco',
        approach: 'active/standby',
        loadBalancing: 'subnet',
    },
    {
        acronym: 'VRRP',
        fullName: 'Virtual Router Redundancy Protocol',
        origin: 'RFC 5798',
        approach: 'active/standby',
        loadBalancing: 'subnet',
    },
    {
        acronym: 'GLBP',
        fullName: 'Gateway Load Balancing Protocol',
        origin: 'Cisco',
        approach: 'active/active',
        loadBalancing: 'host',
    },
];

export interface AdminDistanceInfo {
    protocol: string;
    distance: number;
}

export const adminDistances: AdminDistanceInfo[] = [
    { protocol: 'Connected Interface', distance: 0 },
    { protocol: 'Static Route', distance: 1 },
    { protocol: 'eBGP', distance: 20 },
    { protocol: 'EIGRP (Internal)', distance: 90 },
    { protocol: 'OSPF', distance: 110 },
    { protocol: 'IS-IS', distance: 115 },
    { protocol: 'RIP', distance: 120 },
    { protocol: 'EIGRP (External)', distance: 170 },
    { protocol: 'iBGP', distance: 200 },
];

export interface PrivateIpRangeInfo {
    class: string;
    range: string;
    cidr: string;
}

export const privateIpRanges: PrivateIpRangeInfo[] = [
    { class: 'A', range: '10.0.0.0 - 10.255.255.255', cidr: '10.0.0.0/8' },
    { class: 'B', range: '172.16.0.0 - 172.31.255.255', cidr: '172.16.0.0/12' },
    { class: 'C', range: '192.168.0.0 - 192.168.255.255', cidr: '192.168.0.0/16' },
];

export interface IPv6AddressTypeInfo {
    type: string;
    prefix: string;
    description: string;
}

export const ipv6AddressTypes: IPv6AddressTypeInfo[] = [
    { type: 'Global Unicast', prefix: '2000::/3', description: 'Publicly routable on the Internet.' },
    { type: 'Link-Local', prefix: 'FE80::/10', description: 'Used for communication on a single link, not routable.' },
    { type: 'Unique Local', prefix: 'FC00::/7', description: 'Similar to private IPv4 addresses, for internal use.' },
    { type: 'Multicast', prefix: 'FF00::/8', description: 'Used to send a single packet to multiple destinations.' },
    { type: 'Loopback', prefix: '::1/128', description: 'Address for the local host.' },
];