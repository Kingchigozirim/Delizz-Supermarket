import heroImg from "../../assets/delizz.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative h-[500px] flex items-center px-4 md:px-10 overflow-hidden"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 max-w-2xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Quality Meets Affordability at Delizz
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
          Your premium supermarket for fresh produce, bakery, and daily essentials.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-green-600 hover:bg-green-700 transition-colors text-white px-8 py-4 rounded-xl font-semibold">
            Shop Now
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-colors text-white px-8 py-4 rounded-xl font-semibold">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;