import { useParams } from 'react-router-dom'

export default function Category() {
  const { id } = useParams()
  return (
    <section>
      <h1>Category: {id}</h1>
      <p>Showing items for category '{id}'.</p>
    </section>
  )
}
