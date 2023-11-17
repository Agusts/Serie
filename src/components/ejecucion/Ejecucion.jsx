import React, { useEffect, useState } from "react";

export const useEjecucion = () => {
  const [result, setresult] = useState();
  const [numPimo, setnumPimo] = useState();
  const [numFib, setnumFib] = useState();
  const [numTriangular, setnumTriangular] = useState();

  const primo = (n) => {
    const tam = n * 4;
    let arrayPrimos = [];
    for (let i = 2; i <= tam; i++) {
      let isPrimo = true;
      //   fib[i] = fib[i - 1] + fib[i - 2];
      for (let divisor = 2; divisor < i; divisor++) {
        if (i % divisor === 0) {
          isPrimo = false;
          break;
        }
      }
      if (isPrimo) {
        arrayPrimos.push(i);
      }
    }
    // setnumPimo(arrayPrimos[n]);
    return arrayPrimos[n];
  };
  const fibonanci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    // setnumFib(fib[n]);
    return fib[n];
  };
  const tringular = (n) => {
    // setnumTriangular((n * (n + 1)) / 2);
    return (n * (n + 1)) / 2;
  };
  const serie = (n) => {
    setresult(
      (primo(parseInt(n) + 3) * tringular(parseInt(n) - 1)) /
        fibonanci(parseInt(n) - 2)
    );
  };
  return { serie, result };
};
