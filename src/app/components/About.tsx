import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-white/70 leading-relaxed">
                I'm a Computer Science student with a passion for creating complex systems that blend technical precision with creative innovation.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                My work spans full-stack web development and game design, where I build scalable applications and immersive experiences. I specialize in architecting robust solutions that prioritize both performance and user experience.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Beyond development, I have a strong interest in cybersecurity and machine learning, exploring how these fields intersect with modern software engineering to create more intelligent and secure systems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
