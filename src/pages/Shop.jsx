import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import ProductFilter from "../components/products/ProductFilter"
import ProductGrid from "../components/products/ProductGrid"
import categories from "../data/categories"
import products from "../data/products"

export default function Shop() {
  const [searchParams] = useSearchParams()
  const query = (searchParams.get("search") || "").trim().toLowerCase()

  const [selectedCategory, setSelectedCategory] = useState("all")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const displayPrice = product.salePrice ?? product.price
      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory
      const matchesMin = minPrice === "" || displayPrice >= Number(minPrice)
      const matchesMax = maxPrice === "" || displayPrice <= Number(maxPrice)

      return matchesQuery && matchesCategory && matchesMin && matchesMax
    })
  }, [maxPrice, minPrice, query, selectedCategory])

  return (
    <section className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <header className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-[#d30f26]">Next Cash and Carry style</p>
        <h1 className="text-3xl font-extrabold text-slate-900">Shop products</h1>
        <p className="text-sm text-slate-600">
          Browse featured deals, add items to cart, and use quick view for fast product checks.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onCategoryChange={setSelectedCategory}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
          onReset={() => {
            setSelectedCategory("all")
            setMinPrice("")
            setMaxPrice("")
          }}
        />

        <div className="space-y-4">
          <div className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-[#b70d20]">
            Showing {filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"}
          </div>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </section>
  )
}
