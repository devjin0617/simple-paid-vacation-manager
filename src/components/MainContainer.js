import React from 'react';

import VacationListView from './VacationListView';

class MainContainer extends React.Component {



    render() {
        return (
            <div className="container">
                <div className="section">
                </div>
                it's container
                <button className="waves-effect waves-light btn light-blue darken-4"><i className="material-icons left">cloud</i>hello</button>
                <h1>Hello React Application</h1>

                <VacationListView />
            </div>
        );
    }

}

export default MainContainer;