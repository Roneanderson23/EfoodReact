import { useParams } from 'react-router-dom'
import Perfil from '../../components/Perfil'
import ProductListagem from '../../components/ListListagem'
import { Efood } from '../../models/Efood'

import nota from '../../assets/img/nota.png'
import shushi from '../../assets/img/shushi.png'

//Lista de produto sendo chamando da listagem
const efoodList: Efood[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    category: nota,
    image: shushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: []
  },
  {
    id: 2,
    title: 'Hioki Sushi',
    category: nota,
    image: shushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: []
  },
  {
    id: 3,
    title: 'Hioki Sushi',
    category: nota,
    image: shushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: []
  },
  {
    id: 4,
    title: 'Hioki Sushi',
    category: nota,
    image: shushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: []
  },
  {
    id: 5,
    title: 'Hioki Sushi',
    category: nota,
    image: shushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: []
  },
  {
    id: 5,
    title: 'Hioki Sushi',
    category: nota,
    image: shushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: []
  }
]

//Rotas dos components
const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Perfil />
      <ProductListagem
        efoodList={efoodList}
        title={'inicio pagina 2'}
        background={'blue'}
      />
    </>
  )
}

export default Product
