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

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Card className="p-8 bg-background shadow-glow">
              <img 
                src={profileCutout} 
                alt="Noémie Pernin" 
                className="w-80 h-auto object-contain rounded-2xl"
              />
            </Card>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 shadow-primary hover:shadow-glow transition-all duration-300 backdrop-blur-sm bg-card/80">
              <h3 className="text-2xl font-bold mb-4 text-primary">Qui suis-je ?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Étudiante en dernière année à l'<strong>ESME Sudria</strong> (3ème au classement 2025 des écoles d'ingénieurs généralistes post-bac), 
                je suis spécialisée en <strong>Intelligence Artificielle</strong> avec un parcours centré sur l'innovation et la programmation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Passionnée par les <strong>jeux vidéo</strong> et le développement (site internet, application web et mobiles...), j'aime concevoir et explorer des solutions innovantes 
                en faisant jouer ma créativité. Curieuse et motivée, je cherche à allier <strong>créativité</strong> et <strong>technique</strong> dans mes projets.
              </p>
            </Card>

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
