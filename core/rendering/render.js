function render(component, container) {
    container.innerHTML = '';
    const element = component.render();
    container.appendChild(element);
    component._currentNode = element;
  }
  
  export { render };
  