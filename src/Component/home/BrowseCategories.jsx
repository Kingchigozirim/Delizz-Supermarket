const BrowseCategories = () => {
  const categories = ["Fruits", "Vegetables", "Snacks", "Drinks"];

  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow rounded text-center hover:bg-green-100"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;