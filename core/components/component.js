class Component {
    constructor(props) {
      this.props = props;
      this.state = {};
      this.prevState = null;
    }
  
    setState(newState) {
      this.prevState = { ...this.state };
      this.state = { ...this.state, ...newState };
      this.update();
    }
  
    update() {
      // Implementa la lógica para re-renderizar el componente
      const renderedOutput = this.render();
      this._replaceNode(renderedOutput);
    }
  
    _replaceNode(newNode) {
      const oldNode = this._currentNode;
      if (oldNode && oldNode.parentNode) {
        oldNode.parentNode.replaceChild(newNode, oldNode);
      }
      this._currentNode = newNode;
    }
  
    render() {
      throw new Error("Componentes hijos deben implementar el método render");
    }
  }
  
  export default Component;
  