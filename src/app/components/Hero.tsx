import { motion, useScroll, useTransform } from "motion/react";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Cube3D } from "./Cube3D";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
      {/* Animated background grid with parallax */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{ y }}
      />

      {/* 3D Cube */}
      <Cube3D />

      {/* Floating 3D geometric wireframes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#06b6d4]/30"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/2 w-24 h-24 border border-[#a855f7]/30"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: [360, 0],
          rotateZ: [0, 360],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Gradient orbs with parallax */}
      <motion.div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-[#06b6d4] rounded-full opacity-20 blur-[120px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#a855f7] rounded-full opacity-20 blur-[120px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm text-[#06b6d4]">Available for opportunities</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent text-3d">
            Danielle Cedric T. Oliveros
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/70 mb-4">
            Full-Stack Web & Game Developer
          </p>

          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-12">
            Building complex systems, immersive experiences, and scalable applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ perspective: "1000px" }}>
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-[#06b6d4] text-white rounded-lg hover:bg-[#0891b2] transition-colors relative overflow-hidden"
              whileHover={{ scale: 1.05, rotateX: 5, translateZ: 20 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="relative z-10">View Projects</span>
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.05, rotateX: -5, translateZ: 20 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Contact Me
            </motion.button>
          </div>

          <div className="flex gap-4 justify-center">
            <motion.a
              href="https://github.com/Dec-x13"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              whileHover={{ y: -4, rotateY: 15, scale: 1.1 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/danielle-oliveros"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              whileHover={{ y: -4, rotateY: -15, scale: 1.1 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-white/30" />
      </motion.div>
    </section>
  );
}
