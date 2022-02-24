/**
 * Autocomplétion sur `message`
 * Erreur si on tente quelque chose qui n'est pas possible sur `message`
 */
function say_stuff(message: string) {
  // const test = message * 5 // erreur

  console.log(message.toLowerCase())
}

// say_stuff(1337) // erreur, pas le droit de passer autre chose qu'une string