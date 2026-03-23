const fs = require('fs');
const usaContent = fs.readFileSync('app/best-iptv-usa/page.tsx', 'utf8');

// Build UK Page
let ukContent = usaContent.replace(/USA/g, 'UK')
               .replace(/US/g, 'UK')
               .replace(/United States/g, 'United Kingdom')
               .replace(/American/g, 'British')
               .replace(/NFL/g, 'Premier League')
               .replace(/NBA/g, 'Champions League')
               .replace(/MLB/g, 'EFL Championship')
               .replace(/NHL/g, 'Rugby')
               .replace(/ESPN, FOX, HBO/g, 'Sky Sports, BT Sport, BBC')
               .replace(/New York, LA, Chicago/g, 'London, Manchester, Birmingham')
               .replace(/\$9\.99/g, '£8.99')
               .replace(/\$37\.99/g, '£34.99')
               .replace(/\$59\.99/g, '£49.99')
               .replace(/best-iptv-usa-hero\.png/g, 'best-iptv-uk-hero.png')
               .replace(/best-iptv-usa-devices\.png/g, 'best-iptv-uk-devices.png');
// Apply PMAX formula: H011: [Rating] + [Social Proof]
ukContent = ukContent.replace(/Best IPTV UK 2026: The Complete Guide to Premium British Streaming/, 'Rated #1 IPTV in the UK for 2026: Join 50,000+ Happy Streamers');
ukContent = ukContent.replace(/Best IPTV UK/, 'Best IPTV UK');

// Build Samsung Page
let samsungContent = usaContent.replace(/USA/g, 'Samsung TV')
                     .replace(/US/g, 'Samsung')
                     .replace(/Best IPTV Samsung TV/g, 'Best IPTV for Samsung TV')
                     .replace(/best-iptv-usa-hero\.png/g, 'samsung-smart-tv-iptv-hero.png')
                     .replace(/best-iptv-usa-devices\.png/g, 'samsung-tizen-app-store.png')
                     .replace(/American/g, 'Smart TV')
                     .replace(/New York, Chicago, Dallas, and Los Angeles/g, 'London, New York, and global hubs');
// Apply PMAX formula: H001: [Benefit] in [Timeframe]
samsungContent = samsungContent.replace(/Best IPTV for Samsung TV 2026: The Complete Guide to Premium Smart TV Streaming/, 'Unlock 10k+ Channels on Samsung TV in 5 Minutes');

// Build LG Page
let lgContent = usaContent.replace(/USA/g, 'LG TV')
                  .replace(/US/g, 'LG')
                  .replace(/Best IPTV LG TV/g, 'Best IPTV for LG Smart TV')
                  .replace(/best-iptv-usa-hero\.png/g, 'lg-smart-tv-home-screen-iptv-app.png')
                  .replace(/best-iptv-usa-devices\.png/g, 'lg-tv-wired-connection-iptv.png');
// Apply PMAX formula: H001: [Benefit] in [Timeframe]
lgContent = lgContent.replace(/Best IPTV for LG Smart TV 2026: The Complete Guide to Premium Smart TV Streaming/, 'Start Streaming 10k+ Channels on LG TV in 5 Minutes');

fs.mkdirSync('app/best-iptv-uk', { recursive: true });
fs.mkdirSync('app/iptv-for-samsung-tv', { recursive: true });
fs.mkdirSync('app/iptv-for-lg-smart-tv', { recursive: true });

fs.writeFileSync('app/best-iptv-uk/page.tsx', ukContent);
fs.writeFileSync('app/iptv-for-samsung-tv/page.tsx', samsungContent);
fs.writeFileSync('app/iptv-for-lg-smart-tv/page.tsx', lgContent);

// Write layouts
fs.writeFileSync('app/best-iptv-uk/layout.tsx', `import { Metadata } from 'next';\nexport const metadata: Metadata = { title: 'Best IPTV in UK 2026 - Sky Sports, BT Sport & 10k+ Channels', description: 'Experience the UK\\'s best rated IPTV service. Watch Premier League, Sky Sports, and BBC in 4K with no buffering.' };\nexport default function Layout({ children }: { children: React.ReactNode; }) { return <>{children}</>; }`);
fs.writeFileSync('app/iptv-for-samsung-tv/layout.tsx', `import { Metadata } from 'next';\nexport const metadata: Metadata = { title: 'IPTV for Samsung Smart TV - Instant Activation Guide', description: 'Install the best IPTV app on your Samsung Tizen Smart TV. Stream 10,000+ channels in true 4K without extra boxes.' };\nexport default function Layout({ children }: { children: React.ReactNode; }) { return <>{children}</>; }`);
fs.writeFileSync('app/iptv-for-lg-smart-tv/layout.tsx', `import { Metadata } from 'next';\nexport const metadata: Metadata = { title: 'Start Streaming 10k+ Channels on LG TV in 5 Minutes | StreamVerse', description: 'Experience premium IPTV for LG Smart TV. 10,000+ live channels in 4K with instant activation and zero buffering.' };\nexport default function Layout({ children }: { children: React.ReactNode; }) { return <>{children}</>; }`);

console.log('Pages built and layouts generated.');
