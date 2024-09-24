import { Link, useSearchParams } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Mobile", category: "Electronics" },
  { id: 3, name: "Speaker", category: "Electronics" },
  { id: 4, name: "Shirt", category: "Clothing" },
  { id: 5, name: "Trousers", category: "Clothing" },
];

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <>
      <h1>Product Catalog</h1>

      <button onClick={() => setSearchParams({ category: "Electronics" })}>
        Electronics
      </button>
      <button onClick={() => setSearchParams({ category: "Clothing" })}>
        Clothing
      </button>
      <button onClick={() => setSearchParams({})}>All Products</button>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
