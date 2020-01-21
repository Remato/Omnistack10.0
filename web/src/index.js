import React from 'react'; //importa react toda vez q for usar HTML dentro dele
import ReactDOM from 'react-dom'; //é para se comunicar com arvore de elementos no caso o code HTML da page
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
//ele ta renderizando o arquivo ./App dentro da tag <root> </root> no codigo index.html

//JSX (Javascript + HTML)
