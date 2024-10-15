import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";
import RouteStack from "./routes";
import NavBarLayout from "./layouts/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBarLayout />
        <RouteStack />
      </BrowserRouter>
    </div>
  );
}

export default App;
