import styled from 'styled-components'
import { cores } from '../../styles'

export const Itens = styled.ul`
  display: flex;
`

export const Item = styled.li`
  margin-right: 16px;

  img {
    width: 280px;
    height: 280px;
    // object-fit: cover;
  }
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

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    opacity: 50%;
  }
`

export const ModalContent = styled.div`
  width: 100%;
  height: 344px;
  z-index: 1;

  header {
    display: flex;
    justify-content: end;
    margin: 8px;
  }

  img {
    display: block;
    max-width: 100%;
  }
`

export const CardModal = styled.div`
  display: flex;
  justify-content: space-between;


  img {
    width: 280px;
    height: 280px;
    margin-left: 32px;
  }
  }

  h1{
    font-family: Roboto;
    font-weight: 900;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 1px;
    color: ${cores.branca};
  }

  p {
    margin-top: 16px;
    margin-right: 32px;
    width: 656px;
    height: 176px;
    color: ${cores.branca};
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1px;
    margin-bottom: 30px;
  }

  button {
    width: 250px;
    height: 24px;
    font-family: Roboto;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 1px;
    text-align: center;
    color: ${cores.rosa}
  }
`
