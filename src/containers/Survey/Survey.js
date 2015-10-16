import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
import {initialize} from 'redux-form';
import {SurveyForm} from 'components';

@connect(
  () => ({}),
  {initialize})
export default class Survey extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  handleSubmit(data) {
    window.alert('Data submitted! ' + JSON.stringify(data));
    this.props.initialize('survey', {});
  }

  handleInitialize() {
    this.props.initialize('survey', {
      name: 'Little Bobby Tables',
      email: 'bobby@gmail.com',
      occupation: 'Redux Wizard'
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Survey</h1>
        <DocumentMeta title="The Great A: Survey"/>

        <p>
          TGA Survey TGA Survey TGA Survey TGA Survey TGA Survey TGA Survey
        </p>

        <div style={{textAlign: 'center', margin: 15}}>
          <button className="btn btn-primary" onClick={::this.handleInitialize}>
            <i className="fa fa-pencil"/> Initialize Form
          </button>
        </div>

        <p><code>redux-form</code>:
          Touched, Visited, Active, and Dirty.</p>

        <SurveyForm onSubmit={::this.handleSubmit}/>
      </div>
    );
  }
}
