import styled from 'styled-components'
import { cores } from '../../styles'

export const ListGem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  padding-top: 32px;
`

export const Itens = styled.li`
  width: 100%;
  height: 100%;
  background-color: ${cores.rosa};
  color: rgba(255, 235, 217, 1);
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition-delay: 2ms;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 40%;
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.rosa};
  height: 344px;
  display: flex;
  z-index: 1;

  div {
    img {
      width: 280px;
      height: 280px;
      margin: 32px;
    }
  }

  header {
    display: block;
    width: 656px;

    img {
      width: 16px;
      height: 16px;
      margin-left: 650px;
      display: flex;
    }
  }

  h2 {
    width: 140px;
    height: 21px;
    margin: 8px;
    margin-bottom: 16px;
    font-family: Roboto;
    font-weight: 900;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    color: ${cores.branca};
  }

  p {
    width: 656px;
    height: 176px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0px;
    margin-bottom: 16px;
  }
`
