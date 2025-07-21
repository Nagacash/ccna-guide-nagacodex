import React, { useState } from 'react';
import { commonPorts, osiLayers, cliCommands, fhrpData, adminDistances, privateIpRanges, ipv6AddressTypes } from '../data/referenceData';
import SubnettingTrainer from './SubnettingTrainer';
import QnaTrainer from './QnaTrainer';
import AiTutor from './AiTutor';

const QuickReference = () => {
    const [activeTab, setActiveTab] = useState('ai_tutor');

    const tabs = [
        { id: 'ai_tutor', label: 'AI Tutor' },
        { id: 'qna', label: 'Q&A Trainer' },
        { id: 'subnet', label: 'Subnetting Trainer' },
        { id: 'ports', label: 'Common Ports' },
        { id: 'osi', label: 'OSI Model' },
        { id: 'ad', label: 'Admin Distances' },
        { id: 'private_ip', label: 'Private IPs' },
        { id: 'ipv6', label: 'IPv6 Types' },
        { id: 'fhrp', label: 'FHRPs' },
        { id: 'cli', label: 'CLI Commands' },
    ];
    
    const tableBaseClass = "w-full text-sm text-left";
    const tableHeadClass = "text-xs text-dark-muted-foreground uppercase";
    const tableHeadCellClass = "px-4 py-3 font-medium";
    const tableBodyRowClass = "border-t border-dark-border";
    const tableBodyCellClass = "px-4 py-3 align-middle";

    const renderContent = () => {
        switch (activeTab) {
            case 'ai_tutor':
                return <AiTutor />;
            case 'qna':
                return <QnaTrainer />;
            case 'ports':
                return (
                    <div className="overflow-x-auto">
                        <table className={tableBaseClass}>
                            <thead className={tableHeadClass}>
                                <tr>
                                    <th className={tableHeadCellClass}>Port(s)</th>
                                    <th className={tableHeadCellClass}>Protocol</th>
                                    <th className={tableHeadCellClass}>Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                {commonPorts.map(p => (
                                    <tr key={p.port} className={tableBodyRowClass}>
                                        <td className={`${tableBodyCellClass} font-mono text-cyan-400`}><code className="bg-dark-secondary px-2 py-1 rounded">{p.port}</code></td>
                                        <td className={`${tableBodyCellClass} text-dark-foreground`}>{p.protocol}</td>
                                        <td className={`${tableBodyCellClass} text-dark-foreground`}>{p.service}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case 'osi':
                return (
                     <div className="overflow-x-auto">
                        <table className={tableBaseClass}>
                            <thead className={tableHeadClass}>
                                <tr>
                                    <th className={tableHeadCellClass}>Layer</th>
                                    <th className={tableHeadCellClass}>Name</th>
                                    <th className={tableHeadCellClass}>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                {osiLayers.map(l => (
                                    <tr key={l.layer} className={tableBodyRowClass}>
                                        <td className={`${tableBodyCellClass} font-bold text-cyan-400`}>{l.layer}</td>
                                        <td className={`${tableBodyCellClass} font-semibold text-dark-foreground`}>{l.name}</td>
                                        <td className={`${tableBodyCellClass} text-dark-muted-foreground`}>{l.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case 'ad':
                return (
                    <div className="overflow-x-auto">
                        <table className={tableBaseClass}>
                            <thead className={tableHeadClass}>
                                <tr>
                                    <th className={tableHeadCellClass}>Protocol/Route Source</th>
                                    <th className={tableHeadCellClass}>Default AD</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adminDistances.map(ad => (
                                    <tr key={ad.protocol} className={tableBodyRowClass}>
                                        <td className={`${tableBodyCellClass} text-dark-foreground`}>{ad.protocol}</td>
                                        <td className={`${tableBodyCellClass} font-bold text-cyan-400`}>{ad.distance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case 'private_ip':
                 return (
                    <div className="overflow-x-auto">
                        <table className={tableBaseClass}>
                            <thead className={tableHeadClass}>
                                <tr>
                                    <th className={tableHeadCellClass}>Class</th>
                                    <th className={tableHeadCellClass}>Range</th>
                                    <th className={tableHeadCellClass}>CIDR Block</th>
                                </tr>
                            </thead>
                            <tbody>
                                {privateIpRanges.map(r => (
                                    <tr key={r.class} className={tableBodyRowClass}>
                                        <td className={`${tableBodyCellClass} text-dark-foreground font-bold`}>{r.class}</td>
                                        <td className={`${tableBodyCellClass} font-mono text-cyan-400`}><code className="bg-dark-secondary px-2 py-1 rounded">{r.range}</code></td>
                                        <td className={`${tableBodyCellClass} text-dark-foreground`}>{r.cidr}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case 'ipv6':
                return (
                    <div className="overflow-x-auto">
                        <table className={tableBaseClass}>
                            <thead className={tableHeadClass}>
                                <tr>
                                    <th className={tableHeadCellClass}>Address Type</th>
                                    <th className={tableHeadCellClass}>Prefix</th>
                                    <th className={tableHeadCellClass}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ipv6AddressTypes.map(t => (
                                    <tr key={t.type} className={tableBodyRowClass}>
                                        <td className={`${tableBodyCellClass} text-dark-foreground font-semibold`}>{t.type}</td>
                                        <td className={`${tableBodyCellClass} font-mono text-cyan-400`}><code className="bg-dark-secondary px-2 py-1 rounded">{t.prefix}</code></td>
                                        <td className={`${tableBodyCellClass} text-dark-muted-foreground`}>{t.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case 'cli':
                 return (
                    <div className="space-y-6 p-2">
                        {cliCommands.map(group => (
                            <div key={group.mode}>
                                <h4 className="font-bold text-dark-foreground mb-3">{group.mode}</h4>
                                <ul className="space-y-2">
                                    {group.commands.map(cmd => (
                                        <li key={cmd.command} className="bg-dark-secondary/50 p-3 rounded-md">
                                            <code className="text-green-300 font-mono text-sm">{cmd.command}</code>
                                            <p className="text-dark-muted-foreground text-sm mt-1 ml-1">- {cmd.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                );
            case 'subnet':
                return <SubnettingTrainer />;
            case 'fhrp':
                return (
                    <div className="overflow-x-auto">
                        <table className={tableBaseClass}>
                            <thead className={tableHeadClass}>
                                <tr>
                                    <th className={tableHeadCellClass}>Acronym</th>
                                    <th className={tableHeadCellClass}>Full Name</th>
                                    <th className={tableHeadCellClass}>Origin</th>
                                    <th className={tableHeadCellClass}>Approach</th>
                                    <th className={tableHeadCellClass}>Load Balancing</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fhrpData.map(p => (
                                    <tr key={p.acronym} className={tableBodyRowClass}>
                                        <td className={`${tableBodyCellClass} font-bold text-cyan-400`}>{p.acronym}</td>
                                        <td className={`${tableBodyCellClass} text-dark-foreground`}>{p.fullName}</td>
                                        <td className={`${tableBodyCellClass} text-dark-muted-foreground`}>{p.origin}</td>
                                        <td className={`${tableBodyCellClass} text-dark-muted-foreground`}>{p.approach}</td>
                                        <td className={`${tableBodyCellClass} text-dark-muted-foreground`}>{p.loadBalancing}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="main-section bg-dark-card border border-dark-border rounded-lg shadow-inner">
            <div className="p-4 sm:p-6">
                <h2 className="text-3xl font-bold text-dark-foreground mb-1 text-center">Study Hub</h2>
                <p className="text-dark-muted-foreground text-center mb-6">Quick references, cheatsheets, and practice tools.</p>
            </div>
            <div className="px-4 sm:px-6 border-b border-dark-border">
                <div className="flex flex-nowrap overflow-x-auto -mb-px space-x-2 sm:space-x-4">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-shrink-0 py-3 px-1 sm:px-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                                activeTab === tab.id
                                    ? 'text-dark-primary border-dark-primary'
                                    : 'text-dark-muted-foreground border-transparent hover:text-dark-foreground'
                            }`}
                             role="tab"
                             aria-selected={activeTab === tab.id}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="p-4 sm:p-6">
                {renderContent()}
            </div>
        </div>
    );
}

export default QuickReference;