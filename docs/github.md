# Créer et configurer le repo github

L'objectif est d'avoir un repository configurer pour un environnement git :

- de type trunk based development.
- incluant le suivi de ticket kanban, avec un modèle de ticket assez classique.
- en protégeant la branche main afin de forcer les PR (pull request).
- avec un modèle de PR assez classique

## Justification du type de repo

| Modèle      | Avantages                                                                                                                                                                                                                                            | Inconvénients                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Git Flow    | Une structure de branches bien définie (main, develop, feature, release, hotfix) orienté suivi de versions et optimisé pour organiser les fonctionnalités et les versions. Travailler sur plusieurs fonctionnalités en parallèle sans interférence.  | Complexe pour un projet personnel avec un seul développeur et peut être ralentit par la gestion des merges de branches |
| Trunk Based | Utilise une seule branche principale (main ou trunk) où tout le développement est intégré fréquemment donc moins de gestion de branches et de merges, et les modifications sont intégrées rapidement, permettant un retour d'expérience plus rapide. | Demande un sécurité plus importante (tests)                                                                            |

## Création du repository

Cela se fait directement dans le repo après avoir créé un compte si vous n'en avez pas.

## Paramétrage du repository

### Protection de la branche main

- Allez jusqu'au menu **Branch protection rules** et ajoutez une règle.
- Configurer là comme suit :
  - Dans **Branch name pattern**, entrez `main`.
  - Sous **Require pull request reviews before merging**, entrez `1` pour vous assurer une révision de vos propres modifications.
  - Sous **Require status checks to pass before merging**, vous pourrez plus tard configurer des vérifications de statut, comme les tests RNTL + Lint + Sonar, qui doivent réussir avant de permettre la fusion.
- Enregistrer les modifications

## Création des templates

Settings > Issues > Issue templates > Use a template chooser

### Epics

Une Epic est un objectif stratégique à long terme qui regroupe plusieurs user stories et tâches techniques pour atteindre une amélioration significative ou une nouvelle fonctionnalité majeure dans le produit.

Utilisez des labels pour catégoriser les issues et établir des relations implicites. Par exemple, vous pouvez utiliser un label epic:authentication pour toutes les issues liées à une épopée d'authentification.

Les Milestones peuvent être utilisés pour regrouper des issues liées à un même objectif ou une même version.

Ex. Cette Epic vise à permettre aux utilisateurs de créer et consulter un agenda culturel personnalisé en fonction de leurs préférences. Ils pourront ainsi découvrir, sélectionner, et suivre les événements culturels locaux et recevoir des rappels pour les événements sélectionnés.

### User stories

Une User Story est une description concise d'une fonctionnalité ou d'un besoin du point de vue de l'utilisateur, décrivant ce qu'il veut accomplir et pourquoi, et regroupant les tâches techniques nécessaires pour la réaliser.

Utilisez des labels pour catégoriser les user stories et les relier à des epics ou des fonctionnalités spécifiques (par exemple, feature:login)

Regroupez les user stories dans des milestones pour suivre leur progression vers un objectif commun ou une version spécifique.

Ex. En tant qu’utilisateur, je souhaite consulter un agenda personnalisé pour découvrir les événements culturels proches de moi.

### Tâches techniques

Une Tâche Technique est une unité de travail spécifique nécessaire pour implémenter une fonctionnalité ou corriger un bug, souvent liée à une ou plusieurs user stories, et doit inclure des critères d'acceptation clairs.

Utilisez des labels pour indiquer le type de tâche (par exemple, bug, feature) et la relier à une user story ou une epic (par exemple, related:user-story).

Liez les tâches techniques à des pull requests pour suivre les modifications de code associées et assurer la révision.

E. [Feature] Implémenter le composant de profil utilisateur

### Bugs

### Les tâches isolées (nons liées à une US)

- **Maintenance et Refactoring** : Ces tâches sont souvent nécessaires pour maintenir la qualité du code et la stabilité du projet, même si elles n'ajoutent pas de nouvelles fonctionnalités visibles pour l'utilisateur.
- **Améliorations de l'Infrastructure** : Ces tâches soutiennent le développement et le déploiement, mais ne sont pas directement liées à des fonctionnalités utilisateur.
- **Résolution de Dette Technique** : Réduire la dette technique améliore la maintenabilité du code à long terme.

Créez des labels spécifiques pour ces types de tâches (par exemple, maintenance, refactoring, infrastructure).

Même si une tâche technique n'est pas liée à une user story, elle peut être liée à une epic ou à un milestone. Par exemple, une epic "Amélioration des performances" peut inclure plusieurs tâches techniques de refactoring ou d'optimisation.

Dans la description de la tâche, expliquez clairement son objectif et comment elle s'inscrit dans le projet global. Utilisez des références croisées pour lier la tâche à d'autres issues ou epics pertinentes.

Ex. [Task] Mettre à jour les dépendances du projet

### Pour les PR

Commencez le titre par un verbe à l'impératif pour indiquer l'action réalisée par la PR.

Le titre doit être court (généralement entre 50 et 70 caractères) tout en décrivant clairement le but de la PR.
Évitez les détails techniques superflus dans le titre.

Utilisez des préfixes pour indiquer le type de changement apporté par la PR :

- feat: pour une nouvelle fonctionnalité.
- fix: pour une correction de bug.
- chore: pour des tâches de maintenance.
- docs: pour des modifications de documentation.
- style: pour des changements de style ou de formatage.
- refactor: pour une réécriture de code.
- test: pour ajouter ou modifier des tests.

Si la PR est liée à une issue spécifique, incluez le numéro de l'issue dans le titre.

**Bon Titre :** feat: Add user profile page (#42)
**Mauvais Titre :** Updated some files and fixed a few bugs (trop vague et ne décrit pas clairement les modifications apportées).

## Conventions de nommage

### Les Conventional Commits

Les **Conventional Commits** sont une convention de messages de commit qui fournit une structure claire et cohérente pour les messages de commit. Cette convention est particulièrement utile dans le contexte de l'automatisation des processus de version et de génération de changelogs, comme avec Semantic Release. Voici comment cela peut s'appliquer à votre projet personnel :

#### Structure des Conventional Commits

Un message de commit suivant la convention Conventional Commits se compose de trois parties principales :

1. **Type** : Un mot court qui décrit la nature du changement. Les types courants incluent :

   - `feat` : Nouvelle fonctionnalité.
   - `fix` : Correction de bug.
   - `docs` : Modification de la documentation.
   - `style` : Changements de style ou de formatage (sans impact sur le code).
   - `refactor` : Réécriture de code (sans ajout de fonctionnalité ni correction de bug).
   - `perf` : Améliorations de performance.
   - `test` : Ajout ou modification de tests.
   - `chore` : Tâches de maintenance ou de configuration.

2. **Sujet** : Une description concise de la modification, écrit à l'impératif.

3. **Corps (optionnel)** : Une description plus détaillée qui explique le contexte du changement et ses implications.

4. **Pied (optionnel)** : Informations supplémentaires comme les références aux issues fermées (par exemple, `Fixes #123`).

#### Exemple de Commit

```text
feat: add user authentication

Introduce a new authentication system allowing users to log in securely.

Closes #42
```

#### Intégration avec Semantic Release

Lorsque vous utilisez Semantic Release, les Conventional Commits permettent à l'outil de déterminer automatiquement le type de version à incrémenter (patch, minor, major) en fonction du type de commit.

Par exemple :

- `fix:` incrémente la version patch.
- `feat:` incrémente la version mineure.
- `BREAKING CHANGE:` dans le pied d'un commit incrémente la version majeure.

###### **Configurer Semantic Release :**

- Assurez-vous que votre configuration Semantic Release est prête à analyser ces commits pour générer des versions et des changelogs.
- **Automatiser avec GitHub Actions** : Configurez une action GitHub pour exécuter Semantic Release à chaque push sur la branche principale.

En adoptant les Conventional Commits, vous pouvez améliorer la gestion de votre projet personnel, rendre vos journaux de commit plus informatifs, et faciliter l'automatisation des processus de version.

## Les branches

feature/verbe-action-de-la-fonctionnalite

bugfix/verbe-correction-du-bug

experiment/description-experimentale

hotfix/description-urgente
