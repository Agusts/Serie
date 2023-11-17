import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Formulario } from "./components/formulario/formulario";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Formulario />
    </div>
  );
}

export default App;
