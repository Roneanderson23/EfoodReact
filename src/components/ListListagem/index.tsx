import Listagem from '../Listagem'
import { Container } from '../ProductList/styles'
import { ListItens } from './styles'

import pizza from '../../assets/pizza.png'
import { Efood } from '../../pages/Home'

export type Props = {
  title: string
  background: 'blue' | 'red'
  efoodList: Efood[]
}

// Carregamento dos produto do card Listagem
const ListListagem = ({ background, efoodList, title }: Props) => (
  <>
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <ListItens>
          {efoodList.map((efoodList) => (
            <Listagem
              key={efoodList.id}
              defaultCover={pizza}
              name={'Marguerita '}
            />
          ))}
        </ListItens>
      </div>
    </Container>
  </>
)

export default ListListagem
