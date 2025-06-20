
import React, { useState, useRef, useMemo } from "react";

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { Points as ThreePoints, Color, CanvasTexture, AdditiveBlending } from "three";
import * as random from 'maath'

type StarsProps = React.ComponentProps<typeof Points>

function Stars(props : StarsProps) {
    const ref = useRef<ThreePoints>(null!)

    const [sphere] = useState(() => random.random.inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array)
    const colors = ['#4A0F73', '#81188A', '#De3749', '#f5ab4e', '#fad970', '#3EB69A', "#fff"];

    const createDiffractionStar = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            throw new Error('Failed to get canvas context');
        }

        const centerX = 64;
        const centerY = 64;

        // Clear canvas
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.fillRect(0, 0, 128, 128);

        // Create 6 diffraction spikes (like Hubble telescope)
        const spikes = [
            { angle: 0, length: 50 },           // Horizontal
            { angle: Math.PI/2, length: 50 },   // Vertical
            { angle: Math.PI/3, length: 25 },   // Diagonal 1
            { angle: -Math.PI/3, length: 25 },  // Diagonal 2
            { angle: 2*Math.PI/3, length: 25 }, // Diagonal 3
            { angle: -2*Math.PI/3, length: 25 } // Diagonal 4
        ];

        spikes.forEach(spike => {
            const gradient = ctx.createLinearGradient(
                centerX - Math.cos(spike.angle) * spike.length,
                centerY - Math.sin(spike.angle) * spike.length,
                centerX + Math.cos(spike.angle) * spike.length,
                centerY + Math.sin(spike.angle) * spike.length
            );

            gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.3)');
            gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.strokeStyle = gradient;
            ctx.lineWidth = spike.length > 40 ? 3 : 1.5;
            ctx.lineCap = 'round';

            ctx.beginPath();
            ctx.moveTo(
                centerX - Math.cos(spike.angle) * spike.length,
                centerY - Math.sin(spike.angle) * spike.length
            );
            ctx.lineTo(
                centerX + Math.cos(spike.angle) * spike.length,
                centerY + Math.sin(spike.angle) * spike.length
            );
            ctx.stroke();
        });

        // Add central star core
        const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 12);
        coreGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        coreGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
        coreGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
        ctx.fill();

        return new CanvasTexture(canvas);
    };

    const colorArray = useMemo(() => {
        const pointCount = sphere.length / 3; // Each point has x, y, z coordinates
        const colors_array = new Float32Array(pointCount * 3); // Each color has r, g, b values

        for (let i = 0; i < pointCount; i++) {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const color = new Color(randomColor);
            
            colors_array[i * 3] = color.r;     // Red
            colors_array[i * 3 + 1] = color.g; // Green
            colors_array[i * 3 + 2] = color.b; // Blue
        }
        return colors_array;
    }, [sphere]);

    const starTexture = useMemo(() => createDiffractionStar(), []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 100
        ref.current.rotation.y -= delta / 200
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled={false}
                {...props}
            >
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[sphere, 3]} />
                    <bufferAttribute
                    attach="attributes-color"
                    args={[colorArray, 3]} />
                </bufferGeometry>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    map={starTexture}
                    alphaTest={0.001}
                    blending={AdditiveBlending} // Makes stars glow more
                />
            </Points>
        </group>
    )
}

export default function Background() {
    return (
        <div className="block fixed top-0 left-0 h-screen w-screen -z-[9999] ">
            <Canvas  camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
}
