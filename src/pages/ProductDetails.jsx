import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"
import products from "../data/products"

function formatCurrency(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value)
}

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find((entry) => entry.id === id)
  const displayPrice = product?.salePrice ?? product?.price
  const gallery = product ? [product.image, ...(product.gallery || [])] : []
  const [activeImage, setActiveImage] = useState(gallery[0] || "")

  if (!product) {
    return (
      <section className="mx-auto w-full max-w-4xl space-y-4 px-4 py-8 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Product not found</h1>
        <p className="text-sm text-slate-600">We could not find the product you requested.</p>
        <Link
          className="inline-flex rounded-md bg-[#d30f26] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b70d20]"
          to="/shop"
        >
          Back to Shop
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <article className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-2 md:p-6">
        <div className="space-y-3">
          <img
            src={activeImage || product.image}
            alt={product.name}
            className="h-80 w-full rounded-xl object-cover md:h-[28rem]"
          />
          <div className="grid grid-cols-4 gap-2">
            {gallery.slice(0, 4).map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveImage(image)}
                className={`overflow-hidden rounded-md border ${
                  activeImage === image ? "border-[#d30f26]" : "border-slate-200"
                }`}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} className="h-20 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#d30f26]">
            Product details
          </p>
          <h1 className="text-3xl font-extrabold text-slate-900">{product.name}</h1>
          <p className="text-sm leading-6 text-slate-600">{product.description}</p>
          <p className="text-sm text-slate-500">
            SKU: <span className="font-semibold">{product.sku}</span>
          </p>

          <div className="flex items-center gap-3">
            <p className="text-3xl font-extrabold text-[#d30f26]">{formatCurrency(displayPrice)}</p>
            {product.salePrice ? (
              <p className="text-sm font-semibold text-slate-400 line-through">
                {formatCurrency(product.price)}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              className="rounded-md bg-[#d30f26] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#b70d20]"
              onClick={() => addToCart({ ...product, price: displayPrice })}
            >
              Add to Cart
            </button>
            <Link
              className="rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              to="/cart"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}
