/**
 * Types de base
 */
 const une_string = 'Reblochon' // -> string

 const un_number = 420 // -> number
 
 const un_array = ['i', 'love', 'cheese'] // -> string[] ou Array<string>
 
 const un_object = { cheese: 'Brie', number: 1 } // -> Record<string, string | number>
 
 const un_null = null // -> any
 
 const un_undefined = undefined // -> any

/**
 * Utiliser des types
 * 
 * -> TS est assez intelligent pour les comprendre tout seul, mais on peut les définir comme ceci
 */

const cheese: string = 'Hello world !'

/**
 * Pas beson de définir les types en JSDOC
 *
 * @param id - ID pizza
 * @param name - Nom de la pizza
 * @param cheese_amount - Le nombre de fromage sur la pizza
 */
function eatPizza(id: string = 'id_par_defaut', name: string, cheese_amount: number) {
  console.log(`Pizza ${name} with id ${id} eaten, you just ate ${cheese_amount} cheeses !`)
}