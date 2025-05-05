import redeSociais from '../../assets/img/redes sociais.png'
import logo from '../../assets/img/logo.png'
import logoFundo from '../../assets/img/fundo-1.png'

import { CardFooter, Descricao, Logo, LogoTwo } from './styles'

const Footer = () => (
  <CardFooter style={{ backgroundImage: `url(${logoFundo})` }}>
    <Logo src={logo} />
    <LogoTwo src={redeSociais} />
    <Descricao>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Descricao>
  </CardFooter>
)

export default Footer
