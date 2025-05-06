import { useParams } from 'react-router-dom'

const Product = () => {
  const teste = useParams()

  console.log(teste)

  return <div>PRODUTOS</div>
}

export default Product
