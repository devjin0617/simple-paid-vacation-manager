import React from 'react';

import 'materialize-loader';
import 'materialize-css/dist/js/materialize.min';

import Navbar from './Navbar';
import SideNav from './SideNav';
import MainContainer from './MainContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <SideNav />
                <MainContainer />
            </div>
        );
    }
}

export default App;