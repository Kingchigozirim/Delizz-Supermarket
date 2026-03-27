export default function ProductFilter({
  categories,
  selectedCategory,
  minPrice,
  maxPrice,
  onCategoryChange,
  onMinPriceChange,
  onMaxPriceChange,
  onReset,
}) {
  return (
    <aside className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">Filter products</h3>
        <p className="mt-1 text-xs text-slate-500">Category and price range</p>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none ring-red-200 transition focus:border-red-300 focus:ring-2"
        >
          <option value="all">All categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="minPrice">
            Min price (NGN)
          </label>
          <input
            id="minPrice"
            type="number"
            min="0"
            value={minPrice}
            onChange={(event) => onMinPriceChange(event.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-red-200 transition focus:border-red-300 focus:ring-2"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="maxPrice">
            Max price (NGN)
          </label>
          <input
            id="maxPrice"
            type="number"
            min="0"
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(event.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-red-200 transition focus:border-red-300 focus:ring-2"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="w-full rounded-md border border-[#d30f26] px-3 py-2 text-sm font-semibold text-[#d30f26] transition hover:bg-red-50"
      >
        Reset filters
      </button>
    </aside>
  )
}
