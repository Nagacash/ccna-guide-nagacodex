import React, { useState, useEffect, useMemo } from 'react';

// Helper functions for IP calculations
const ipToLong = (ip: string): number => {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
};

const longToIp = (long: number): string => {
    return [ (long >>> 24), (long >>> 16) & 255, (long >>> 8) & 255, long & 255 ].join('.');
};

const commonCidrs = [
    { cidr: '/30', hosts: '2' },
    { cidr: '/29', hosts: '6' },
    { cidr: '/28', hosts: '14' },
    { cidr: '/27', hosts: '30' },
    { cidr: '/26', hosts: '62' },
    { cidr: '/25', hosts: '126' },
    { cidr: '/24', hosts: '254' },
];

const SubnettingTrainer: React.FC = () => {
    const [problem, setProblem] = useState({ ip: '', cidr: 0 });
    const [userAnswers, setUserAnswers] = useState({ network: '', broadcast: '' });
    const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean | null }>({ message: '', isCorrect: null });
    const [showSolution, setShowSolution] = useState(false);

    const solution = useMemo(() => {
        if (!problem.ip || !problem.cidr) return null;
        
        const ipLong = ipToLong(problem.ip);
        const mask = (-1 << (32 - problem.cidr)) >>> 0;
        
        const networkAddressLong = ipLong & mask;
        const broadcastAddressLong = networkAddressLong | (~mask);
        
        // Handle edge cases for /31 and /32 if we were to support them
        const firstHostLong = (32 - problem.cidr) > 1 ? networkAddressLong + 1 : networkAddressLong;
        const lastHostLong = (32 - problem.cidr) > 1 ? broadcastAddressLong - 1 : broadcastAddressLong;
        const usableHosts = (32 - problem.cidr) > 1 ? Math.pow(2, 32 - problem.cidr) - 2 : 0;


        return {
            network: longToIp(networkAddressLong),
            broadcast: longToIp(broadcastAddressLong),
            hostRange: usableHosts > 0 ? `${longToIp(firstHostLong)} - ${longToIp(lastHostLong)}` : 'N/A',
            usableHosts: usableHosts > 0 ? usableHosts: 0
        };
    }, [problem]);

    const generateProblem = () => {
        const cidr = 24 + Math.floor(Math.random() * 7); // /24 to /30
        const thirdOctet = Math.floor(Math.random() * 255);
        const fourthOctet = Math.floor(Math.random() * 254) + 1; // 1-254
        const ip = `192.168.${thirdOctet}.${fourthOctet}`;
        
        setProblem({ ip, cidr });
        setUserAnswers({ network: '', broadcast: '' });
        setFeedback({ message: '', isCorrect: null });
        setShowSolution(false);
    };

    useEffect(() => {
        generateProblem();
    }, []);

    const handleCheckAnswer = () => {
        if (!solution) return;
        if (userAnswers.network.trim() === solution.network && userAnswers.broadcast.trim() === solution.broadcast) {
            setFeedback({ message: 'Correct! Excellent work.', isCorrect: true });
        } else {
            setFeedback({ message: 'Not quite. Check your calculations and try again.', isCorrect: false });
        }
    };
    
    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-grow space-y-6">
                <div className="bg-dark-secondary/50 p-6 rounded-lg border border-dark-border">
                    <h3 className="text-lg font-bold text-dark-foreground mb-2">Learning Zone</h3>
                    <p className="text-dark-muted-foreground text-sm mb-3">
                        Subnetting divides a large network into smaller subnets for better organization, security, and efficiency.
                    </p>
                    <h4 className="font-semibold text-dark-foreground/90 text-sm">Practice Goal:</h4>
                    <p className="text-dark-muted-foreground text-sm">
                        Given a host IP and CIDR prefix (e.g., /27), calculate the Network and Broadcast addresses for that subnet.
                    </p>
                </div>

                <div className="bg-dark-secondary/50 p-6 rounded-lg border border-dark-border">
                    <h3 className="text-lg font-bold text-dark-foreground mb-4">Practice Zone</h3>
                    {problem.ip && (
                        <div className="bg-dark-background/70 p-4 rounded-md mb-5 text-center">
                             <p className="text-base text-dark-muted-foreground">
                                IP Address: <code className="text-cyan-300 font-bold text-lg bg-dark-secondary px-2 py-1 rounded-md">{problem.ip}/{problem.cidr}</code>
                            </p>
                        </div>
                    )}
                    
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="network-addr" className="block text-sm font-medium text-dark-muted-foreground mb-1.5">Network Address:</label>
                            <input
                                type="text"
                                id="network-addr"
                                value={userAnswers.network}
                                onChange={e => setUserAnswers({...userAnswers, network: e.target.value})}
                                placeholder="e.g., 192.168.1.0"
                                className="font-mono flex h-10 w-full rounded-md border border-dark-input bg-transparent px-3 py-2 text-sm ring-offset-dark-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-dark-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="broadcast-addr" className="block text-sm font-medium text-dark-muted-foreground mb-1.5">Broadcast Address:</label>
                            <input
                                type="text"
                                id="broadcast-addr"
                                value={userAnswers.broadcast}
                                onChange={e => setUserAnswers({...userAnswers, broadcast: e.target.value})}
                                placeholder="e.g., 192.168.1.255"
                                className="font-mono flex h-10 w-full rounded-md border border-dark-input bg-transparent px-3 py-2 text-sm ring-offset-dark-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-dark-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-3">
                         <button onClick={generateProblem} className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-dark-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2 border border-dark-input bg-transparent hover:bg-dark-accent hover:text-dark-accent-foreground h-10 px-4 py-2">
                            New Problem
                        </button>
                        <div className="flex items-center space-x-2">
                           <button onClick={() => setShowSolution(!showSolution)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors text-dark-primary-foreground/70 hover:text-dark-primary-foreground h-10 px-4 py-2">
                                {showSolution ? 'Hide' : 'Show'} Answer
                            </button>
                            <button onClick={handleCheckAnswer} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-dark-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-ring focus-visible:ring-offset-2 bg-cyan-600 text-white hover:bg-cyan-600/90 h-10 px-4 py-2">
                                Check Answer
                            </button>
                        </div>
                    </div>

                    {feedback.message && (
                        <div className={`relative mt-4 w-full rounded-lg border p-4 text-sm font-semibold ${feedback.isCorrect ? 'border-green-500/50 bg-green-500/10 text-green-300' : 'border-red-500/50 bg-red-500/10 text-red-300'}`}>
                            {feedback.message}
                        </div>
                    )}

                    {showSolution && solution && (
                        <div className="mt-4 p-4 rounded-lg bg-dark-background/70 border border-dark-border">
                            <h4 className="font-bold text-base text-yellow-300 mb-3">Solution Details:</h4>
                            <ul className="space-y-2 font-mono text-sm text-dark-muted-foreground">
                                <li><span className="font-semibold text-gray-400 w-32 inline-block">Network:</span> <span className="text-teal-300">{solution.network}</span></li>
                                <li><span className="font-semibold text-gray-400 w-32 inline-block">Broadcast:</span> <span className="text-teal-300">{solution.broadcast}</span></li>
                                <li><span className="font-semibold text-gray-400 w-32 inline-block">Host Range:</span> <span className="text-teal-300">{solution.hostRange}</span></li>
                                <li><span className="font-semibold text-gray-400 w-32 inline-block">Usable Hosts:</span> <span className="text-teal-300">{solution.usableHosts}</span></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="lg:w-56 flex-shrink-0">
                <div className="bg-dark-secondary/50 p-4 rounded-lg border border-dark-border">
                    <h3 className="text-base font-bold text-dark-foreground mb-3">CIDR Cheat Sheet</h3>
                     <table className="w-full text-left table-auto">
                        <thead>
                            <tr className="border-b border-dark-border">
                                <th className="pb-2 text-xs font-medium text-dark-muted-foreground">CIDR</th>
                                <th className="pb-2 text-xs font-medium text-dark-muted-foreground">Hosts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commonCidrs.map(s => (
                                <tr key={s.cidr} className="border-b border-dark-border/50">
                                    <td className="py-2 text-sm font-mono text-cyan-400">{s.cidr}</td>
                                    <td className="py-2 text-sm text-dark-foreground">{s.hosts}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SubnettingTrainer;