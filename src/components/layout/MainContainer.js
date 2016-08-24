import React from 'react';

import VacationListView from './../list/VacationListView';

import Title from './Title';

class MainContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            latest : '확정된 휴가',
            wait : '승인대기상태',
            mine : '나의 남은 휴가목록'
        };
    }


    render() {

        return (
            <div className="container">
                <div className="section">
                    <Title text={this.state.latest}/>
                    <VacationListView />
                </div>
                <div className="section">
                    <Title text={this.state.wait}/>
                    <VacationListView />
                </div>
                <div className="section">
                    <Title text={this.state.mine}/>
                    <VacationListView />
                </div>
            </div>
        );
    }

}

export default MainContainer;