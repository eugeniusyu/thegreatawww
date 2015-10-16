import React, { Component } from 'react';

export default class HomeAbout extends Component {
  render() {
    const styles = require('./Home.scss');

    return (
      <div className={styles.home}>
        <div className="container">
          <h1>About h1</h1>
          <h2>About h2</h2>
        </div>
      </div>
    );
  }
}
