import { Efood } from '../../models/Efood'
import Listagem from '../Listagem'
import { Container, List } from '../ProductList/styles'

export type Props = {
  title: string
  background: 'blue' | 'red'
  efoodList: Efood[]
}

// Carregamento dos produto do card Listagem
const ProductListagem = ({ background, efoodList, title }: Props) => (
  <>
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {efoodList.map((efoodList) => (
            <Listagem
              key={efoodList.id}
              description={efoodList.description}
              image={efoodList.image}
              title={efoodList.title}
            />
          ))}
        </List>
      </div>
    </Container>
  </>
)

export default ProductListagem
