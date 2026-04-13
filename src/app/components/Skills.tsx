import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Code2, Gamepad2, Shield } from "lucide-react";
import { useRef, MouseEvent } from "react";

function SkillCard({ category, index }: { category: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bg-card border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors"
    >
      <motion.div style={{ transform: "translateZ(30px)" }}>
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
          {category.skills.map((skill: string, i: number) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.1, translateZ: 10 }}
              style={{ transformStyle: "preserve-3d" }}
              className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

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
    <section className="py-24 px-6" style={{ perspective: "2000px" }}>
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
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
