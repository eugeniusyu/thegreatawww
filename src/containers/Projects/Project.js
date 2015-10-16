import React, {Component, PropTypes} from 'react';

export default class Project extends Component {
  static propTypes = {
    params: PropTypes.object,
    route: PropTypes.object
  }

  getProject() {
    return this.props.route.data[this.props.params.name];
  }

  render() {
    const {
      title,
      description,
      metadata
    } = this.getProject();
    // const styles = require('./Projects.scss');
    console.log('Project.render');
    // console.log(this.props);
    console.log(title);
    console.log(description);
    console.log(metadata);

    return (
      <div className="container">
        <h1>{title}</h1>
        <h2>Project Box</h2>
        <p>Project Images</p>
        <p>{description}</p>
        <p>Project Metadata</p>
      </div>
    );
  }
}
