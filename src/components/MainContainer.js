import React from 'react';

class MainContainer extends React.Component {



    render() {
        return (
            <div className="container">
                it's container
                <button className="waves-effect waves-light btn light-blue darken-4"><i className="material-icons left">cloud</i>hello</button>
                <h1>Hello React Application</h1>
            </div>
        );
    }

}

export default MainContainer;