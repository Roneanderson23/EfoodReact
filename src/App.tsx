import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Hero from './components/Hero'

// import Product from './components/Product'
import { GlobalCss } from './styles'
import ProductsList from './components/ProductsList'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        {/* <Product /> */}
        {/* <ProductsList title="destaque" /> */}
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Hero />
        <Footer />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
