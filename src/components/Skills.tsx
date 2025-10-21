import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Gamepad2, Globe } from "lucide-react";

const skillsData = [
  {
    title: "Programmation",
    icon: Code2,
    color: "text-primary",
    skills: ["Python", "C/C++", "C#", "Java", "Unity", "HTML/CSS", "TypeScript", "React", "Next.js"]
  },
  {
    title: "Intelligence Artificielle",
    icon: Brain,
    color: "text-secondary",
    skills: ["Machine Learning", "Deep Learning", "Reinforcement Learning", "Traitement d'image", "Computer Vision"]
  },
  {
    title: "Game Development",
    icon: Gamepad2,
    color: "text-accent",
    skills: ["Unity 3D", "Réalité Virtuelle", "Réalité Augmentée"]
  },
  {
    title: "Langues",
    icon: Globe,
    color: "text-primary",
    skills: ["Anglais (C1 - TOEIC 985/990)", "Espagnol (B1)", "Japonais (notions)", "Coréen (notions)"]
  }
];

const softSkills = [
  "Travail en équipe",
  "Esprit d'initiative",
  "Résolution de problèmes",
  "Créativité",
  "Rigueur",
  "Résilience"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Technologies et expertises</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-primary transition-all duration-300 hover:scale-105 backdrop-blur-md bg-card/60 border border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 backdrop-blur-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-glow backdrop-blur-md bg-card/60 border border-accent/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Soft Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="outline"
                    className="text-base py-2 px-4 transition-all duration-300 hover:scale-110 hover:shadow-lg bg-background/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-accent/80 hover:via-primary/60 hover:to-secondary/80 hover:text-white hover:border-transparent"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;