import HeroSection from "../Component/home/HeroSection";
import FlashSales from "../Component/home/FlashSales";
import CategoryPreview from "../Component/home/CategoryPreview";
import FeaturedProducts from "../Component/home/FeaturedProducts";
import BestSelling from "../Component/home/BestSelling";
import NewStock from "../Component/home/NewStock";
import Footer from "../Component/layout/Footer";
import products from "../data/product";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <FlashSales products={products.slice(0, 4)} />
      <CategoryPreview />
      <BestSelling products={products.slice(0, 4)} />
      <FeaturedProducts products={products.slice(2, 6)} />
      <NewStock products={products.slice(0, 4)} />
      <Footer />
    </div>
  );
}
