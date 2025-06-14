import { Efood } from '../../models/Efood'
import Product from '../Product'
import { Container, List } from './styles'

// import nota from '../../assets/img/nota.png'
// import fundo from '../../assets/img/shushi.png'
// import imgFundo from '../../assets/img/macarrao.png'

// Tipagem cores do card
export type Props = {
  title: string
  background: 'blue' | 'red'
  efood: Efood[]
}

// lista de produtos do Product que esta em components
const ProductList = ({ background, title, efood }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {efood.map((efood) => (
          <Product
            key={efood.id}
            category={efood.category}
            description={efood.description}
            image={efood.image}
            infos={efood.infos}
            title={efood.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList

//  <Product
//           category={nota}
//           description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
//           image={imgFundo}
//           infos={['Italiana']}
//           title="La Dolce Vita Trattoria"
//         />
//         <Product
//           category={nota}
//           description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
//           image={imgFundo}
//           infos={['Italiana']}
//           title="La Dolce Vita Trattoria"
//         />
//         <Product
//           category={nota}
//           description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
//           image={imgFundo}
//           infos={['Italiana']}
//           title="La Dolce Vita Trattoria"
//         />
//         <Product
//           category={nota}
//           description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
//           image={imgFundo}
//           infos={['Italiana']}
//           title="La Dolce Vita Trattoria"
//         />
//         <Product
//           category={nota}
//           description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
//           image={imgFundo}
//           infos={['Italiana']}
//           title="La Dolce Vita Trattoria"
//         />
