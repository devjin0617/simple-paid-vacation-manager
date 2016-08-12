import React from 'react';

class Navbar extends React.Component {

    componentDidMount() {

        //$('.left-menu').sideNav();
    }


    render() {
        return (
            <nav>
                <div className="nav-wrapper  blue-grey darken-3">
                    <ul className="left hide-on-med-and-down">
                        <li><a className="left-menu" href="sass.html"><i className="material-icons left">menu</i></a></li>
                        <li>
                            <a href="#" className="brand-logo">vacation</a>
                        </li>
                    </ul>


                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#" className="waves-effect waves-light">1st</a></li>
                        <li><a href="#" className="waves-effect waves-light">2nd</a></li>
                        <li><a href="#" className="waves-effect waves-light">3rd</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;