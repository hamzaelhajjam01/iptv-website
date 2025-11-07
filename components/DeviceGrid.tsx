"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const DeviceGrid: React.FC = () => {
    const { t } = useLanguage();
    return (
     <div className="device-logo-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
        <div className="device-item flex flex-col items-center justify-center p-4">
            <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h14a2 2 0 012 2v12a4 4 0 01-4 4H7zM3 13h18"></path></svg>
            <p className="mt-2 text-sm font-semibold text-gray-300">Smart TV</p>
        </div>
        <div className="device-item flex flex-col items-center justify-center p-4">
           <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="3" rx="1.5"></rect><path d="M12.5 14v4.5a2.5 2.5 0 01-5 0V14"></path><path d="M10 11V4a2 2 0 012-2h0a2 2 0 012 2v7"></path></svg>
            <p className="mt-2 text-sm font-semibold text-gray-300">Firestick</p>
        </div>
        <div className="device-item flex flex-col items-center justify-center p-4">
            <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="13" rx="2"></rect><path d="M12 2h.01"></path><path d="M17.29 2.29A6.5 6.5 0 0012 5a6.5 6.5 0 00-5.29-2.71.01.01 0 01.01-.01A6.5 6.5 0 0112 5a6.5 6.5 0 015.29-2.71.01.01 0 00.01.01z"></path></svg>
            <p className="mt-2 text-sm font-semibold text-gray-300">Apple TV</p>
        </div>
        <div className="device-item flex flex-col items-center justify-center p-4">
            <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="2"></rect><path d="M8 22h8"></path><path d="M12 18h.01"></path></svg>
            <p className="mt-2 text-sm font-semibold text-gray-300">Android</p>
        </div>
        <div className="device-item flex flex-col items-center justify-center p-4">
            <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="2" width="12" height="20" rx="2"></rect><path d="M12 18h.01"></path><path d="M12 6h.01"></path></svg>
            <p className="mt-2 text-sm font-semibold text-gray-300">iOS</p>
        </div>
        <div className="device-item flex flex-col items-center justify-center p-4">
            <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M2 17h20"></path><path d="M6 21h12"></path></svg>
            <p className="mt-2 text-sm font-semibold text-gray-300">PC/Laptop</p>
        </div>
    </div>
    );
};

export default DeviceGrid;
