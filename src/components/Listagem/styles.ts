import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div``

export const ListGem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 80px;
  padding-top: 80px;
  margin-bottom: 120px;
  gap: 32px;

  img {
    margin: 8px;
  }

  h3 {
    width: 124;
    height: 19;
    top: 681px;
    left: 531px;

    margin: 8px;
    font-family: Roboto;
    font-weight: 900;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 1px;
    color: ${cores.branca};
  }

  p {
    margin: 8px;
    width: 100%;
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1px;
    color: ${cores.branca};
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
  }
`

export const Itens = styled.li`
  width: 100%;
  height: 100%;
  background-color: ${cores.rosa};
  border: solid 2px pink;
`
