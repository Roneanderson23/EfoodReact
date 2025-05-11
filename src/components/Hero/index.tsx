import heroImg from '../../assets/img/Vector-1.png'
import heroLogo from '../../assets/img/logo.png'
import { CardHeader, Img, LinkItem, Links } from './styles'

const Hero = () => (
  <CardHeader style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="container">
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Restaurantes</a>
          </LinkItem>
          <Img src={heroLogo} />
          <LinkItem>
            <a href="#">0 produto(s) no carrinho</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
  </CardHeader>
)
export default Hero

// const Hero = () => (
//   <CardHeader style={{ backgroundImage: `url(${heroImg})` }}>
//     <div className="container">
//       <LinkHero>Restaurantes</LinkHero>
//       <Img src={heroLogo} />
//       <LinkHero>0 produto(s) no carrinho</LinkHero>
//     </div>
//   </CardHeader>
// )
