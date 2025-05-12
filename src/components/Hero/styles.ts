import styled from 'styled-components'
import { cores } from '../../styles'

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  height: 186px;

  a {
    margin-left: 171px;
    text-decoration: none;
    color: ${cores.rosa};
  }
`

export const Img = styled.img`
  width: 125px;
  height: 57.5px;
  margin-left: 172px;
`
export const Links = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LinkItem = styled.li`
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 1%;
  color: ${cores.corSubTitulo};
`
