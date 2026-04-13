import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "MyNaga Assist",
      description: "Civic application proposal developed for a mayoral hackathon with Scripters, addressing community needs through technology.",
      tags: ["Web App", "Civic Tech", "Hackathon"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      color: "#06b6d4"
    },
    {
      title: "Whispr",
      description: "Real-time chat application built with MERN stack, featuring Socket.io for instant messaging and Cloudinary for media management.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      color: "#a855f7"
    },
    {
      title: "Uncharted",
      description: "2D shooter game featuring 100% custom-animated pixel art and hand-crafted environmental tilesets for an immersive retro experience.",
      tags: ["Game Dev", "Pixel Art", "2D Shooter"],
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      color: "#f59e0b"
    },
    {
      title: "Freelance Web Design",
      description: "Responsive portfolio websites designed in Figma and built with React for local clients, focusing on modern aesthetics and performance.",
      tags: ["React", "Figma", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      color: "#06b6d4"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
            A selection of recent work spanning web applications, games, and client projects
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all"
                whileHover={{ y: -4 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#06b6d4] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5"
                        style={{ borderColor: `${project.color}40` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-sm text-white/70 hover:text-[#06b6d4] transition-colors">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button className="flex items-center gap-2 text-sm text-white/70 hover:text-[#06b6d4] transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
