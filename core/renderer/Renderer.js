class Renderer {
    static createElement(tag, props = {}, ...children) {
      const element = document.createElement(tag);
      
      for (const [key, value] of Object.entries(props)) {
        element.setAttribute(key, value);
      }
      
      children.forEach(child => {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
          element.appendChild(child);
        } else {
          // Assume it's a component that has a `render` method
          element.appendChild(child.render());
        }
      });
      
      return element;
    }
  }
  
  export default Renderer;
  