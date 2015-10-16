import React, { Component } from 'react';

export default class HomeContact extends Component {
  render() {
    const styles = require('./Home.scss');

    return (
      <div className={styles.home}>
        <div className="container">
          <h1>Contact h1</h1>
          <h2>Contact h2</h2>
        </div>
      </div>
    );
  }
}
