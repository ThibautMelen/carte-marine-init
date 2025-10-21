# Images UGC - Galerie Utilisateurs

## 📁 Structure des fichiers

Placez les 8 images UGC dans ce dossier avec les noms suivants :

- `ugc-1.jpg` - Mouillage paradisiaque en Bretagne
- `ugc-2.jpg` - Coucher de soleil sur la Méditerranée  
- `ugc-3.jpg` - Calanques de Bonifacio
- `ugc-4.jpg` - Port de La Rochelle au petit matin
- `ugc-5.jpg` - Traversée de la Manche
- `ugc-6.jpg` - Lagons polynésiens
- `ugc-7.jpg` - Phare d'Ouessant
- `ugc-8.jpg` - Mouillage sauvage en Corse

## 📐 Spécifications

- **Format** : JPG
- **Ratio** : 4:3 (800x600px minimum)
- **Qualité** : Haute résolution, photoréaliste
- **Style** : Instagram-worthy, professionnel, maritime

## 🔧 Fonctionnalités du code

- **Lazy loading** : Les images se chargent quand elles entrent dans le viewport
- **Fallback** : Si une image ne se charge pas, affiche un gradient coloré avec emoji
- **Hover effect** : Zoom léger au survol (scale-105)
- **Overlay** : Texte descriptif qui apparaît au survol
- **Responsive** : Grille adaptative (2 colonnes mobile, 4 colonnes desktop)

## 🎨 Couleurs de fallback

Chaque région a sa couleur de fallback :
- Bretagne : 🏴󠁧󠁢󠁥󠁮󠁧󠁿 (gradient maritime-sky vers maritime-azure)
- Méditerranée : 🌊 (gradient maritime-sky vers maritime-azure)
- Corse : 🏝️ (gradient maritime-sky vers maritime-azure)
- Atlantique : 🌊 (gradient maritime-sky vers maritime-azure)
- Manche : 🌊 (gradient maritime-sky vers maritime-azure)
- Polynésie : 🏝️ (gradient maritime-sky vers maritime-azure)

## ✅ Test

Une fois les images ajoutées, testez :
1. Le chargement des images dans la galerie
2. L'effet hover avec le texte qui apparaît
3. Le fallback si une image ne se charge pas
4. La responsivité sur mobile et desktop
