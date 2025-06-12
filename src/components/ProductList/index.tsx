import Product from '../Product'
import { Container, List } from './styles'

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
          category="nota"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          image="//placehold.co/472x217"
          infos={['Destaque da semana', 'Japonesa']}
          title="nome do prato"
        />
        <Product
          category="nota"
          description="teste2"
          image="//placehold.co/472x217"
          infos={['Italiana']}
          title="nome do prato"
        />
        <Product
          category="nota"
          description="teste3"
          image="//placehold.co/472x217"
          infos={['Italiana']}
          title="nome do prato"
        />
        <Product
          category="nota"
          description="teste4"
          image="//placehold.co/472x217"
          infos={['Italiana']}
          title="nome do prato"
        />
        <Product
          category="nota"
          description="teste5"
          image="//placehold.co/472x217"
          infos={['Italiana']}
          title="nome do prato"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
