import { HeaderLogo, Link, Link2, Imag } from './styles'

import vectorImg from '../../assets/img/Vector-1.png'
import imag from '../../assets/img/logo.png'

const Perfil = () => (
  <>
    <HeaderLogo style={{ backgroundImage: `url(${vectorImg})` }}>
      <Link>Restaurantes</Link>
      <Imag style={{ backgroundImage: `url(${imag})` }} />
      <Link2>0 produto(s) no carrinho</Link2>
    </HeaderLogo>
  </>
)

export default Perfil
