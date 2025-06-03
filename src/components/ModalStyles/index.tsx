import { CardModal, Modal, ModalContent } from './styles'
import pizzaModal from '../../assets/img/pizza.png'
import fechar from '../../assets/img/close 1.png'
import imgModal from '../../assets/img/fundo_modal.png'

import {} from './styles'
import { ButtonLink } from '../Button/styles'

const ModalStyles = () => {
  return (
    <Modal>
      <ModalContent
        className="container"
        style={{ backgroundImage: `url(${imgModal})` }}
      >
        <header>
          <img src={fechar} alt="icone fechar" />
        </header>
        <CardModal>
          <img src={pizzaModal} alt="PIZZA" />
          <div>
            <h1>Pizza Marguerita</h1>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br />
              <br /> Serve: de 2 a 3 pessoas
            </p>
            <ButtonLink to="" type="link" title="adicionar ao carrinho">
              Adicionar ao carrinho - R$ 60,90
            </ButtonLink>
          </div>
        </CardModal>
      </ModalContent>
      <div className="overlay"></div>
    </Modal>
  )
}

export default ModalStyles
