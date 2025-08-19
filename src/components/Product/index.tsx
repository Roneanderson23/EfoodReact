import Button from '../Button'

// import capa from '../../assets/shushi.png'
import star from '../../assets/star.png'

import {
  Card,
  Descricao,
  Nota,
  Section,
  Star,
  Titulo,
  MiniCard,
  Destaque
} from './styles'
import Tag from '../Tag'

//tipagem das const Product
type Props = {
  title: string
  nota: number
  description: string
  type: string[]
  destaque?: boolean
  image: string
}

// produto do card da primeira lista do home
const Product = ({ description, image, title, nota, type }: Props) => (
  <Card style={{ backgroundImage: `url(${image})` }}>
    <Section>
      <Destaque>
        {type.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Destaque>
      <MiniCard>
        <Titulo>{title}</Titulo>
        <Nota>{nota}</Nota>
        <Star src={star} alt="estrela" />
      </MiniCard>
      <Descricao>{description}</Descricao>
      <Button
        type="link"
        to="product/:id"
        title="clique aqui para aproveitar essa oferta"
      >
        Saiba mais
      </Button>
    </Section>
  </Card>
)

export default Product
