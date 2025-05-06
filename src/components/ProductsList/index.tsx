import Efood from '../../models'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  efood: Efood[]
}

const ProductsList = ({ efood }: Props) => (
  <>
    <Container>
      <List>
        {efood.map((efood) => (
          <Product
            key={efood.id}
            nota={efood.nota}
            title={efood.title}
            infos={efood.infos}
            image={efood.image}
            description={efood.description}
            button={efood.button}
          />
        ))}
      </List>
    </Container>
  </>
)

export default ProductsList
