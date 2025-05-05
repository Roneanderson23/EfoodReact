import { Imagem, Link, LinkTwo } from './styles'

import img from '../../assets/img/fundo.png'

const Card = () => (
  <Imagem style={{ backgroundImage: `url(${img})` }}>
    <Link>Italiana</Link>
    <LinkTwo>La Dolce Vita Trattoria</LinkTwo>
  </Imagem>
)

export default Card
