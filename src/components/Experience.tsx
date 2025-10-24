import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Développeuse application web Full-Stack - Stage",
    company: "Pixelisium",
    period: "Été 2025",
    description: "Développement seule et complet d'une plateforme e-learning modulaire avec React, Next.js, TypeScript et Supabase, incluant base de données sécurisée.",
    tags: ["React", "Next.js", "TypeScript", "Supabase"]
  },
  {
    type: "work",
    title: "Assistante Services Scolarité - Stage",
    company: "INSPE",
    period: "Été 2024",
    description: "Inscription des étudiants, contrôle des erreurs, réalisation des cartes étudiantes.",
    tags: ["Organisation", "Rigueur"]
  },
  {
    type: "work",
    title: "Assistanat au service approvisionnements et logistique - Stage",
    company: "Binder Magnetic",
    period: "Été 2023",
    description: "Enregistrement des factures, réceptions de marchandises et mise à jour de la base de données",
    tags: ["Organisation", "Rigueur"]
  }
];

const education = [
  {
    type: "education",
    title: "École d'Ingénieur ESME Sudria",
    subtitle: "Majeure Intelligence Artificielle",
    period: "2021 - Aujourd'hui",
    description: "3ème au classement 2025 des écoles d'ingénieurs généralistes post-bac de l'Usine Nouvelle. Parcours innovation & international centrés sur la programmation.",
    highlight: true
  },
  {
    type: "education",
    title: "Shibaura Institute of Technology",
    subtitle: "Semestre International - Tokyo, Japon",
    period: "09/2024 - 02/2025",
    description: "Cours de programmation, traitement d'image, systèmes d'exploitation.",
    flag: "🇯🇵"
  },
  {
    type: "education",
    title: "Lycée Saint Jean-Hulst",
    subtitle: "Baccalauréat mention Très Bien",
    period: "2018 - 2021",
    description: "Spécialités Mathématiques, Physique Chimie",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4">
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
              Parcours
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Formation et expériences professionnelles</p>
        </motion.div>

        {/* Formation */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold">Formation</h3>
          </div>
          
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`p-6 hover:shadow-glow transition-all duration-300 ${
                  item.highlight ? 'border-2 border-primary shadow-primary' : ''
                }`}>
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        {item.flag && <span className="text-2xl">{item.flag}</span>}
                      </div>
                      <p className="text-lg text-primary font-semibold mb-2">{item.subtitle}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="text-sm font-medium bg-muted px-4 py-2 rounded-full whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expériences */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-secondary" />
            <h3 className="text-3xl font-bold">Expériences Professionnelles</h3>
          </div>
          
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-accent transition-all duration-300">
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-lg text-secondary font-semibold mb-2">{item.company}</p>
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm font-medium bg-muted px-4 py-2 rounded-full whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
