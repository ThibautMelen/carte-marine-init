# Guide d'Intégration des Images Zones Géographiques

## 🎯 **6 Zones Géographiques à Intégrer**

### **Images à Générer :**

1. **Bretagne** → `zone-bretagne.png`
2. **Méditerranée** → `zone-mediterranee.png` 
3. **Atlantique** → `zone-atlantique.png`
4. **Manche** → `zone-manche.png`
5. **Corse** → `zone-corse.png`
6. **DOM-TOM** → `zone-domtom.png`

## 📁 **Structure des Dossiers**

```
public/assets/zones/
├── zone-bretagne.png
├── zone-mediterranee.png
├── zone-atlantique.png
├── zone-manche.png
├── zone-corse.png
├── zone-domtom.png
└── optimized/
    ├── zone-bretagne.jpg
    ├── zone-mediterranee.jpg
    ├── zone-atlantique.jpg
    ├── zone-manche.jpg
    ├── zone-corse.jpg
    └── zone-domtom.jpg
```

## 🎬 **Prompts Détaillés par Zone**

### **1. Bretagne - Côte de Granit Rose**
```
Cinematic aerial shot of the dramatic Brittany coastline with granite rocks and turquoise waters. The image shows a detailed marine chart overlay with navigation symbols, depth markings, and tidal information. Dramatic golden hour lighting illuminates the rugged coastline of Côte de Granit Rose with traditional Breton fishing boats in the foreground. The marine chart shows the complex coastline with islands of Ouessant, Molène, and Sein visible. Shallow depth of field (f/2.8) with bokeh background showing the endless Atlantic horizon. Film grain texture (35mm), cinematic color grading with deep ocean blues (#1e3a8a) and warm golden tones (#f59e0b). Professional maritime documentary cinematography, 800x600px, photorealistic, cinematic photography, dramatic lighting, authentic Breton maritime atmosphere.
```

### **2. Méditerranée - Côte d'Azur**
```
Cinematic wide shot of the French Riviera coastline with crystal clear Mediterranean waters and modern marinas. A detailed marine chart overlay shows navigation routes from Marseille to Corsica with depth markings and port information. The image captures the iconic calanques of Cassis with their dramatic limestone cliffs and turquoise waters. Traditional Mediterranean fishing boats and modern yachts are visible in the foreground. Golden hour lighting creates warm reflections on the water surface. Shallow depth of field (f/2.2) with bokeh background showing the Mediterranean horizon. Film grain texture (35mm), cinematic color grading with Mediterranean blues (#0ea5e9) and warm amber tones (#fbbf24). Professional maritime lifestyle cinematography, 800x600px, photorealistic, cinematic style, dramatic lighting, authentic Mediterranean atmosphere.
```

### **3. Atlantique - La Rochelle à Arcachon**
```
Cinematic dramatic shot of the Atlantic coast from La Rochelle to Arcachon with rolling ocean swells and sandy beaches. A detailed marine chart overlay shows the complex navigation routes with shifting sandbanks and tidal information. The image captures the iconic Fort Boyard in the background with traditional Atlantic fishing boats and modern sailing yachts in the foreground. Dramatic side lighting from the setting sun creates long shadows across the water. Shallow depth of field (f/2.5) with bokeh background showing the endless Atlantic horizon. Film grain texture (35mm), cinematic color grading with deep Atlantic blues (#1e40af) and warm golden tones (#f59e0b). Professional maritime documentary cinematography, 800x600px, photorealistic, cinematic photography, dramatic lighting, authentic Atlantic maritime atmosphere.
```

### **4. Manche - Dunkerque à Cherbourg**
```
Cinematic dramatic shot of the English Channel with intense maritime traffic and dramatic weather conditions. A detailed marine chart overlay shows the busy shipping lanes, tidal currents, and navigation routes from Dunkerque to Cherbourg. The image captures the iconic white cliffs of Dover in the background with large cargo ships and ferries crossing the channel. Dramatic stormy lighting with high contrast shadows and highlights. Shallow depth of field (f/2.8) with bokeh background showing the busy shipping lanes. Film grain texture (35mm), cinematic color grading with stormy grays (#374151) and deep channel blues (#1e3a8a). Professional maritime documentary cinematography, 800x600px, photorealistic, cinematic photography, dramatic lighting, authentic Channel maritime atmosphere.
```

### **5. Corse - Calanques de Bonifacio**
```
Cinematic breathtaking shot of Corsica's dramatic coastline with crystal clear Mediterranean waters and protected natural reserves. A detailed marine chart overlay shows the navigation routes around the island with anchorages and marine reserves. The image captures the iconic calanques of Bonifacio with their dramatic limestone cliffs and turquoise waters. Traditional Corsican fishing boats and luxury yachts are visible in the foreground. Golden hour lighting creates warm reflections on the pristine waters. Shallow depth of field (f/2.2) with bokeh background showing the Mediterranean horizon. Film grain texture (35mm), cinematic color grading with Mediterranean blues (#0ea5e9) and warm golden tones (#fbbf24). Professional maritime lifestyle cinematography, 800x600px, photorealistic, cinematic style, dramatic lighting, authentic Corsican maritime atmosphere.
```

### **6. DOM-TOM - Lagons Tropiques**
```
Cinematic tropical paradise shot of French overseas territories with crystal clear turquoise waters and coral reefs. A detailed marine chart overlay shows navigation routes through the Caribbean, Indian Ocean, and Pacific with tropical anchorages and marine reserves. The image captures the iconic tropical lagoons with palm-fringed beaches and traditional outrigger canoes. Luxury yachts and traditional fishing boats are visible in the foreground. Golden hour lighting creates warm tropical reflections on the pristine waters. Shallow depth of field (f/2.2) with bokeh background showing the tropical horizon. Film grain texture (35mm), cinematic color grading with tropical blues (#0ea5e9) and warm golden tones (#fbbf24). Professional maritime lifestyle cinematography, 800x600px, photorealistic, cinematic style, dramatic lighting, authentic tropical maritime atmosphere.
```

## 🔧 **Scripts d'Optimisation**

### **Optimisation des Images :**
```bash
npm run optimize-zones
```

### **Script d'Optimisation :**
- **Format** : PNG → JPG (90% qualité)
- **Dimensions** : 800x600px (4:3)
- **Compression** : Sharp avec optimisations avancées
- **Dossier** : `public/assets/zones/optimized/`

## 📊 **Métadonnées SEO**

### **Alt Text par Zone :**
- **Bretagne** : "Côte bretonne dramatique avec rochers de granit rose et eaux turquoise, carte marine en overlay"
- **Méditerranée** : "Côte méditerranéenne française avec carte marine en overlay des routes de navigation"
- **Atlantique** : "Côte atlantique française avec carte marine en overlay des zones de navigation"
- **Manche** : "Manche avec trafic maritime intense et carte marine en overlay des routes de navigation"
- **Corse** : "Côte corse avec calanques et carte marine en overlay des zones protégées"
- **DOM-TOM** : "Lagons tropiques français avec carte marine en overlay des routes de navigation"

### **Schema.org Integration :**
Les images des zones seront automatiquement incluses dans le sitemap-images.xml existant.

## ✅ **Checklist d'Intégration**

- [ ] **6 images** générées avec les prompts détaillés
- [ ] **Images placées** dans `public/assets/zones/`
- [ ] **Optimisation** exécutée avec `npm run optimize-zones`
- [ ] **Alt text** vérifié dans `src/data/zones.js`
- [ ] **ZoneCard** utilise les vraies images avec fallback
- [ ] **Build** réussi sans erreurs
- [ ] **Images** chargent correctement avec SEO

## 🎯 **Résultat Final**

Des images de zones géographiques qui ressemblent à des **documentaires maritimes hollywoodiens** avec :
- Paysages côtiers spectaculaires et authentiques
- Cartes marines en overlay pour l'aspect technique
- Éclairage dramatique et professionnel
- Composition cinématographique parfaite
- Palette de couleurs maritime cohérente par zone
- Ambiance maritime ultra-réaliste et immersive

**Prêt pour des images de zones dignes d'un documentaire maritime !** 🎬⚓🌊
