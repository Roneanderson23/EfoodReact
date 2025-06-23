import { Image } from './styles'

import img from '../../assets/fundo.png'

const Perfil = () => (
  <>
    <Image style={{ backgroundImage: `url(${img})` }}>
      <div className="container">
        <h2>Italiana</h2>
        <h3>La Dolce Vita Trattoria</h3>
      </div>
    </Image>
  </>
)

export default Perfil
