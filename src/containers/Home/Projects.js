import React, { Component } from 'react';

export default class HomeProjects extends Component {
  render() {
    const styles = require('./Home.scss');

    return (
      <div className={styles.home}>
        <div className="container">
          <h1>Projects h1</h1>
          <h2>Projects h2</h2>
        </div>
      </div>
    );
  }
}
