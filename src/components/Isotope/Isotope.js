import React, {Component, PropTypes} from 'react';
import IsotopeFilter from './IsotopeFilter';
import IsotopeList from './IsotopeList';

export default
class Isotope extends Component {
  constructor() {
    super();
    this.state = {filterText: ''};
  }

  onFilterUpdate(value) {
    this.setState({filterText: value});
  }

  render() {
    const {
      data,
      filters
    } = this.props;
    const styles = require('./Isotope.scss');

    return (
      <div className={styles.isotope}>
        <div className={`row ${styles['isotope-filter']}`}>
          <IsotopeFilter
            filterUpdate={this.onFilterUpdate.bind(this)}
            filterVal={this.state.filterText}
            filters={filters}
          />
        </div>
        <div className={`row ${styles['isotope-list']}`}>
          <IsotopeList data={data} filter={this.state.filterText} />
        </div>
      </div>
    );
  }
}

Isotope.propTypes = {
  data: PropTypes.array,
  filters: PropTypes.array
};
