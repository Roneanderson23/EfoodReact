import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import Footer from './components/Footer'

//rotas do componentes routes
import Rotas from './routes'

// retornando rotas
function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
