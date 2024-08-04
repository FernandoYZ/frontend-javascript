class VirtualDOM {
    static createElement(tag, props, ...children) {
        return { tag, props, children };
    }

    static render(vnode, container) {
        const dom = this.createDOMElement(vnode);
        container.appendChild(dom);
    }

    static createDOMElement(vnode) {
        if (typeof vnode === 'string') {
            return document.createTextNode(vnode);
        }

        const { tag, props, children } = vnode;
        const domNode = document.createElement(tag);

        Object.entries(props || {}).forEach(([key, value]) => {
            domNode[key] = value;
        });

        children.forEach(child => {
            const childNode = this.createDOMElement(child);
            domNode.appendChild(childNode);
        });

        return domNode;
    }

    static diffAndUpdate(container, oldVNode, newVNode) {
        if (!oldVNode) {
            this.render(newVNode, container);
        } else if (!newVNode) {
            container.removeChild(container.childNodes[0]);
        } else if (this.hasChanged(oldVNode, newVNode)) {
            container.replaceChild(this.createDOMElement(newVNode), container.childNodes[0]);
        } else if (newVNode.tag) {
            const oldChildren = oldVNode.children || [];
            const newChildren = newVNode.children || [];
            const max = Math.max(oldChildren.length, newChildren.length);
            for (let i = 0; i < max; i++) {
                this.diffAndUpdate(container.childNodes[0], oldChildren[i], newChildren[i]);
            }
        }
    }

    static hasChanged(oldVNode, newVNode) {
        return typeof oldVNode !== typeof newVNode ||
            typeof oldVNode === 'string' && oldVNode !== newVNode ||
            oldVNode.tag !== newVNode.tag;
    }
}

export default VirtualDOM;