import useProducts from "./hooks/useProducts";
import "./App.css";
import { useMutation } from "@tanstack/react-query";

const App = () => {
  // const mutation = useMutation({
  //   mutationFn: () =>
  //     fetch("https://fakestoreapi.com/products", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         title: "test product",
  //         price: 13.5,
  //         description: "lorem ipsum set",
  //         image: "https://i.pravatar.cc",
  //         category: "electronic",
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((json) => console.log(json)),
  // });

  const { isPending, isError, data, error } = useProducts();

  if (isPending) {
    return <h3>Loading...⁉️</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }
  return (
    <>
      {/* {mutation.isPending ? (
        <p>Adding Product...</p>
      ) : (
        <>
          {mutation.isError ? <p>{mutation.error.message}</p> : null}
          <button onClick={() => mutation.mutate()}>Add Product</button>
          {mutation.isSuccess && <p>Product Added</p>}
        </>
      )} */}
      <div className="container">
        {data.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
