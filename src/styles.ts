import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  rosa: '#E66767',
  corTituloEbotaoCard: '#FFEBD9',
  corSubTitulo: '#FFFFFF',
  corDeFundo: '#00000080',
  corFundoContainer: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, san-serif;
  list-style: none;
}

body {
  background-color: ${cores.corFundoContainer};
  color: ${cores.rosa};
}

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
