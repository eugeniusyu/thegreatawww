import React, {Component, PropTypes} from 'react';
// import { Link } from 'react-router';

export default
class IsotopeList extends Component {
  render() {
    const {
      data,
      filter,
    } = this.props;

    const renderList = (listData) => {
      const itemList = [];
      let isFirstItem = true;
      for (const item of listData) {
        if (item.value.toLowerCase() === filter || filter === '') {
          if (isFirstItem) {
            // itemList.push(<div className="col-xs-12 col-sm-6 first-block wow bounceIn" key={item.name}><Link to={`/projects/${item.name.toLowerCase()}`}><img src={item.image} className={"img-responsive"} /></Link></div>);
            itemList.push(<div className="col-xs-12 col-sm-6 first-block wow bounceIn" key={item.name}><img src={item.image} className={"img-responsive"} /></div>);
            isFirstItem = false;
          } else {
            // itemList.push(<div className="col-xs-6 col-sm-3 wow bounceIn" key={item.name}><Link to={`/projects/${item.name.toLowerCase()}`}><img src={item.image} className={"img-responsive"} /></Link></div>);
            itemList.push(<div className="col-xs-6 col-sm-3 wow bounceIn" key={item.name}><img src={item.image} className={"img-responsive"} /></div>);
          }
        }
      }
      // <div className="row col-sm-6">{isFirstItem}</div>;
      // itemList.push(<div className="row col-xs-12 col-sm-6">{smallItemList}</div>);

      return itemList;
    };

    return (
      <div>
        {renderList(data)}
      </div>
    );
  }
}

IsotopeList.propTypes = {
  data: PropTypes.array,
  filter: PropTypes.string
};

IsotopeList.defaultProps = {
  data: [],
  filter: ''
};
