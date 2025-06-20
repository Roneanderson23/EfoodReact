import styled from 'styled-components'
import { cores } from '../../styles'

export const ListItens = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  img {
    margin: 8px;
    width: 304px;
    height: 167px;
  }

  h3 {
    width: 100%;
    height: 19px;
    margin: 8px;
    font-family: Roboto;
    font-weight: 900;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 1px;
    color: ${cores.corTitulo};
  }

  p {
    margin: 8px;
    width: 100%;
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1px;
    color: ${cores.corTitulo};
  }

  button {
    font-family: Roboto;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 1px;
    text-align: center;
    width: 304px;
    margin: 8px;
    height: 24px;
    color: ${cores.rosa};
    background-color: ${cores.fundo};
    border: none;
  }
`

//button do campo card parte 2
