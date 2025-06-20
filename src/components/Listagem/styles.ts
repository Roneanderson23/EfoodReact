import styled from 'styled-components'
import { cores } from '../../styles'

export const ListGem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  padding-top: 32px;
`

export const Itens = styled.li`
  width: 100%;
  height: 100%;
  background-color: ${cores.rosa};
  color: rgba(255, 235, 217, 1);
`
