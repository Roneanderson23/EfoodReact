import { Imagem } from './styles'

import img from '../../assets/img/fundo.png'

const Card = () => (
  <Imagem style={{ backgroundImage: `url(${img})` }}>
    <div className="container">
      <div>
        <h2>Italiana</h2>
      </div>
      <h3>La Dolce Vita Trattoria</h3>
    </div>
  </Imagem>
)

export default Card
