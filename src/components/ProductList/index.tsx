import Product from '../Product'
import { Container, List } from './styles'

import nota from '../../assets/img/nota.png'

// Tipagem cores do card
type Props = {
  title: string
  background: 'white' | 'pink'
}

// lista de produtos do Product
const ProductList = ({ background, title }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category={nota}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          image="//placehold.co/472x217"
          infos={['Destaque da semana', 'Japonesa']}
          title="Hioki Sushi"
        />
        <Product
          category={nota}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image="//placehold.co/472x217"
          infos={['Italiana']}
          title="La Dolce Vita Trattoria"
        />
        <Product
          category={nota}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image="//placehold.co/472x217"
          infos={['Italiana']}
          title="La Dolce Vita Trattoria"
        />
        <Product
          category={nota}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image="//placehold.co/472x217"
          infos={['Italiana']}
          title="La Dolce Vita Trattoria"
        />
        <Product
          category={nota}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image="//placehold.co/472x217"
          infos={['Italiana']}
          title="La Dolce Vita Trattoria"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
