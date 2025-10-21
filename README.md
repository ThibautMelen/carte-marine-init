# Carte Marine - Site Web

Site web interactif pour l'apprentissage de la navigation marine et des cartes marines.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Production

### Build

```bash
npm run build
```

Le build sera généré dans le dossier `dist/`.

### Preview

Pour prévisualiser le build de production localement :

```bash
npm run preview
```

## Technologies Utilisées

- **React 18** - Framework UI
- **Vite** - Build tool moderne et rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Leaflet** - Cartes interactives
- **GSAP** - Animations
- **Framer Motion** - Animations React
- **Lucide React** - Icônes
- **React Hook Form** - Gestion des formulaires
- **React Helmet Async** - SEO metadata

## Structure du Projet

```
src/
├── components/      # Composants React
│   ├── pages/      # Pages complètes
│   ├── sections/   # Sections de page
│   └── ui/         # Composants UI réutilisables
├── data/           # Données statiques
├── styles/         # Styles CSS
└── utils/          # Utilitaires
```

## Déploiement

Le site peut être déployé sur n'importe quelle plateforme supportant les sites statiques :
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Variables d'Environnement

Créez un fichier `.env.production` avec :

```
NODE_ENV=production
VITE_APP_NAME="Carte Marine"
VITE_APP_URL=https://votre-domaine.com
```

## License

Tous droits réservés.
