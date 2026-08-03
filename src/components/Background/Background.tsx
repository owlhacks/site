"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import {
  AdditiveBlending,
  CanvasTexture,
  Color,
  Points as ThreePoints,
} from "three";

/** Shared scroll depth 0 (surface) → 1 (abyss) */
const depthRef = { current: 0 };

const SURFACE = new Color("#0a1438");
const MID = new Color("#06102e");
const ABYSS = new Color("#02060f");

function useOceanDepth() {
  const [depth, setDepth] = useState(0);
  const target = useRef(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      target.current = Math.min(1, Math.max(0, window.scrollY / max));
    };

    const tick = () => {
      depthRef.current += (target.current - depthRef.current) * 0.08;
      setDepth(depthRef.current);

      const mixed = SURFACE.clone()
        .lerp(MID, Math.min(1, depthRef.current * 1.4))
        .lerp(ABYSS, Math.max(0, depthRef.current - 0.35) / 0.65);

      document.documentElement.style.setProperty(
        "--ocean-depth-bg",
        `#${mixed.getHexString()}`
      );

      raf.current = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return depth;
}

function createBubbleTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Failed to get canvas context");

  const center = 64;
  ctx.clearRect(0, 0, 128, 128);

  const glow = ctx.createRadialGradient(center, center, 8, center, center, 58);
  glow.addColorStop(0, "rgba(255, 255, 255, 0.35)");
  glow.addColorStop(0.4, "rgba(255, 255, 255, 0.12)");
  glow.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(center, center, 58, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(center, center, 34, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  const highlight = ctx.createRadialGradient(48, 46, 0, 48, 46, 14);
  highlight.addColorStop(0, "rgba(255, 255, 255, 0.9)");
  highlight.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = highlight;
  ctx.beginPath();
  ctx.arc(48, 46, 14, 0, Math.PI * 2);
  ctx.fill();

  return new CanvasTexture(canvas);
}

const BUBBLE_COLORS = [
  "#2d85eb",
  "#48e2b4",
  "#a8e6f0",
  "#ffffff",
  "#ff8fa3",
  "#ffe66d",
];

/** Rising dynamic bubbles — moderate density, always moving */
function BubbleField() {
  const ref = useRef<ThreePoints>(null!);
  const materialRef = useRef<React.ElementRef<typeof PointMaterial>>(null!);
  const velocities = useRef<Float32Array | null>(null);

  const [positions] = useState(() => {
    const count = 900;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 3.4;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 3.8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2.4;
      vel[i] = 0.1 + Math.random() * 0.28;
    }

    velocities.current = vel;
    return pos;
  });

  const colorArray = useMemo(() => {
    const n = positions.length / 3;
    const colors = new Float32Array(n * 3);

    for (let i = 0; i < n; i++) {
      const roll = Math.random();
      let hex: string;
      if (roll < 0.3) hex = BUBBLE_COLORS[0];
      else if (roll < 0.55) hex = BUBBLE_COLORS[1];
      else if (roll < 0.72) hex = BUBBLE_COLORS[2];
      else if (roll < 0.88) hex = BUBBLE_COLORS[3];
      else if (roll < 0.96) hex = BUBBLE_COLORS[4];
      else hex = BUBBLE_COLORS[5];

      const c = new Color(hex);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return colors;
  }, [positions]);

  const texture = useMemo(() => createBubbleTexture(), []);

  useFrame((state, delta) => {
    const mesh = ref.current;
    if (!mesh || !velocities.current) return;

    const d = depthRef.current;
    const speedScale = 1 - d * 0.55;
    const posAttr = mesh.geometry.getAttribute("position");
    const arr = posAttr.array as Float32Array;
    const vel = velocities.current;

    for (let i = 0; i < vel.length; i++) {
      const xi = i * 3;
      const yi = i * 3 + 1;
      arr[yi] += vel[i] * delta * speedScale;
      arr[xi] += Math.sin(state.clock.elapsedTime * 0.55 + i * 0.7) * 0.00045;

      if (arr[yi] > 2.0) {
        arr[yi] = -2.0;
        arr[xi] = (Math.random() - 0.5) * 3.4;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 2.4;
      }
    }

    posAttr.needsUpdate = true;
    mesh.rotation.y = Math.sin(state.clock.elapsedTime * 0.04) * 0.06;

    if (materialRef.current) {
      materialRef.current.opacity = 0.75 * (1 - d * 0.45);
      materialRef.current.size = 0.04 * (1 - d * 0.25);
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colorArray, 3]} />
      </bufferGeometry>
      <PointMaterial
        ref={materialRef}
        transparent
        vertexColors
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        map={texture}
        alphaTest={0.02}
        blending={AdditiveBlending}
        opacity={0.75}
      />
    </Points>
  );
}

function DepthCamera() {
  useFrame((state) => {
    const d = depthRef.current;
    state.camera.position.y = -d * 0.28;
    state.camera.position.z = 1.15 + d * 0.2;
    state.camera.lookAt(0, -d * 0.15, 0);
  });
  return null;
}

function SeaFloor({ depth }: { depth: number }) {
  const visibility = Math.max(0, Math.min(1, (depth - 0.55) / 0.4));
  const lift = (1 - visibility) * 28;

  return (
    <div
      className="absolute inset-x-0 bottom-0 pointer-events-none"
      style={{
        opacity: visibility,
        transform: `translateY(${lift}%)`,
        height: "min(42vh, 420px)",
      }}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sandGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3d2e1a" stopOpacity="0" />
            <stop offset="25%" stopColor="#c4a574" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#e8d4a8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f0e6c8" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="sandRipple" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d4bc8a" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#f5e6c0" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#c4a574" stopOpacity="0.35" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M0,280 C180,250 320,310 480,275 C640,240 780,300 960,270 C1120,245 1280,290 1440,260 L1440,420 L0,420 Z"
          fill="url(#sandGrad)"
        />
        <path
          d="M0,310 C200,295 400,325 600,305 C800,285 1000,320 1200,300 C1320,290 1380,305 1440,298 L1440,420 L0,420 Z"
          fill="url(#sandRipple)"
        />
        <path
          d="M0,350 C220,340 440,365 700,348 C960,330 1180,360 1440,345 L1440,420 L0,420 Z"
          fill="#e8d4a8"
          opacity="0.45"
        />

        <g filter="url(#softGlow)" opacity="0.95">
          <path
            d="M160,300 C155,250 130,220 145,180 C160,145 175,200 170,240 C185,210 210,185 200,150 C190,120 220,160 215,200 C235,175 255,210 240,250 C225,285 200,295 160,300 Z"
            fill="#ff8fa3"
          />
          <path
            d="M120,305 C110,270 95,240 115,210 C135,185 140,230 135,260 C150,235 165,250 155,280 C145,300 130,308 120,305 Z"
            fill="#ff6b8a"
          />
          <ellipse cx="210" cy="295" rx="14" ry="22" fill="#48e2b4" />
          <ellipse cx="230" cy="300" rx="10" ry="18" fill="#2d85eb" />
          <ellipse cx="195" cy="302" rx="9" ry="16" fill="#ffe66d" opacity="0.85" />
        </g>

        <g filter="url(#softGlow)">
          <path
            d="M420,290 C410,240 380,200 405,160 C430,125 445,175 440,215 C460,180 490,155 475,120 C460,90 500,140 490,185 C515,155 540,190 520,235 C500,275 470,290 420,290 Z"
            fill="#2d85eb"
          />
          <path
            d="M380,300 C370,265 350,235 375,205 C400,180 405,230 395,265 C410,245 425,265 410,290 C400,305 388,305 380,300 Z"
            fill="#48e2b4"
          />
          <circle cx="455" cy="285" r="18" fill="#ff8fa3" opacity="0.9" />
          <circle cx="480" cy="295" r="12" fill="#ffe66d" opacity="0.75" />
          <circle cx="440" cy="298" r="10" fill="#ff8fa3" opacity="0.7" />
        </g>

        <g filter="url(#softGlow)">
          <path
            d="M780,295 C770,250 745,215 765,175 C785,140 810,185 800,225 C820,195 850,175 835,140 C820,110 860,155 850,195 C875,165 900,200 880,245 C860,280 830,295 780,295 Z"
            fill="#ff8fa3"
          />
          <ellipse cx="820" cy="290" rx="16" ry="24" fill="#48e2b4" />
          <ellipse cx="845" cy="298" rx="11" ry="18" fill="#2d85eb" />
          <ellipse cx="800" cy="300" rx="10" ry="15" fill="#ffe66d" opacity="0.8" />
          <path
            d="M880,305 Q900,240 920,200 Q940,240 955,305 Q920,280 880,305 Z"
            fill="#48e2b4"
            opacity="0.85"
          />
        </g>

        <g filter="url(#softGlow)">
          <path
            d="M1180,285 C1165,235 1135,200 1160,155 C1185,115 1205,165 1195,210 C1220,170 1255,150 1240,115 C1225,85 1270,130 1255,180 C1285,145 1315,185 1290,235 C1265,280 1230,290 1180,285 Z"
            fill="#2d85eb"
          />
          <path
            d="M1140,300 C1125,260 1105,230 1135,200 C1160,175 1165,230 1155,265 C1170,245 1185,270 1170,295 C1158,308 1148,308 1140,300 Z"
            fill="#ff8fa3"
          />
          <circle cx="1220" cy="292" r="15" fill="#ffe66d" opacity="0.8" />
          <circle cx="1245" cy="300" r="11" fill="#48e2b4" opacity="0.85" />
          <ellipse cx="1200" cy="302" rx="9" ry="14" fill="#ff8fa3" />
        </g>

        <ellipse cx="300" cy="330" rx="28" ry="10" fill="#a89070" opacity="0.5" />
        <ellipse cx="650" cy="340" rx="35" ry="12" fill="#9a8060" opacity="0.45" />
        <ellipse cx="1000" cy="335" rx="40" ry="11" fill="#b09878" opacity="0.4" />
        <ellipse cx="1320" cy="325" rx="30" ry="10" fill="#a89070" opacity="0.5" />
      </svg>
    </div>
  );
}

export default function Background() {
  const depth = useOceanDepth();
  const hazeOpacity = Math.min(0.65, depth * 0.8);
  const vignetteOpacity = 0.2 + depth * 0.5;

  return (
    <div className="pointer-events-none fixed inset-0 -z-[9999]">
      <div className="absolute inset-0 h-screen w-screen">
        <Canvas camera={{ position: [0, 0, 1.15], fov: 75 }}>
          <DepthCamera />
          <BubbleField />
        </Canvas>
      </div>

      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 120% 80% at 50% 0%,
            rgba(45, 133, 235, ${0.16 * (1 - depth)}) 0%,
            transparent 45%),
            linear-gradient(180deg,
            rgba(10, 20, 56, ${0.12 + depth * 0.22}) 0%,
            rgba(2, 6, 15, ${hazeOpacity}) 100%)`,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          opacity: vignetteOpacity,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.9) 100%)",
        }}
      />

      <SeaFloor depth={depth} />
    </div>
  );
}
