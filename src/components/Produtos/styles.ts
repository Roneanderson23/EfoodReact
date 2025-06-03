import styled from 'styled-components'
import { cores } from '../../styles'

export const Section = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 8px;
  border: 70px;
  margin-bottom: 32px;
`
export const Quadrado = styled.div`
  h2 {
    padding-top: 4px;
    margin-bottom: 8px;
    font-family: Roboto;
    font-weight: 900;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 1px;
    color: ${cores.branca};
  }
`

export const CardProdutos = styled.div`
  background-color: ${cores.rosa};
  padding: 8px;
  width: 320px;
  height: 338px;
  margin: 0 auto;
`
export const DescriCard = styled.p`
  width: 304px;
  height: 54px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 1px;
  color: ${cores.branca};
`
