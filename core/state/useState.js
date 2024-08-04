function useState(initialState) {
  let state = initialState;
  const setState = (newState) => {
      state = { ...state, ...newState };
      // Lógica para re-renderizar el componente
      component.update();
  };
  return [state, setState];
}

export { useState };
