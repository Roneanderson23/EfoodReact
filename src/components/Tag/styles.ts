import styled from 'styled-components'
import { cores } from '../../styles'

//importando props de type props
import { Props } from '.'

// tag componetizada para components
export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '4px 6px')};
  display: inline-block;
  margin: 12px;
`
