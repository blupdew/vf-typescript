const api_response = {
  id: 'id-xxx-api',
  title: ''
}

/**
 * id: string
 * title: string
 */
type ApiResponseType = typeof api_response

/** 'id' | 'title' */
type keyOfRespone = keyof ApiResponseType

// Définir un objet non fixe
type VariableObject = Record<string, string | number | string[]>
// OU
type _VariableObject = { [Key: string]: string | number | string[]}


// Faire l'union de plusieurs types, permet par exemple d'étendre simplement un type prédéfini dans une lib
type CustomApiResponse = ApiResponseType & { custom_prop: string }