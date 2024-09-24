import { Provider } from "react-redux";
import { Routes, Store } from "../config";
import "./App.css";

function App() {
  return (
    <Provider store={Store}>
      <Routes />;
    </Provider>
  );
}

export default App;
