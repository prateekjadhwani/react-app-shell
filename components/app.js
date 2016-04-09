import React from 'react';
import Header from './header/header';
import MainBody from './mainbody/main-body';
import Footer from './footer/footer';
import '../scss/main.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <MainBody />
                <Footer />
            </div>
        );
    }
}