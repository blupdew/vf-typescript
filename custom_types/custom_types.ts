/**
 * Les types custom
 */

type ValidCheese = 'Reblochon' | 'Morbier' | 'Chèvre'

// Vu qu'on spécfie manuellement le type, TS arrive à nous auto compléter les valeurs possibles
const another_cheese: ValidCheese = 'Reblochon'

// -> Type '"Raclette"' is not assignable to type 'ValidCheese'
// const not_valid_cheese: ValidCheese = 'Raclette'
