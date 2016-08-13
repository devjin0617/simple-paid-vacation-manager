import React from 'react';

class SideNav extends React.Component {

    render() {
        return (
            <div>
                <ul id="slide-out" className="side-nav">
                    <li><div className="userView">
                        <img className="background" src="http://materializecss.com/images/office.jpg" />
                            <a href="#!user"><img className="circle" src="http://materializecss.com/images/yuna.jpg" /></a>
                            <a href="#!name"><span className="white-text name">John Doe</span></a>
                            <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
            </div>
        );
    }
}


export default SideNav;