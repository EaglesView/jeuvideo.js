# Projet final Web2JS
Projet Final de Web2JS Par Jean-Marc Bouchard.

## Introduction
Ce projet final consiste à créer un jeu top down inspiré de diablo. Le projet doit inclure des informations météo alors j'incluerai ces détails également.

## Structure du projet
Pour la structure du projet, j'ai choisi de séparer les éléments de cette facon:
### assets
tout les sprites, images, fichiers audio, typographie et autre contenu média se trouve dans assets.
### css
contient le css du body. (padding 0)
### data
contient le data du jeu. des fichiers json qui déterminent les valeurs des ennemies, et qui permettra de faire des objets dynamiques par la suite.
### scripts
contient tout les scripts
#### core
contient les scripts du framework. Lorsqu'on batit un jeu, on ne devrais pas toucher a ces fichiers.
#### entities
Contient les classes de jeu. Ils sont normalement comportés d'un personnage principal, d'ennemis ainsi que d'items autant statiques que dynamiques/interactifs.
#### systems
Contient les librairies d'animation, d'effets et d'éléments ui en jeu. **Plus de détails seront ajoutés lorsque je serai rendu la**
## Notes importantes

- La div de jeu possede l'id "game-frame".
- Tout les autres div containers ont "nom-container" comme nomenclature

## échéanciers et fonctionnalités à ajouter
- Ajout d'animations de base
- Ajout d'animations de sprites
- Ajout de chargement et déchargement d'objet
- Ajout de déchargement d'objet en gardant leur positions (offloading)
- Ajout de composantes ui (boutons, checkbox, slider)
- Ajout de gestion d'input
