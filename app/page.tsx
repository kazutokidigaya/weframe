"use client";

import ProductDetails from "./components/ProductDetails";
import SimilarProducts from "./components/SimilarProducts";
import ServiceHighlights from "./components/ServiceHighlights";
import Recommendations from "./components/Recommendations";

export default function HomePage() {
  return (
    <div>
      {/* Product Details Section */}
      <ProductDetails />

      {/* Similar Products Section */}
      <SimilarProducts />

      {/* Recommendations Section */}
      <Recommendations />

      {/* Service Highlights Section */}
      <ServiceHighlights />
    </div>
  );
}
