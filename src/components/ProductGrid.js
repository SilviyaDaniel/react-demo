import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ searchText }) {
  const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("https://697eee1cd1548030ab64c019.mockapi.io/products")
      .then(res => res.json())
      .then(data => { setProducts(data); setLoading(false); });
  }, []);
   const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.trim().toLowerCase())
  );
  
  if (loading) {
    return <p style={{ padding: 20 }}>Loading products...</p>;
  }

  return (
    <>
    <div className="product-grid-wrapper">
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found</p>
      )}
      </div>
    </div>
    </>
  );
}

export default ProductGrid;
