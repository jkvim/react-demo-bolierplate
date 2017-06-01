import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

if (process.env.NODE_ENV !== 'production') {
  require('./index.html'); // eslint-disable-line global-require
}

/*
  import your component and replace <App />
*/

function App() {
  return (
    <div>Hello Genius</div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
