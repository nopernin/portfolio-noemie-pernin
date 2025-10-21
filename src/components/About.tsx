import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import profileCutout from "@/assets/profile-cutout.png";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              À propos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Passionnée par la création et l'innovation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Image with Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-32"
          >
            <div className="relative w-full">
              {/* Profile image positioned above the card */}
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-40 animate-glow-pulse" />
                  <img 
                    src={profileCutout} 
                    alt="Noémie Pernin" 
                    className="relative w-56 h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              <Card className="pt-16 p-6 shadow-primary hover:shadow-glow transition-all duration-300 backdrop-blur-sm bg-card/80 relative">
                <h3 className="text-2xl font-bold mb-4 text-primary">Qui suis-je ?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Étudiante en dernière année à l'<strong>ESME Sudria</strong> (3ème au classement 2025 des écoles d'ingénieurs généralistes post-bac), 
                  je suis spécialisée en <strong>Intelligence Artificielle</strong> avec un parcours centré sur l'innovation et l'international.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Passionnée par les <strong>jeux vidéo</strong> et les nouvelles technologies, j'aime concevoir et explorer des solutions innovantes 
                  à travers le développement. Curieuse et motivée, je cherche à allier <strong>créativité</strong> et <strong>technique</strong> dans mes projets.
                </p>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 mt-32"
          >
            <Card className="p-6 shadow-accent hover:shadow-glow transition-all duration-300 backdrop-blur-sm bg-card/80">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Expérience internationale</h3>
              <p className="text-muted-foreground leading-relaxed">
                J'ai eu la chance d'effectuer un semestre à Tokyo au <strong>Shibaura Institute of Technology</strong> (septembre 2024 - février 2025), 
                où j'ai suivi des cours avancés de programmation, traitement d'image et systèmes d'exploitation.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;