import { html } from '../../libs/hyperhtml.min.js';

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
            if (key.startsWith('on')) {
                domNode.addEventListener(key.substring(2).toLowerCase(), value);
            } else if (key === 'className') {
                domNode.className = value;
            } else if (key === 'style') {
                Object.assign(domNode.style, value);
            } else {
                domNode[key] = value;
            }
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
                this.diffAndUpdate(container.childNodes[i], oldChildren[i], newChildren[i]);
            }
        }
    }

    static hasChanged(oldVNode, newVNode) {
        return typeof oldVNode !== typeof newVNode ||
            (typeof oldVNode === 'string' && oldVNode !== newVNode) ||
            oldVNode.tag !== newVNode.tag;
    }

    static createTemplate(strings, ...values) {
        return html(strings, ...values);
    }
}

export default VirtualDOM;
