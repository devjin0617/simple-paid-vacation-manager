import React from 'react';

import VacationListView from './../VacationListView';

class MainContainer extends React.Component {



    render() {
        return (
            <div className="container">
                <div className="section">
                    <VacationListView />
                </div>
            </div>
        );
    }

}

export default MainContainer;