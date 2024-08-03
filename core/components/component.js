class Component {
    constructor(props) {
      this.props = props;
      this.state = {};
    }
  
    setState(newState) {
      this.state = { ...this.state, ...newState };
      this.update();
    }
  
    update() {}
  
    render() {
      throw "Componentes hijos deben implementar el método render";
    }
  }
  
  export default Component;
  