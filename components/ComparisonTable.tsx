"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ComparisonTable: React.FC = () => {
    const { t } = useLanguage();
    return (
    <div className="comparison-table-container md:overflow-x-auto">
        <table className="comparison-table w-full">
            <thead>
                <tr>
                    <th className="text-left whitespace-normal md:whitespace-nowrap">Feature</th>
                    <th className="whitespace-normal md:whitespace-nowrap">StreamVerse</th>
                    <th className="whitespace-normal md:whitespace-nowrap">Cable</th>
                    <th className="whitespace-normal md:whitespace-nowrap">Satellite</th>
                    <th className="whitespace-normal md:whitespace-nowrap">Streaming Jungle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="whitespace-normal md:whitespace-nowrap">Live Channels</td>
                    <td className="highlight whitespace-normal md:whitespace-nowrap">16,000+</td>
                    <td className="whitespace-normal md:whitespace-nowrap">~200</td>
                    <td className="whitespace-normal md:whitespace-nowrap">~300</td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span></td>
                </tr>
                <tr>
                    <td className="whitespace-normal md:whitespace-nowrap">4K / HD Quality</td>
                    <td className="highlight whitespace-normal md:whitespace-nowrap"><span className="check">✓</span></td>
                    <td className="whitespace-normal md:whitespace-nowrap">Limited</td>
                    <td className="whitespace-normal md:whitespace-nowrap">Limited</td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="check">✓</span></td>
                </tr>
                <tr>
                    <td className="whitespace-normal md:whitespace-nowrap">All Live Sports Leagues</td>
                    <td className="highlight whitespace-normal md:whitespace-nowrap"><span className="check">✓</span></td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span> (Add-on fees)</td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span> (Add-on fees)</td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span> (Requires multiple apps)</td>
                </tr>
                <tr>
                    <td className="whitespace-normal md:whitespace-nowrap">No Blackout Restrictions</td>
                    <td className="highlight whitespace-normal md:whitespace-nowrap"><span className="check">✓</span></td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span></td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span></td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span></td>
                </tr>
                <tr>
                    <td className="whitespace-normal md:whitespace-nowrap">Movies & Series On-Demand</td>
                    <td className="highlight whitespace-normal md:whitespace-nowrap"><span className="check">✓</span></td>
                    <td className="whitespace-normal md:whitespace-nowrap">Limited</td>
                    <td className="whitespace-normal md:whitespace-nowrap">Limited</td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="check">✓</span> (Across many apps)</td>
                </tr>
                <tr>
                    <td className="whitespace-normal md:whitespace-nowrap">Works on All Your Devices</td>
                    <td className="highlight whitespace-normal md:whitespace-nowrap"><span className="check">✓</span></td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span> (Set-top box only)</td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span> (Set-top box only)</td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="check">✓</span></td>
                </tr>
                <tr>
                    <td className="whitespace-normal md:whitespace-nowrap">Instant Setup (Under 5 Mins)</td>
                    <td className="highlight whitespace-normal md:whitespace-nowrap"><span className="check">✓</span></td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span> (Technician needed)</td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span> (Technician needed)</td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="check">✓</span></td>
                </tr>
                    <tr>
                    <td className="whitespace-normal md:whitespace-nowrap">No Contracts / Hidden Fees</td>
                    <td className="highlight whitespace-normal md:whitespace-nowrap"><span className="check">✓</span></td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span></td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="cross">✗</span></td>
                    <td className="whitespace-normal md:whitespace-nowrap"><span className="check">✓</span></td>
                </tr>
                <tr className="bg-gray-800">
                    <td className="font-extrabold whitespace-normal md:whitespace-nowrap">Average Monthly Cost</td>
                    <td className="cost text-green-400 highlight whitespace-normal md:whitespace-nowrap">$9.99</td>
                    <td className="cost text-red-400 whitespace-normal md:whitespace-nowrap">$120+</td>
                    <td className="cost text-red-400 whitespace-normal md:whitespace-nowrap">$135+</td>
                    <td className="cost text-red-400 whitespace-normal md:whitespace-nowrap">$75+</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
};

export default ComparisonTable;
