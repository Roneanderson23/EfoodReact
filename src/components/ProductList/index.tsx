import { Efood } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

// Tipagem cores do card
export type Props = {
  title: string
  background: 'blue' | 'red'
  efood: Efood[]
}

// lista de produtos do Product que esta em components
const ProductList = ({ background, title, efood }: Props) => {
  const getEfoodTags = (efood: Efood) => {
    const tags = []

    if (efood.destacado) {
      tags.push('Destaque da semana')
    }

    if (efood.tipo) {
      tags.push(efood.tipo)
    }

    return tags
  }
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {efood.map((efood) => (
            <Product
              key={efood.id}
              type={getEfoodTags(efood)}
              title={efood.titulo}
              nota={efood.avaliacao}
              description={efood.descricao}
              image={efood.capa}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

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
