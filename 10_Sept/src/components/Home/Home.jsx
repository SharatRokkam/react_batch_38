import "./home.css";
import styles from "./home.module.css";

const Home = () => {
  let css = {
    color: "red",
    backgroundColor: "blue",
    border: "1px solid black",
  };

  return (
    <>
      <h1 style={css}>Inline Styling</h1>
      <h1 className="external">External CSS</h1>
      <h3 className={styles.primary}>Module CSS</h3>
    </>
  );
};

export default Home;
