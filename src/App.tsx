import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'

import { GlobalCss } from './styles'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductList title={'promocoes'} background={'white'} />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
