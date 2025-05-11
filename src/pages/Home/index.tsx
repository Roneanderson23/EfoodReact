import Footer from '../../components/Footer'
import ProductsList from '../../components/ProductsList'
import Efood from '../../models'

import shushi from '../../assets/img/imagem.png'
import macarrao from '../../assets/img/macarrao.png'
import logoNota from '../../assets/img/nota.png'

import Header from '../../components/Header'

const restaurante: Efood[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'japonesa'],
    image: shushi,
    nota: logoNota,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    button: 'Saiba mais'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: macarrao,
    nota: logoNota,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: macarrao,
    nota: logoNota,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: macarrao,
    nota: logoNota,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: macarrao,
    nota: logoNota,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: macarrao,
    nota: logoNota,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList efood={restaurante} />
    <Footer />
  </>
)

export default Home
