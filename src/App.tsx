import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Hero from './components/Hero'

import { GlobalCss } from './styles'
import ProductsList from './components/ProductsList'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductsList />
        <Footer />
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
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
