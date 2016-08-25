import React from 'react';

class SideNav extends React.Component {

    render() {
        return (
            <div>
                <ul id="slide-out" className="side-nav blue-grey darken-1">
                    <li><div className="userView">
                        <img className="background" src="http://materializecss.com/images/office.jpg" />
                            <a href="#!user"><img className="circle" src="/images/profile.png" /></a>
                            <a href="#!name"><span className="white-text name">Jin</span></a>
                            <a href="#!email"><span className="white-text email">me@puding.kr</span></a>
                    </div></li>
                    <li><a href="#!" className="blue-grey-text text-lighten-4"><i className="material-icons">cloud</i>처음으로</a></li>
                    <li><a href="#!" className="blue-grey-text text-lighten-4">휴가신청</a></li>
                    <li><div className="divider blue-grey lighten-1"></div></li>
                    <li><a className="subheader blue-grey-text text-lighten-4">신청목록보기</a></li>
                    <li><a className="waves-effect blue-grey-text text-lighten-4" href="#!">달력보기</a></li>
                </ul>
            </div>
        );
    }
}


export default SideNav;