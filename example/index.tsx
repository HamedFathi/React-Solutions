import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { If } from 'react-solutions';

const HelloWorld = () => {

  function sayHello() {
    alert('Hello, World!');
  }

  return (
    <If condition={true}>
      <button onClick={sayHello}>Click me!</button>
    </If>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
