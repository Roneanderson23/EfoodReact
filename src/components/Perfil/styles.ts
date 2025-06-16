import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  display: block;
  width: 100%;
  height: 280px;
  color: ${cores.corTitulo};

  background-repeat: no-repeat;
  background-size: center;
  background-size: 100%;

  h2 {
    padding-top: 25px;
    width: 101px;
    height: 33.25px;
    margin-bottom: 140px;
    font-family: Roboto;
    font-weight: 100;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 1px;
  }

  h3 {
    width: 676px;
    height: 33.25px;
    margin-bottom: 32px;
    font-family: Roboto;
    font-weight: 900;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 1%;
  }
`
