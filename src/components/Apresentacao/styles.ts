import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  position: relative;
  display: block;
  height: 280px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;


  h2{
    width: 676px;
    height: 33.25px;
    padding-bottom: 250px;
  }

    h3{
    color: ${cores.branca}
    font-family: Roboto;
    font-weight: 900;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 1%;

  }

  &::after {
    position: absolute;
    background-color: background: #00000080;
    widht: 100%;
    height: 100%;
    content: '';
    opacity: 0.50;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%
    justify-content: space-between;
  }
`
export const Link = styled.span``
export const LinkTwo = styled.span``
