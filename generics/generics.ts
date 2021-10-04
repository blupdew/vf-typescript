/**
 * Les generics sont comme des parametres que l'on peut passer à un type ou interface
 */
interface Post<T> {
  title: string
  random: T
}

const un_post: Post<string> = {
  title: 'hello',
  random: 'une string'
}

const un_autre_post: Post<number> = {
  title: 'hello',
  random: 3
}