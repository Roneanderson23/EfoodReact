import {
  BotaoProdutos,
  CardProdutos,
  DescriCard,
  Quadrado,
  Section
} from './styles'

type Props = {
  title: string
  image: string
  description: string
}

const Card = ({ title, image, description }: Props) => (
  <Section>
    <Quadrado className="container">
      <CardProdutos>
        <img src={image} alt="pizza" />
        <h2>{title}</h2>
        <DescriCard>{description}</DescriCard>
        <BotaoProdutos>Adicionar ao carrinho</BotaoProdutos>
      </CardProdutos>
    </Quadrado>
  </Section>
)

export default Card
