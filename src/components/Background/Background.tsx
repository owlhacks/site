
import React, { useState, useRef } from "react";

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { Points as ThreePoints } from "three";
import * as random from 'maath'

type StarsProps = React.ComponentProps<typeof Points>

function Stars(props : StarsProps) {
    const ref = useRef<ThreePoints>(null!)

    const [sphere] = useState(() => random.random.inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array)

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
                <PointMaterial
                    transparent
                    color="#De3749"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

export default function Background() {
    return (
        <Canvas className="block fixed top-0 left-0 w-screen h-screen -z-50 " camera={{ position: [0, 0, 1] }}>
            <Stars />
        </Canvas>
    );
}
