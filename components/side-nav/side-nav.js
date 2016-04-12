import React from 'react';

export default class SideNav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let className = 'side-nav ';
        className += this.props.isSideNavOpen ? 'open' : 'close';

        return (
            <div className={className}>
                <div className="user-info">
                </div>
                <div className="side-nav-links">
                </div>
            </div>
        );
    }
}
