import { motion } from "motion/react";

export function Cube3D() {
  return (
    <div className="absolute top-1/2 right-1/4 w-32 h-32" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full border border-[#06b6d4]/30 bg-[#06b6d4]/5 backdrop-blur-sm"
          style={{ transform: "rotateY(0deg) translateZ(64px)" }}
        />
        {/* Back */}
        <div
          className="absolute w-full h-full border border-[#a855f7]/30 bg-[#a855f7]/5 backdrop-blur-sm"
          style={{ transform: "rotateY(180deg) translateZ(64px)" }}
        />
        {/* Right */}
        <div
          className="absolute w-full h-full border border-[#06b6d4]/30 bg-[#06b6d4]/5 backdrop-blur-sm"
          style={{ transform: "rotateY(90deg) translateZ(64px)" }}
        />
        {/* Left */}
        <div
          className="absolute w-full h-full border border-[#a855f7]/30 bg-[#a855f7]/5 backdrop-blur-sm"
          style={{ transform: "rotateY(-90deg) translateZ(64px)" }}
        />
        {/* Top */}
        <div
          className="absolute w-full h-full border border-[#f59e0b]/30 bg-[#f59e0b]/5 backdrop-blur-sm"
          style={{ transform: "rotateX(90deg) translateZ(64px)" }}
        />
        {/* Bottom */}
        <div
          className="absolute w-full h-full border border-[#f59e0b]/30 bg-[#f59e0b]/5 backdrop-blur-sm"
          style={{ transform: "rotateX(-90deg) translateZ(64px)" }}
        />
      </motion.div>
    </div>
  );
}
