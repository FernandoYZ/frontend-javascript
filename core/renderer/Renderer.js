import VirtualDOM from './virtualDOM';

class Renderer {
    static renderComponent(component, container) {
        const newVNode = component.render();
        requestAnimationFrame(() => {
            if (container) {
                if (!component._currentVNode) {
                    VirtualDOM.render(newVNode, container);
                } else {
                    VirtualDOM.diffAndUpdate(container, component._currentVNode, newVNode);
                }
                component._currentVNode = newVNode;
            } else {
                console.error('Container null. Asegúrese de pasar un elemento DOM válido.');
            }
        });
    }
}

export default Renderer;
