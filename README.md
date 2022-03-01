# VF Typescript

> AKA. Pourquoi c'est bien, et pourquoi je spam tout le monde avec 😄

![](https://pics.me.me/welcome-to-javascript-where-the-objects-are-made-up-and-13411868.png)

**Liens utiles pour apprendre**

- [Série Grafikart](https://www.youtube.com/watch?v=ffCIANfx_-0&list=PLjwdMgw5TTLX1tQ1qDNHTsy_lrkCt4VW3)
- [Doc officielle](https://www.typescriptlang.org/)
- [Challenges](https://github.com/type-challenges/type-challenges) -> 👍 vraiment sympa (faits par des membres de la team Vue.js)

**State of JS 2021**

Les types sont ce qu'il manque le plus dans JS

<https://2021.stateofjs.com/en-US/opinions/#currently_missing_from_js_wins>

## Sommaire

- Concept et utilité
- Les types de base
- Les interfaces / objets
- Les Generics
- Les types plus complexes, `keyof`, `typeof`, ...

### Concept

Typescript n'est pas un nouveau language mais un superset de `Javascript` c'est à dire qu'il sait faire tout ce que JS sait faire mais encore plus !

> Example: `Sass` pour `css`.

**Mais pourquoi ?**

Javascript n'as pas de typage fort, example:

```js
let number = 420

number = '420'

// JS valide, mon number peut devenir une string sans aucun soucis
```

```ts
let number = 420

number = '420'

// JS valide mais pas TS, mon number ne peut pas devenir une string -> Pas le droit en TS, un number reste un number -> Le fichier ne peut pas compiler
```

Cela permet d'empêcher des bêtes mais souvent pénibles.

C'est un exemple simple, mais on peut faire bien plus de choses avec !

### Avantages

- Autocomplétion pratique
  - Les libs externes comme Vue sont construites dessus, on a donc accès à toutes les options depuis notre éditeur.

- Empêche les erreurs de type `xx is undefined` car on le sait à l'avance
- Les types sont souvent implicites donc pas forcément beaucoup de boulot en plus
- Permet de savoir à l'avance ce qui va être dans une objet

- -> Un code plus stable et surtout moins permissif.

### Titre inutile, c'est juste un meme

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdmitripavlutin.com%2Fstatic%2Ff3acca84aa642ed9f8591db27e382a90%2F5fd6b%2Ftypeof-5.jpg&f=1&nofb=1)

### Installation dans un projet front

On utilisera Vite pour l'installation car cela fonctionne avec et sans framework.

> Vite est également utilisé sur Wordplate et comprend le TS par défaut, il n'y a donc aucune config requise.

1. `npm create vite@latest`
2. Choisir `vanilla-ts` ou `vue-ts` par exemple
3. `npm i`
4. Done

---

Pour du Nuxt, c'est pareil, il y a une option lors de l'installation. De plus, Nuxt passera maintenant par Vite.

---

Dans l'exemple de Vue, TS est maintenant fortemment recommandé et fonctionne sans aucun souci avec la nouvelle "Composition API" (même dans le template !).

---

Pour tout autre type de projet, le module officiel npm `typescript` avec la commande `tsc` fonctionne très bien.

---

Btw, TS est un très bon combo avec ESLint, surtout si on aime le rouge partout.

### Dans un projet existant

Il faut se référencer à la documentation du type projet.

Dans le cas de Vue (`vue-cli`), il s'agit d'une simple commande.

Dans le fichier tsconfig.json, il suffit d'ajouter `allowJs: true`.

Il sera ensuite possible d'ajouter du TS au fur et à mesure sans tout casser.

---

Il est également possible d'ajouter des fichiers de déclaration si TS n'est pas installable pour X ou Y (PopLab), VSCode va les comprendre et les utiliser sans aucune config.

EX:

```ts
// ./types/app.d.ts

declare type Cheese = {
  name: string,
  age: number,
  is_good_in_fondue: boolean
}
```

```js
// ./src/app.js

/**
 * @type {Cheese}
 */
const my_cheese = { ... }

/**
 * Autocomplétion et tout et tout
 *
 * @param {Cheese} cheese - Mon fromage
 */
function get_cheese_name(cheese) {
  return cheese.name
}
```

### Un peu de pratique

...

### Prise en main

Pour utiliser TS, il faut absolument être confortable avec le JS et surtout le JS moderne. La syntaxe reste similaire mais il faut évidement se former aux nouveautés qu'apportent TS.

Nos niveaux en JS / TS, sont / seront sûrement différents et c'est pourquoi je recommande de ne passer que par des MR avant de push quoi que ce soit.

Cela permet de faire des retours sur les bonnes pratiques, et entre autre, de ne pas se retrouver avec du code legacy par la suite.

Pas expérience, le meilleur moyen d'apprendre et de mettre les pattes.

**Qu'en est-il du temps supplémentaire ?**

> *Ça dépend*

Avec un minimum de connaissance (vraiment la base), on va certes prendre un petit peu plus de temps à typer nos variables, etc.

Mais d'un autre côté, c'est du temps que l'on ne passera pas à debugger et à se demander pourquoi machin est `undefined` 😠...

Aussi, il est bien plus facile pour un nouvel arrivant sur un projet de comprendre le code car tout est "documenté" via les types.

En JS tout est généralement `any` et on ne comprend pas directement ce qu'on touche (jusqu'à ce que le navigateur nous gueule dessus).

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fd3b8tswrbxn31.jpg&f=1&nofb=1)

**Est-ce applicable à toute taille projet ?**

Comme dit dans le paragraphe sur l'installation, il n'est pas toujours évident de migrer une base de code existante. Cependant des alternatives existent comme les `.d.ts`.

Mis à part ce cas, tout projet est capable d'utiliser TS. Je le recommande d'ailleurs **surtout** pour les projets qui risquent d'être gros avec du code spaghetti (PopLab 🙃).

D'experience j'était vraiment perdu en arrivant sur le projet (je le suis toujours d'ailleurs :doge:) MAIS avec TS je pense honnêtement que cela aurait été plus noob-friendly.

### Misc

Je suis toujours dispo pour les questions et astuces (même si j'en apprend tous les jours), il ne faut vraiment pas hésiter !

### Guidelines

Il suffit d'un feu vert !
