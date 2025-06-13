import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  margin-bottom: 48px;
  position: relative;
  width: 472px;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Titulo = styled.h3`
  font-family: Roboto;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 1px;
  margin-top: 8px;
  margin-bottom: 16px;
`
export const Descricao = styled.p`
  font-size: 14px;
  margin-top: 16px;
  padding: 8px;
  margin-bottom: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
`
export const Notas = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const MiniCard = styled.div`
  padding: 8px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: rgba(230, 103, 103, 1);
`
