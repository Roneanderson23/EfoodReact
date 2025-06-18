import Button from '../Button'
import Tag from '../Tag'

import { Card, Descricao, Titulo, Notas, Infos, MiniCard } from './styles'

//tipagem das const Product
type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
}

// produto do card da primeira lista do home
const Product = ({ category, description, image, infos, title }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <MiniCard>
      <Notas>
        <Titulo>{title}</Titulo>
        <img src={category} />
      </Notas>
      <Descricao>{description}</Descricao>
      <Button
        type="link"
        to="product/:id"
        title="clique aqui para aproveitar essa oferta"
      >
        Saiba mais
      </Button>
    </MiniCard>
  </Card>
)

export default Product
