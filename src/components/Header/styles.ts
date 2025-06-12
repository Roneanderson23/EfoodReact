import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderFundo = styled.header`
  background-color: ${cores.fundo};
  height: 384px;
  width: 100%;
  display block;
`

export const Links = styled.ul`
  padding-top: 40px;
  text-align: center;
`

export const LinkItem = styled.li`
  margin-top: 40px;
  padding-bottom: 80px;

  a {
    font-family: Roboto;
    font-weight: 900;
    font-size: 36px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    width: 539px;
    display: flex;
    margin: 0 auto;
  }
`
