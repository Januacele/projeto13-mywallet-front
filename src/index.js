import ReactDom from "react-dom";

import './assets/reset/reset.css';
import './assets/estiloGeral/style.css';

import App from './components/App';

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App/>);



ReactDom.render(<App />, document.querySelector(".root"));


