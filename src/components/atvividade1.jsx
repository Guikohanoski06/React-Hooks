import React, { useRef } from 'react';

const ClearableInput = () => {
  const inputRef = useRef(null);

  const clearInput = () => {
    inputRef.current.value = '';
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Digite algo..." />
      <button onClick={clearInput}>Limpar</button>
    </div>
  );
};

export default ClearableInput;
