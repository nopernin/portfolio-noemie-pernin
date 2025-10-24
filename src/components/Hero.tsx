import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import FloatingShapes from "./FloatingShapes";
const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
        backgroundImage: `url(${heroBg})`
      }} />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      {/* 3D Floating Elements */}
      <FloatingShapes />

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-6">
          <motion.h1 className="text-6xl md:text-8xl font-bold tracking-tight" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Noémie Pernin
            </span>
          </motion.h1>

          <motion.p className="text-2xl md:text-3xl text-muted-foreground font-medium" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.4
        }}>Game Developer &amp; AI Engineer To be</motion.p>

          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.6
        }}>
            Étudiante ingénieure en dernière année à l'ESME Sudria, spécialisée en IA et passionnée développement de jeux vidéo
          </motion.p>

          <motion.div className="flex gap-4 justify-center items-center flex-wrap" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8
        }}>
            <Button size="lg" className="bg-gradient-primary shadow-primary hover:shadow-glow transition-all duration-300 hover:scale-105" onClick={scrollToProjects}>
              Voir mes projets
            </Button>
            
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110" asChild>
                <a href="mailto:noemie.pernin@esme.fr">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div className="pt-12" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1,
          duration: 1
        }}>
            <ArrowDown className="mx-auto h-8 w-8 text-primary animate-float" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;
