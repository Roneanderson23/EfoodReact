import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  color: ${cores.branca};
  background-color: ${cores.rosa};
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 1px;
  text-align: center;
`
export const ButtoLink = styled(Link)`
  color: ${cores.branca};
  background-color: ${cores.rosa};
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 1px;
  text-align: center;
  text-decoration: none;
  margin: 8px;
`
