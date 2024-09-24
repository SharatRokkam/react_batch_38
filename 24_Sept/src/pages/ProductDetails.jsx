import { Outlet, useParams, Link } from "react-router-dom";

const productDetails = {
  1: {
    name: "Laptop",
    description: "This is amaazing laptop",
    picture: "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg",
  },
  2: {
    name: "Mobile",
    description: "This is amazing Mobile",
    picture:
      "https://ik.imagekit.io/3dqckpw4d/upload/iphone_12___Purple1657182290iphone-12-purple.png",
  },
  3: {
    name: "Speaker",
    description: "This is amazing speaker",
    picture:
      "https://avstore.in/cdn/shop/products/white4_964a08f0-a2ce-46b0-8013-353c08e23e8f.png?v=1615287046",
  },
  4: {
    name: "Shirt",
    description: "This is amazing shirt",
    picture: "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg",
  },
  5: {
    name: "Trousers",
    description: "This is amazing trouser",
    picture: "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg",
  },
};
const ProductDetails = () => {
  const { id } = useParams();
  const product = productDetails[id];

  if (!product) {
    return <h3>Product not found</h3>;
  }

  return (
    <>
      <div>
        <img src={product.picture} alt={product.name} />
        <h2>{product.name}</h2>
        <h4>{product.description}</h4>

        <h3>More Information</h3>
        <ul>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <li>
            <Link to="specification">Specification</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default ProductDetails;
