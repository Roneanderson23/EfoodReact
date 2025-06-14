import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'efood'>>`
  padding: 80px 0;
  background-color: ${(props) =>
    props.background === 'blue' ? cores.branca : cores.rosa};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'red' ? cores.rosa : cores.branca};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`
