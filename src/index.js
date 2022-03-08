import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateProvider from './state/StateProvider';
import reducer, { initialState } from './state/Reducer';
import { SpeechProvider } from '@speechly/react-client';


ReactDOM.render(
  <SpeechProvider appId='b951c35e-1926-48bf-b9a1-5026b464d91f' language='en-US' >
    <StateProvider initialState={initialState} reducer={reducer} >
      <App />
    </StateProvider>
  </SpeechProvider>,
  document.getElementById('root')
);

