import { RouterProvider } from "react-router-dom";
import "./App.css";
// import Body from "./components/Body";
import { routes } from "./routes";

function App() {
  console.log("hello");

  return (
    // <div className="App">
    //   <Body />
    // </div>
    <RouterProvider router={routes} />
  );
}

export default App;
