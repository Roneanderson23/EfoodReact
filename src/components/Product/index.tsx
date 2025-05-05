import {
  Card,
  Descricao,
  Titulo,
  SubCard,
  Button,
  Nota,
  MiniCard
} from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/472x217" />
    <SubCard>
      <MiniCard>
        <Nota src="https://placehold.co/55x21" />
      </MiniCard>
      <Titulo>Hioki Sushi </Titulo>
      <Descricao>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </Descricao>
      <Button>Saiba mais</Button>
    </SubCard>
  </Card>
)

export default Product
