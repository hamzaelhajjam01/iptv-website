import React from 'react';

// Common icon props
type IconProps = React.SVGProps<SVGSVGElement>;

export const CheckIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
);

// Feature Icons (used in Reseller page)
export const UpdateIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

export const DeviceIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
);

export const TrialIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

export const ExpiryIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
);

// Device Icons
export const SmartTvIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h14a2 2 0 012 2v12a4 4 0 01-4 4H7zM3 13h18"></path></svg>
);

export const FirestickIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><rect x="3" y="11" width="18" height="3" rx="1.5"></rect><path d="M12.5 14v4.5a2.5 2.5 0 01-5 0V14"></path><path d="M10 11V4a2 2 0 012-2h0a2 2 0 012 2v7"></path></svg>
);

export const AppleTvIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><rect x="2" y="7" width="20" height="13" rx="2"></rect><path d="M12 2h.01"></path><path d="M17.29 2.29A6.5 6.5 0 0012 5a6.5 6.5 0 00-5.29-2.71.01.01 0 01.01-.01A6.5 6.5 0 0112 5a6.5 6.5 0 015.29-2.71.01.01 0 00.01.01z"></path></svg>
);

export const AndroidIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><rect x="5" y="2" width="14" height="20" rx="2"></rect><path d="M8 22h8"></path><path d="M12 18h.01"></path></svg>
);

export const IosIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><rect x="6" y="2" width="12" height="20" rx="2"></rect><path d="M12 18h.01"></path><path d="M12 6h.01"></path></svg>
);

export const PcIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M2 17h20"></path><path d="M6 21h12"></path></svg>
);

// Navigation Icons
export const MenuIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
);
