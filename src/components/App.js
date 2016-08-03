import React from 'react';

import 'materialize-loader';
import 'materialize-css/bin/materialize';

class App extends React.Component {
    render() {
        return (
            <div>
                <button className="waves-effect waves-light btn">hello</button>
                <h1>Hello React Application</h1>
            </div>
        );
    }
}

export default App;