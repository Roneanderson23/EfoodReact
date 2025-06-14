import { Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import Categories from './components/pages/Categories'

//rotas de elementos home e categories
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas
