import { Container, Itens, ListGem } from './styles'

//tipagem do tipos card
type Props = {
  title: string
  description: string
  image: string
}

const Listagem = ({ image, title, description }: Props) => (
  <>
    <Container className="container">
      <ListGem>
        <Itens>
          <img src={image} alt="fundo" />
          <h3>{title}</h3>
          <p>{description}</p>
          <button>Adicionar ao carrinho</button>
        </Itens>
      </ListGem>
    </Container>
  </>
)

export default Listagem
