import { motion } from "motion/react";
import { Code2, Gamepad2, Shield } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Web Dev & Cloud",
      icon: Code2,
      color: "#06b6d4",
      skills: ["React", "JavaScript", "HTML/CSS", "AWS", "Node.js", "MongoDB", "Socket.io"]
    },
    {
      title: "Game Dev",
      icon: Gamepad2,
      color: "#a855f7",
      skills: ["C++", "Lua", "Unity", "Unreal Engine", "Roblox Studio", "Gameplay Design", "Level Design"]
    },
    {
      title: "Security & Data",
      icon: Shield,
      color: "#f59e0b",
      skills: ["Kali Linux", "Penetration Testing", "Python", "Machine Learning", "Cybersecurity"]
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills & Technologies
          </h2>
          <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
            A diverse toolkit spanning full-stack development, game creation, and security
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors"
                >
                  <div
                    className="inline-flex p-3 rounded-lg mb-6"
                    style={{
                      backgroundColor: `${category.color}20`,
                      borderColor: `${category.color}40`,
                      border: "1px solid"
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>

                  <h3 className="text-xl font-semibold mb-6">{category.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
