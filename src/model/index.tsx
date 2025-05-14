class Restaurante {
  title: string
  image: string
  description: string
  id: number

  constructor(title: string, image: string, description: string, id: number) {
    this.id = id
    this.image = image
    this.description = description
    this.title = title
  }
}

export default Restaurante
