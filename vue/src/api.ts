export type Cat = {
  name: string
}

export const api = {
  async getCats(): Promise<Cat[]> {
    return [
      {
        name: 'Tokyo'
      },
      {
        name: 'Zelda'
      }
    ]
  }
}