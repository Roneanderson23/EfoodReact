import pizza from '../../assets/pizza.png'

export type GalerryItem = {
  type: 'image'
  url: string
}

export const mock: GalerryItem[] = [
  {
    type: 'image',
    url: pizza
  }
]
