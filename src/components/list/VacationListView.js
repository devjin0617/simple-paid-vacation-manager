import React from 'react';

import VacationCell from './cell/VacationCell';

class VacationListView extends React.Component {

    render() {

        return (
            <ul className="collection">
                <VacationCell />
                <VacationCell />
                <VacationCell />
            </ul>
        );
    }
}

export default VacationListView;