"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SmartTvIcon, FirestickIcon, AppleTvIcon, AndroidIcon, IosIcon, PcIcon } from './Icons';

const DeviceGrid: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="device-logo-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            <div className="device-item flex flex-col items-center justify-center p-4">
                <SmartTvIcon className="w-20 h-20 text-gray-300" />
                <p className="mt-2 text-sm font-semibold text-gray-300">Smart TV</p>
            </div>
            <div className="device-item flex flex-col items-center justify-center p-4">
                <FirestickIcon className="w-20 h-20 text-gray-300" />
                <p className="mt-2 text-sm font-semibold text-gray-300">Firestick</p>
            </div>
            <div className="device-item flex flex-col items-center justify-center p-4">
                <AppleTvIcon className="w-20 h-20 text-gray-300" />
                <p className="mt-2 text-sm font-semibold text-gray-300">Apple TV</p>
            </div>
            <div className="device-item flex flex-col items-center justify-center p-4">
                <AndroidIcon className="w-20 h-20 text-gray-300" />
                <p className="mt-2 text-sm font-semibold text-gray-300">Android</p>
            </div>
            <div className="device-item flex flex-col items-center justify-center p-4">
                <IosIcon className="w-20 h-20 text-gray-300" />
                <p className="mt-2 text-sm font-semibold text-gray-300">iOS</p>
            </div>
            <div className="device-item flex flex-col items-center justify-center p-4">
                <PcIcon className="w-20 h-20 text-gray-300" />
                <p className="mt-2 text-sm font-semibold text-gray-300">PC/Laptop</p>
            </div>
        </div>
    );
};

export default DeviceGrid;
