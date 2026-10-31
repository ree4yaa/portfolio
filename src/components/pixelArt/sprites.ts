import type { PixelGrid } from '@/components/PixelArt';

const _ = null;
// Color palette shorthand
const K = '#06060c'; // black outline
const W = '#f0f0f8'; // white
const S = '#d0a0b0'; // skin shadow
const P = '#ff2e88'; // pink
const Pd = '#b01e60'; // pink dark
const C = '#00f0ff'; // cyan
const Cd = '#0099aa'; // cyan dark
const G = '#39ff14'; // green
const Gd = '#1a8800'; // green dark
const Y = '#ffe600'; // yellow
const Yd = '#b8a800'; // yellow dark
const V = '#9d4edd'; // purple
const Vd = '#6a2d99'; // purple dark
const R = '#ff3344'; // red
const Rd = '#aa1122'; // red dark
const Br = '#8b5a2b'; // brown
const Brd = '#5a3a1a'; // brown dark
const Bl = '#2244aa'; // blue
const Bld = '#112266'; // blue dark
const Gy = '#5a5a7a'; // gray
const Gyd = '#33334a'; // gray dark
const Sk = '#ffccaa'; // skin
const Hr = '#3a1a00'; // hair dark brown
const Hr2 = '#5a2a00'; // hair brown

/* ===== GIRL DEVELOPER CHARACTER (16x20) ===== */
export const girlDev: PixelGrid = [
  [_, _, _, _, _, Hr, Hr, Hr, Hr, Hr, Hr, _, _, _, _, _],
  [_, _, _, _, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, _, _, _, _],
  [_, _, _, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, _, _, _],
  [_, _, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, _, _],
  [_, _, Hr, Hr, P, Hr, Hr, Hr, Hr, Hr, Hr, P, Hr, Hr, _, _],
  [_, _, Hr, Hr, P, Hr, Hr, Hr, Hr, Hr, Hr, P, Hr, Hr, _, _],
  [_, _, Hr, Hr, Hr, Hr, Sk, Sk, Sk, Sk, Hr, Hr, Hr, _, _, _],
  [_, _, Hr, Hr, Sk, Sk, Sk, Sk, Sk, Sk, Sk, Sk, Hr, _, _, _],
  [_, _, Hr, Sk, Sk, K, Sk, Sk, Sk, Sk, K, Sk, Sk, Hr, _, _],
  [_, _, Hr, Sk, Sk, Sk, Sk, Sk, Sk, Sk, Sk, Sk, Sk, _, _, _],
  [_, _, _, Sk, Sk, Sk, Sk, K, K, Sk, Sk, Sk, Sk, _, _, _],
  [_, _, _, _, Sk, Sk, Sk, Sk, Sk, Sk, Sk, Sk, _, _, _, _],
  [_, _, _, _, _, Sk, S, Sk, Sk, S, Sk, _, _, _, _, _],
  [_, _, _, _, C, C, C, C, C, C, C, C, _, _, _, _],
  [_, _, _, C, C, C, C, C, C, C, C, C, C, _, _, _],
  [_, _, C, C, C, C, C, C, C, C, C, C, C, C, _, _],
  [_, _, C, Cd, Cd, C, C, C, C, C, C, Cd, Cd, C, _, _],
  [_, _, _, Sk, Sk, _, _, _, _, _, _, Sk, Sk, _, _, _],
  [_, _, _, Sk, Sk, _, _, _, _, _, _, Sk, Sk, _, _, _],
  [_, _, _, K, K, K, _, _, _, _, K, K, K, _, _, _],
];

/* ===== GIRL IDLE (frame 2 - slight bob) ===== */
export const girlDevIdle: PixelGrid = [
  [_, _, _, _, _, Hr, Hr, Hr, Hr, Hr, Hr, _, _, _, _, _],
  [_, _, _, _, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, _, _, _, _],
  [_, _, _, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, _, _, _],
  [_, _, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, _, _],
  [_, _, Hr, Hr, P, Hr, Hr, Hr, Hr, Hr, Hr, P, Hr, Hr, _, _],
  [_, _, Hr, Hr, P, Hr, Hr, Hr, Hr, Hr, Hr, P, Hr, Hr, _, _],
  [_, _, _, Hr, Hr, Hr, Sk, Sk, Sk, Sk, Hr, Hr, _, _, _, _],
  [_, _, _, Hr, Sk, Sk, Sk, Sk, Sk, Sk, Sk, Sk, Hr, _, _, _],
  [_, _, _, Hr, Sk, K, Sk, Sk, Sk, Sk, K, Sk, Sk, Hr, _, _],
  [_, _, _, Hr, Sk, Sk, Sk, Sk, Sk, Sk, Sk, Sk, Sk, _, _, _],
  [_, _, _, _, Sk, Sk, Sk, K, K, Sk, Sk, Sk, Sk, _, _, _],
  [_, _, _, _, _, Sk, Sk, Sk, Sk, Sk, Sk, Sk, _, _, _, _],
  [_, _, _, _, _, _, Sk, S, S, Sk, _, _, _, _, _, _],
  [_, _, _, C, C, C, C, C, C, C, C, C, _, _, _, _],
  [_, _, C, C, C, C, C, C, C, C, C, C, C, _, _, _],
  [_, C, C, C, C, C, C, C, C, C, C, C, C, C, _, _],
  [_, C, Cd, Cd, C, C, C, C, C, C, C, Cd, Cd, C, _, _],
  [_, _, _, Sk, Sk, _, _, _, _, _, _, Sk, Sk, _, _, _],
  [_, _, _, Sk, Sk, _, _, _, _, _, _, Sk, Sk, _, _, _],
  [_, _, K, K, K, K, _, _, _, _, K, K, K, K, _, _],
];

/* ===== SMALL WALKING CHARACTER (8x10) ===== */
export const walkCharA: PixelGrid = [
  [_, _, Hr, Hr, Hr, _, _, _],
  [_, Hr, Hr, Hr, Hr, Hr, _, _],
  [_, Hr, W, Hr, W, Hr, _, _],
  [_, Hr, Sk, Sk, Sk, Hr, _, _],
  [_, _, Sk, K, Sk, _, _, _],
  [_, C, C, C, C, C, _, _],
  [_, C, C, C, C, C, _, _],
  [_, _, Sk, _, Sk, _, _, _],
  [_, K, K, _, K, K, _, _],
  [_, K, _, _, _, K, _, _],
];

export const walkCharB: PixelGrid = [
  [_, _, Hr, Hr, Hr, _, _, _],
  [_, Hr, Hr, Hr, Hr, Hr, _, _],
  [_, Hr, W, Hr, W, Hr, _, _],
  [_, Hr, Sk, Sk, Sk, Hr, _, _],
  [_, _, Sk, K, Sk, _, _, _],
  [_, _, C, C, C, C, _],
  [_, _, C, C, C, C, _],
  [_, _, Sk, _, Sk, _, _],
  [_, _, K, _, _, K, _, _],
  [_, _, K, _, _, K, _, _],
];

/* ===== CLOUD (12x6) ===== */
export const cloud: PixelGrid = [
  [_, _, _, _, W, W, W, W, _, _, _, _],
  [_, _, _, W, W, W, W, W, W, W, _, _],
  [_, W, W, W, W, W, W, W, W, W, W, _],
  [W, W, W, W, W, W, W, W, W, W, W, W],
  [_, W, W, W, W, W, W, W, W, W, W, _],
  [_, _, _, _, _, _, _, _, _, _, _, _],
];

export const cloudSmall: PixelGrid = [
  [_, _, _, W, W, W, _, _, _],
  [_, W, W, W, W, W, W, W, _],
  [W, W, W, W, W, W, W, W, W],
  [_, W, W, W, W, W, W, W, _],
];

/* ===== STAR (5x5) ===== */
export const star: PixelGrid = [
  [_, _, Y, _, _],
  [_, Y, Y, Y, _],
  [Y, Y, Y, Y, Y],
  [_, Y, Y, Y, _],
  [_, _, Y, _, _],
];

/* ===== STAR SMALL (3x3) ===== */
export const starSmall: PixelGrid = [
  [_, Y, _],
  [Y, Y, Y],
  [_, Y, _],
];

/* ===== COIN (7x7) ===== */
export const coin: PixelGrid = [
  [_, _, Y, Y, Y, _, _],
  [_, Y, Yd, Y, Yd, Y, _],
  [Y, Yd, Y, Y, Y, Yd, Y],
  [Y, Y, Y, Y, Y, Y, Y],
  [Y, Yd, Y, Y, Y, Yd, Y],
  [_, Y, Yd, Y, Yd, Y, _],
  [_, _, Y, Y, Y, _, _],
];

/* ===== TREE (9x11) ===== */
export const tree: PixelGrid = [
  [_, _, _, G, G, G, _, _, _],
  [_, _, G, G, G, G, G, _, _],
  [_, G, G, Gd, G, Gd, G, G, _],
  [_, G, Gd, G, G, G, Gd, G, _],
  [G, G, G, Gd, G, Gd, G, G, G],
  [G, Gd, G, G, G, G, G, Gd, G],
  [_, G, G, Gd, G, Gd, G, G, _],
  [_, _, G, G, G, G, G, _, _],
  [_, _, _, Br, Br, Br, _, _, _],
  [_, _, _, Brd, Brd, Brd, _, _, _],
  [_, _, _, Brd, Brd, Brd, _, _, _],
];

/* ===== FLOWER (7x7) ===== */
export const flower: PixelGrid = [
  [_, _, P, _, P, _, _],
  [_, P, P, P, P, P, _],
  [P, P, Y, P, Y, P, P],
  [_, P, P, P, P, P, _],
  [_, _, P, _, P, _, _],
  [_, _, _, G, _, _, _],
  [_, _, G, G, G, _, _],
];

/* ===== HEART (7x6) ===== */
export const heart: PixelGrid = [
  [_, R, R, _, _, R, R],
  [R, R, R, R, R, R, R],
  [R, R, R, R, R, R, R],
  [_, R, R, R, R, R, _],
  [_, _, R, R, R, _, _],
  [_, _, _, R, _, _, _],
];

/* ===== SWORD (7x9) ===== */
export const sword: PixelGrid = [
  [_, _, _, W, _, _, _],
  [_, _, _, W, _, _, _],
  [_, _, _, W, _, _, _],
  [_, _, _, W, _, _, _],
  [_, G, G, W, G, G, _],
  [Gd, _, _, W, _, _, Gd],
  [_, _, _, Br, _, _, _],
  [_, _, Brd, Brd, Brd, _, _],
  [_, _, _, Br, _, _, _],
];

/* ===== SHIELD (7x8) ===== */
export const shield: PixelGrid = [
  [_, Bl, Bl, Bl, Bl, Bl, _],
  [Bl, Bld, Bl, Bl, Bl, Bld, Bl],
  [Bl, Bl, Bl, Y, Bl, Bl, Bl],
  [Bl, Bl, Y, Y, Y, Bl, Bl],
  [Bl, Bl, Bl, Y, Bl, Bl, Bl],
  [_, Bl, Bl, Bl, Bl, Bl, _],
  [_, _, Bl, Bl, Bl, _, _],
  [_, _, _, Bl, _, _, _],
];

/* ===== GAME CONTROLLER ICON (9x7) ===== */
export const controller: PixelGrid = [
  [_, _, K, K, K, K, K, _, _],
  [_, K, Gy, Gy, Gy, Gy, Gy, K, _],
  [K, Gy, Gy, G, Gy, Gy, R, Gy, K],
  [K, Gy, Gy, Gy, Gy, Gy, Gy, Gy, K],
  [_, K, Gy, Gy, P, Gy, Gy, K, _],
  [_, _, K, Gy, Gy, Gy, K, _, _],
  [_, _, _, K, K, K, _, _, _],
];

/* ===== BATTERY / HP ICON (7x4) ===== */
export const battery: PixelGrid = [
  [G, G, G, _, _, K, K],
  [G, Gd, G, _, _, K, K],
  [G, G, G, _, _, K, K],
  [K, K, K, K, K, K, K],
];

/* ===== TROPHY (7x8) ===== */
export const trophy: PixelGrid = [
  [_, Y, Y, Y, Y, Y, _],
  [Y, Yd, Y, Y, Y, Yd, Y],
  [Y, Y, Y, Y, Y, Y, Y],
  [_, Y, Y, Y, Y, Y, _],
  [_, _, Y, Y, Y, _, _],
  [_, _, Yd, Yd, Yd, _, _],
  [_, Yd, Yd, Yd, Yd, Yd, _],
  [Yd, Yd, Yd, Yd, Yd, Yd, Yd],
];

/* === PIXEL AVATAR (profile pic in console screen 14x14) === */
export const avatar: PixelGrid = [
  [_, _, _, _, Hr, Hr, Hr, Hr, Hr, Hr, _, _, _, _],
  [_, _, _, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, _, _, _],
  [_, _, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, _, _],
  [_, _, Hr, Hr, P, Hr, Hr, Hr, Hr, P, Hr, Hr, _, _],
  [_, _, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, Hr, _, _],
  [_, _, _, Hr, Sk, Sk, Sk, Sk, Sk, Sk, Hr, _, _, _],
  [_, _, _, Hr, Sk, K, Sk, Sk, K, Sk, Hr, _, _, _],
  [_, _, _, _, Sk, Sk, Sk, Sk, Sk, Sk, _, _, _, _],
  [_, _, _, _, Sk, Sk, K, K, Sk, Sk, _, _, _, _],
  [_, _, _, _, _, Sk, S, S, Sk, _, _, _, _, _],
  [_, _, _, C, C, C, C, C, C, C, C, _, _, _],
  [_, _, C, C, Cd, C, C, C, Cd, C, C, C, _, _],
  [_, _, C, Cd, C, C, C, C, C, C, Cd, C, _, _],
  [_, _, _, Sk, Sk, _, _, _, _, Sk, Sk, _, _, _],
];

export const _c = _; // re-export for convenience