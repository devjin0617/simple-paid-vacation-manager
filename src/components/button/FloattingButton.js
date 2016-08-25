import React from 'react';

class FloattingButton extends React.Component {

    render() {

        return (
            <div className="fixed-action-btn" style={FBStyle}>
                <a className="btn-floating btn-large red">
                    <i className="large material-icons">mode_edit</i>
                </a>
                <ul>
                    <li><a className="btn-floating red tooltipped" data-position="left" data-delay="50" data-tooltip="빠른휴가신청"><i className="material-icons">insert_chart</i></a></li>
                    <li><a className="btn-floating yellow darken-1 tooltipped" data-position="left" data-delay="50" data-tooltip="짧은 글 남기기"><i className="material-icons">format_quote</i></a></li>
                </ul>
            </div>
        );
    }
}

var FBStyle = {
    bottom : '45px',
    right : '24px'
};

export default FloattingButton;