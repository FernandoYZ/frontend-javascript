import { render } from '../core/rendering/render';
import App from './App';

const rootElement = document.getElementById('root');
render(App(), rootElement);
