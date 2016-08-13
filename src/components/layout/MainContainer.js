import React from 'react';

import VacationListView from './../VacationListView';

import Title from './Title';

class MainContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            text : 'latest'
        };
    }


    render() {

        return (
            <div className="container">
                <div className="section">
                    <Title text={this.state.text}/>
                    <VacationListView />
                </div>
            </div>
        );
    }

}

export default MainContainer;