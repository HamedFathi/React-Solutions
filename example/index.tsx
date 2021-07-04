import * as React from 'react';
import * as ReactDOM from 'react-dom';

const HelloWorld = () => {
  
  function sayHello() {
    alert('Hello, World!');
  }
  
  return (
    <button onClick={sayHello}>Click me!</button>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
