const CategoryPreview = () => {
  const categories = [
    {
      name: "Fruits",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
    },
    {
      name: "Vegetables",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    },
    {
      name: "Beverages",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
    {
      name: "Snacks",
      image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Browse Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-40 object-cover group-hover:scale-110 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPreview;