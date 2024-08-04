class VirtualDOM {
    static createElement(tag, props, ...children) {
        return { tag, props, children };
    }

    static render(vnode, container) {
        if (typeof vnode === 'string') {
            const textNode = document.createTextNode(vnode);
            container.appendChild(textNode);
            return;
        }

        const { tag, props, children } = vnode;
        const domNode = document.createElement(tag);

        Object.entries(props || {}).forEach(([key, value]) => {
            domNode[key] = value;
        });

        children.forEach(child => this.render(child, domNode));

        container.appendChild(domNode);
    }

    static diffAndUpdate(oldVNode, newVNode, container) {
        if (!oldVNode) {
            VirtualDOM.render(newVNode, container);
        } else {
            // Por definir la lógica de diff y actualización del DOM real
        }
    }
}

export default VirtualDOM;