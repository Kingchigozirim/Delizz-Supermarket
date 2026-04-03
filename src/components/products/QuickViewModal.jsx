import { useEffect } from "react"
import { useCart } from "../../context/CartContext"

function formatCurrency(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value)
}

export default function QuickViewModal({ product, isOpen, onClose }) {
  const { addToCart } = useCart()
  useEffect(() => {
    if (!isOpen) return

    const onEscape = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", onEscape)
    return () => window.removeEventListener("keydown", onEscape)
  }, [isOpen, onClose])

  if (!isOpen || !product) return null

  const displayPrice = product.salePrice ?? product.price

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
      <div className="absolute inset-0" onClick={onClose} />
      <article className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1 text-sm font-semibold text-white"
        >
          Close
        </button>
        <div className="grid gap-6 p-4 md:grid-cols-2 md:p-6">
          <img
            src={product.image}
            alt={product.name}
            className="h-72 w-full rounded-xl object-cover md:h-full"
          />
          <div className="space-y-4">
            <p className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#145c1a]">
              Quick View
            </p>
            <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
            <p className="text-sm leading-6 text-slate-600">{product.description}</p>
            <div className="flex items-center gap-3">
              <p className="text-2xl font-extrabold text-[#145c1a]">{formatCurrency(displayPrice)}</p>
              {product.salePrice ? (
                <p className="text-sm font-semibold text-slate-400 line-through">
                  {formatCurrency(product.price)}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => {
                addToCart({ ...product, price: displayPrice })
                onClose()
              }}
              className="rounded-md bg-[#1f7a23] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#145c1a]"
            >
              Add to cart
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}
