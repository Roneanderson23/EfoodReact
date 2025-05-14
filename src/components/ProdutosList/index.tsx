import Restaurante from '../../model'
import Produtos from '../Produtos'
import { Container, List } from './styles'

export type Props = {
  efood: Restaurante[]
}

const ProdutosList = ({ efood }: Props) => (
  <>
    <Container>
      <List>
        {efood.map((efood) => (
          <Produtos
            key={efood.id}
            title={efood.title}
            image={efood.image}
            description={efood.description}
          />
        ))}
      </List>
    </Container>
  </>
)

export default ProdutosList
