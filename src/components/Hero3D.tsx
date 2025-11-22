import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";

const AnimatedShape = ({ position, color, speed, factor }: { position: [number, number, number], color: string, speed: number, factor: number }) => {
  return (
    <Float
      speed={speed} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <mesh position={position}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={0.4} // Strength, 0 disables the effect (default=1)
          radius={1} // Radius (default=1)
        />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          {/* Main Orange Shape */}
          <AnimatedShape position={[2, 0, 0]} color="#FF9705" speed={2} factor={1} />
          
          {/* Secondary Blue Shape */}
          <AnimatedShape position={[-2, -1, -1]} color="#0048FF" speed={1.5} factor={2} />
          
          {/* Background Elements */}
          <AnimatedShape position={[0, 2, -3]} color="#8A2BE2" speed={1} factor={0.5} />
          
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
