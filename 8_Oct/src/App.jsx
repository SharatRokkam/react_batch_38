import "./App.css";
import DataFetcher from "./components/DataFetcher";

function App() {
  return <DataFetcher apiUrl="https://jsonplaceholder.typicode.com/users" />;
}

export default App;
