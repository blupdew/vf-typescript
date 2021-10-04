# VF Typescript

> AKA. Pourquoi c'est bien

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

Cela permet d'empêcher des bêtes mais souvant pénibles.

C'est un exemple simple, mais on peut faire bien plus de choses avec !

### Avantages

- Autocomplétion pratique
  - Les libs externes comme Vue sont consruites dessus, on a donc accès à toutes les options depuis notre éditeur.

- Empêche les erreus de type `xx is undefined` car on le sait à l'avance
- Les types sont souvent implicites donc pas forcément beaucoup de boulot en plus
- Permet de savoir à l'avance ce qui va être dans une objet

- -> Un code plus stable
