
import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import type { Page } from './types';
import { callGeminiApi } from './services/geminiService';

// --- TRANSLATIONS & LANGUAGE CONTEXT ---

const translations = {
    en: {
        navHome: "Home", navChannelsFeatures: "Channels & Features", navPricing: "Pricing", navAbout: "About Us", navHelp: "Help Center", navBlog: "Blog", getStarted: "Get Started",
        heroTitle: "Tired of Overpriced Cable and Missing Your Favorite Shows?", heroSubtitle: "Stop paying a fortune for hundreds of channels you don't watch, only to face frustrating blackouts during the big game.", heroSolve: "Get Instant Access to over 16,000+ Live Channels, Movies, and Sports in crystal-clear 4K HD for one low monthly price.", heroCTA: "GET INSTANT ACCESS NOW", heroUrgency: "Special Launch Offer: 50% OFF for the first 100 customers!",
        socialProof: "Join over <span class='font-bold text-white'>15,000+</span> satisfied streamers in the USA who have cut the cord forever.",
        howItWorksTitle: "Entertainment Freedom is a Few Clicks Away",
        step1Title: "Choose Your Plan", step1Desc: "Select the perfect subscription that fits your needs.", step2Title: "Get Instant Login Details", step2Desc: "Your access is sent to your email immediately after payment.", step3Title: "Start Watching", step3Desc: "Log in on your favorite device and enjoy limitless entertainment.",
        howItWorksHook: "No messy wires, no waiting for a technician. You'll be watching in less than 5 minutes.",
        whyChooseTitle: "Why Choose StreamVerse?", whyChooseSubtitle: "We're not just another IPTV service. We're built on a foundation of quality, reliability, and customer obsession.",
        why1Title: "Secure & Encrypted Streams", why1Desc: "Your privacy matters. Our streams are secured to protect your viewing activity.", why2Title: "Stable & Ultra-Fast Servers", why2Desc: "Hosted in private data centers, our servers provide a buffer-free experience, even during peak hours.", why3Title: "24/7 Customer Support", why3Desc: "Our dedicated support team is available around the clock via email, tickets, and Telegram to help you with any issue.",
        devicesTitle: "Watch Everywhere - On All Your Devices", devicesSubtitle: "We understand you love choice in what you watch, and where you watch it. Simply connect to your TV, computer, tablet or smartphone and enjoy your favorite programming anywhere, anytime.",
        featuresTitle: "The Last Entertainment Service You'll Ever Need", featuresSubtitle: "We solve the biggest pains of traditional TV. This is more than a cable TV alternative, it's an upgrade.",
        feature1Title: "16,000+ Channels", feature1Desc: "Never miss another live sports event, news broadcast, or hit series again. Your entertainment is now limitless.", feature2Title: "Stunning 4K/HD Quality", feature2Desc: "Experience heart-pounding action in cinema-quality resolution that makes you feel like you're right there.", feature3Title: "Anti-Freeze™ Technology", feature3Desc: "Our powerful servers ensure silky-smooth streaming without the agonizing buffering that ruins the best moments.", feature4Title: "Multi-Device Compatibility", feature4Desc: "Watch on your TV, laptop, tablet, or phone. Your shows, your rules, anywhere you go.",
        channelsTitle: "A Universe of Channels Awaits", channelsSubtitle: "From premium sports and movie channels to international content, we have something for everyone.",
        geminiTitle: "Don't Know What to Watch?", geminiSubtitle: "Describe your perfect movie night or the sports leagues you love. Our AI will build a personalized guide just for you.",
        geminiPlaceholder: "e.g., 'I love Premier League soccer, true crime documentaries, and classic 80s action movies...'", geminiCTA: "✨ Generate My Channel Guide", geminiError: "Sorry, we couldn't generate your guide at the moment. Please try again later.", geminiEmpty: "Please tell us what you like to watch first!",
        comparisonTitle: "Stop Overpaying, Start Overwatching", comparisonSubtitle: "See how StreamVerse stacks up against the services you're probably paying way too much for.",
        pricingTitle: "Lock In Your Price Before It's Too Late!", countdownTitle: "Launch Offer Ends In:",
        plan1Title: "1 Month", plan1Desc: "Perfect for trying us out.", plan2Title: "12 Months", plan2Desc: "Ultimate savings and entertainment.", plan3Title: "6 Months", plan3Desc: "Great value for committed streamers.",
        planCTA: "START MY SUBSCRIPTION", bestValue: "BEST VALUE", pricingScarcity: "Due to high demand, subscription spots are filling up fast. This price is not guaranteed.",
        testimonialsTitle: "Don't Just Take Our Word For It...",
        finalCtaTitle: "Your Favorite Team Is Playing Tonight. Are You Going to Miss It... <span class='text-red-500'>Again?</span>", finalCtaSubtitle: "Don't let cable blackouts and high prices dictate your entertainment. Take control now.", finalCTA: "YES! I WANT INSTANT ACCESS", guarantee: "100% Satisfaction Guarantee",
        guaranteeDetails: "Try StreamVerse risk-free for 7 days. If you don't love it, get a full refund. No questions asked.",
        aboutTitle: "About StreamVerse", aboutSubtitle: "We are a team of passionate developers and entertainment lovers who were tired of the limitations and high costs of traditional cable TV. We believed there had to be a better way.", aboutDesc: "StreamVerse was born from that belief. Our mission is to provide a seamless, high-quality, and affordable streaming experience that gives you the freedom to watch what you want, when you want, and where you want. We leverage cutting-edge technology to deliver a massive library of content from around the globe, right to your favorite devices. We're constantly innovating and improving our service to ensure you have the ultimate entertainment universe at your fingertips.",
        helpTitle: "Help Center", helpSupportTitle: "Ticket Support", helpSupportDesc: "Get detailed help from our technical team.", helpSupportCTA: "Open a Ticket", helpEmailTitle: "Email Assistance", helpEmailDesc: "For general inquiries and questions.", helpEmailCTA: "Send an Email", helpTelegramTitle: "Telegram Channel", helpTelegramDesc: "Join for live updates and community chat.", helpTelegramCTA: "Join Channel",
        aiHelpTitle: "AI Installation Assistant", aiHelpSubtitle: "Confused about setup? Tell our AI what device you're using, and it will generate simple, step-by-step installation instructions for you.",
        aiHelpPlaceholder: "e.g., 'Samsung Smart TV', 'Amazon Firestick 4K', 'iPhone 15', 'Windows Laptop' ...", aiHelpCTA: "🤖 Generate My Installation Steps", aiHelpError: "Sorry, we couldn't generate instructions right now. Please try again later.", aiHelpEmpty: "Please enter your device name first!",
        faqTitle: "Frequently Asked Questions", faq1q: "Is IPTV legal?", faq1a: "Yes, our service is legal. We provide access to content that is publicly available on the internet and do not host any content ourselves. It's important for users to be aware of the copyright laws in their respective countries.", faq2q: "What devices can I use?", faq2a: "StreamVerse works on almost any device! This includes Smart TVs (Samsung, LG), Amazon Firestick, Android Boxes, Apple TV, iPhones, Android smartphones, and computers. If you can install an app, you can use StreamVerse.", faq3q: "How fast does my internet need to be?", faq3a: "For a smooth experience, we recommend a minimum of 25 Mbps for HD streaming and 50 Mbps for 4K streaming. Our Anti-Freeze™ technology helps optimize the stream for your connection speed.", faq4q: "Can I watch in multiple locations?", faq4a: "Our standard plans are for a single connection at one time. However, we offer affordable add-ons for multiple connections if you need to watch on several devices simultaneously in different locations.",
        modalTitle: "WAIT! Don't Leave Empty-Handed!", modalSubtitle: "You're seconds away from solving your TV problems forever. As a special one-time offer, try us out $0.99 for 24H.", modalCTA: "YES! GIVE ME MY FREE 24-HOUR TRIAL", modalUrgency: "No credit card required. This offer will not appear again.",
        footerCopyright: "&copy; 2024 StreamVerse. All Rights Reserved. We are a premium IPTV subscription provider.", footerDisclaimer: "Disclaimer: StreamVerse does not host or distribute any content. We provide a service to access content that is already available on the internet."
    },
    es: {
        navHome: "Inicio", navChannelsFeatures: "Canales y Funciones", navPricing: "Precios", navAbout: "Sobre Nosotros", navHelp: "Ayuda", navBlog: "Blog", getStarted: "Empezar",
        heroTitle: "¿Cansado del cable caro y de perderte tus programas favoritos?", heroSubtitle: "Deja de pagar una fortuna por cientos de canales que no ves, solo para enfrentarte a frustrantes bloqueos durante el gran partido.", heroSolve: "Obtén acceso instantáneo a más de 16,000 canales en vivo, películas y deportes en 4K HD nítido por un bajo precio mensual.", heroCTA: "OBTENER ACCESO AHORA", heroUrgency: "¡Oferta especial de lanzamiento: 50% de descuento para los primeros 100 clientes!",
        socialProof: "Únete a más de <span class='font-bold text-white'>15,000+</span> streamers satisfechos en España que han cortado el cable para siempre.",
        howItWorksTitle: "La libertad de entretenimiento está a unos pocos clics",
        step1Title: "Elige tu plan", step1Desc: "Selecciona la suscripción perfecta que se adapte a tus necesidades.", step2Title: "Recibe tus datos de acceso", step2Desc: "Tu acceso se envía a tu correo electrónico inmediatamente después del pago.", step3Title: "Empieza a ver", step3Desc: "Inicia sesión en tu dispositivo favorito y disfruta de entretenimiento ilimitado.",
        howItWorksHook: "Sin cables desordenados, sin esperar a un técnico. Estarás viendo en menos de 5 minutos.",
        whyChooseTitle: "¿Por qué elegir StreamVerse?", whyChooseSubtitle: "No somos solo otro servicio de IPTV. Estamos construidos sobre una base de calidad, fiabilidad y obsesión por el cliente.",
        why1Title: "Transmisiones seguras y encriptadas", why1Desc: "Tu privacidad es importante. Nuestras transmisiones están aseguradas para proteger tu actividad.", why2Title: "Servidores estables y ultrarrápidos", why2Desc: "Alojados en centros de datos privados, nuestros servidores ofrecen una experiencia sin interrupciones.", why3Title: "Soporte al cliente 24/7", why3Desc: "Nuestro equipo de soporte está disponible todo el día para ayudarte con cualquier problema.",
        devicesTitle: "Mira en todas partes, en todos tus dispositivos", devicesSubtitle: "Entendemos que te encanta elegir qué ver y dónde verlo. Conéctate a tu TV, computadora, tableta o smartphone y disfruta.",
        featuresTitle: "El último servicio de entretenimiento que necesitarás", featuresSubtitle: "Resolvemos los mayores problemas de la TV tradicional. Esto es más que una alternativa, es una mejora.",
        feature1Title: "+16,000 Canales", feature1Desc: "No te pierdas nunca más un evento deportivo en vivo, un noticiero o una serie de éxito.", feature2Title: "Calidad 4K/HD impresionante", feature2Desc: "Vive la acción con una resolución de calidad cinematográfica que te hace sentir como si estuvieras allí.", feature3Title: "Tecnología Anti-Freeze™", feature3Desc: "Nuestros potentes servidores garantizan una transmisión fluida sin el frustrante buffering.", feature4Title: "Compatibilidad multidispositivo", feature4Desc: "Mira en tu TV, portátil, tableta o teléfono. Tus programas, tus reglas, dondequiera que vayas.",
        channelsTitle: "Un universo de canales te espera", channelsSubtitle: "Desde canales premium de deportes y películas hasta contenido internacional, tenemos algo para todos.",
        geminiTitle: "¿No sabes qué ver?", geminiSubtitle: "Describe tu noche de cine perfecta o las ligas deportivas que te encantan. Nuestra IA creará una guía personalizada para ti.",
        geminiPlaceholder: "Ej: 'Me encanta el fútbol de La Liga, los documentales de crímenes y las películas de acción de los 80...'", geminiCTA: "✨ Generar mi guía de canales", geminiError: "Lo sentimos, no pudimos generar tu guía en este momento. Inténtalo de nuevo más tarde.", geminiEmpty: "¡Por favor, dinos primero qué te gusta ver!",
        comparisonTitle: "Deja de pagar de más, empieza a ver más", comparisonSubtitle: "Mira cómo se compara StreamVerse con los servicios por los que probablemente estás pagando demasiado.",
        pricingTitle: "¡Asegura tu precio antes de que sea tarde!", countdownTitle: "La oferta de lanzamiento termina en:",
        plan1Title: "1 Mes", plan1Desc: "Perfecto para probarnos.", plan2Title: "12 Meses", plan2Desc: "Ahorro y entretenimiento definitivos.", plan3Title: "6 Meses", plan3Desc: "Gran valor para streamers comprometidos.",
        planCTA: "INICIAR MI SUSCRIPCIÓN", bestValue: "MEJOR VALOR", pricingScarcity: "Debido a la alta demanda, los cupos se están llenando rápido. Este precio no está garantizado.",
        testimonialsTitle: "No te fíes solo de nuestra palabra...",
        finalCtaTitle: "Tu equipo favorito juega esta noche. ¿Te lo vas a perder... <span class='text-red-500'>otra vez?</span>", finalCtaSubtitle: "No dejes que los bloqueos y los altos precios dicten tu entretenimiento. Toma el control ahora.", finalCTA: "¡SÍ! QUIERO ACCESO INSTANTÁNEO", guarantee: "Garantía de satisfacción del 100%",
        guaranteeDetails: "Prueba StreamVerse sin riesgo durante 7 días. Si no te encanta, te devolvemos tu dinero. Sin preguntas.",
        aboutTitle: "Sobre StreamVerse", aboutSubtitle: "Somos un equipo de desarrolladores apasionados y amantes del entretenimiento cansados de las limitaciones de la TV por cable.", aboutDesc: "Nuestra misión es proporcionar una experiencia de streaming fluida, de alta calidad y asequible que te dé la libertad de ver lo que quieras, cuando quieras y donde quieras. Aprovechamos la tecnología de punta para ofrecer una biblioteca masiva de contenido de todo el mundo, directamente a tus dispositivos.",
        helpTitle: "Centro de ayuda", helpSupportTitle: "Soporte por Ticket", helpSupportDesc: "Obtén ayuda detallada de nuestro equipo técnico.", helpSupportCTA: "Abrir un Ticket", helpEmailTitle: "Asistencia por email", helpEmailDesc: "Para consultas generales y preguntas.", helpEmailCTA: "Enviar un email", helpTelegramTitle: "Canal de Telegram", helpTelegramDesc: "Únete para actualizaciones en vivo y chat.", helpTelegramCTA: "Unirse al canal",
        aiHelpTitle: "Asistente de instalación IA", aiHelpSubtitle: "¿Confundido con la configuración? Dile a nuestra IA qué dispositivo usas y generará instrucciones sencillas para ti.",
        aiHelpPlaceholder: "Ej: 'Smart TV Samsung', 'Amazon Firestick 4K', 'iPhone 15', 'Portátil con Windows' ...", aiHelpCTA: "🤖 Generar mis pasos de instalación", aiHelpError: "Lo sentimos, no pudimos generar las instrucciones ahora. Inténtalo de nuevo más tarde.", aiHelpEmpty: "¡Por favor, introduce el nombre de tu dispositivo!",
        faqTitle: "Preguntas frecuentes", faq1q: "¿Es legal el IPTV?", faq1a: "Sí, nuestro servicio es legal. Brindamos acceso a contenido que está disponible públicamente en Internet. Es responsabilidad de los usuarios cumplir con las leyes de derechos de autor de su país.", faq2q: "¿Qué dispositivos puedo usar?", faq2a: "¡StreamVerse funciona en casi cualquier dispositivo! Esto incluye Smart TVs, Amazon Firestick, Cajas Android, Apple TV, iPhones, smartphones Android y computadoras.", faq3q: "¿Qué tan rápido debe ser mi internet?", faq3a: "Para una experiencia fluida, recomendamos un mínimo de 25 Mbps para HD y 50 Mbps para 4K. Nuestra tecnología Anti-Freeze™ ayuda a optimizar la transmisión.", faq4q: "¿Puedo ver en múltiples lugares?", faq4a: "Nuestros planes estándar son para una conexión a la vez. Sin embargo, ofrecemos complementos asequibles para múltiples conexiones si lo necesitas.",
        modalTitle: "¡ESPERA! ¡No te vayas con las manos vacías!", modalSubtitle: "Estás a segundos de resolver tus problemas de TV para siempre. Como oferta especial única, pruébanos $0.99 por 24H.", modalCTA: "¡SÍ! QUIERO MI PRUEBA DE 24 HORAS", modalUrgency: "No se requiere tarjeta de crédito. Esta oferta no volverá a aparecer.",
        footerCopyright: "&copy; 2024 StreamVerse. Todos los derechos reservados. Somos un proveedor premium de suscripciones IPTV.", footerDisclaimer: "Aviso: StreamVerse no aloja ni distribuye ningún contenido. Proporcionamos un servicio para acceder a contenido que ya está disponible en Internet."
    },
    fr: {
        navHome: "Accueil", navChannelsFeatures: "Chaînes et Fonctionnalités", navPricing: "Tarifs", navAbout: "À Propos", navHelp: "Aide", navBlog: "Blog", getStarted: "Commencer",
        heroTitle: "Fatigué du câble hors de prix et de manquer vos émissions préférées ?", heroSubtitle: "Arrêtez de payer une fortune pour des centaines de chaînes que vous ne regardez pas, pour ensuite subir des interruptions frustrantes pendant le grand match.", heroSolve: "Obtenez un accès instantané à plus de 16 000 chaînes en direct, films et sports en 4K HD pour un prix mensuel modique.", heroCTA: "OBTENIR L'ACCÈS MAINTENANT", heroUrgency: "Offre de lancement spéciale : 50% de réduction pour les 100 premiers clients !",
        socialProof: "Rejoignez plus de <span class='font-bold text-white'>15 000+</span> streamers satisfaits en France qui ont définitivement coupé le cordon.",
        howItWorksTitle: "La liberté de divertissement à quelques clics",
        step1Title: "Choisissez votre forfait", step1Desc: "Sélectionnez l'abonnement parfait qui correspond à vos besoins.", step2Title: "Recevez vos identifiants", step2Desc: "Votre accès est envoyé par e-mail immédiatement après le paiement.", step3Title: "Commencez à regarder", step3Desc: "Connectez-vous sur votre appareil préféré et profitez d'un divertissement sans limites.",
        howItWorksHook: "Pas de câbles encombrants, pas d'attente pour un technicien. Vous regarderez en moins de 5 minutes.",
        whyChooseTitle: "Pourquoi choisir StreamVerse ?", whyChooseSubtitle: "Nous ne sommes pas un service IPTV ordinaire. Nous sommes bâtis sur la qualité, la fiabilité et l'obsession du client.",
        why1Title: "Flux sécurisés et cryptés", why1Desc: "Votre vie privée est importante. Nos flux sont sécurisés pour protéger votre activité de visionnage.", why2Title: "Serveurs stables et ultra-rapides", why2Desc: "Hébergés dans des centres de données privés, nos serveurs offrent une expérience sans mise en mémoire tampon.", why3Title: "Support client 24/7", why3Desc: "Notre équipe de support est disponible 24h/24 pour vous aider avec n'importe quel problème.",
        devicesTitle: "Regardez partout, sur tous vos appareils", devicesSubtitle: "Nous savons que vous aimez choisir quoi et où regarder. Connectez-vous simplement à votre télé, ordinateur, tablette ou smartphone.",
        featuresTitle: "Le dernier service de divertissement dont vous aurez besoin", featuresSubtitle: "Nous résolvons les plus grands problèmes de la télévision traditionnelle. C'est plus qu'une alternative, c'est une mise à niveau.",
        feature1Title: "16 000+ Chaînes", feature1Desc: "Ne manquez plus jamais un événement sportif en direct, un journal télévisé ou une série à succès.", feature2Title: "Qualité 4K/HD époustouflante", feature2Desc: "Vivez l'action avec une résolution de qualité cinéma qui vous donnera l'impression d'y être.", feature3Title: "Technologie Anti-Freeze™", feature3Desc: "Nos serveurs puissants garantissent un streaming fluide sans le buffering angoissant.", feature4Title: "Compatibilité multi-appareils", feature4Desc: "Regardez sur votre TV, ordinateur portable, tablette ou téléphone. Vos émissions, vos règles, où que vous soyez.",
        channelsTitle: "Un univers de chaînes vous attend", channelsSubtitle: "Des chaînes sportives et cinématographiques premium au contenu international, nous avons de tout.",
        geminiTitle: "Vous ne savez pas quoi regarder ?", geminiSubtitle: "Décrivez votre soirée cinéma parfaite ou vos ligues sportives préférées. Notre IA créera un guide personnalisé pour vous.",
        geminiPlaceholder: "Ex : 'J'adore le football de la Ligue 1, les documentaires sur les crimes et les films d'action des années 80...'", geminiCTA: "✨ Générer mon guide de chaînes", geminiError: "Désolé, nous n'avons pas pu générer votre guide. Veuillez réessayer plus tard.", geminiEmpty: "Veuillez d'abord nous dire ce que vous aimez regarder !",
        comparisonTitle: "Arrêtez de surpayer, commencez à regarder plus", comparisonSubtitle: "Voyez comment StreamVerse se compare aux services pour lesquels vous payez probablement beaucoup trop cher.",
        pricingTitle: "Bloquez votre prix avant qu'il ne soit trop tard !", countdownTitle: "L'offre de lancement se termine dans :",
        plan1Title: "1 Mois", plan1Desc: "Parfait pour nous essayer.", plan2Title: "12 Mois", plan2Desc: "Économies et divertissement ultimes.", plan3Title: "6 Mois", plan3Desc: "Excellent rapport qualité-prix.",
        planCTA: "COMMENCER MON ABONNEMENT", bestValue: "MEILLEUR PRIX", pricingScarcity: "En raison de la forte demande, les places se remplissent vite. Ce prix n'est pas garanti.",
        testimonialsTitle: "Ne nous croyez pas sur parole...",
        finalCtaTitle: "Votre équipe favorite joue ce soir. Allez-vous le manquer... <span class='text-red-500'>encore ?</span>", finalCtaSubtitle: "Ne laissez pas les interruptions et les prix élevés dicter votre divertissement. Prenez le contrôle.", finalCTA: "OUI ! JE VEUX UN ACCÈS INSTANTANÉ", guarantee: "Garantie de satisfaction à 100%",
        guaranteeDetails: "Essayez StreamVerse sans risque pendant 7 jours. Si vous n'êtes pas satisfait, nous vous remboursons intégralement. Sans poser de questions.",
        aboutTitle: "À propos de StreamVerse", aboutSubtitle: "Nous sommes une équipe de développeurs et d'amateurs de divertissement fatigués des limitations et des coûts élevés du câble.", aboutDesc: "Notre mission est de fournir une expérience de streaming fluide, de haute qualité et abordable, vous donnant la liberté de regarder ce que vous voulez, quand vous voulez et où vous voulez. Nous utilisons une technologie de pointe pour offrir une bibliothèque massive de contenu du monde entier, directement sur vos appareils.",
        helpTitle: "Centre d'aide", helpSupportTitle: "Support par Ticket", helpSupportDesc: "Obtenez une aide détaillée de notre équipe technique.", helpSupportCTA: "Ouvrir un Ticket", helpEmailTitle: "Assistance par e-mail", helpEmailDesc: "Pour les demandes générales.", helpEmailCTA: "Envoyer un e-mail", helpTelegramTitle: "Canal Telegram", helpTelegramDesc: "Rejoignez-nous pour des mises à jour en direct.", helpTelegramCTA: "Rejoindre le canal",
        aiHelpTitle: "Assistant d'installation IA", aiHelpSubtitle: "Besoin d'aide pour l'installation ? Dites à notre IA quel appareil vous utilisez, et elle générera des instructions pour vous.",
        aiHelpPlaceholder: "Ex : 'Smart TV Samsung', 'Amazon Firestick 4K', 'iPhone 15', 'PC portable Windows' ...", aiHelpCTA: "🤖 Générer mes étapes d'installation", aiHelpError: "Désolé, impossible de générer les instructions. Veuillez réessayer.",
        aiHelpEmpty: "Veuillez d'abord entrer le nom de votre appareil !",
        faqTitle: "Questions fréquentes", faq1q: "L'IPTV est-il légal ?", faq1a: "Oui, notre service est légal. Nous donnons accès à du contenu disponible publiquement sur Internet. Il incombe aux utilisateurs de respecter les lois sur le droit d'auteur de leur pays.", faq2q: "Quels appareils puis-je utiliser ?", faq2a: "StreamVerse fonctionne sur presque tous les appareils ! Cela inclut les Smart TV, Amazon Firestick, les boîtiers Android, Apple TV, les iPhones, les smartphones Android et les ordinateurs.", faq3q: "Quelle vitesse Internet est nécessaire ?", faq3a: "Pour une expérience fluide, nous recommençons un minimum de 25 Mbps pour la HD et 50 Mbps pour la 4K. Notre technologie Anti-Freeze™ aide à optimiser le flux.", faq4q: "Puis-je regarder depuis plusieurs endroits ?", faq4a: "Nos forfaits standard sont pour une seule connexion à la fois. Cependant, nous proposons des options abordables pour des connexions multiples.",
        modalTitle: "ATTENDEZ ! Ne partez pas les mains vides !", modalSubtitle: "Vous êtes à quelques secondes de résoudre vos problèmes de TV pour toujours. Profitez d'une offre spéciale unique : un essai pour $0.99 pour 24H.", modalCTA: "OUI ! JE VEUX MON ESSAI DE 24H", modalUrgency: "Aucune carte de crédit requise. Cette offre n'apparaîtra plus.",
        footerCopyright: "&copy; 2024 StreamVerse. Tous droits réservés. Nous sommes un fournisseur d'abonnements IPTV premium.", footerDisclaimer: "Avis de non-responsabilité : StreamVerse n'héberge ni ne distribue aucun contenu. Nous fournissons un service pour accéder à du contenu déjà disponible sur Internet."
    }
};

type Language = 'en' | 'es' | 'fr';
type Translations = typeof translations;

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: keyof Translations['en']) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>('en');

    const t = useCallback((key: keyof Translations['en']): string => {
        return translations[lang][key] || translations['en'][key];
    }, [lang]);
    
    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};


// --- SHARED UI COMPONENTS (Defined outside main App to prevent re-renders) ---

interface HeaderProps {
    currentPage: Page;
    setPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
    const { lang, setLang, t } = useLanguage();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (page: Page) => {
        setPage(page);
        setMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(e.target.value as Language);
    };

    const navItems: { page: Page; key: keyof Translations['en'] }[] = [
        { page: 'home', key: 'navHome' },
        { page: 'channels-features', key: 'navChannelsFeatures' },
        { page: 'pricing', key: 'navPricing' },
        { page: 'help', key: 'navHelp' },
        { page: 'about', key: 'navAbout' },
    ];
    
    const desktopNav = (
         <nav id="desktop-nav" className="hidden xl:flex items-center gap-2 text-lg">
            {navItems.map(item => (
                <a key={item.page} onClick={() => handleNavClick(item.page)} className={`nav-link ${currentPage === item.page ? 'active' : ''}`}>{t(item.key)}</a>
            ))}
            <a href="https://blog.streamversetv.com" target="_blank" rel="noopener noreferrer" className="nav-link">{t('navBlog')}</a>
        </nav>
    );

    const mobileNav = (
        <div id="mobile-menu" className={`xl:hidden bg-card-dark ${isMobileMenuOpen ? 'open' : ''}`}>
             <nav className="flex flex-col items-center gap-4 p-4">
                {navItems.map(item => (
                    <a key={item.page} onClick={() => handleNavClick(item.page)} className={`nav-link ${currentPage === item.page ? 'active' : ''}`}>{t(item.key)}</a>
                ))}
                 <a href="https://blog.streamversetv.com" target="_blank" rel="noopener noreferrer" className="nav-link">{t('navBlog')}</a>
                 <a onClick={() => handleNavClick('pricing')} className="nav-link-cta bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg cta-button w-full text-center">{t('getStarted')}</a>
                 <div className="w-full pt-4 mt-4 border-t border-gray-700">
                     <select id="mobile-language-switcher" value={lang} onChange={handleLanguageChange} className="language-switcher-style text-white rounded-md py-3 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                         <option value="en">English</option>
                         <option value="es">Español</option>
                         <option value="fr">Français</option>
                     </select>
                 </div>
             </nav>
        </div>
    );

    return (
        <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a onClick={() => handleNavClick('home')} className="flex items-center cursor-pointer">
                    <img src="/images/logo-streamverse.png" alt="StreamVerse Logo" className="h-10 w-auto" />
                </a>

                {desktopNav}
                
                <div className="hidden xl:flex items-center gap-4">
                     <a onClick={() => handleNavClick('pricing')} className="nav-link-cta bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg cta-button cursor-pointer">{t('getStarted')}</a>
                     <select id="language-switcher" value={lang} onChange={handleLanguageChange} className="language-switcher-style text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                         <option value="en">English</option>
                         <option value="es">Español</option>
                         <option value="fr">Français</option>
                     </select>
                </div>
                <div className="xl:hidden">
                    <button id="mobile-menu-button" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
            {mobileNav}
        </header>
    );
};

const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
         <footer className="bg-section-dark text-center py-8 px-6">
            <div className="container mx-auto">
                 <div className="mb-4">
                     <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Accepted Payment Methods" className="h-8 mx-auto" onError={(e) => { const target = e.target as HTMLImageElement; target.src='https://placehold.co/300x40/0c1427/e5e7eb?text=Payments+Accepted'; }}/>
                 </div>
                <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: t('footerCopyright') }}></p>
                <p className="text-gray-600 text-sm mt-2">{t('footerDisclaimer')}</p>
            </div>
        </footer>
    );
};

const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    const reviews = [1, 2, 3, 4, 5, 6];
    const waReviews = [1, 2, 3, 4, 5, 6];

    return (
        <section className="py-20 px-6 bg-section-dark">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{t('testimonialsTitle')}</h2>
            </div>
        
            <div className="marquee group mt-6">
              <div className="track">
                {[...reviews, ...reviews].map((rev, index) => (
                    <img key={index} src={`/images/reviews/rev${rev}.webp`} alt={`Trustpilot review ${rev}`} className="tp-card" />
                ))}
              </div>
            </div>
        
            <div className="flex justify-center mt-6">
              <img src="/images/reviews/Trust-Pilot-Review-badge-streamversetv.png" alt="Trustpilot badge" className="trust-badge" />
            </div>

            <div className="marquee group mt-12">
              <div className="track">
                {[...waReviews, ...waReviews].map((rev, index) => (
                    <img key={index} src={`/images/reviews/streamversetv-review-${rev}.jpg`} alt={`WhatsApp Review ${rev}`} className="wa-shot" />
                ))}
              </div>
            </div>
          </div>
        </section>
    );
};

const ComparisonTable: React.FC = () => (
    <div className="comparison-table-container overflow-x-auto">
        <table className="comparison-table">
            <thead>
                <tr>
                    <th className="text-left">Feature</th>
                    <th>StreamVerse</th>
                    <th>Cable</th>
                    <th>Satellite</th>
                    <th>Streaming Jungle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Live Channels</td>
                    <td className="highlight">16,000+</td>
                    <td>~200</td>
                    <td>~300</td>
                    <td><span className="cross">✗</span></td>
                </tr>
                <tr>
                    <td>4K / HD Quality</td>
                    <td className="highlight"><span className="check">✓</span></td>
                    <td>Limited</td>
                    <td>Limited</td>
                    <td><span className="check">✓</span></td>
                </tr>
                <tr>
                    <td>All Live Sports Leagues</td>
                    <td className="highlight"><span className="check">✓</span></td>
                    <td><span className="cross">✗</span> (Add-on fees)</td>
                    <td><span className="cross">✗</span> (Add-on fees)</td>
                    <td><span className="cross">✗</span> (Requires multiple apps)</td>
                </tr>
                <tr>
                    <td>No Blackout Restrictions</td>
                    <td className="highlight"><span className="check">✓</span></td>
                    <td><span className="cross">✗</span></td>
                    <td><span className="cross">✗</span></td>
                    <td><span className="cross">✗</span></td>
                </tr>
                <tr>
                    <td>Movies & Series On-Demand</td>
                    <td className="highlight"><span className="check">✓</span></td>
                    <td>Limited</td>
                    <td>Limited</td>
                    <td><span className="check">✓</span> (Across many apps)</td>
                </tr>
                <tr>
                    <td>Works on All Your Devices</td>
                    <td className="highlight"><span className="check">✓</span></td>
                    <td><span className="cross">✗</span> (Set-top box only)</td>
                    <td><span className="cross">✗</span> (Set-top box only)</td>
                    <td><span className="check">✓</span></td>
                </tr>
                <tr>
                    <td>Instant Setup (Under 5 Mins)</td>
                    <td className="highlight"><span className="check">✓</span></td>
                    <td><span className="cross">✗</span> (Technician needed)</td>
                    <td><span className="cross">✗</span> (Technician needed)</td>
                    <td><span className="check">✓</span></td>
                </tr>
                    <tr>
                    <td>No Contracts / Hidden Fees</td>
                    <td className="highlight"><span className="check">✓</span></td>
                    <td><span className="cross">✗</span></td>
                    <td><span className="cross">✗</span></td>
                    <td><span className="check">✓</span></td>
                </tr>
                <tr className="bg-gray-800">
                    <td className="font-extrabold">Average Monthly Cost</td>
                    <td className="cost text-green-400 highlight">$9.99</td>
                    <td className="cost text-red-400">$120+</td>
                    <td className="cost text-red-400">$135+</td>
                    <td className="cost text-red-400">$75+</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const DeviceGrid: React.FC = () => (
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


// --- PAGE COMPONENTS ---

const HomePage: React.FC<{ setPage: (page: Page) => void }> = ({ setPage }) => {
    const { t } = useLanguage();
    const [videoError, setVideoError] = useState(false);

    return (
        <main>
            <section className="relative text-white text-center overflow-hidden">
                <div className={`hero-video-container ${videoError ? 'hero-video-fallback' : ''}`}>
                    {!videoError && (
                        <video autoPlay loop muted playsInline className="opacity-20" onError={() => setVideoError(true)}>
                            <source src="/videos/Lionel Messi - Top 30 Goals.mp4" type="video/mp4" />
                        </video>
                    )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050a19] z-10"></div>
                <div className="relative z-20 container mx-auto max-w-4xl px-6 py-20 md:py-32">
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">{t('heroTitle')}</h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t('heroSubtitle')}</p>
                    <p className="text-xl md:text-2xl font-semibold text-cyan-400 mb-10">{t('heroSolve')}</p>
                    <a onClick={() => setPage('pricing')} className="cursor-pointer nav-link-cta bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-extrabold py-4 px-10 rounded-lg text-xl cta-button inline-block">
                        {t('heroCTA')}
                    </a>
                    <p className="mt-4 text-sm text-cyan-300 font-semibold">{t('heroUrgency')}</p>
                </div>
            </section>

             <div className="bg-black/30 py-4">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))}
                            <span className="text-white font-bold ml-2">4.9/5</span>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: t('socialProof') }}></p>
                    </div>
                </div>
            </div>

            <section className="py-20 px-6 bg-section-dark relative">
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('howItWorksTitle')}</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center">
                            <div className="flex-shrink-0 bg-card-dark text-blue-400 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold border-2 border-blue-500 mb-4">1</div>
                            <h3 className="text-xl font-semibold">{t('step1Title')}</h3>
                            <p className="text-gray-400">{t('step1Desc')}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex-shrink-0 bg-card-dark text-blue-400 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold border-2 border-blue-500 mb-4">2</div>
                            <h3 className="text-xl font-semibold">{t('step2Title')}</h3>
                            <p className="text-gray-400">{t('step2Desc')}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex-shrink-0 bg-card-dark text-blue-400 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold border-2 border-blue-500 mb-4">3</div>
                            <h3 className="text-xl font-semibold">{t('step3Title')}</h3>
                            <p className="text-gray-400">{t('step3Desc')}</p>
                        </div>
                    </div>
                    <p className="mt-12 text-lg text-cyan-400 font-semibold">{t('howItWorksHook')}</p>
                </div>
                <div className="relative container mx-auto max-w-2xl mt-12 z-20"> <div className="relative" style={{ paddingBottom: '56.25%' }}> <img src="/images/abonnement-iptv-multi-devices.webp" alt="StreamVerse interface on a television" className="absolute top-0 left-0 w-full h-full object-contain" onError={(e) => { const target = e.target as HTMLImageElement; target.src='https://placehold.co/1200x600/0c1427/e5e7eb?text=StreamVerse+UI'; }}/>
                    </div>
                </div>
            </section>
            
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="w-full lg:w-5/6 mx-auto">
                            <img src="/images/compatible-device-iptv-vod-streamverse.jpg" alt="Woman enjoying StreamVerse on a tablet" className="rounded-lg shadow-2xl w-full h-auto max-h-96 object-cover" onError={(e) => { const target = e.target as HTMLImageElement; target.src='https://placehold.co/600x500/0c1427/e5e7eb?text=Image+Not+Found'; }} />
                        </div>
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('whyChooseTitle')}</h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">{t('whyChooseSubtitle')}</p>
                            <div className="space-y-6">
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left space-y-4 lg:space-y-0 lg:space-x-4">
                                    <div className="flex-shrink-0 bg-blue-500/20 text-blue-400 p-3 rounded-full"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
                                    <div><h3 className="text-xl font-semibold">{t('why1Title')}</h3><p className="text-gray-400">{t('why1Desc')}</p></div>
                                </div>
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left space-y-4 lg:space-y-0 lg:space-x-4">
                                    <div className="flex-shrink-0 bg-blue-500/20 text-blue-400 p-3 rounded-full"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
                                    <div><h3 className="text-xl font-semibold">{t('why2Title')}</h3><p className="text-gray-400">{t('why2Desc')}</p></div>
                                </div>
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left space-y-4 lg:space-y-0 lg:space-x-4">
                                    <div className="flex-shrink-0 bg-blue-500/20 text-blue-400 p-3 rounded-full"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>
                                    <div><h3 className="text-xl font-semibold">{t('why3Title')}</h3><p className="text-gray-400">{t('why3Desc')}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="py-16 px-6">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('comparisonTitle')}</h2>
                    <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">{t('comparisonSubtitle')}</p>
                    <ComparisonTable />
                </div>
            </div>

            <Testimonials />

            <section className="py-20 px-6 text-center bg-gradient-to-t from-blue-900/50 to-[#050a19]">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6" dangerouslySetInnerHTML={{ __html: t('finalCtaTitle') }}></h2>
                    <p className="text-gray-300 mb-8 text-lg">{t('finalCtaSubtitle')}</p>
                    <a onClick={() => setPage('pricing')} className="cursor-pointer nav-link-cta bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-extrabold py-4 px-10 rounded-lg text-xl cta-button inline-block mb-8">{t('finalCTA')}</a>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <div className="flex items-center space-x-3">
                            <div className="bg-blue-400 text-black p-3 rounded-full">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <p className="text-lg font-semibold">{t('guarantee')}</p>
                        </div>
                        <p className="text-sm text-gray-400">{t('guaranteeDetails')}</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

const ChannelsFeaturesPage: React.FC = () => {
    const { t, lang } = useLanguage();
    const [interests, setInterests] = useState('');
    const [guideResult, setGuideResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateGuide = async () => {
        if (!interests.trim()) {
            setGuideResult(`<p class="text-yellow-400">${t('geminiEmpty')}</p>`);
            return;
        }
        setIsLoading(true);
        setGuideResult('');
        
        const prompt = `You are an expert entertainment guide for an IPTV service called StreamVerse which has over 16,000 channels. A potential customer is interested in the following topics: "${interests}". Your task is to generate a personalized recommendation list to show them the value they'll get. Your response MUST be in the same language as the user's query, which is ${lang}. Please provide: 1. A list of 4-5 relevant LIVE TV channels they would love. 2. A list of 3 relevant on-demand movies or TV series they can binge-watch. For each item, provide a one-sentence explanation for why it's a great match for their interests. Format the entire output as clean HTML. Use <h3> for titles and an unordered list (<ul><li>) for the recommendations. Make the channel/movie titles bold using <strong>.`;

        try {
            const responseText = await callGeminiApi(prompt);
            setGuideResult(responseText);
        } catch (error) {
            setGuideResult(`<p class="text-red-500">${t('geminiError')}</p>`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main>
            <section className="py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/bg-entertainment.jpg" alt="Abstract background" className="w-full h-full object-cover opacity-10" />
                </div>
                <div className="container mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('featuresTitle')}</h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">{t('featuresSubtitle')}</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-card-dark p-8 rounded-lg feature-card"><h3 className="text-xl font-bold mb-2 text-blue-400">{t('feature1Title')}</h3><p className="text-gray-300">{t('feature1Desc')}</p></div>
                        <div className="bg-card-dark p-8 rounded-lg feature-card"><h3 className="text-xl font-bold mb-2 text-blue-400">{t('feature2Title')}</h3><p className="text-gray-300">{t('feature2Desc')}</p></div>
                        <div className="bg-card-dark p-8 rounded-lg feature-card"><h3 className="text-xl font-bold mb-2 text-blue-400">{t('feature3Title')}</h3><p className="text-gray-300">{t('feature3Desc')}</p></div>
                        <div className="bg-card-dark p-8 rounded-lg feature-card"><h3 className="text-xl font-bold mb-2 text-blue-400">{t('feature4Title')}</h3><p className="text-gray-300">{t('feature4Desc')}</p></div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 px-6 bg-section-dark">
                <div className="container mx-auto text-center max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('devicesTitle')}</h2>
                    <p className="text-gray-400 mb-12 max-w-3xl mx-auto">{t('devicesSubtitle')}</p>
                    <DeviceGrid/>
                </div>
            </section>

             <div className="py-10 bg-section-dark"><div className="section-divider"></div></div>
            <section className="py-20 px-6 bg-section-dark">
                <div className="container mx-auto text-center">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('channelsTitle')}</h2>
                     <p className="text-gray-400 mb-12 max-w-2xl mx-auto">{t('channelsSubtitle')}</p>
                     <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4">
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=SPORTS" alt="Sports Channel" className="rounded-md channel-logo"/>
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=MOVIES" alt="Movies Channel" className="rounded-md channel-logo"/>
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=NEWS" alt="News Channel" className="rounded-md channel-logo"/>
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=KIDS" alt="Kids Channel" className="rounded-md channel-logo"/>
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=USA" alt="USA Channel" className="rounded-md channel-logo"/>
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=UK" alt="UK Channel" className="rounded-md channel-logo"/>
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=CANADA" alt="Canada Channel" className="rounded-md channel-logo"/>
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=EUROPE" alt="Europe Channel" className="rounded-md channel-logo"/>
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=ASIA" alt="Asia Channel" className="rounded-md channel-logo"/>
                        <img src="https://placehold.co/100x60/121c33/e5e7eb?text=LATINO" alt="Latino Channel" className="rounded-md channel-logo"/>
                     </div>
                </div>
            </section>
            
            <section id="gemini-guide" className="py-20 px-6 bg-gradient-to-b from-blue-900/30 to-bg-section-dark">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('geminiTitle')}</h2>
                    <p className="text-gray-300 mb-8 text-lg">{t('geminiSubtitle')}</p>
                    <div className="bg-card-dark rounded-lg p-8">
                        <textarea 
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                            className="w-full bg-section-dark text-white p-4 rounded-md h-28 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                            placeholder={t('geminiPlaceholder')}
                        />
                        <button onClick={handleGenerateGuide} disabled={isLoading} className="mt-4 w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-extrabold py-3 px-8 rounded-lg text-lg cta-button disabled:opacity-50">
                            {t('geminiCTA')}
                        </button>
                        {isLoading && <div className="loader"></div>}
                        {guideResult && (
                            <div className="gemini-results text-left mt-6 bg-section-dark/50 p-6 rounded-lg border border-gray-700"
                                dangerouslySetInnerHTML={{ __html: guideResult }}>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

const PricingPage: React.FC = () => {
    const { t } = useLanguage();
    const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

    useEffect(() => {
        const countDownDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            
            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
            } else {
                 const format = (num: number) => num.toString().padStart(2, '0');
                 setTimeLeft({
                    days: format(Math.floor(distance / (1000 * 60 * 60 * 24))),
                    hours: format(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
                    minutes: format(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
                    seconds: format(Math.floor((distance % (1000 * 60)) / 1000))
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main>
            <section className="py-20 px-6 bg-section-dark">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">{t('pricingTitle')}</h2>
                    <div className="countdown-box inline-block p-4 rounded-lg mb-8 border border-gray-700">
                        <p className="text-lg font-semibold mb-2">{t('countdownTitle')}</p>
                        <div id="countdown" className="text-4xl font-bold text-white tracking-widest">
                            <span>{timeLeft.days}</span>:<span>{timeLeft.hours}</span>:<span>{timeLeft.minutes}</span>:<span>{timeLeft.seconds}</span>
                        </div>
                    </div>
                
                    <div className="py-16 px-6">
                        <div className="container mx-auto max-w-5xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('comparisonTitle')}</h2>
                            <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">{t('comparisonSubtitle')}</p>
                            <ComparisonTable />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-4">
                        <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col">
                            <h3 className="text-2xl font-bold mb-2">{t('plan1Title')}</h3><p className="text-gray-400 mb-6">{t('plan1Desc')}</p><p className="text-4xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">$29.99</span> $9.99</p>
                            <ul className="text-left space-y-2 mb-8 flex-grow">
                                <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>16,000+ Channels</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>4K/HD Quality</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>24/7 Support</li>
                            </ul><a href="https://pay.sumup.com/b2c/QBAVRBOA" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</a>
                        </div>
                        <div className="bg-card-dark p-8 rounded-lg border-2 border-blue-400 glow-border relative flex flex-col scale-105">
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 text-black font-bold text-sm px-4 py-1 rounded-full">{t('bestValue')}</span>
                            <h3 className="text-2xl font-bold mb-2">{t('plan2Title')}</h3><p className="text-gray-400 mb-6">{t('plan2Desc')}</p><p className="text-5xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">$239</span> $59.99</p>
                             <ul className="text-left space-y-2 mb-8 flex-grow">
                                 <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>16,000+ Channels</li>
                                 <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>4K/HD Quality</li>
                                 <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>24/7 Support</li>
                                 <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Priority Updates</li>
                             </ul><a href="https://pay.sumup.com/b2c/QOC9JWHA" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</a>
                        </div>
                        <div className="bg-card-dark p-8 rounded-lg border-2 border-gray-700 flex flex-col">
                            <h3 className="text-2xl font-bold mb-2">{t('plan3Title')}</h3><p className="text-gray-400 mb-6">{t('plan3Desc')}</p><p className="text-4xl font-extrabold mb-6"><span className="text-2xl text-gray-400 line-through">$119</span> $37.99</p>
                             <ul className="text-left space-y-2 mb-8 flex-grow">
                                 <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>16,000+ Channels</li>
                                 <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>4K/HD Quality</li>
                                 <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>24/7 Support</li>
                             </ul><a href="https://pay.sumup.com/b2c/QHW2ZETD" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg cta-button text-center">{t('planCTA')}</a>
                        </div>
                    </div>
                    <p className="mt-8 text-violet-400 font-semibold">{t('pricingScarcity')}</p>
                    <Testimonials />
                </div>
            </section>
        </main>
    );
};

const AboutPage: React.FC = () => {
    const { t } = useLanguage();
    return (
        <main>
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-bold mb-6">{t('aboutTitle')}</h2>
                    <p className="text-lg text-gray-300 mb-8">{t('aboutSubtitle')}</p>
                    <p className="text-gray-400 mb-12">{t('aboutDesc')}</p>
                    <img src="https://nonasties.store/wp-content/uploads/2025/08/Untitled-design-2-copy-removebg-preview.png" alt="StreamVerse Interface on TV" className="rounded-lg w-full h-auto max-w-2xl mx-auto" onError={(e) => { const target = e.target as HTMLImageElement; target.src='https://placehold.co/600x400/0c1427/e5e7eb?text=StreamVerse+Interface'; }} />
                </div>
            </section>
        </main>
    );
};

const FaqItem: React.FC<{ qKey: keyof Translations['en'], aKey: keyof Translations['en'] }> = ({ qKey, aKey }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();
    
    return (
        <div className={`faq-item bg-card-dark rounded-lg ${isOpen ? 'active' : ''}`}>
            <div className="faq-question flex justify-between items-center p-6" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="text-xl font-semibold">{t(qKey)}</h3>
                <svg className="w-6 h-6 text-gray-400 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <div className="faq-answer px-6 text-gray-300">
                <p>{t(aKey)}</p>
            </div>
        </div>
    );
};


const HelpPage: React.FC = () => {
    const { t, lang } = useLanguage();
    const [device, setDevice] = useState('');
    const [stepsResult, setStepsResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateSteps = async () => {
        if (!device.trim()) {
            setStepsResult(`<p class="text-yellow-400">${t('aiHelpEmpty')}</p>`);
            return;
        }
        setIsLoading(true);
        setStepsResult('');

        const prompt = `You are a helpful AI assistant for an IPTV service called StreamVerse. A user needs simple, step-by-step instructions to install an IPTV player and set up the service on their device. Device: "${device}". Your task is to generate clear, easy-to-follow instructions for a non-technical user. Your response MUST be in the same language as the user's query, which is ${lang}. Instructions: 1. Recommend one or two popular and reliable IPTV player apps for that specific device. 2. Provide a step-by-step guide on how to find, download, and install the recommended app(s) on that device. 3. Provide a final step explaining that after installation, they will need to open the app and log in using the username, password, and server URL provided in their welcome email from StreamVerse. Format the entire output as clean HTML. Use <h3> for the title and an ordered list (<ol><li>) for the steps. Use <strong> to highlight app names and important actions.`;

        try {
            const responseText = await callGeminiApi(prompt);
            setStepsResult(responseText);
        } catch (error) {
            setStepsResult(`<p class="text-red-500">${t('aiHelpError')}</p>`);
        } finally {
            setIsLoading(false);
        }
    };
    
    const faqData: {qKey: keyof Translations['en'], aKey: keyof Translations['en']}[] = [
        { qKey: 'faq1q', aKey: 'faq1a'},
        { qKey: 'faq2q', aKey: 'faq2a'},
        { qKey: 'faq3q', aKey: 'faq3a'},
        { qKey: 'faq4q', aKey: 'faq4a'},
    ];

    return (
        <main>
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-bold mb-10 text-center">{t('helpTitle')}</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
                        <div className="bg-card-dark p-8 rounded-lg flex flex-col items-center"><svg className="w-16 h-16 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg><h3 className="text-2xl font-bold mb-2">{t('helpSupportTitle')}</h3><p className="text-gray-400 mb-4">{t('helpSupportDesc')}</p><a href="mailto:support@streamversetv.com" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg cta-button">{t('helpSupportCTA')}</a></div>
                        <div className="bg-card-dark p-8 rounded-lg flex flex-col items-center"><svg className="w-16 h-16 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><h3 className="text-2xl font-bold mb-2">{t('helpEmailTitle')}</h3><p className="text-gray-400 mb-4">{t('helpEmailDesc')}</p><a href="mailto:support@streamversetv.com" className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-6 rounded-lg cta-button">{t('helpEmailCTA')}</a></div>
                        <div className="bg-card-dark p-8 rounded-lg flex flex-col items-center"><svg className="w-16 h-16 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z"></path></svg><h3 className="text-2xl font-bold mb-2">{t('helpTelegramTitle')}</h3><p className="text-gray-400 mb-4">{t('helpTelegramDesc')}</p><a href="#" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg cta-button">{t('helpTelegramCTA')}</a></div>
                    </div>
                     <div className="section-divider my-16"></div>
                    <section id="ai-installer" className="text-center">
                         <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('aiHelpTitle')}</h2>
                         <p className="text-gray-300 mb-8 text-lg max-w-3xl mx-auto">{t('aiHelpSubtitle')}</p>
                         <div className="bg-card-dark rounded-lg p-8 max-w-3xl mx-auto">
                            <textarea
                                value={device}
                                onChange={(e) => setDevice(e.target.value)}
                                className="w-full bg-section-dark text-white p-4 rounded-md h-28 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder={t('aiHelpPlaceholder')}
                            ></textarea>
                            <button onClick={handleGenerateSteps} disabled={isLoading} className="mt-4 w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-extrabold py-3 px-8 rounded-lg text-lg cta-button disabled:opacity-50">
                                {t('aiHelpCTA')}
                            </button>
                            {isLoading && <div className="loader"></div>}
                            {stepsResult && (
                                <div className="gemini-results text-left mt-6 bg-section-dark/50 p-6 rounded-lg border border-gray-700"
                                    dangerouslySetInnerHTML={{ __html: stepsResult }}>
                                </div>
                            )}
                         </div>
                    </section>
                    <div className="section-divider my-16"></div>
                    <h3 className="text-3xl font-bold mb-6 text-center">{t('faqTitle')}</h3>
                    <div className="space-y-4">
                        {faqData.map(faq => <FaqItem key={faq.qKey} qKey={faq.qKey} aKey={faq.aKey} />)}
                    </div>
                </div>
            </section>
        </main>
    );
};

const ExitModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/80 z-50 opacity-100 transition-opacity duration-300 ease-in-out" onClick={onClose}></div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card-dark text-white p-8 rounded-lg shadow-2xl w-11/12 max-w-lg z-50 text-center transform scale-100 opacity-100 transition-transform transition-opacity duration-300 ease-in-out border-2 border-blue-500/50">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl">&times;</button>
                <h2 className="text-3xl font-bold text-cyan-300 mb-4">{t('modalTitle')}</h2>
                <p className="text-lg mb-6">{t('modalSubtitle')}</p>
                <a href="https://pay.sumup.com/b2c/Q4O2KWGA" target="_blank" rel="noopener noreferrer" className="w-full block bg-green-500 hover:bg-green-600 text-white font-extrabold py-4 px-8 rounded-lg text-xl cta-button">
                    {t('modalCTA')}
                </a>
                <p className="text-sm mt-4 text-gray-400">{t('modalUrgency')}</p>
            </div>
        </>
    );
};


// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [isModalOpen, setModalOpen] = useState(false);

    const handleMouseOut = useCallback((e: MouseEvent) => {
        if (e.clientY <= 0) {
            setModalOpen(true);
            document.body.removeEventListener('mouseout', handleMouseOut);
        }
    }, []);

    useEffect(() => {
        document.body.addEventListener('mouseout', handleMouseOut);
        return () => {
            document.body.removeEventListener('mouseout', handleMouseOut);
        };
    }, [handleMouseOut]);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage setPage={setCurrentPage} />;
            case 'channels-features':
                return <ChannelsFeaturesPage />;
            case 'pricing':
                return <PricingPage />;
            case 'about':
                return <AboutPage />;
            case 'help':
                return <HelpPage />;
            default:
                return <HomePage setPage={setCurrentPage} />;
        }
    };
    
    return (
        <LanguageProvider>
            <Header currentPage={currentPage} setPage={setCurrentPage} />
            {renderPage()}
            <Footer />
            <ExitModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </LanguageProvider>
    );
};

export default App;
