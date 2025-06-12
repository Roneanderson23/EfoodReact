import { HeaderFundo, LinkItem, Links } from './styles'

import logo from '../../assets/img/logo.png'

const Header = () => (
  <HeaderFundo>
    <nav>
      <Links>
        <LinkItem>
          <img src={logo} alt="efood" />
        </LinkItem>
        <LinkItem>
          <a>Viva experiências gastronômicas no conforto da sua casa</a>
        </LinkItem>
      </Links>
    </nav>
  </HeaderFundo>
)

export default Header
