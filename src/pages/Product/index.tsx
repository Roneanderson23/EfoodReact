// import { useParams } from 'react-router-dom'
import Perfil from '../../components/Perfil'
import ProductListagem from '../../components/ListListagem'
import { Efood } from '../../models/Efood'

import nota from '../../assets/nota.png'
import pizza from '../../assets/pizza.png'
import Apresentacao from '../../components/Apresentacao'

//Lista de produto sendo chamando da listagem
const efoodList: Efood[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    category: nota,
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: []
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    category: nota,
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: []
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    category: nota,
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: []
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    category: nota,
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: []
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    category: nota,
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: []
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    category: nota,
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: []
  }
]

//Rotas dos components
const Product = () => {
  // const { id } = useParams()

  return (
    <>
      <Apresentacao />
      <Perfil />
      <ProductListagem efoodList={efoodList} title={''} background={'blue'} />
    </>
  )
}

export default Product
