import React, { useState, useMemo } from 'react';

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const FactorialCalculator = () => {
  const [number, setNumber] = useState(0);

  const memoizedFactorial = useMemo(() => {
    return factorial(number);
  }, [number]);

  return (
    <div>
      <h1>Calculadora de Fatorial</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        placeholder="Digite um número"
      />
      <h2>Fatorial de {number}: {memoizedFactorial}</h2>
    </div>
  );
};

export default FactorialCalculator;
