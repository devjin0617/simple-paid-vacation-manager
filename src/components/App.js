import React from 'react';

import 'materialize-loader';
import 'materialize-css/bin/materialize';

import Navbar from './Navbar';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <button className="waves-effect waves-light btn light-blue darken-4">hello</button>
                <h1>Hello React Application</h1>
            </div>
        );
    }
}

export default App;