import React from 'react';

import 'materialize-loader';
import 'materialize-css/bin/materialize';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper  blue-grey darken-3">
                    <a href="#" className="brand-logo">vacation</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">1st</a></li>
                        <li><a href="#">2nd</a></li>
                        <li><a href="#">3rd</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;