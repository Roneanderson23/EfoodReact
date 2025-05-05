import { Img, VetorHero, Title } from './styles'

import vetor from '../../assets/img/Vector-1.png'
import logoHero from '../../assets/img/logo.png'

const Hero = () => (
  <>
    <VetorHero style={{ backgroundImage: `url(${vetor})` }}>
      <Img src={logoHero} />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </VetorHero>
  </>
)

export default Hero
