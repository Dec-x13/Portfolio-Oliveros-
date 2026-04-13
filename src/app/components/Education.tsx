import { motion } from "motion/react";
import { Award, GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Education & Awards
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-white/10 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/20">
                  <GraduationCap className="w-6 h-6 text-[#06b6d4]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-lg text-white/80">Bachelor of Science in Computer Science</p>
                  <p className="text-white/60 mt-2">Currently Pursuing</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-white/10 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#a855f7]/10 border border-[#a855f7]/20">
                  <Award className="w-6 h-6 text-[#a855f7]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Awards & Recognition</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a855f7] mt-1 shrink-0">•</span>
                      <span className="text-white/70">Dean's Lister</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a855f7] mt-1 shrink-0">•</span>
                      <span className="text-white/70">People's Choice Award</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
