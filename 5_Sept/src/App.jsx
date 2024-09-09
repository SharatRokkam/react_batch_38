import "./App.css";
import Cards from "./components/Cards";
// import ClassComp from "./components/ClassComp";
// import Functional from "./components/Functional";

function App() {
  return (
    <div style={{display: "flex", gap: "20px"}}>
      {/* <Functional />
      <ClassComp /> */}

      <Cards  />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}

export default App;
