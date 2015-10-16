import React, {Component} from 'react';
import {Isotope} from 'components';

const tempData = [{
  name: 'One Top Development',
  value: 'projects',
  image: require('./images/project_ot.jpg')
}, {
  name: 'Mouche',
  value: 'showcase',
  image: require('./images/project_mo.jpg')
}];

const tempFilter = [{
  name: 'All',
  value: ''
}, {
  name: 'Projects',
  value: 'a'
}, {
  name: 'Showcase',
  value: 'b'
}];

export default class Projects extends Component {
  render() {
    const styles = require('./Projects.scss');

    return (
      <div>
        <div className="container" className={styles.bg__masthead}>
          <div className={styles.bg__space}></div>
        </div>
        <div className="container wow fadeIn">
          <h1>Our projects</h1>

          <Isotope data={tempData} filters={tempFilter}/>
        </div>
        <div className={styles.bg__space_short}></div>
      </div>
    );
  }
}
