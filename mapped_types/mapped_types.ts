type MyObject = {
  delete: 'Deleted'
  create: 'Created'
  update: 'Updated'
}

/**
 * Chaque clé est variabilisées dans Key
 * 
 * On ajoute le prefix `on`
 * On passe en uppercase la premiere lettre de la clé
 * 
 * Chaque propriété devient une fonction qui retourne l'ancienne valeur.
 */
type Mapped = {
  [Key in keyof MyObject as `on${ Capitalize<Key> }`]: () => MyObject[Key]
}