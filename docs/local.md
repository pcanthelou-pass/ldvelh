# Dev environnement

## Alias

Pour pouvoir utiliser les alias du type :

```ts
import { Core } from '@core';
import { AlertService, Services } from '@services';
```

Il faut configurer tsconfig.json et babel.config.js.

Dans tsconfig l'alias pointe sur un fichier (genre un index.ts) ou un dossier :

```js
"@shared/*": ["./app/shared/*"],
"@services": ["./app/shared/services/index.ts"],
```

Et dans babel il faut faire la même chose (et redémarrer l'IDE après modification).

```js
'@shared': './app/shared/',
'@services': './app/shared/services/index.ts'
```
