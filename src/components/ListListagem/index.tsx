import { Efood } from '../../models/Efood'
import Listagem from '../Listagem'
import { Container } from '../ProductList/styles'
import { ListItens } from './styles'

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
              description={efoodList.description}
              image={efoodList.image}
              title={efoodList.title}
            />
          ))}
        </ListItens>
      </div>
    </Container>
  </>
)

export default ListListagem
