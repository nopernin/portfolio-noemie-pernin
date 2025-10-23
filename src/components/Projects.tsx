import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import platformerImg from "@/assets/project-platformer.jpg";
import shooterImg from "@/assets/project-shooter.jpg";
import ProjectDialog from "./ProjectDialog";

const projects = [
  {
    title: "Jeu de Plateforme Unity",
    description: "Jeu de plateforme 3D développé avec Unity, incluant système de collecte de pièces, power-ups, et mécaniques de saut avancées.",
    detailedDescription: "Ce jeu de plateforme 3D a été entièrement développé avec Unity et C#. Il comprend un système de collecte de pièces interactif, plusieurs types de power-ups qui améliorent les capacités du joueur, et des mécaniques de saut avancées permettant une navigation fluide dans des environnements complexes. Le projet met l'accent sur le game feel et l'expérience utilisateur.\n\nCaractéristiques principales:\n- Système de physique personnalisé pour des contrôles précis\n- Collectibles et power-ups avec effets visuels\n- Plusieurs niveaux avec difficulté progressive\n- Interface utilisateur intuitive",
    image: platformerImg,
    tags: ["Unity", "C#", "3D", "Game Design"],
    videoUrl: "",
    githubLink: "#"
  },
  {
    title: "Jeu de Tir Unity",
    description: "Shooter futuriste avec système de tir, ennemis IA, et environnement sci-fi immersif. Effets visuels et audio professionnels.",
    detailedDescription: "Shooter futuriste développé avec Unity, proposant une expérience de jeu immersive dans un environnement sci-fi. Le jeu intègre un système de tir sophistiqué, une intelligence artificielle pour les ennemis avec différents comportements, et des effets visuels et sonores de qualité professionnelle.\n\nCaractéristiques principales:\n- Système de combat dynamique avec plusieurs armes\n- IA ennemie avec comportements variés\n- Effets visuels (VFX) et particules avancés\n- Environnement 3D détaillé et optimisé",
    image: shooterImg,
    tags: ["Unity", "C#", "AI", "VFX"],
    videoUrl: "",
    githubLink: "#"
  },
  {
    title: "Plateforme E-learning",
    description: "Développement complet d'une plateforme e-learning modulaire avec React, Next.js, TypeScript et Supabase, incluant base de données sécurisée.",
    detailedDescription: "Plateforme e-learning complète développée seule lors d'un stage chez Pixelisium. Architecture modulaire utilisant les technologies web modernes pour offrir une expérience d'apprentissage en ligne optimale.\n\nCaractéristiques principales:\n- Architecture full-stack avec React et Next.js\n- Base de données Supabase avec sécurité RLS\n- Système d'authentification et gestion des utilisateurs\n- Interface responsive et accessible\n- Gestion de contenu dynamique",
    image: null,
    tags: ["React", "Next.js", "TypeScript", "Supabase"],
    videoUrl: "",
    githubLink: "#",
    highlight: true
  },
  {
    title: "Dashboard Flutter",
    description: "Application mobile de suivi de qualité des rivières avec visualisation de données en temps réel et interface intuitive.",
    detailedDescription: "Application mobile développée avec Flutter pour le suivi et la visualisation de la qualité des rivières. Interface utilisateur intuitive permettant de consulter les données en temps réel avec des graphiques interactifs.\n\nCaractéristiques principales:\n- Visualisation de données en temps réel\n- Graphiques et statistiques interactifs\n- Interface mobile responsive\n- Consultation hors-ligne des données",
    image: null,
    tags: ["Flutter", "Dart", "Mobile", "Data Viz"],
    videoUrl: "",
    githubLink: "#"
  },
  {
    title: "What Do You Meme - Mobile",
    description: "Reproduction du jeu de société populaire en application mobile avec Firebase pour le multijoueur en temps réel.",
    detailedDescription: "Reproduction mobile du célèbre jeu de société What Do You Meme. Application développée avec Android Studio intégrant Firebase pour permettre une expérience multijoueur en temps réel.\n\nCaractéristiques principales:\n- Multijoueur en temps réel via Firebase\n- Système de rooms et de lobbies\n- Base de données de mèmes\n- Interface utilisateur ludique et intuitive",
    image: null,
    tags: ["Android Studio", "Firebase", "Mobile"],
    videoUrl: "",
    githubLink: "#"
  },
  {
    title: "Sudoku Java",
    description: "Reproduction complète du jeu Sudoku avec générateur de grilles, vérification automatique et différents niveaux de difficulté.",
    detailedDescription: "Application Sudoku complète développée en Java avec une interface graphique intuitive. Le jeu propose un générateur de grilles algorithmique, un système de vérification automatique, et plusieurs niveaux de difficulté.\n\nCaractéristiques principales:\n- Générateur de grilles avec algorithme de backtracking\n- Vérification automatique des solutions\n- Système d'indices intelligents\n- Niveaux de difficulté variables (facile, moyen, difficile)\n- Sauvegarde et chargement de parties",
    image: null,
    tags: ["Java", "Algorithmes", "UI/UX"],
    videoUrl: "",
    githubLink: "#"
  }
];

const Projects = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

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

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => {
              const distance = Math.abs(index - current);
              const isCenter = distance === 0;
              const isNearCenter = distance === 1;
              const isFarEdge = distance >= 2;
              
              let scale = 0.7;
              let opacity = 0.5;
              
              if (isCenter) {
                scale = 1;
                opacity = 1;
              } else if (isNearCenter) {
                scale = 0.85;
                opacity = 0.8;
              } else if (isFarEdge) {
                scale = 0.7;
                opacity = 0.6;
              }
              
              return (
                <CarouselItem key={project.title} className="pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/5">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full flex items-center justify-center"
                    style={{
                      transform: `scale(${scale})`,
                      opacity: opacity,
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    <Card 
                      className={`h-full flex flex-col hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm bg-card/90 ${
                        project.highlight ? 'border-2 border-primary shadow-primary' : ''
                      }`}
                      onClick={() => handleProjectClick(project)}
                    >
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
                        <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                        <CardDescription className="text-sm line-clamp-3">{project.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="flex-grow">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static translate-y-0" />
            <CarouselNext className="relative static translate-y-0" />
          </div>
        </Carousel>

        <ProjectDialog 
          project={selectedProject}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>
    </section>
  );
};

export default Projects;
