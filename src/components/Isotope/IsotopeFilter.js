import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default
class IsotopeFilter extends Component {
  // const displayName = 'IsotopeList';

  getFilterValue(filterName) {
    return filterName === 'All' ? '' : filterName.toLowerCase();
  }

  filterTrigger(event) {
    this.props.filterUpdate(this.getFilterValue(ReactDOM.findDOMNode(event.target).textContent));
  }

  render() {
    const {
      filters
    } = this.props;

    const renderFilterList = (filterList) => {
      return (
        filterList.map(filter => {
          return (
            <li
              key={filter.value}
              onClick={this.filterTrigger.bind(this)}
            >
              {filter.name}
            </li>
          );
        })
      );
    };

    return (
      <ul
        className="list-inline"
      >
        {renderFilterList(filters)}
      </ul>
    );
  }
}

IsotopeFilter.propTypes = {
  filterUpdate: PropTypes.func,
  // filterVal: PropTypes.string,
  filters: PropTypes.array
};
