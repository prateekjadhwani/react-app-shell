import React from 'react';
import Header from './header/header';
import MainBody from './mainbody/main-body';
import Footer from './footer/footer';
import SideNav from './side-nav/side-nav';
import '../scss/main.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSideNavOpen : false
        }
    }

    render() {
        return (
            <div>
                <SideNav
                    isSideNavOpen={this.state.isSideNavOpen}
                />
                <Header
                    toggleSideNav={this.toggleSideNav.bind(this)}
                />
                <MainBody />
                <Footer />
            </div>
        );
    }

    toggleSideNav() {

        this.setState({
            isSideNavOpen: !this.state.isSideNavOpen
        });
    }
}