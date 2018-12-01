import React, {Component} from 'react';

class App extends Component {
    static logUpdate() {
        console.log("Updated");
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="./img/logo.svg" className="App-logo" alt="logo"/>
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a className="App-link"
                       href="https://reactjs.org"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {App.logUpdate()}
                </header>
            </div>
        );
    }
}

export default App;
