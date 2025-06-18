import { Itens, ListGem } from './styles'

//tipagem do tipos card
type Props = {
  title: string
  description: string
  image: string
}

//lista do card da 2 parte do efood
const Listagem = ({ image, title, description }: Props) => (
  <>
    <div className="container">
      <ListGem>
        <Itens>
          <img src={image} alt="fundo" />
          <h3>{title}</h3>
          <p>{description}</p>
          <button>Adicionar ao carrinho</button>
        </Itens>
      </ListGem>
    </div>
  </>
)

export default Listagem
