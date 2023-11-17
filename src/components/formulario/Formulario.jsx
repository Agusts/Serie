import React, { useState } from "react";
import { useEjecucion } from "../ejecucion/ejecucion";
import { Text } from "../Text/Text";
export const Formulario = () => {
  const { serie, result } = useEjecucion();
  const [val, setval] = useState();
  const handleChange = (event) => {
    console.log(event.target.value);
    setval(event.target.value);
  };
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleInput" className="form-label">
          Introduce(n):
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInput"
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => {
          console.log(val);
          serie(val);
        }}
      >
        Calcular
      </button>
      <Text texto={result} />
    </div>
  );
};
