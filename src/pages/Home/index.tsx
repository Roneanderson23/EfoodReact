import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'

import Header from '../../components/Header'

//interface do tipos card
export interface GalleryItem {
  type: string
  description: string
  image: string
  id: number
}

//tipos de propriedade da API fake
export type Efood = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: GalleryItem[]
}

//Consumindo dados da API fake
const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Efood[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header />
      <ProductList title={''} background={'blue'} efood={restaurantes} />
    </>
  )
}

export default Home
