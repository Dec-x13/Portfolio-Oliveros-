import { motion } from "motion/react";
import { Github, Linkedin, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-[#06b6d4] rounded-full opacity-20 blur-[120px]"
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm text-[#06b6d4]">Available for opportunities</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Danielle Cedric T. Oliveros
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/70 mb-4">
            Full-Stack Web & Game Developer
          </p>

          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-12">
            Building complex systems, immersive experiences, and scalable applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-[#06b6d4] text-white rounded-lg hover:bg-[#0891b2] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              whileHover={{ y: -4 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/danielle-oliveros"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              whileHover={{ y: -4 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

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
