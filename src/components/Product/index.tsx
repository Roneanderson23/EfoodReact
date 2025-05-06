import Tag from '../Tag'
import {
  Card,
  Descricao,
  Titulo,
  SubCard,
  Button,
  Nota,
  MiniCard,
  Infos
} from './styles'

type Props = {
  title: string
  infos: string[]
  image: string
  nota: string
  description: string
  button: string
}

const Product = ({ title, infos, image, description, button, nota }: Props) => (
  <Card>
    <img src={image} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <SubCard>
      <MiniCard>
        <Nota src={nota} />
      </MiniCard>
      <Titulo>{title} </Titulo>
      <Descricao>{description}</Descricao>
      <Button>{button}</Button>
    </SubCard>
  </Card>
)

export default Product
