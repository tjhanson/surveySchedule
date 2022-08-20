import React from 'react'
import { Provider } from 'react-redux';
import { Container,Row,Col,Stack} from 'react-bootstrap';

import store from './redux/store';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Provider store={store}>

    </Provider>
      
  );
}

export default App;
