import React from 'react';

class VacationListView extends React.Component {

    render() {

        return (
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src="http://materializecss.com/images/yuna.jpg" alt="" className="circle" />
                        <span className="title">jin</span>
                        <p>
                            2016.08.01(월) - 2016.08.05(금) : 5일
                            <br/>
                            자유로운 영혼이 되기 위해 휴가신청
                        </p>
                </li>
                <li className="collection-item avatar">
                    <img src="http://materializecss.com/images/yuna.jpg" alt="" className="circle" />
                    <span className="title">jin</span>
                    <p>
                        2016.08.01(월) - 2016.08.05(금) : 5일
                        <br/>
                        자유로운 영혼이 되기 위해 휴가신청
                    </p>
                </li>
            </ul>
        );
    }
}

export default VacationListView;