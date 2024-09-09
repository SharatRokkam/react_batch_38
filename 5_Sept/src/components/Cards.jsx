import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Image : - Absolute path(internet) and Relative(downloading image and providing path)

const Cards = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.jpg"
        className="card-img-top"
        alt="pizza"
      />
      <div className="card-body">
        <h5 className="card-title">Chicken Pizza with Salad</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Cards;
