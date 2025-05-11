// import { useParams } from 'react-router-dom'

import Apresentacao from '../../components/Apresentacao'
import Footer from '../../components/Footer'
import ProductsList from '../../components/ProductsList'
import Efood from '../../models'

import pizza from '../../assets/img/pizza 1.5x.png'
import logoNota from '../../assets/img/nota.png'
import Hero from '../../components/Hero'

const Product = () => {
  // const { id } = useParams()

  const restaurante: Efood[] = [
    {
      id: 1,
      title: 'Hioki Sushi',
      infos: [],
      image: pizza,
      nota: logoNota,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      button: 'Adicionar ao carrinho'
    },
    {
      id: 2,
      title: 'Hioki Sushi',
      infos: [],
      image: pizza,
      nota: logoNota,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      button: 'Adicionar ao carrinho'
    },
    {
      id: 3,
      title: 'Hioki Sushi',
      infos: [],
      image: pizza,
      nota: logoNota,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      button: 'Adicionar ao carrinho'
    },
    {
      id: 4,
      title: 'Hioki Sushi',
      infos: [],
      image: pizza,
      nota: logoNota,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      button: 'Adicionar ao carrinho'
    }
  ]

  return (
    <>
      <Hero />
      <Apresentacao />
      <ProductsList efood={restaurante} />
      <Footer />
    </>
  )
}

export default Product
