# Evolution de l'architecture

## 🏛 Architecture et principes à respecter

### 1️⃣ Vision globale

#### L’architecture doit notamment

- ✅ Être modulaire et scalable
- ✅ Séparer l’affichage, la logique métier et la gestion d’état
- ✅ Minimiser les dépendances entre les modules
- ✅ Utiliser TypeScript pour garantir la sécurité et la maintenabilité du code

#### Organisation des responsabilités

| Principe SOLID | Signification | Implémentation en React Native |
|:-:|---|---|
| SRP (Single Responsibility Principle) | Un composant, un hook ou un store Zustand ne doit avoir qu’une seule raison de changer. | Séparer les composants UI, hooks métiers et stores Zustand |
| OCP (Open/Closed Principle)|Le code doit être ouvert à l’extension mais fermé à la modification.| Rendre les composants extensibles sans modification (ex: via des props, children, render props). Utiliser des Context Providers pour injecter des dépendances, permettant de modifier les implémentations sans toucher au code métier, utiliser un service provider. |
|LSP (Liskov Substitution Principle)|Les sous-types doivent pouvoir être remplacés par leurs super-types sans altérer le fonctionnement.| Garantir que les composants/hocs/hooks restent interchangeables via interfaces TypeScript. Tous les services injectés via un Context doivent respecter une interface TypeScript claire|
|ISP (Interface Segregation Principle)|Préférer plusieurs interfaces spécifiques à une unique interface trop large.| Préférer plusieurs types ciblés plutôt qu’une seule grande interface. Ne pas imposer trop de responsabilités aux composants → Penser à la composition |
|DIP (Dependency Inversion Principle)|Les modules de haut niveau ne doivent pas dépendre des modules de bas niveau.| Utiliser les Contexts comme couche d’abstraction pour injecter Zustand (par exemple) ou d’autres services |

### 2️⃣ Principes à respecter au quotidien

- ✅ **Colocation** : Mettre ensemble les éléments fortement liés pour limiter la charge cognitive
- ✅ **Feature-Sliced Design** : Structurer le projet par fonctionnalités et non par type de fichier
- ✅ **Responsabilité unique** : Chaque fichier doit avoir un rôle clair
- ✅ **Séparation des responsabilités (SRP)** : UI, logique métier, gestion d’état
- ✅ **Simplicité** : Zustand pour toute gestion d’état (global et local - pour composants complexes sinon prendre hooks -), React Query pour les données distantes : cache, revalidation et synchronisation serveur, Un service provider injecté qui facilitera les tests
- ✅ **Extensibilité** : Penser à des interfaces génériques TypeScript, et au services providers
- ✅ **Découplage** : Contexts comme couche d’injection de dépendance, pas pour la gestion d’état
- ✅ **Sécurité** : TypeScript pour un typage strict et une meilleure maintenabilité
- ✅ **Accessibilité** : Respecter les normes d’accessibilité (a11y) dans chaque composant et fonction
- ✅ **Surveillance des performances** : Utiliser des outils comme React Query, Firebase Performance Monitoring, et React Native Performance Monitor pour suivre les performances et optimiser les appels API, le rendu des composants et les temps de chargement
- ✅ **Tests** : Écrire des tests unitaires et d’intégration pour valider le comportement des composants, de la gestion d’état, et des appels API (en utilisant des outils comme Jest et React Testing Library)

## 🏗 Architecture technique basée sur ces principes

![mermaid-diagram-2025-05-08-183027](./mermaid-diagram-2025-05-08-183027.png)

### 1️⃣ UI : Composants de Présentation

- **Responsabilité** : Purement visuels, sans état global
- **Colocation** : Styles et tests dans le même dossier
- Exemple :

```js
// /shared/ui/Button.tsx
export const Button = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
);
```

### 2️⃣ Logique métier : Hooks personnalisés

- **Responsabilité** : Encapsuler la logique métier et les appels API qui passent par RQuery
- **Colocation** : Dans hooks/ avec tests associés
- Exemple avec TypeScript et API :

```js
// /features/items/hooks.ts
import { useState } from "react";
import { useItemsStore } from "./store";

export const useItems = () => {
  const [items, whatever...] = useItemsStore<Favorite | null>(null);

  const add = async (offer: Offer) => {
    // do something with Items store
    // persist it
  };

  return { add, items };
};
```

### 3️⃣ Gestion d’état : Zustand

Toute la gestion d’état passe par Zustand, même pour l’état local.

- **Responsabilité** : Stocker et gérer l’état global sans complexité inutile
- **Colocation** : Regrouper dans store/
- **Raison** : Cela évite le problème du re-render excessif des Contexts et permet une meilleure scalabilité.
- **Utilisation typique** : On crée un store par domaine fonctionnel (useAuthStore, useCartStore, useUserPreferencesStore).
- Exemple :

```js
// /features/items/store.ts
import { create } from "zustand";

interface ItemsState {
  items: Favorite[] | null;
  addFavorite: (fav: Favorite) => void;
}

export const useItemsStore = create<ItemsState>((set) => ({
  items: null,
  addFavorite: (favorite) => set([items, ...favorite]),
}));
```

### 4️⃣ Communication & contexte : Context API

Les Contexts ne stockent pas d’état, ils fournissent les services et les hooks Zustand aux composants.

- **Responsabilité** : Partager des états transversaux sans prop drilling
- **Colocation** : Dans context/ pour des données partagées globalement
- **Raison** : Cela permet de remplacer une implémentation par une autre (ex: changer le service d’API pour du mock en tests).
- **Utilisation typique** : Authentification, Thème, Permissions
- Exemple :

```js
// /shared/services/notifications/useNotification.ts

// Template ou exemple
interface INotificationService {
  // whatever
  notify(mesg: string): void
}

const NotificationContext = createContext<INotificationService | null>(null);

export const NotificationProvider = ({ children, injectedService }: { children: ReactNode, injectedService : INotificationService }) => {
  return <NotificationContext.Provider value={injectedService}>{children}</NotificationContext.Provider>;
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("useNotification must be used within an NotificationProvider");
  return context;
};
  
// And in NativeNotifications.ts
import {Notifications} from 'react-native-notifications';
const NativeLocaleNotificationService:INotificationService = () => ({
  notify: (mesg:string) => {
    Notifications.postLocalNotification({
    body: mesg,
    title: "Local Notification Title",
    sound: "chime.aiff",
    silent: false,
    category: "SOME_CATEGORY",
    userInfo: { },
    fireDate: new Date(),
});
  }
})

  // And in MockNotifications.ts
const MockLocaleNotificationService:INotificationService = () => ({
  notify: (mesg:string) => {
    console.log(mesg)
});
  }
})

// with a Core
const Core = ({services, children}) => 
...
  <NotificationProvider injectedService={services.notification}>
    ...
      {children}
    ...
  </NotificationProvider>
...
</Core>
  
const services = {
  notification: NativeLocaleNotificationService()
}
OU
const services = {
  notification: MockLocaleNotificationService()
}

<Core services={services}>...</core>

├── App.tsx ou WrapperTests # le module de démarrage construit des services et les injectes dans Core.tsx
│   ⊂ services = array of services
│   => (<Core servcices={services}>

```

### 5️⃣ Gestion des données distantes : React Query

- **Responsabilité** : Récupérer, cacher et synchroniser les données serveur
- **Colocation** : Placé dans services/query/ ou dans chaque feature (features/maFeature/api.ts)
- **Utilisation typique** : Appels API, données persistantes, synchronisation en arrière-plan
- Exemple :

```ts
// /features/books/hooks.ts

import { useQuery } from '@tanstack/react-query';  
import { fetchBooks } from '../api';  

export const useBooks = () => {  
  return useQuery({  
    queryFn: () => fetchBooks(),  
    staleTime: 1000 * 60 * 5, // 5 minutes  
    cacheTime: 1000 * 60 * 10, // 10 minutes  
  });  
};
```

![mermaid-diagram-2025-05-08-183009](./mermaid-diagram-2025-05-08-183009.png)

### 6️⃣ Sécurité & Robustesse : TypeScript

- **Objectifs** :
  - Éviter les erreurs grâce à des types stricts
  - Appliquer le LSP via des interfaces interchangeables
- Exemple d’interface :

```ts
// Les types /features/items/types.ts

interface ItemType {
  doOnChance: () => void;
  doOnEndurance: () => void;
  ...
}

interface Item {
  id: string;
  quantity: number;
  type: ItemType;
  name: string;
  description: string;
  ...
}
```

### 7️⃣ Feature-Sliced Design & Colocation

- **Responsabilité** : Organiser le code par fonctionnalité et non par type de fichier
- **Colocation** : Chaque feature contient ses composants, hooks, store Zustand et API
- **Utilisation typique** : Gestion modulaire et scalable d’une application
- Exemple : Organisation d’une feature Book

```bash
// features/items
/src
 ├── /features
 │   ├── /books
 │   │   ├── index.ts        # le chareur de module
 │   │   ├── api.ts          # Appels API liés à la récupération de livres
 │   │   ├── store.ts        # Zustand store pour les livres
 │   │   ├── hooks.ts        # useBooks()
 │   │   ├── types.ts        # useBooks()
 │   │   ├── components/
 │   │   ├── screens/
 │   │   ├── tests/
 │   ├── /items
 │   │   ├── index.ts
 │   │   ├── api.ts
 │   │   ├── store.ts
 │   │   ├── hooks.ts
 │   │   ├── types.ts        
 │   │   ├── components/
 │   │   ├── screens/
 │   │   ├── tests/
 │   ├── ...
 ├── /shared
 │   ├── /ui                # Composants UI réutilisables (Button, Modal, etc.)
 │   ├── /hooks             # Hooks transverses (ex: useDebounce)
 │   ├── /services          # Les services utilisés et injectés
 │   ├── /providers         # Contexts d’injection de dépendances
 ├── App.tsx							  # le lanceur de expo avec l'injection des services de prod
 ├── Core.tsx							  # le coeur de l'application utilisant les services injectés
```

### 8️⃣ Tests et qualité du code

- **Responsabilité** : Garantir que le code fonctionne comme prévu et est maintenable
- **Colocation** : Les tests doivent être proches de la fonctionnalité qu’ils testent (dans features/<feature>/tests)
- **Utilisation typique** : Tests unitaires, tests d’intégration, tests des hooks, tests des API, et couverture du code
- *Exemple* : Test d’un hook utilisant React Query et Zustand

```js
// /features/items/tests/useItems.test.tsx
import { renderHook, act } from '@testing-library/react-hooks';
import { useBooks } from '../hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBookStore } from '../store';

describe('useBooks Hook', () => {
  it('should fetch and return books data', async () => {
    const queryClient = new QueryClient();
    const store = createBookStore();  // Zustand store
    const services = // get test's services

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Core client={queryClient} services=services>
          {children}
      </Core>
    );

    const { result, waitFor } = renderHook(() => useBooks(), { wrapper });

    await waitFor(() => result.current.isSuccess);
    
    expect(result.current.data).toEqual(expect.objectContaining({ name: 'Toto' }));
  });
});
```

### 9️⃣ Optimisation des performances

- **Responsabilité** : Assurer des performances optimales au sein de l’application, de la gestion de l’état à la récupération des données
- **Colocation** : Dans chaque feature, on optimise localement les hooks, les requêtes API, et l’état de l’application
- **Utilisation typique** : Limitation des re-rendus inutiles, gestion du cache, traitement efficace des requêtes API
- Exemple : Optimisation de React Query et Zustand avec des sélecteurs et memoization

```js
// Utilisation du `select` dans React Query pour éviter des re-rendus inutiles
const useUserData = (userId: string) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    select: (data) => data.user, // Sélectionner seulement la partie nécessaire des données
    staleTime: 1000 * 60 * 5, // Garder les données fraîches pendant 5 minutes
  });
};

// Un truc avec Zustand et les selecteurs
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

const CountComponent = () => {
  const { count, increment } = useStore(state => ({
    count: state.count,
    increment: state.increment
  })); // Utiliser un sélecteur pour éviter un re-rendu complet

  return <button onClick={increment}>{count}</button>;
};
```

#### Autres pratiques d’optimisation

- Lazy Loading des données et des composants
- Memoization des valeurs et des fonctions avec useMemo ou useCallback pour éviter des calculs et re-rendus inutiles
- Suspense et Error Boundaries pour gérer les états de chargement et les erreurs sans perturber l’expérience utilisateur
- Throttle/Debounce des appels API pour limiter la fréquence des requêtes

### 🔟 Documentation & Présentation des composants : Storybook

 • Responsabilité : Permettre aux équipes de concevoir, tester et documenter les composants de manière isolée
 • Colocation : Les stories sont généralement placées dans un dossier stories/ ou au sein de chaque feature, directement avec les composants
 • Utilisation typique : Développer, tester et afficher les composants de manière isolée, garantir leur bonne intégration dans l’interface utilisateur
 • Exemple : Un composant BookCard documenté dans Storybook

```js
// /features/books/components/BookCard.tsx
import React from 'react';

interface BookCardProps {
  name: string;
  description: string;
}

const BookCard: React.FC<BookCardProps> = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
    </div>
  );
};

export default BookCard;

// /features/books/components/BookCard.stories.tsx
import React from 'react';
import BookCard from './BookCard';

export default {
  title: 'Book/BookCard',
  component: BookCard,
};

const Template = (args) => <BookCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Book',
  description: 'Toto',
};
```

### 1️⃣1️⃣ Accessibilité (a11y)

- **Responsabilité** : S’assurer que l’application est accessible à tous les utilisateurs, y compris ceux avec des handicaps
- **Colocation** : Les règles et tests d’accessibilité sont intégrés dans chaque feature, généralement dans les composants et les pages, pour garantir que chaque élément de l’UI est utilisable par tous
- **Utilisation typique** : effectuer des tests d’accessibilité
- Exemple : Améliorer l’accessibilité d’un composant BookCard

```js
// features/books/components/BookCard.tsx
import React from 'react';

interface BookCardProps {
  name: string;
  description: string;
}

const BookCard: React.FC<BookCardProps> = ({ name, age }) => {
  return (
    <div role="region" aria-labelledby="books-card">
      <h2 id="books-card">{name}</h2>
      <p>{description}</p>
    </div>
  );
};

// Exemple avec Testing Library & a11y
export default BookCard;

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import BookCard from './BookCard';

test('BookCard is accessible', async () => {
  const { container } = render(<BookCard name="Book" description={"Description"} />);
  
  // Vérification de l'accessibilité avec axe-core
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### 1️⃣2️⃣ Surveillance des performances

- **Responsabilité** : Identifier, surveiller et résoudre les goulets d’étranglement en termes de performances dans une application mobile React Native, notamment au niveau du chargement, des appels API, du rendu des composants et de la gestion des ressources
- **Colocation** : Les outils et techniques d’optimisation des performances sont intégrés directement dans le flux de développement, en particulier lors de l’utilisation de hooks, de React Query pour les appels API et de l’utilisation de Firebase pour le monitoring des performances
- **Utilisation typique** : Surveillance des appels API, gestion du cache, optimisation des rendus, mesure des temps de chargement, suivi des temps de rendu des composants, réduction des appels redondants, et tests de performance pour les écrans lourds

#### Outils de surveillance des performances

- React Native Performance Monitor :
Le Performance Monitor intégré dans React Native permet de surveiller les performances de votre application, y compris les mesures des temps de rendu et les ressources utilisées. Il vous aide à identifier les problèmes de performances en affichant des informations sur le frame rate, le rendu des composants, et plus encore.
Vous pouvez activer le Performance Monitor dans votre projet React Native en ajoutant cette ligne dans votre code :

  ```js
  import { PerformanceMonitor } from 'react-native-performance';

  PerformanceMonitor.start();
  ```

- React Query DevTools pour React Native :
Bien que React Query DevTools soit principalement conçu pour le web, il existe une version compatible avec React Native qui vous permet de surveiller et de déboguer facilement les requêtes réseau dans votre application.

  ```js
  import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

  // Dans ton composant principal
  export const App = () => {
    return (
      <>
        <MyComponent />
        <ReactQueryDevtools initialIsOpen={false} />
      </>
    );
  };
  ```

- Firebase Performance Monitoring :
Firebase Performance Monitoring est un excellent choix pour surveiller les performances d’une application React Native, y compris le temps de chargement des écrans, les temps d’attente pour les API, et d’autres aspects critiques de l’expérience utilisateur. Firebase offre une solution complète de collecte des données de performance, et vous pouvez utiliser ses SDK pour suivre les appels d’API et d’autres événements dans l’application.

  ```js
  import { perf } from '@react-native-firebase/perf';

  const trace = perf().newTrace('load_data');
  trace.start();

  fetch('https://myapi.com/data')
    .then(response => response.json())
    .then(data => {
      trace.stop(); // Arrête la mesure une fois les données récupérées
      console.log(data);
    })
    .catch(error => {
      trace.stop();
      console.error(error);
    });
  ```

- React DevTools : Permet d’analyser le comportement de vos composants React, y compris leur temps de rendu, les re-rendus inutiles, et l’impact des hooks comme useEffect.
- Sentry : Un service de surveillance des erreurs en temps réel qui permet de capturer des exceptions et des problèmes de performance pour un dépannage rapide.
- Lighthouse : Outil intégré dans les DevTools de Chrome pour analyser la performance de l’application, y compris les métriques de SEO, d’accessibilité, et de performance.

#### Optimisation des performances pour React Native

- Lazy loading des composants et des écrans : Charger les ressources nécessaires uniquement quand elles sont nécessaires pour améliorer le temps de chargement initial.
- Optimisation des images : Utiliser des images de tailles adaptées et les compresser pour réduire l’impact sur la bande passante et la mémoire.
- Memoization et useMemo : Utiliser useMemo pour éviter les calculs inutiles et améliorer les performances de rendu des composants complexes.
- Batching des updates : Utiliser des mécanismes comme unstable_batchedUpdates pour éviter les mises à jour de composants répétitives et améliorer la réactivité.

#### Outils de Monitoring et Profiling

- React Profiler : Pour mesurer la performance des rendus des composants, la fréquence des re-rendus et identifier les bottlenecks.
- Flipper : Un outil pour debugger et profiler les applications React Native, idéal pour observer les performances côté mobile.
