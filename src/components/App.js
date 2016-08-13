import React from 'react';

import 'materialize-loader';
import 'materialize-css/dist/js/materialize.min';

//import Navbar from './layout/Navbar';
//import SideNav from './layout/SideNav';
//import MainContainer from './layout/MainContainer';

import {
    Navbar,
    SideNav,
    MainContainer
} from './layout';

import {
    FloattingButton
} from './button';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <SideNav />
                <MainContainer />
                <FloattingButton />
            </div>
        );
    }
}

export default App;