import heroImg from '../../assets/img/Vector-1.png'
import heroLogo from '../../assets/img/logo.png'
import { CardHeader, Links, LinkItem, Img } from './styles'

const Hero = () => (
  <CardHeader style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="container">
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Restaurantes</a>
          </LinkItem>
          <Img src={heroLogo} alt="logo" />
          <LinkItem>
            <a href="#">0 produto(s) no carrinho</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
  </CardHeader>
)
export default Hero
