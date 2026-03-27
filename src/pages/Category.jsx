import { useMemo } from "react"
import { useParams } from "react-router-dom"
import ProductGrid from "../components/products/ProductGrid"
import categories from "../data/categories"
import products from "../data/products"

export default function Category() {
  const { id } = useParams()
  const currentCategory = categories.find((category) => category.id === id)
  const categoryProducts = useMemo(
    () => products.filter((product) => product.category === id),
    [id],
  )

  return (
    <section className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <header className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-[#d30f26]">Category collection</p>
        <h1 className="text-3xl font-extrabold text-slate-900">
          {currentCategory?.name ?? "Category"}
        </h1>
        <p className="text-sm text-slate-600">
          Showing items for category: <span className="font-semibold">{id}</span>
        </p>
      </header>

      {!currentCategory ? (
        <section className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <h2 className="text-lg font-semibold text-slate-900">Category not found</h2>
          <p className="mt-2 text-sm text-slate-500">
            Please pick a valid category from the menu.
          </p>
        </section>
      ) : (
        <ProductGrid products={categoryProducts} />
      )}
    </section>
  )
}
