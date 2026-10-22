import React, { useState } from 'react';
import { Play, Pause, FastForward, RotateCcw, Sparkles, Gamepad2, Sliders, CheckCircle2 } from 'lucide-react';

/**
 * Animated Dancing Pixel Hero Component
 * Perfectly renders the character with afro hair, teal shirt, dark shorts, boots,
 * golden star sparkles, and red/blue zigzags.
 * 
 * Includes CSS Keyframes for:
 * 1. Both arms moving up and down in a seamless dance loop
 * 2. Subtle body bouncing
 * 3. Side-to-side sway
 * 4. Sparkle & Zigzag floating
 */
export function DancingHero({ 
  scale = 8, 
  speed = 1, 
  danceType = 'groove', 
  isPlaying = true 
}) {
  const duration = `${1 / speed}s`;

  return (
    <div 
      className="relative flex items-center justify-center select-none"
      style={{
        width: `${32 * scale}px`,
        height: `${32 * scale}px`,
        imageRendering: 'pixelated'
      }}
    >
      <style>{`
        /* 1. Body Sway & Vertical Bounce */
        @keyframes pixelBodyBounceSway {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-4px) rotate(-2deg);
          }
          50% {
            transform: translateY(-1px) rotate(0deg);
          }
          75% {
            transform: translateY(-4px) rotate(2deg);
          }
        }

        /* Alternate Fast Hype Bounce */
        @keyframes pixelBodyHype {
          0%, 100% {
            transform: translateY(0px) scale(1, 1);
          }
          50% {
            transform: translateY(-6px) scale(1.02, 0.98);
          }
        }

        /* 2. Left Arm Up/Down Dance Movement */
        @keyframes leftArmGroove {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(-18deg);
          }
        }

        @keyframes leftArmWave {
          0%, 100% {
            transform: translateY(-12px) rotate(-20deg);
          }
          50% {
            transform: translateY(4px) rotate(10deg);
          }
        }

        /* 3. Right Arm Up/Down Dance Movement */
        @keyframes rightArmGroove {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(10px) rotate(18deg);
          }
        }

        @keyframes rightArmWave {
          0%, 100% {
            transform: translateY(4px) rotate(10deg);
          }
          50% {
            transform: translateY(-12px) rotate(20deg);
          }
        }

        /* 4. Background Sparkles Animation */
        @keyframes sparklePulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.2) rotate(8deg);
            opacity: 1;
          }
        }

        @keyframes zigzagFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        /* Animation Class Hooks */
        .anim-body-groove {
          animation: pixelBodyBounceSway ${duration} steps(4, end) infinite;
          transform-origin: bottom center;
        }

        .anim-body-hype {
          animation: pixelBodyHype ${duration} steps(4, end) infinite;
          transform-origin: bottom center;
        }

        .anim-left-arm-groove {
          animation: leftArmGroove ${duration} steps(4, end) infinite;
          transform-origin: 12px 16px;
        }

        .anim-left-arm-wave {
          animation: leftArmWave ${duration} steps(4, end) infinite;
          transform-origin: 12px 16px;
        }

        .anim-right-arm-groove {
          animation: rightArmGroove ${duration} steps(4, end) infinite;
          transform-origin: 20px 16px;
        }

        .anim-right-arm-wave {
          animation: rightArmWave ${duration} steps(4, end) infinite;
          transform-origin: 20px 16px;
        }

        .anim-sparkle {
          animation: sparklePulse ${1.4 / speed}s steps(3, end) infinite;
        }

        .anim-zigzag-1 {
          animation: zigzagFloat ${1.6 / speed}s steps(4, end) infinite;
        }

        .anim-zigzag-2 {
          animation: zigzagFloat ${1.6 / speed}s steps(4, end) infinite 0.4s;
        }
      `}</style>

      <svg 
        viewBox="0 0 32 32" 
        className="w-full h-full drop-shadow-[0_4px_0_rgba(0,0,0,0.15)]"
        shapeRendering="crispEdges"
      >
        {/* Ground Ellipse Shadow */}
        <ellipse cx="16" cy="29.5" rx="6" ry="1" fill="#12121A" opacity="0.5" />

        {/* ==========================================
            BACKGROUND DECORATIVE SPARKLES & ZIGZAGS
           ========================================== */}
        
        {/* Top-Right Gold Star Sparkle */}
        <g className={isPlaying ? 'anim-sparkle' : ''} style={{ transformOrigin: '24px 8px' }}>
          <rect x="23" y="4" width="2" height="8" fill="#F5B027" />
          <rect x="20" y="7" width="8" height="2" fill="#F5B027" />
          <rect x="22" y="6" width="4" height="4" fill="#FFE066" />
          <rect x="23" y="5" width="2" height="6" fill="#FFF2AD" />
        </g>

        {/* Bottom-Left Gold Star Sparkle */}
        <g className={isPlaying ? 'anim-sparkle' : ''} style={{ transformOrigin: '8px 23px', animationDelay: '0.5s' }}>
          <rect x="7" y="19" width="2" height="8" fill="#F5B027" />
          <rect x="4" y="22" width="8" height="2" fill="#F5B027" />
          <rect x="6" y="21" width="4" height="4" fill="#FFE066" />
          <rect x="7" y="20" width="2" height="6" fill="#FFF2AD" />
        </g>

        {/* Upper-Left Red Zigzag */}
        <g className={isPlaying ? 'anim-zigzag-1' : ''}>
          <rect x="8" y="8" width="2" height="1" fill="#E74C3C" />
          <rect x="10" y="9" width="2" height="1" fill="#E74C3C" />
          <rect x="8" y="10" width="2" height="1" fill="#E74C3C" />
          <rect x="6" y="11" width="2" height="1" fill="#E74C3C" />
          <rect x="8" y="12" width="2" height="1" fill="#E74C3C" />
        </g>

        {/* Lower-Right Blue Zigzag */}
        <g className={isPlaying ? 'anim-zigzag-2' : ''}>
          <rect x="22" y="18" width="2" height="1" fill="#3498DB" />
          <rect x="21" y="19" width="2" height="1" fill="#3498DB" />
          <rect x="22" y="20" width="2" height="1" fill="#3498DB" />
          <rect x="21" y="21" width="2" height="1" fill="#3498DB" />
          <rect x="22" y="22" width="2" height="1" fill="#3498DB" />
        </g>

        {/* ==========================================
            DANCING CHARACTER GROUP
           ========================================== */}
        <g className={isPlaying ? (danceType === 'hype' ? 'anim-body-hype' : 'anim-body-groove') : ''}>
          
          {/* LEGS & BOOTS BASE */}
          <g id="legs-and-feet">
            {/* Dark Shorts / Pants */}
            <rect x="12" y="20" width="8" height="3" fill="#2E323F" />
            <rect x="12" y="23" width="3" height="1" fill="#2E323F" />
            <rect x="17" y="23" width="3" height="1" fill="#2E323F" />

            {/* Socks / Skin Legs */}
            <rect x="13" y="24" width="1" height="2" fill="#FCD7B0" />
            <rect x="18" y="24" width="1" height="2" fill="#FCD7B0" />
            <rect x="12" y="26" width="3" height="1" fill="#E8DFD8" />
            <rect x="17" y="26" width="3" height="1" fill="#E8DFD8" />

            {/* Boots (Grey/Beige) */}
            <path d="M11 27h4v2h-4z M10 28h5v1h-5z" fill="#8A8168" />
            <path d="M17 27h4v2h-4z M17 28h5v1h-5z" fill="#8A8168" />
            <rect x="10" y="29" width="5" height="0.5" fill="#0E0E0E" />
            <rect x="17" y="29" width="5" height="0.5" fill="#0E0E0E" />
          </g>

          {/* MAIN TORSO SHIRT */}
          <g id="torso">
            {/* Teal Long-sleeve shirt body */}
            <rect x="12" y="15" width="8" height="5" fill="#60C8B3" />
            <rect x="12" y="15" width="8" height="1" fill="#439E8C" />
            {/* Dark outline at bottom waist */}
            <rect x="12" y="20" width="8" height="0.8" fill="#0E0E0E" />
            {/* Neck cutout */}
            <rect x="15" y="15" width="2" height="1" fill="#0E0E0E" />
            <rect x="15" y="15.5" width="2" height="0.5" fill="#FCD7B0" />
          </g>

          {/* DANCING LEFT ARM */}
          <g className={isPlaying ? (danceType === 'wave' ? 'anim-left-arm-wave' : 'anim-left-arm-groove') : ''}>
            {/* Sleeve */}
            <rect x="8" y="15" width="4" height="2" fill="#60C8B3" />
            <rect x="7" y="17" width="2" height="2" fill="#60C8B3" />
            {/* Black Cuff & Skin Fist */}
            <rect x="7" y="19" width="2" height="1.5" fill="#0E0E0E" />
            <rect x="7" y="19.5" width="1.5" height="1" fill="#FCD7B0" />
          </g>

          {/* DANCING RIGHT ARM */}
          <g className={isPlaying ? (danceType === 'wave' ? 'anim-right-arm-wave' : 'anim-right-arm-groove') : ''}>
            {/* Sleeve */}
            <rect x="20" y="15" width="4" height="2" fill="#60C8B3" />
            <rect x="23" y="13" width="2" height="3" fill="#60C8B3" />
            {/* Black Cuff & Raised Fist */}
            <rect x="23" y="11" width="2" height="2" fill="#0E0E0E" />
            <rect x="23" y="11" width="1" height="1" fill="#FCD7B0" />
          </g>

          {/* HEAD AND BLACK AFRO HAIR */}
          <g id="head-and-face">
            {/* Black Afro Hair */}
            <path d="
              M 12 3 H 20 
              V 4 H 22 
              V 6 H 23 
              V 11 H 22 
              V 13 H 21 
              V 14 H 11 
              V 12 H 10 
              V 6 H 11 
              V 4 H 12 Z" 
              fill="#1E1E1E" 
            />
            {/* Hair texture detail */}
            <rect x="14" y="4" width="4" height="1" fill="#333333" />
            <rect x="11" y="6" width="2" height="2" fill="#333333" />

            {/* Skin Tone Face */}
            <rect x="12" y="8" width="9" height="6" fill="#FCD7B0" />
            <rect x="13" y="14" width="7" height="1" fill="#FCD7B0" />

            {/* Face Details (Eyes & Mouth) */}
            <rect x="14" y="10" width="1.2" height="1.8" fill="#0E0E0E" />
            <rect x="18" y="10" width="1.2" height="1.8" fill="#0E0E0E" />
            <rect x="15" y="12.5" width="3" height="0.8" fill="#0E0E0E" />
          </g>

        </g>
      </svg>
    </div>
  );
}

/**
 * Interactive Main App Viewport & Control Panel
 */
export default function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [danceType, setDanceType] = useState('groove');

  return (
    <div className="min-h-screen bg-[#11111b] text-white flex flex-col items-center justify-center p-4 sm:p-8 font-mono selection:bg-[#3498DB]">
      
      {/* Title Header */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center space-x-2 bg-[#22223b] border-2 border-[#39ff14] px-3 py-1 rounded-full text-xs text-[#39ff14] shadow-[0_0_12px_rgba(57,255,20,0.3)]">
          <Sparkles size={14} className="animate-spin" />
          <span>DANCING PIXEL HERO ANIMATOR</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#60C8B3] via-[#FFE066] to-[#E74C3C] tracking-wide uppercase">
          Reeya's Dance Loop
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
          Both hands move up and down in a seamless looping dance with a gentle body bounce and slight side-to-side sway.
        </p>
      </div>

      {/* Main Preview Screen */}
      <div className="relative w-full max-w-md bg-[#1a1a2e] border-4 border-[#0E0E0E] rounded-xl p-8 flex flex-col items-center shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Retro Grid Background */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #60C8B3 1px, transparent 1px), linear-gradient(to bottom, #60C8B3 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* HUD Overlay Bar */}
        <div className="w-full flex items-center justify-between mb-6 z-10 bg-[#0E0E0E]/80 border-2 border-[#39ff14]/40 px-3 py-1.5 text-xs text-[#39ff14]">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#39ff14] animate-ping" />
            <span>STATUS: DANCING</span>
          </div>
          <span className="text-gray-400">FPS: 60 (CSS)</span>
        </div>

        {/* Character Component */}
        <div className="my-4 z-10 drop-shadow-[0_0_16px_rgba(96,200,179,0.3)]">
          <DancingHero 
            scale={7} 
            speed={speed} 
            danceType={danceType} 
            isPlaying={isPlaying} 
          />
        </div>

        {/* Bio Banner */}
        <div className="w-full bg-[#22223b] border-2 border-[#39ff14] p-3 text-center z-10 mt-4 shadow-[0_0_15px_rgba(57,255,20,0.15)]">
          <p className="text-[11px] text-[#39ff14] font-bold leading-relaxed">
            Hey! I'm Reeya, a 2nd year CSE student exploring cybersecurity, Linux, and AI automation.
          </p>
        </div>

      </div>

      {/* Control Panel */}
      <div className="w-full max-w-md mt-6 bg-[#181824] border-2 border-[#2e2e42] p-5 rounded-xl space-y-4">
        
        <div className="flex items-center justify-between border-b border-[#2e2e42] pb-3">
          <span className="text-xs font-bold uppercase text-gray-300 flex items-center gap-2">
            <Sliders size={15} className="text-[#60C8B3]" />
            <span>Dance Controls</span>
          </span>
          <span className="text-[10px] bg-[#60C8B3] text-black px-2 py-0.5 font-bold rounded">
            LIVE PREVIEW
          </span>
        </div>

        {/* Play/Pause Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex-1 py-2.5 px-4 text-xs font-bold uppercase flex items-center justify-center space-x-2 border-2 transition-all ${
              isPlaying 
                ? 'bg-[#E74C3C] text-white border-[#E74C3C] shadow-[0_0_10px_rgba(231,76,60,0.4)]' 
                : 'bg-[#39ff14] text-black border-[#39ff14] shadow-[0_0_10px_rgba(57,255,20,0.4)]'
            }`}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            <span>{isPlaying ? 'PAUSE DANCE' : 'START DANCE'}</span>
          </button>
        </div>

        {/* Dance Move Selector */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-gray-400 uppercase">
            Dance Routine
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'groove', label: 'Up & Down Groove' },
              { id: 'wave', label: 'Alternating Wave' },
            ].map((move) => (
              <button
                key={move.id}
                onClick={() => setDanceType(move.id)}
                className={`py-2 px-3 text-xs font-bold uppercase border-2 transition-all ${
                  danceType === move.id
                    ? 'bg-[#60C8B3] text-black border-[#60C8B3]'
                    : 'bg-[#11111b] text-gray-400 border-[#2e2e42] hover:border-gray-500'
                }`}
              >
                {move.label}
              </button>
            ))}
          </div>
        </div>

        {/* Speed Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase">
            <span>Tempo / Speed</span>
            <span className="text-[#FFE066]">{speed.toFixed(1)}x</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="2.0"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-full accent-[#FFE066] bg-[#11111b] h-2 rounded cursor-pointer"
          />
        </div>

      </div>

    </div>
  );
}
