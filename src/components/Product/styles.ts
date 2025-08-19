import styled from 'styled-components'

import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  max-width: 472px;
  height: 217px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 120px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Section = styled.section`
  max-width: 472px;
  height: 181px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: rgba(230, 103, 103, 1);
`
export const MiniCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 216px;
`
export const Titulo = styled.h3`
  width: 100%;
  height: 21px;
  font-family: Roboto;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
  margin-top: 8px;
  margin-left: 8px;
`
export const Nota = styled.p`
  font-family: Roboto;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  margin-top: 8px;
  margin: auto;
`
export const Star = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 6px;
  margin-right: 8px;
  margin-left: 8px;
`

export const Descricao = styled.p`
  width: 456px;
  height: 88px;
  font-family: Roboto;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0px;
  margin: 8px;
  margin-bottom: 16px;
`
export const Destaque = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
