/**
 * Aucune autocomplétion sur `message`, `any`
 * On ne peut pas savoir en avance qu'on aura une erreur
 */
function say_stuff(message) {
  const test = message * 5 // Aucune erreur, pour JS c'est OK, `message` pourrait très bien être un `number`...
  console.log(message.toLowerCase()) // On utilise toLowerCase mais on ne sait même pas si la méthode existe
}

say_stuff(1337) // Pas d'erreur non plus