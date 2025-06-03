import Button from '../Button'
import Modalstyles from '../ModalStyles'
import { CardProdutos, DescriCard, Quadrado, Section } from './styles'

type Props = {
  title: string
  image: string
  description: string
}

const Card = ({ title, image, description }: Props) => {
  return (
    <>
      <Section>
        <Quadrado className="container">
          <CardProdutos>
            <img src={image} alt="pizza" />
            <h2>{title}</h2>
            <DescriCard>{description}</DescriCard>
            <Button
              type="button"
              title="adicionar ao carrinho"
              variant="secundary"
            >
              Adicionar ao carrinho
            </Button>
          </CardProdutos>
        </Quadrado>
      </Section>
      <Modalstyles />
    </>
  )
}

export default Card
