import React from 'react';

class VacationCell extends React.Component {

    render() {
        return (
        <li className="collection-item avatar">
            <img src="http://materializecss.com/images/yuna.jpg" alt="" className="circle" />
            <span className="title">jin</span>
            <p>
                2016.08.01(월) - 2016.08.05(금) : 5일
                <br/>
                자유로운 영혼이 되기 위해 휴가신청
            </p>
            <a href="#!" className="secondary-content"><i className="material-icons blue-grey-text darken-3">grade</i></a>
        </li>
        )
    }
}

export default VacationCell;