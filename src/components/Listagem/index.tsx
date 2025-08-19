import { useState } from 'react'
import { Itens, ListGem, Modal, ModalContent } from './styles'

import { GalleryItem } from '../../pages/Home'

import pizza from '../../assets/pizza.png'
import close from '../../assets/close 1.png'
import { ButtonContainer } from '../Button/styles'

//tipagem mock de array
const mock: GalleryItem[] = [
  {
    type: 'pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 1
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

//lista do card da 2 parte do efood com interração com mock, defaultCover faz interração com listLitagem
const Listagem = ({ defaultCover }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    description: '',
    image: pizza,
    id: 1,
    type: 'pizza Marguerita'
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.image
    return defaultCover
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      description: '',
      id: 1,
      image: pizza,
      type: ''
    })
  }

  return (
    <>
      <div className="container">
        <ListGem>
          {mock.map((media, index) => (
            <Itens
              key={media.id}
              onClick={() => {
                setModal({
                  isVisible: true,
                  description: media.description,
                  id: media.id,
                  image: media.image,
                  type: media.type
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`midia ${index + 1} de ${name}`}
              />
              <h3>{media.type}</h3>
              <p>{media.description}</p>
              <button>Adicionar ao carrinho</button>
            </Itens>
          ))}
        </ListGem>
      </div>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <div>
            <img src={modal.image} alt="pizza" />
          </div>
          <header>
            <img
              src={close}
              alt="icone de close"
              onClick={() => {
                closeModal()
              }}
            />
            <h2>Pizza Marguerita</h2>
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
            <br />
            <ButtonContainer>Adicionar ao carrinho - R$ 60,90</ButtonContainer>
          </header>
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Listagem
