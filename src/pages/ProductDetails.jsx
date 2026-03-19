import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const { id } = useParams()
  return (
    <section>
      <h1>Product: {id}</h1>
      <p>Details for product '{id}'.</p>
    </section>
  )
}
