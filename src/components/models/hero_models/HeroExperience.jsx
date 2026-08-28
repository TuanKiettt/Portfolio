import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const roomRef = useRef(null);

  useGSAP(() => {
    if (!roomRef.current) return;

    const room = roomRef.current;
    const baseScale = isMobile ? 0.7 : 1;
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    const float = gsap.timeline({ repeat: -1, yoyo: true, delay: 1.4 });

    intro.fromTo(
      room.scale,
      { x: baseScale * 0.86, y: baseScale * 0.86, z: baseScale * 0.86 },
      { x: baseScale, y: baseScale, z: baseScale, duration: 1.4 }
    );
    intro.fromTo(
      room.position,
      { y: -4.3 },
      { y: -3.5, duration: 1.4 },
      "<"
    );

    float.to(room.position, { y: -3.25, duration: 2.8, ease: "sine.inOut" });
    float.to(
      room.rotation,
      { y: "+=0.08", duration: 3.8, ease: "sine.inOut" },
      0
    );

    return () => {
      intro.kill();
      float.kill();
    };
  }, [isMobile]);

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <group
          scale={isMobile ? 0.7 : 1}
          ref={roomRef}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
