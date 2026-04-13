import { motion } from "motion/react";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Open to collaborations, freelance opportunities, and innovative projects
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center gap-3 text-white/70">
              <MapPin className="w-5 h-5 text-[#06b6d4]" />
              <span>Canaman, Camarines Sur</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Mail className="w-5 h-5 text-[#06b6d4]" />
              <a href="mailto:contact@example.com" className="hover:text-[#06b6d4] transition-colors">
                Get in touch
              </a>
            </div>
          </div>

          <div className="flex gap-4 justify-center mb-12" style={{ perspective: "1000px" }}>
            <motion.a
              href="https://github.com/Dec-x13"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#06b6d4]/50 transition-colors"
              whileHover={{ y: -8, rotateY: 15, scale: 1.1 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/danielle-oliveros"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#06b6d4]/50 transition-colors"
              whileHover={{ y: -8, rotateY: -15, scale: 1.1 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">
              © 2026 Danielle Cedric T. Oliveros. Designed & Built with React
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
