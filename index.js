import React from 'react';
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV !== 'production') {
    require('./index.html'); // eslint-disable-line global-require
}

/*
 import your component and replace <App />
 */

function App() {
    return (
        <div/>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
