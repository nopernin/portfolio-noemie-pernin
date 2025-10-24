import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, FileDown } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "noemie.pernin@esme.fr",
    link: "mailto:noemie.pernin@esme.fr",
    color: "text-primary"
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "06 13 45 18 08",
    link: "tel:+33613451808",
    color: "text-secondary"
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Paris 75011 (mobile)",
    link: null,
    color: "text-accent"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/noémie-pernin-a96408222",
    color: "hover:bg-secondary hover:text-secondary-foreground"
  },
  {
    icon: Github,
    label: "GitHub",
    link: "https://github.com/nopernin",
    color: "hover:bg-foreground hover:text-background"
  }
];

const interests = [
  "🎮 Jeux vidéo",
  "🐴 Équitation",
  "🎹 Piano",
  "🏃‍♀️ Course à pied",
  "🎬 Cinéma",
  "🎵 Musique électronique & Mix"
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
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
              Contact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Restons en contact !</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 shadow-primary hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4 group">
                    <div className={`p-3 rounded-lg bg-muted ${info.color} group-hover:scale-110 transition-transform`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-4">Retrouvez-moi sur</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="lg"
                      className={`flex-1 ${social.color} transition-all duration-300 hover:scale-105`}
                      asChild
                    >
                      <a href={social.link} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5 mr-2" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 shadow-accent hover:shadow-glow transition-all duration-300 backdrop-blur-sm bg-card/80">
              <h3 className="text-2xl font-bold mb-6">Centres d'intérêt</h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="relative group p-4 rounded-lg text-center transition-all duration-300 hover:scale-110 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm border border-primary/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20"
                  >
                    <span className="text-lg font-medium relative z-10">{interest}</span>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">💼 Disponibilité</h3>
              <p className="text-lg leading-relaxed">
                Je recherche un <strong>stage de 5 à 6 mois</strong> à partir du <strong>1er avril 2025</strong> dans 
                les domaines du <strong>jeu vidéo</strong>, du <strong>développement logiciel</strong> ou de l'<strong>intelligence artificielle</strong>.
              </p>
              <div className="flex gap-3 mt-6">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="flex-1 bg-white/20 hover:bg-white/30 text-white border-white/30 transition-all hover:scale-105"
                  asChild
                >
                  <a href="mailto:noemie.pernin@esme.fr">
                    <Mail className="h-5 w-5 mr-2" />
                    Me contacter
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="flex-1 bg-white/20 hover:bg-white/30 text-white border-white/30 transition-all hover:scale-105"
                  asChild
                >
                  <a href="/CV_Noemie_PERNIN.pdf" download>
                    <FileDown className="h-5 w-5 mr-2" />
                    Télécharger CV
                  </a>
                </Button>
              </div>
            </Card>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Contact;