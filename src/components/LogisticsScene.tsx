"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

function SupplyChainNodes() {
    const nodes = useMemo(() => {
        return Array.from({ length: 15 }, () => ({
            position: [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            ],
            speed: Math.random() * 0.5 + 0.2
        }));
    }, []);

    const lines = useMemo(() => {
        const l = [];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                if (Math.random() > 0.85) {
                    l.push([nodes[i].position, nodes[j].position]);
                }
            }
        }
        return l;
    }, [nodes]);

    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.002;
            groupRef.current.rotation.z += 0.001;
        }
    });

    return (
        <group ref={groupRef}>
            {nodes.map((node, i) => (
                <Float key={i} speed={node.speed} rotationIntensity={2} floatIntensity={2}>
                    <mesh position={node.position as any}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={5} />
                    </mesh>
                </Float>
            ))}
            {lines.map((line, i) => (
                <Line
                    key={i}
                    points={line as any}
                    color="#3b82f6"
                    lineWidth={0.5}
                    transparent
                    opacity={0.2}
                />
            ))}
        </group>
    );
}

export default function LogisticsScene() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <SupplyChainNodes />

                {/* Center Core */}
                <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
                    <Sphere args={[2, 64, 64]}>
                        <MeshDistortMaterial
                            color="#1d4ed8"
                            speed={2}
                            distort={0.4}
                            radius={1}
                            opacity={0.15}
                            transparent
                            wireframe
                        />
                    </Sphere>
                </Float>
            </Canvas>
        </div>
    );
}
