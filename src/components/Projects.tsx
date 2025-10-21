import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import platformerImg from "@/assets/project-platformer.jpg";
import shooterImg from "@/assets/project-shooter.jpg";

const projects = [
  {
    title: "Jeu de Plateforme Unity",
    description: "Jeu de plateforme 3D développé avec Unity, incluant système de collecte de pièces, power-ups, et mécaniques de saut avancées.",
    image: platformerImg,
    tags: ["Unity", "C#", "3D", "Game Design"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Jeu de Tir Unity",
    description: "Shooter futuriste avec système de tir, ennemis IA, et environnement sci-fi immersif. Effets visuels et audio professionnels.",
    image: shooterImg,
    tags: ["Unity", "C#", "AI", "VFX"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Plateforme E-learning",
    description: "Développement complet d'une plateforme e-learning modulaire avec React, Next.js, TypeScript et Supabase, incluant base de données sécurisée.",
    image: null,
    tags: ["React", "Next.js", "TypeScript", "Supabase"],
    demoLink: "#",
    githubLink: "#",
    highlight: true
  },
  {
    title: "Dashboard Flutter",
    description: "Application mobile de suivi de qualité des rivières avec visualisation de données en temps réel et interface intuitive.",
    image: null,
    tags: ["Flutter", "Dart", "Mobile", "Data Viz"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "What Do You Meme - Mobile",
    description: "Reproduction du jeu de société populaire en application mobile avec Firebase pour le multijoueur en temps réel.",
    image: null,
    tags: ["Android Studio", "Firebase", "Mobile"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Sudoku Java",
    description: "Reproduction complète du jeu Sudoku avec générateur de grilles, vérification automatique et différents niveaux de difficulté.",
    image: null,
    tags: ["Java", "Algorithmes", "UI/UX"],
    demoLink: "#",
    githubLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Créations et réalisations techniques</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full flex flex-col hover:shadow-glow transition-all duration-300 hover:scale-105 ${
                project.highlight ? 'border-2 border-primary shadow-primary' : ''
              }`}>
                {project.image && (
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  </div>
                )}
                
                <CardHeader className={!project.image ? 'pt-6' : ''}>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2">
                  <Button 
                    variant="default" 
                    className="flex-1 bg-gradient-primary hover:shadow-primary transition-all"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Démo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-foreground hover:text-background transition-all"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;