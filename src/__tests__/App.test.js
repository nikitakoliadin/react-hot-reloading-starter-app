import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-testing-library';

import App from '../components/App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders text', () => {
    const {getByText} = render(<App/>);
    expect(getByText('Learn React')).toBeInTheDocument();
});

it('renders text', () => {
    const {getByText} = render(<App/>);
    expect(getByText('Edit and save to reload.')).toBeInTheDocument();
});

it('renders text', () => {
    const {getByText} = render(<App/>);
    expect(getByText('src/App.js')).toBeInTheDocument();
});
