let currentComponent = null;

function useState(initialState) {
    const component = currentComponent;
    const [state, setState] = component.stateHook(initialState);
    return [state, setState];
}

function useEffect(effect, deps) {
    const component = currentComponent;
    component.effectHook(effect, deps);
}

class Component {
    constructor(props) {
        this.props = props;
        this.state = {};
        this.hooks = [];
        this.hookIndex = 0;
        this.prevState = null;
        this._currentNode = null;
    }

    stateHook(initialState) {
        const index = this.hookIndex++;
        if (!this.hooks[index]) {
            this.hooks[index] = initialState;
        }
        const setState = (newState) => {
            this.hooks[index] = { ...this.hooks[index], ...newState };
            this.update();
        };
        return [this.hooks[index], setState];
    }

    effectHook(effect, deps) {
        const index = this.hookIndex++;
        const hasChanged = this.hooks[index]
            ? !deps.every((dep, i) => dep === this.hooks[index][1][i])
            : true;
        if (hasChanged) {
            if (this.hooks[index]) {
                this.hooks[index][0]();
            }
            this.hooks[index] = [effect(), deps];
        }
    }

    update() {
      // Implementa la lógica para re-renderizar el componente    
      this.hookIndex = 0;
      this.prevState = { ...this.state };
      this.state = { ...this.state, ...newState };
      this.componentDidUpdate(this.prevState, this.state);
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

    // Métodos del ciclo de vida
    componentDidMount() {}
    componentDidUpdate(prevState, newState) {}
    componentWillUnmount() {}
}

export default Component;
export { useState, useEffect };
