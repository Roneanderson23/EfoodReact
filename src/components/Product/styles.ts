import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  margin-bottom: 48px;
  position: relative;
  // border-width: 0px 1px 1px 1px;
  // border-style: solid;
  // border-color: rgba(230, 103, 103, 1);

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
  margin-top: 16px;
  margin-bottom: 8px;
  display: flex;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-heigth: 22px;
  display: block;
  margin-top: 16px;
  padding: 8px;
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
  top: 0px;
  padding: 8px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: rgba(230, 103, 103, 1);
`
