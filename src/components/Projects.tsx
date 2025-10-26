import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Img2048 from "@/assets/2048_Start.png";
import Vdo2048 from "@/assets/2048_movement.mp4";
import FlappyBirdImg from "@/assets/Flappy_Bird.png";
import FlappyBirdVdo from "@/assets/flappy_bird_movement.mp4";
import DinnerImg from "@/assets/Dinner.png";
import DinnerVdo from "@/assets/Dinner.mp4";
import SkillsUpImg from "@/assets/SkillsUp.png";
import SkillsUpVdo from "@/assets/SkillsUp2.mp4";
import DashboardImg from "@/assets/dashboard.png";
import DashboardVdo from "@/assets/dashboard.gif";
import AlzheimerImg from "@/assets/alzheimer.png";
import AlzheimerVdo from "@/assets/alzheimer.mp4";
import ChefImg from "@/assets/MiniChef.png";


import ProjectDialog from "./ProjectDialog";

interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  image: string | null;
  tags: string[];
  videoUrl: string;
  githubLink: string;
  highlight?: boolean;
}

const projects: Project[] = [
  {
    title: "Flappy Bird Unity",
    description: "Recréation du jeu Flappy Bird pour comprendre la gestion de la physique, des collisions et du scoring dans Unity",
    detailedDescription: "Ce projet est une reproduction du jeu Flappy Bird développée avec Unity. \n L’objectif était de comprendre les bases du développement d’un jeu 2D :\n - gestion de la physique et des collisions,\n - mouvement du joueur via la gravité et les impulsions,\n - génération procédurale d’obstacles,\n - système de score et de redémarrage.\n\nCe projet m’a permis d’explorer les composants clés de Unity (Rigidbody2D, Collider2D, UI, Prefabs) et de me familiariser avec la logique de boucle de jeu, la gestion des états et la fluidité du gameplay.",
    image: FlappyBirdImg,
    tags: ["Unity", "C#", "2D", "Physics", 'Collisions'],
    videoUrl: FlappyBirdVdo,
    githubLink: "#"
  },
  {
    title: "2048 Unity",
    description: "Recréation du jeu 2048 pour apprendre la gestion des grilles, des mouvements et des interfaces utilisateur dans Unity",
    detailedDescription: "Ce projet est une reproduction du jeu 2048, développé avec Unity.\nL’objectif était de comprendre la logique de jeu basée sur une grille et la gestion des entrées utilisateur. Les principales fonctionnalités implémentées incluent :\n - fusion et déplacement des tuiles selon les directions,\n - mise à jour dynamique du score et du meilleur score,\n - affichage de l’écran de fin de partie (Game Over),\n - bouton pour lancer une nouvelle partie,\n - interface utilisateur intégrée avec le système UI de Unity.\nCe projet m’a permis de renforcer mes compétences en logique algorithmique, en gestion d’état de jeu et en conception d’interfaces interactives dans Unity.",
    image: Img2048,
    tags: ["Unity", "C#", "2D", "UI", "Grid", "Score system"],
    videoUrl: Vdo2048,
    githubLink: "#"
  },
  {
    title: "Game Diner",
    description: "Petit jeu de lancer de légumes réalisé sous Unity pour explorer la physique, les collisions, les particules et la gestion du score.",
    detailedDescription: "Ce projet a été développé dans le cadre d’un TP Unity. Le but du jeu est de lancer des légumes (brocolis, carottes) dans des tasses pour marquer des points.\n\n" +
"Il a permis de mettre en pratique plusieurs notions fondamentales du développement de jeux 3D :\n" +
"- instanciation d’objets physiques et gestion des forces de lancer,\n" +
"- utilisation des colliders, rigidbodies et triggers,\n" +
"- création d’effets visuels via des systèmes de particules,\n" +
"- gestion et sauvegarde du score à l’aide des PlayerPrefs,\n" +
"- utilisation de coroutines et AnimationCurves pour les animations,\n" +
"- interaction entre plusieurs scripts (VegetableThrower, Goal, GameManager, BounceVegetable).\n\n" +
"Ce projet m’a permis de mieux comprendre la gestion de la physique dans Unity, la logique d’événements de collision et la coordination entre différents composants pour créer un gameplay complet et interactif.",
    image: DinnerImg,
    tags: ["Unity", "C#", "3D", "Particles", "Coroutines", "Collisions"],
    videoUrl: DinnerVdo,
    githubLink: "#"
  },
  {
    title: "Plateforme E-learning",
    description: "Développement complet d'une plateforme e-learning modulaire avec React, Next.js, TypeScript et Supabase, incluant base de données sécurisée.",
    detailedDescription: "Plateforme e-learning complète développée seule lors d'un stage chez Pixelisium. Architecture modulaire utilisant les technologies web modernes pour offrir une expérience d'apprentissage en ligne optimale et une personalisation complète pour les professeurs.\n\nCaractéristiques principales:\n- Architecture full-stack avec React et Next.js\n- Base de données Supabase avec sécurité RLS\n- Système d'authentification et gestion des utilisateurs\n- Interface responsive et accessible\n- Gestion de contenu dynamique \n\n En plus de la partie enseignement, j'ai rajouté également la possibilité de créér et assister à des events, de créer liker et comenter des posts, de faire des quizs ainsi que de mettre en place un système de gamification avec des points et des badges.",
    image: SkillsUpImg,
    tags: ["React", "Next.js", "TypeScript", "Supabase"],
    videoUrl: SkillsUpVdo,
    githubLink: "#",
  },
  {
    title: "Dashboard Qualité de l’Eau",
    description: "Dashboard interactif permettant de visualiser en temps réel la qualité de l’eau des rivières et fleuves en France, à partir des données ouvertes de l’API Hub’Eau. (Projet collaboratif)",
    detailedDescription: "Ce projet vise à rendre accessible et compréhensible la qualité des eaux de surface en France. Il utilise une interface moderne pour présenter les données de surveillance des rivières : températures, pH, nitrates, ammonium, etc., tout en évaluant un indice global de pollution basé sur l'indice IQEau.\n\nL’objectif est de sensibiliser à l’état des milieux aquatiques et de fournir un outil d’analyse simple à destination du grand public comme des scientifiques. Fonctionnalités principales :\n - Interface graphique moderne développée avec Flutter.\n - Cartographie interactive des stations de mesure avec Mapbox.\n - Affichage en temps réel des paramètres physico-chimiques de l’eau.\n - Calcul et affichage d’un indice de qualité de l’eau (IQEau).\n - Anecdotes informatives \"Le saviez-vous ?\" qui changent toutes les 7 secondes.\n - Connexion directe à l’API Hub’Eau pour obtenir les dernières données disponibles.\n - Graphiques dynamiques des mesures par station.",
    image: DashboardImg,
    tags: ["Flutter", "Dart", "API", "Data Visualization"],
    videoUrl: DashboardVdo,
    githubLink: "https://github.com/SIFFRINP/flutter_dashboard"
  },
  {
    title: "Apprentissage par transfert pour la classification d’images médicales (Maladie d’Alzheimer)",
    description: "Projet de classification d’IRM cérébrales à l’aide de réseaux de neurones convolutifs et de techniques de transfert d’apprentissage, visant à détecter les stades de la maladie d’Alzheimer.",
    detailedDescription: "Ce projet explore l’application du Transfer Learning pour la classification d’images IRM dans le cadre du diagnostic assisté de la maladie d’Alzheimer.\n\nNous avons comparé plusieurs architectures de réseaux de neurones convolutifs (CNN), dont VGG19, MobileNetV2, EfficientNetB0 et DenseNet121, afin d’évaluer leur capacité de généralisation sur un jeu de données d’IRM issu de Kaggle.\n\nL’approche adoptée s’appuie sur des modèles pré-entraînés sur ImageNet, ajustés (fine-tuning) pour distinguer les différents stades de la maladie : Non Demented, Very Mild Demented, Mild Demented et Moderate Demented.\nLe modèle VGG19 a obtenu les meilleurs résultats, avec une accuracy de 84,5 % et un F1-score moyen de 0,84, confirmant son efficacité dans la détection automatisée des signes d’Alzheimer.\n\nUne interface utilisateur (IHM) a été développée avec Flask, HTML et CSS pour permettre le chargement d’images IRM, l’affichage des prédictions et la visualisation de heatmaps Grad-CAM, offrant une interprétation visuelle des zones cérébrales influençant la décision du modèle (notamment au niveau de l’hippocampe).\n\nLe projet met l’accent sur la transparence, la compréhension et la reproductibilité scientifique, tout en reconnaissant les limites actuelles liées à la taille du jeu de données et au risque de surapprentissage.",
    image: AlzheimerImg,
    tags: ["IA", "Deep Learning", "Transfer Learning","CNN"],
    videoUrl: AlzheimerVdo,
    githubLink: "#"
  },
  {
    title: "Jeu Unity - In progress",
    description: "Jeu 3D complet en cours de développement avec Unity, explorant des mécaniques de gameplay innovantes",
    detailedDescription:"",
    image: ChefImg,
    tags: ["Game Development", "3D"],
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
