import { h, render } from '../../libs/preact.min.js';
import { html } from '../../libs/hyperhtml.min.js';

class Renderer {
    static renderComponent(component, container) {
        if (!container) {
            throw new Error('Container is null. Proporcione un elemento DOM válido.');
        }

        const newVNode = component.render();
        requestAnimationFrame(() => {
            if (!component._currentVNode) {
                render(newVNode, container);
            } else {
                render(newVNode, container, component._currentVNode);
            }
            component._currentVNode = newVNode;
        });
    }

    static createTemplate(strings, ...values) {
        return html(strings, ...values);
    }
}

export default Renderer;
