import React from 'react';

import 'materialize-loader';
import 'materialize-css/dist/js/materialize.min';

//import Navbar from './layout/Navbar';
//import SideNav from './layout/SideNav';
//import MainContainer from './layout/MainContainer';
//import FloattingButton from './button/FloattingButton';
//import Footer from './layout/Footer';

import {
    Navbar,
    SideNav,
    MainContainer,
    Footer
} from './components/layout';

import {
    FloattingButton
} from './components/button';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar />
                    <SideNav />
                </header>
                <main>
                    <MainContainer />
                    <FloattingButton />
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;