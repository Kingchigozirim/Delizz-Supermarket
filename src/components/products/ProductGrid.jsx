import { useMemo, useState } from "react"
import ProductCard from "./ProductCard"
import QuickViewModal from "./QuickViewModal"

export default function ProductGrid({ products }) {
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  const hasProducts = useMemo(() => products.length > 0, [products.length])

  return (
    <>
      {hasProducts ? (
        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(selectedProduct) => setQuickViewProduct(selectedProduct)}
            />
          ))}
        </section>
      ) : (
        <section className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <h3 className="text-lg font-semibold text-slate-900">No products found</h3>
          <p className="mt-2 text-sm text-slate-500">Try changing your selected filters.</p>
        </section>
      )}

      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  )
}
