# V1

Le personnage est déjà pré-tiré donc on affiche juste le personnage

## Fonctionnel

- Un écran intitulé "Personnage"
- Les caractéristiques du personnage sont affichées
- Et son équipement aussi, mais juste les clés, ce n'est pas important ici
- L'écran contient juste un bouton "Suivant"

## Technique

- Les caractéristiques du personnage proviennent d'un fichier JSON, c'est plus simple pour former la structure

```JSON
{
  "character": {
    "name": "Le personnage",
    "abilities": {
      "agility": 12,
      "endurance": 24,
      "chance": 12
    },
    "items": {
      "silex": { ... },
      "torch": { ... },
      "gold": { ... },
      "necklace": { ... },
      "water": { ... },
      "ration": { ... }
    }
  }
}
```
