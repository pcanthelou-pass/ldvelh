# README

## Le projet

Je cherche à écrire des histoires interactives en utilisant les règles simples des Livres dont Vous Êtes le Héro.

MISTRAL : <https://chat.mistral.ai/chat/6686cf8a-3088-4ea4-b4d1-e87d7501805d>

Voir la doc :

- [Principes de la doc](docs/README.md)
- [Utilisation de github](docs/github.md)
- [L'environnement de React Native](docs/react-native-env.md)
- [L'architecture](docs/architecture.md)


![Journey](./docs/journey.png)

## Structure générale du projet

La base de code est une application **React Native** construite avec Expo. Elle
a pour objectif de créer des "livres dont vous êtes le héros" et fournit déjà
un exemple complet d'aventure. Voici les principaux répertoires :

```
assets/        → ressources (images, livres JSON…)
src/
  app/         → pages gérées par expo-router
  core/        → cœur applicatif (stores Zustand, hooks, API…)
  navigation/  → hooks de navigation
  screens/     → composants d'écran (feature-sliced)
  shared/      → UI réutilisables, helpers, services
docs/          → documentation générale
```

Les actions de jeu sont encapsulées dans des hooks (par exemple `useFight` pour
les combats) et l'état est géré par des stores Zustand accessibles via des
hooks (`useGameStore`, `useUserStore`). Les services comme `AlertService` sont
fournis via le `ServicesProvider`.

Les pages d'Expo Router dans `src/app` importent les écrans de `src/screens`.
Pour apprendre, explorez également le livre de test `TEST_BOOK.tsx` et le héros
prégénéré `TEST_HERO.tsx` dans `src/shared/helpers`.

## Version #1

### L'utilisateur choisit une histoire

- Sélection de l'histoire X
  - Sélectionner une seule histoire = juste un bouton entrer X

### L'utilisateur créé son personnage

- Créer un personnage X
  - Le personnage est déjà pré-tiré = afficher juste le personnage X
  - Les caractéristiques sont aléatoires X

### L'utilisateur démarre l'histoire

- Lecture de l'introduction X
  - Ecran d'introduction (on va directe ensuite à la première scène) X

### L'utilisateur fait l'histoire

- Lecture de la scène X

  - Ecran de la scène (tiré d'un fichier xml ou json) X

- Résoudre un combat

  - ​ Affichage des caractéristiques de l'adversaire X

  - ​ Résolution au tour par tour des jets de dés X

  - ​ Afficher les niveaux vie/chance du personnage X

  - ​ Le personnage meurt -> Ecran de mort X

  - ​ Le personnage sort vainceur X

- ​ Utiliser un objet X

  - Boire une potion d'endurance X

- Sélection de la prochaine scène X
  - L'utilisateur sélectionne son choix X

### L'utilisateur termine l'histoire

- Le personnage est en vie et a remplit l'objectif X

  - Ecran de fin positif X

- OU Le personnage est en vie et n'a pas remplit l'objectif X

  - Ecran de fin négatif X

- OU Le personnage est en mort
  - Ecran de mort X

### L'utilisateur ferme le livre

- Retourner à l'accueil X
  - Arrivée directe à l'accueil X

## Tests et intégration continue

Exécutez `yarn lint` pour vérifier le style du code et `yarn test:final` pour lancer l'ensemble de la suite de tests. La configuration `.github/workflows/ci.yml` exécute automatiquement ces commandes à chaque push.
