import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UIControls from './ui-controls';
import Calendar from './calendar';

export default class App extends Component {

  render() {
    return (
      <div className='hello'>
        <h1>Kynareth</h1>
        <UIControls />
        <Calendar />
      </div>
    );
  }

}
