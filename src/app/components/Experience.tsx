import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Project Lead & Game Developer",
      company: "Tabi Apo Studios",
      period: "Current",
      description: "Leading game development initiatives within Agile cycles, specializing in level design and combat mechanics implementation.",
      highlights: [
        "Designed complex level layouts and environmental systems in Roblox Studio",
        "Scripted combat mechanics and game systems using Lua",
        "Transitioned core gameplay features through iterative Agile sprints",
        "Collaborated with cross-functional teams to deliver engaging player experiences"
      ]
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Experience & Leadership
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#06b6d4] to-[#a855f7]" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-20 pb-16 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-[#06b6d4] border-4 border-background" />

                <div className="bg-card border border-white/10 rounded-xl p-8 hover:border-[#06b6d4]/50 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/20">
                      <Briefcase className="w-5 h-5 text-[#06b6d4]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-white/70">{exp.company}</p>
                      <p className="text-sm text-[#06b6d4] mt-1">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-white/60 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/60">
                        <span className="text-[#06b6d4] mt-1.5 shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
