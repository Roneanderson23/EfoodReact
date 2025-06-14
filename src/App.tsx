import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'

import { GlobalCss } from './styles'
import Footer from './components/Footer'

//rotas do componentes routes
import Rotas from './routes'

// retornando rotas
function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
