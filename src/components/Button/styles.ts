import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${cores.rosa};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.branca : cores.botaoCard};
  font-family: Roboto;
  width: 100%;
  height: 24px;
  margin-top: 8px;
  cursor: pointer;
  border: none;
`
export const ButtonLink = styled(Link)`
  color: ${cores.rosa};
  background-color: ${cores.botaoCard};
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 1px;
  text-align: center;
`
