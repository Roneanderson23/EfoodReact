class Efood {
  title: string
  infos: string[]
  image: string
  nota: string
  description: string
  button: string
  id: number

  constructor(
    title: string,
    infos: string[],
    image: string,
    nota: string,
    description: string,
    button: string,
    id: number
  ) {
    this.id = id
    this.image = image
    this.nota = nota
    this.button = button
    this.description = description
    this.title = title
    this.infos = infos
  }
}

export default Efood
