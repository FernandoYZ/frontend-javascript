class Renderer {
    static renderComponent(component, container) {
        const newContent = component.render();
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newContent;

        requestAnimationFrame(() => {
            if (container) {
                this.updateDOM(container, tempDiv);
            } else {
                console.error('Container null. Asegúrese de pasar un elemento DOM válido.');
            }
        });
    }

    static updateDOM(container, newContent) {
        const containerChildren = Array.from(container.childNodes);
        const newContentChildren = Array.from(newContent.childNodes);

        // Manejar nuevos nodos y actualizaciones
        newContentChildren.forEach((newNode, index) => {
            const currentNode = containerChildren[index];
            if (!currentNode) {
                container.appendChild(newNode);
            } else if (!this.nodesAreEqual(currentNode, newNode)) {
                container.replaceChild(newNode, currentNode);
            } else if (newNode.nodeType === Node.ELEMENT_NODE) {
                this.updateDOM(currentNode, newNode);
            }
        });

        // Eliminar nodos antiguos que no están presentes en el nuevo contenido.
        containerChildren.forEach((currentNode, index) => {
            if (!newContentChildren[index]) {
                container.removeChild(currentNode);
            }
        });
    }

    static nodesAreEqual(node1, node2) {
        if (node1.nodeType !== node2.nodeType) {
            return false;
        }
        if (node1.nodeType === Node.TEXT_NODE) {
            return node1.textContent === node2.textContent;
        }
        if (node1.nodeType === Node.ELEMENT_NODE) {
            const node1Attrs = node1.attributes;
            const node2Attrs = node2.attributes;
            if (node1Attrs.length !== node2Attrs.length) {
                return false;
            }
            for (let i = 0; i < node1Attrs.length; i++) {
                const attr1 = node1Attrs[i];
                const attr2 = node2Attrs.getNamedItem(attr1.name);
                if (!attr2 || attr1.value !== attr2.value) {
                    return false;
                }
            }
            // Opcional: compruebe si el nodo1 y el nodo2 tienen los mismos nodos secundarios
            const node1Children = Array.from(node1.childNodes);
            const node2Children = Array.from(node2.childNodes);
            if (node1Children.length !== node2Children.length) {
                return false;
            }
        }
        return true;
    }
}

export default Renderer;
