import React from 'react';
import { render } from 'react-dom';

import Root from '../containers/Root';

let obj = {
  state: ''
};

const { state } = obj;
const initialState = JSON.parse(state || '{}');

import createStore from '../redux/store/configureStore';

const root = document.createElement('div');

root.id = '#squirmlabs-bulletin-board';
root.className = 'app';

document.body.insertBefore(root, document.body.children[0]);

render(<Root store={createStore(initialState)} />, root);

