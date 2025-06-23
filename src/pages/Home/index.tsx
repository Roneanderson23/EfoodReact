import { Efood } from '../../models/Efood'
import ProductList from '../../components/ProductList'

import nota from '../../assets/nota.png'
import shushi from '../../assets/shushi.png'
import macarrao from '../../assets/macarrao.png'
import Header from '../../components/Header'

const restaurante: Efood[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'japonesa'],
    category: nota,
    image: shushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    category: nota,
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    category: nota,
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    category: nota,
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    category: nota,
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    category: nota,
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Header />
    <ProductList title={''} background={'blue'} efood={restaurante} />
  </>
)

export default Home
