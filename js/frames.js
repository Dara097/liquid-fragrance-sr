/**
 * Campaign Challenge Frames Definition
 * Crisp 1080x1080 SVG vector frames with transparent centers for profile photos
 */

const CAMPAIGN_FRAMES = [
  {
    id: 'blue-challenge',
    name: 'Electric Blue',
    subtitle: 'Official Challenge 2026',
    getSvg: (title = 'CAMPAIGN CHALLENGE 2026') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563eb" />
      <stop offset="50%" stop-color="#4f46e5" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.5" />
    </filter>
  </defs>

  <!-- Outer Frame Border -->
  <rect x="24" y="24" width="1032" height="1032" rx="60" fill="none" stroke="url(#blueGrad)" stroke-width="28" />
  
  <!-- Subtle inner glowing ring -->
  <circle cx="540" cy="540" r="480" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="4" stroke-dasharray="16 12" />

  <!-- Top Ribbon Banner -->
  <g filter="url(#shadow)">
    <path d="M 320 24 L 760 24 L 730 96 L 350 96 Z" fill="url(#blueGrad)" />
    <text x="540" y="70" font-family="'Outfit', 'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="28" fill="#ffffff" text-anchor="middle" letter-spacing="4">
      ★ OFFICIAL PARTICIPANT ★
    </text>
  </g>

  <!-- Top Corner Accents -->
  <path d="M 50 140 L 50 60 Q 50 50 60 50 L 140 50" fill="none" stroke="#38bdf8" stroke-width="12" stroke-linecap="round" />
  <path d="M 1030 140 L 1030 60 Q 1030 50 1020 50 L 940 50" fill="none" stroke="#38bdf8" stroke-width="12" stroke-linecap="round" />

  <!-- Bottom Massive Ribbon & Campaign Name -->
  <g filter="url(#shadow)">
    <!-- Main Bottom Curved Plaque -->
    <path d="M 60 880 Q 540 820 1020 880 L 1020 1020 Q 540 1050 60 1020 Z" fill="#0f172a" />
    <path d="M 60 880 Q 540 820 1020 880" fill="none" stroke="url(#blueGrad)" stroke-width="16" />

    <!-- Challenge Accepted Tag -->
    <rect x="360" y="800" width="360" height="64" rx="32" fill="url(#goldGrad)" />
    <text x="540" y="844" font-family="'Outfit', 'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="30" fill="#0f172a" text-anchor="middle" letter-spacing="3">
      CHALLENGE ACCEPTED
    </text>

    <!-- Main Title -->
    <text x="540" y="940" font-family="'Outfit', 'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="44" fill="#ffffff" text-anchor="middle" letter-spacing="2">
      ${title.toUpperCase()}
    </text>

    <!-- Subtitle & Hashtags -->
    <text x="540" y="990" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="24" fill="#38bdf8" text-anchor="middle" letter-spacing="3">
      #TogetherWeCan • #MakeAnImpact • #2026
    </text>
  </g>

  <!-- Official Verified Circular Stamp on Bottom Right -->
  <g filter="url(#shadow)" transform="translate(870, 750)">
    <circle cx="60" cy="60" r="54" fill="#2563eb" stroke="#ffffff" stroke-width="6" />
    <path d="M 42 60 L 54 72 L 80 44" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  </g>
</svg>`
  },

  {
    id: 'gold-champion',
    name: 'Gold Champion',
    subtitle: 'Golden Honor & Leadership',
    getSvg: (title = 'CAMPAIGN HERO') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <defs>
    <linearGradient id="goldPlate" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="35%" stop-color="#f59e0b" />
      <stop offset="70%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#fbbf24" />
    </linearGradient>
    <linearGradient id="darkBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#18181b" />
      <stop offset="100%" stop-color="#09090b" />
    </linearGradient>
    <filter id="shadowGold" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.6" />
    </filter>
  </defs>

  <!-- Outer Double Gold Border -->
  <rect x="30" y="30" width="1020" height="1020" rx="40" fill="none" stroke="url(#goldPlate)" stroke-width="20" />
  <rect x="54" y="54" width="972" height="972" rx="30" fill="none" stroke="rgba(251, 191, 36, 0.4)" stroke-width="4" stroke-dasharray="10 8" />

  <!-- Corner Ornamental Stars -->
  <g fill="url(#goldPlate)">
    <polygon points="90,75 95,88 108,89 98,98 101,111 90,103 79,111 82,98 72,89 85,88" transform="scale(1.3) translate(-20,-15)" />
    <polygon points="90,75 95,88 108,89 98,98 101,111 90,103 79,111 82,98 72,89 85,88" transform="scale(1.3) translate(690,-15)" />
  </g>

  <!-- Bottom Arch Container -->
  <g filter="url(#shadowGold)">
    <path d="M 50 860 C 300 810, 780 810, 1030 860 L 1030 1020 Q 540 1050 50 1020 Z" fill="url(#darkBg)" stroke="url(#goldPlate)" stroke-width="10" />

    <!-- Champion Laurel Badge Icon -->
    <circle cx="540" cy="800" r="65" fill="#09090b" stroke="url(#goldPlate)" stroke-width="8" />
    <!-- Crown icon -->
    <path d="M 505 815 L 515 780 L 535 800 L 540 770 L 545 800 L 565 780 L 575 815 Z" fill="url(#goldPlate)" />
    <circle cx="540" cy="762" r="5" fill="#fef08a" />
    <circle cx="515" cy="773" r="4" fill="#fef08a" />
    <circle cx="565" cy="773" r="4" fill="#fef08a" />

    <!-- Title and Subtitle -->
    <text x="540" y="920" font-family="'Outfit', 'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="44" fill="url(#goldPlate)" text-anchor="middle" letter-spacing="3">
      ${title.toUpperCase()}
    </text>

    <text x="540" y="975" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="24" fill="#ffffff" text-anchor="middle" letter-spacing="4">
      ★ LEADERSHIP • HONOR • EXCELLENCE ★
    </text>
  </g>
</svg>`
  },

  {
    id: 'fb-community',
    name: 'FB Community',
    subtitle: 'Classic Facebook Supporter',
    getSvg: (title = 'I SUPPORT THIS CAMPAIGN') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <defs>
    <linearGradient id="fbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1877F2" />
      <stop offset="100%" stop-color="#0064e0" />
    </linearGradient>
    <filter id="shadowFb" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.4" />
    </filter>
  </defs>

  <!-- Circular Outer Support Arc (matches FB profile circular boundary) -->
  <circle cx="540" cy="540" r="500" fill="none" stroke="#1877F2" stroke-width="24" opacity="0.9" />
  <circle cx="540" cy="540" r="520" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.8" />

  <!-- Top Friendly Pill -->
  <g filter="url(#shadowFb)">
    <rect x="360" y="40" width="360" height="56" rx="28" fill="#1877F2" stroke="#ffffff" stroke-width="4" />
    <text x="540" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="22" fill="#ffffff" text-anchor="middle" letter-spacing="2">
      PROUD SUPPORTER
    </text>
  </g>

  <!-- Bottom Wave Ribbon for Facebook Profile -->
  <g filter="url(#shadowFb)">
    <path d="M 40 850 C 320 800, 760 800, 1040 850 L 1040 1040 L 40 1040 Z" fill="url(#fbGrad)" />
    <path d="M 40 850 C 320 800, 760 800, 1040 850" fill="none" stroke="#ffffff" stroke-width="8" />

    <!-- Facebook Thumb Up / Heart Stamp -->
    <g transform="translate(180, 890)">
      <circle cx="45" cy="45" r="45" fill="#ffffff" />
      <!-- Thumbs Up Icon -->
      <path d="M 42 25 C 42 20 47 18 51 22 C 55 26 53 35 53 38 L 65 38 C 70 38 72 42 71 46 L 66 65 C 65 68 62 70 58 70 L 38 70 L 38 38 L 42 25 Z M 26 38 L 34 38 L 34 70 L 26 70 Z" fill="#1877F2" />
    </g>

    <!-- Main Message -->
    <text x="590" y="920" font-family="'Outfit', 'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="38" fill="#ffffff" text-anchor="middle">
      ${title}
    </text>
    <text x="590" y="970" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="22" fill="#e0e7ff" text-anchor="middle" letter-spacing="2">
      Stand With The Community • #ChangeMaker
    </text>
  </g>
</svg>`
  },

  {
    id: 'sunset-neon',
    name: 'Sunset Neon',
    subtitle: 'Vibrant Youth & Energy',
    getSvg: (title = 'CHANGE MAKER 2026') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <defs>
    <linearGradient id="neonSunset" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff007a" />
      <stop offset="50%" stop-color="#7928ca" />
      <stop offset="100%" stop-color="#ff4d4d" />
    </linearGradient>
    <linearGradient id="sunsetAcc" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#ec4899" />
    </linearGradient>
    <filter id="neonGlow">
      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Futuristic Neon Beveled Border -->
  <polygon points="50,150 150,50 930,50 1030,150 1030,930 930,1030 150,1030 50,930" fill="none" stroke="url(#neonSunset)" stroke-width="24" />

  <!-- Top Geometric Accents -->
  <g fill="url(#sunsetAcc)">
    <polygon points="200,60 240,60 220,90" />
    <polygon points="880,60 840,60 860,90" />
  </g>

  <!-- Dynamic Bottom Banner -->
  <g filter="url(#neonGlow)">
    <path d="M 90 850 L 990 850 L 940 1000 L 140 1000 Z" fill="#110726" stroke="url(#neonSunset)" stroke-width="8" />

    <!-- Little badge on top of bottom bar -->
    <rect x="410" y="810" width="260" height="50" rx="25" fill="url(#sunsetAcc)" />
    <text x="540" y="845" font-family="'Outfit', sans-serif" font-weight="900" font-size="24" fill="#ffffff" text-anchor="middle" letter-spacing="3">
      ⚡ LEVEL UP ⚡
    </text>

    <!-- Main Title -->
    <text x="540" y="925" font-family="'Outfit', sans-serif" font-weight="900" font-size="46" fill="#ffffff" text-anchor="middle" letter-spacing="3">
      ${title.toUpperCase()}
    </text>
    <text x="540" y="975" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="22" fill="#f472b6" text-anchor="middle" letter-spacing="4">
      DREAM BIG • TAKE ACTION • INSPIRE
    </text>
  </g>
</svg>`
  },

  {
    id: 'eco-green',
    name: 'Eco Green',
    subtitle: 'Climate & Earth Challenge',
    getSvg: (title = 'EARTH HERO 2026') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <defs>
    <linearGradient id="ecoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="50%" stop-color="#059669" />
      <stop offset="100%" stop-color="#84cc16" />
    </linearGradient>
    <filter id="shadowEco" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#064e3b" flood-opacity="0.5" />
    </filter>
  </defs>

  <!-- Organic Double Ring Border -->
  <circle cx="540" cy="540" r="495" fill="none" stroke="url(#ecoGrad)" stroke-width="26" />
  <circle cx="540" cy="540" r="460" fill="none" stroke="#a7f3d0" stroke-width="4" stroke-dasharray="14 10" />

  <!-- Top Leaf Banner -->
  <g filter="url(#shadowEco)">
    <rect x="340" y="45" width="400" height="60" rx="30" fill="#065f46" stroke="#34d399" stroke-width="4" />
    <text x="540" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="24" fill="#ecfdf5" text-anchor="middle" letter-spacing="2">
      🌿 SUSTAINABILITY CHALLENGE
    </text>
  </g>

  <!-- Bottom Eco Plaque -->
  <g filter="url(#shadowEco)">
    <path d="M 120 870 C 350 820, 730 820, 960 870 L 960 1010 C 730 1040, 350 1040, 120 1010 Z" fill="#064e3b" stroke="url(#ecoGrad)" stroke-width="8" />

    <text x="540" y="930" font-family="'Outfit', sans-serif" font-weight="900" font-size="42" fill="#ffffff" text-anchor="middle" letter-spacing="2">
      ${title.toUpperCase()}
    </text>
    <text x="540" y="980" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="22" fill="#6ee7b7" text-anchor="middle" letter-spacing="3">
      #PlantTheFuture • #SaveOurPlanet • #GoGreen
    </text>
  </g>
</svg>`
  },

  {
    id: 'cyber-dark',
    name: 'Cyber Stealth',
    subtitle: 'Modern Minimalist Tech',
    getSvg: (title = 'CHALLENGE ACCEPTED') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <defs>
    <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#818cf8" />
    </linearGradient>
  </defs>

  <!-- High-tech HUD corner brackets -->
  <path d="M 40 180 L 40 60 L 180 60" fill="none" stroke="url(#cyberGrad)" stroke-width="16" />
  <path d="M 1040 180 L 1040 60 L 900 60" fill="none" stroke="url(#cyberGrad)" stroke-width="16" />
  <path d="M 40 900 L 40 1020 L 180 1020" fill="none" stroke="url(#cyberGrad)" stroke-width="16" />
  <path d="M 1040 900 L 1040 1020 L 900 1020" fill="none" stroke="url(#cyberGrad)" stroke-width="16" />

  <!-- Center Crosshairs / Minimal Accents -->
  <line x1="540" y1="40" x2="540" y2="70" stroke="#38bdf8" stroke-width="6" />
  <line x1="40" y1="540" x2="70" y2="540" stroke="#38bdf8" stroke-width="6" />
  <line x1="1010" y1="540" x2="1040" y2="540" stroke="#38bdf8" stroke-width="6" />

  <!-- Minimal Dark Cyber Bar -->
  <g>
    <rect x="180" y="890" width="720" height="110" rx="20" fill="#030712" stroke="#38bdf8" stroke-width="4" />
    <circle cx="230" cy="945" r="18" fill="#38bdf8" />
    <text x="230" y="952" font-family="'Outfit', sans-serif" font-weight="900" font-size="20" fill="#030712" text-anchor="middle">✓</text>

    <text x="560" y="940" font-family="'Outfit', sans-serif" font-weight="900" font-size="34" fill="#ffffff" text-anchor="middle" letter-spacing="2">
      ${title.toUpperCase()}
    </text>
    <text x="560" y="975" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="18" fill="#94a3b8" text-anchor="middle" letter-spacing="3">
      INNOVATION • PROGRESS • IMPACT
    </text>
  </g>
</svg>`
  }
];

// Helper to convert SVG text to image object or Data URL
function svgToDataUrl(svgString) {
  const cleanSvg = svgString.trim();
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(cleanSvg);
}
