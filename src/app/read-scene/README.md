# V1

## Lecture de la scène V1.1

- Ecran de la scène (tiré d'un fichier xml ou json)

### Sélection de la prochaine scène

- L'utilisateur sélectionne son choix parmi ceux offerts sous forme de boutons avec un texte sous forme de question...
  - utiliser une potion d'endurance
    - applique l'effet de la potion à savoir PE = PE Initiaux

On considère qu'une scène a n-sorties possibles qui produisent une seule trame d'histoire, c'est donc un arbre.

```json
"scenes": {
  "1":{
    "title":"Scène #1",
    "text":"Texte de la scène #1",
    "next":{
      "1-1":{
        "title":"Scène #2",
        "text":"Texte de la scène #2",
        "next":{
          "2-1":{
            "title":"Scène #3",
            "text":"Texte de la scène #3",
            "next":{
              "1-2":{
                "title":"Scène #2",
                "text":"Texte de la scène #1",
                "next":"end"
            }

            }
        }
      "1-2":{
        "title":"Scène #2",
        "text":"Texte de la scène #1",
        "next":"end"
    }
  }
}
```

## Lecture de la scène V1.2

### Sélection de la prochaine scène

- Débloqué si plus de contraintes ou d'actions libres (plus de combat)
  - Si combat alors on a le texte puis un bouton "Combattre" et on entre dans l'écran de combat

### Résoudre un combat

- ​ Afficher les niveaux vie/chance du personnage
- ​ Affichage des caractéristiques de l'adversaire
  - Nom, Endurance et Agilité
- ​ Résolution au tour par tour des jets de dés
  - l'adversaire 2D6 + Agilité = A
  - le héro 2D6 + Agilité = H
    - A == H -> nouveau tour
    - A > H -> le héro perd 2 points d'endurance
      - si H-PE == 0 -> bouton "le personnage meurt" -> scène de mort
    - A < H -> l'adversaire perd 2 points d'endurance
      - ​ si A-PE ==0 l'adversaire meurt -> bouton "le personnage survie" -> revient à l'écran de scène et on débloque les actions d'objets et les choix pour poursuivre la lecture
