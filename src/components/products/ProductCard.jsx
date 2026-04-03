import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

function formatCurrency(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value)
}

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart()
  const displayPrice = product.salePrice ?? product.price

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {product.salePrice ? (
          <span className="absolute left-3 top-3 rounded bg-[#ef4444] px-2 py-1 text-xs font-bold text-white">
            SALE
          </span>
        ) : null}
      </div>
      <div className="space-y-3 p-4">
        <h3 className="line-clamp-2 min-h-12 text-base font-bold text-slate-900">{product.name}</h3>
        <p className="line-clamp-2 min-h-10 text-sm text-slate-500">{product.description}</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-extrabold text-[#145c1a]">{formatCurrency(displayPrice)}</span>
          {product.salePrice ? (
            <span className="text-sm font-medium text-slate-400 line-through">
              {formatCurrency(product.price)}
            </span>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => addToCart({ ...product, price: displayPrice })}
            className="rounded-md bg-[#1f7a23] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#145c1a]"
          >
            Add to cart
          </button>
          <Link
            to={`/product/${product.id}`}
            className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
          >
            Details
          </Link>
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="rounded-md border border-transparent px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[#145c1a] transition hover:border-green-100 hover:bg-green-50"
          >
            Quick View
          </button>
        </div>
      </div>
    </article>
  )
}
