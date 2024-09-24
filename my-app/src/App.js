import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteStack from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteStack />
      </BrowserRouter>
    </>
  );
}

export default App;
