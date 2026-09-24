/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        retro: {
          bg: '#0a0a12',
          bg2: '#12121f',
          panel: '#1a1a2e',
          panel2: '#232347',
          pink: '#ff2e88',
          pinkDim: '#b01e60',
          purple: '#9d4edd',
          cyan: '#00f0ff',
          cyanDim: '#0099aa',
          green: '#39ff14',
          greenDim: '#229911',
          yellow: '#ffe600',
          yellowDim: '#b8a800',
          orange: '#ff8c00',
          red: '#ff3344',
          white: '#f0f0f8',
          gray: '#5a5a7a',
          dark: '#06060c',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        mono: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        'pixel': '0 0 0 4px #0a0a12, 0 0 0 8px currentColor',
        'pixel-sm': '0 0 0 2px #0a0a12, 0 0 0 4px currentColor',
        'glow-pink': '0 0 12px #ff2e88, 0 0 24px #ff2e8866',
        'glow-cyan': '0 0 12px #00f0ff, 0 0 24px #00f0ff66',
        'glow-green': '0 0 12px #39ff14, 0 0 24px #39ff1466',
        'glow-yellow': '0 0 12px #ffe600, 0 0 24px #ffe60066',
        'glow-purple': '0 0 12px #9d4edd, 0 0 24px #9d4edd66',
      },
      animation: {
        'cloud-drift': 'cloudDrift 40s linear infinite',
        'cloud-drift-slow': 'cloudDrift 70s linear infinite',
        'twinkle': 'twinkle 2.5s ease-in-out infinite',
        'twinkle-slow': 'twinkle 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'coin-spin': 'coinSpin 1.2s steps(8) infinite',
        'coin-bounce': 'coinBounce 0.8s ease-in-out infinite',
        'idle-bob': 'idleBob 1.8s steps(4) infinite',
        'walk': 'walkRight 12s linear infinite',
        'press': 'pressBtn 0.15s steps(2)',
        'shake': 'shake 0.3s steps(4)',
        'glitch': 'glitch 0.3s steps(2) infinite',
        'blink': 'blink 1s steps(2) infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pop-in': 'popIn 0.4s steps(4) forwards',
      },
      keyframes: {
        cloudDrift: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(120vw)' },
        },
        twinkle: {
          '0%,100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        coinSpin: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        coinBounce: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        idleBob: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        walkRight: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110vw)' },
        },
        pressBtn: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(4px)' },
        },
        shake: {
          '0%,100%': { transform: 'translate(0,0)' },
          '25%': { transform: 'translate(-2px,1px)' },
          '50%': { transform: 'translate(2px,-1px)' },
          '75%': { transform: 'translate(-1px,2px)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)', filter: 'hue-rotate(0deg)' },
          '50%': { transform: 'translate(-2px,1px)', filter: 'hue-rotate(90deg)' },
          '100%': { transform: 'translate(2px,-1px)', filter: 'hue-rotate(0deg)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseGlow: {
          '0%,100%': { filter: 'brightness(1) drop-shadow(0 0 4px currentColor)' },
          '50%': { filter: 'brightness(1.3) drop-shadow(0 0 12px currentColor)' },
        },
        scanline: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
