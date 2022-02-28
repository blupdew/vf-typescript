/**
 * Les interfaces
 */

interface _Post {
  id: number
  title: string
  cover_url?: string
  content: string
  covers: string[]
}

// -> Type '{}' is missing the following properties from type 'Post': id, title, cover_url, content, and 2 more
// On a également de l'autocomplétion en écrivant notre objet

// const post_de_test: _Post = {}

const un_autre_post_cool: _Post = {
  id: 1,
  title: 'Hello',
  cover_url: '',
  content: '',
  covers: ['']
}

class BlogPost implements _Post {
  id = 1
  title = 'Hello'
  cover_url = ''
  content = ''
  covers = ['']
}