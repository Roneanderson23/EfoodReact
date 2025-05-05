import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background: ${cores.branca};
  margin-bottom: 48px;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Nota = styled.img`
  width: 55px;
  height: 21px;
  margin-top: 14px;
  margin-bottom: 16px;
  display: flex;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin: 8px;
`
export const Descricao = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  display: block;
  padding-top: 16px;
  padding-bottom: 16px;
  border-color: ${cores.rosa};
  margin: 8px;
`
export const SubCard = styled.div`
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  padding-top: 2px;
`

export const MiniCard = styled.div`
  width: 55px;
  height: 21px;
  margin-left: 400px;
  display: flex;
  padding-top: 16px;
`
export const Button = styled.button`
  width: 30%;
  padding: 8px;
  margin: 8px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 1px;
  text-align: center;
  border: none;
  cursor: pointer;
  background-color: ${cores.rosa};
  color: ${cores.corTituloEbotaoCard};
`
