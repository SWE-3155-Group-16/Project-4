import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import { HashRouter, Route, Link } from 'react-router-dom';

import Header from './components/header/header';
import Example from './components/example/Example';
import States from './components/states/States';

// Render header
ReactDOM.render(
    <Header />,
    document.getElementById('reactappHeader')
);

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="container">

                    <div className="toolbar">
                        <Link className="navButton" to="/example">
                            Example
                        </Link>

                        <Link className="navButton" to="/states">
                            States
                        </Link>
                    </div>

                    <hr />

                    <Route path="/example" component={Example} />
                    <Route path="/states" component={States} />

                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('reactapp')
);