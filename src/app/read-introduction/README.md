# V1

Ecran d'introduction (on va directe ensuite à la première scène)

## Fonctionnel

- Un écran avec le titre "L'histoire"
- Un long texte
- Un bouton "Et maintenant, tournez la page !"

## Technique

- On tire les infos du state book de GameStore
- On les augmente au besoin à leur chargement

```ts
Book {
  title: string
  description: string
  introduction: {
    title: string
    text: string
  }
}
```
