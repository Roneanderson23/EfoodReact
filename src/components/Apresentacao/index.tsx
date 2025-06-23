import { Item, Itens } from './styles'

import img from '../../assets/logo.png'
import fundo from '../../assets/vetor_fundo.png'
import { Link } from 'react-router-dom'

const Apresentacao = () => (
  <>
    <div style={{ backgroundImage: `url(${fundo})` }}>
      <Item className="container">
        <Itens>Restaurantes</Itens>
        <Itens>
          <Link to={'/'}>
            <img src={img} alt="logo" />
          </Link>
        </Itens>
        <Itens>0 produto(s) no carrinho</Itens>
      </Item>
    </div>
  </>
)

export default Apresentacao
