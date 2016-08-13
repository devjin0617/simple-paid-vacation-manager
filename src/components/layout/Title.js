
import React from 'react';

class Title extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <h2 className="header">{this.props.text}</h2>
        )
    }
}

export default Title;