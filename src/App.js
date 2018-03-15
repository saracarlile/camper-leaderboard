import React, { Component } from 'react';
import './App.css';

import TableData from './TableData';


class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="container">
        <TableData />
      </div>
    );
  }
}

export default App;
