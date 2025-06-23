import { mock } from '../Galerry'
import { Itens, ListGem, Modal, ModalContent } from './styles'

import close from '../../assets/close 1.png'
import pizza from '../../assets/pizza.png'
import { ButtonContainer } from '../Button/styles'

//tipagem do tipos card
type Props = {
  title: string
  description: string
  image: string
}

//lista do card da 2 parte do efood
const Listagem = ({ title, description }: Props) => (
  <>
    <div className="container">
      <ListGem>
        {mock.map((media, index) => (
          <Itens key={media.url}>
            <img src={media.url} alt={`mídia ${index + 1} nome do card`} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Adicionar ao carrinho</button>
          </Itens>
        ))}
      </ListGem>
    </div>
    <Modal>
      <ModalContent className="container">
        <div>
          <img src={pizza} alt="pizza" />
        </div>
        <header>
          <img src={close} alt="close" />
          <h2>Pizza Marguerita</h2>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião. <br />
            <br /> Serve: de 2 a 3 pessoas
          </p>
          <br />
          <ButtonContainer>Adicionar ao carrinho - R$ 60,90</ButtonContainer>
        </header>
      </ModalContent>
      <div className="overlay"></div>
    </Modal>
  </>
)

export default Listagem
