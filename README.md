# Portfolio de Noémie Pernin

Portfolio professionnel axé jeux vidéo avec animations 3D et design moderne.

**URL du projet**: https://lovable.dev/projects/759a9f77-6703-4df6-bcf5-38ca37c05283

---

## 🎨 Comment personnaliser votre portfolio

### 📝 Modifier les textes

#### Section Hero (page d'accueil)
Fichier : `src/components/Hero.tsx`
```tsx
<h1>Noémie Pernin</h1>  // Changez votre nom
<p>Développeuse & Game Developer</p>  // Changez votre titre
<p>Étudiante ingénieure...</p>  // Changez votre description
```

#### Section À propos
Fichier : `src/components/About.tsx`
```tsx
// Modifiez les paragraphes dans les deux cards
<p>Étudiante en dernière année...</p>
<p>Passionnée par les jeux vidéo...</p>
<p>J'ai eu la chance d'effectuer...</p>
```

#### Section Compétences
Fichier : `src/components/Skills.tsx`
```tsx
const skills = [
  {
    category: "Nom de la catégorie",
    items: ["Compétence 1", "Compétence 2", ...]
  }
];
```

---

### 🎮 Modifier les projets

Fichier : `src/components/Projects.tsx`

#### Ajouter/Modifier un projet
```tsx
const projects = [
  {
    title: "Titre du projet",
    description: "Description courte (affichée sur la card)",
    detailedDescription: "Description longue et détaillée pour la popup.\n\nVous pouvez faire des paragraphes.",
    image: nomDeLImage,  // ou null si pas d'image
    tags: ["Unity", "C#", "3D"],
    videoUrl: "LIEN_YOUTUBE_OU_AUTRE",  // Laissez "" si pas de vidéo
    githubLink: "https://github.com/votre-repo",
    highlight: true  // Pour mettre en avant le projet (bordure spéciale)
  }
];
```

#### Ajouter une image de projet
1. Placez votre image dans le dossier `src/assets/`
2. Importez-la en haut du fichier :
```tsx
import monImage from "@/assets/mon-image.jpg";
```
3. Utilisez-la dans votre projet :
```tsx
image: monImage,
```

#### Ajouter une vidéo
Dans la popup, la vidéo sera affichée automatiquement si vous ajoutez un lien YouTube :
```tsx
videoUrl: "https://www.youtube.com/watch?v=VOTRE_ID",
```

**Formats de vidéo supportés** :
- YouTube : `https://www.youtube.com/watch?v=ID` ou `https://youtu.be/ID`
- Autre : ajoutez le lien direct vers votre vidéo

#### Supprimer un projet
Supprimez simplement l'objet correspondant du tableau `projects`.

#### Réorganiser les projets
Changez l'ordre des objets dans le tableau `projects`. Le premier projet sera affiché en premier dans le carousel.

---

### 📧 Modifier les liens de contact

Fichier : `src/components/Contact.tsx`

```tsx
// GitHub
href="https://github.com/votre-username"

// LinkedIn
href="https://www.linkedin.com/in/votre-profil"

// Email
href="mailto:votre.email@example.com"
```

---

### 🎯 Modifier les centres d'intérêt

Fichier : `src/components/Contact.tsx`
```tsx
const interests = [
  { icon: Gamepad2, label: "Jeux Vidéo" },
  { icon: Music, label: "Musique Électronique" },
  // Ajoutez vos centres d'intérêt ici
];
```

**Icônes disponibles** : Consultez [Lucide Icons](https://lucide.dev/icons/) et importez-les :
```tsx
import { NomIcon } from "lucide-react";
```

---

### 🎨 Changer les couleurs

Fichier : `src/index.css`

Modifiez les variables de couleurs en format HSL :
```css
:root {
  --primary: 262 83% 58%;        /* Violet principal */
  --secondary: 185 62% 45%;      /* Cyan */
  --accent: 328 86% 70%;         /* Rose */
}
```

[Convertisseur HSL](https://www.colorhexa.com/) pour trouver vos couleurs.

---

## 🚀 Déployer sur GitHub Pages

1. **Connecter GitHub** : Cliquez sur le bouton GitHub en haut à droite de Lovable
2. **Publier** : Cliquez sur "Publish" en haut à droite
3. **GitHub Pages** :
   - Allez dans Settings > Pages de votre repo GitHub
   - Source : Deploy from a branch
   - Branch : `main` / `root`
   - Sauvegardez

Votre site sera disponible à : `https://votre-username.github.io/nom-du-repo`

---

## 💻 Développement local

```sh
# Cloner le projet
git clone <VOTRE_URL_GIT>

# Installer les dépendances
npm install

# Lancer en local
npm run dev
```

---

## 🛠️ Technologies utilisées

- **React** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Three.js** (éléments 3D)
- **shadcn/ui** (composants UI)

---

## 📱 Support

Pour toute question, consultez la [documentation Lovable](https://docs.lovable.dev/) ou rejoignez le [Discord Lovable](https://discord.com/channels/1119885301872070706/1280461670979993613).
