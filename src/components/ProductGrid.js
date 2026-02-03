import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ searchText }) {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://697eee1cd1548030ab64c019.mockapi.io/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
   const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.trim().toLowerCase())
  );
  

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
