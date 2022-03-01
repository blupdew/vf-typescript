/**
 * Types de base
 */
const une_string = 'Reblochon' // -> string

const un_number = 420 // -> number

const un_array = ['i', 'love', 'cheese'] // -> string[] ou Array<string>

const un_object = { cheese: 'Brie', number: 1 } // -> Record<string, string | number>

const un_null = null // -> null

const un_undefined = undefined // -> undefined

/**
 * Utiliser des types
 * 
 * -> TS est assez intelligent pour les comprendre tout seul, mais on peut les définir comme ceci
 */

const cheese: string = 'Hello world !'

/**
 * Pas beson de définir les types en JSDOC, TS fait le job
 *
 * @param id - ID pizza
 * @param name - Nom de la pizza
 * @param cheese_amount - Le nombre de fromage sur la pizza
 */
function eatPizza(id: string = 'id_par_defaut', name: string, cheese_amount: number) {
  console.log(`Pizza ${name} with id ${id} eaten, you just ate ${cheese_amount} cheeses !`)
}

/*
 * Le type `any`
 * > Il annule tout typage
 * 
 * La plupart des variables ont ce type en JS, ce qui n'offre aucune aide.
 * Par ex: les fonctions
 */
const je_sais_pas: any = 'Un truc' // any et non pas string

function test(param) {
  return ''
}