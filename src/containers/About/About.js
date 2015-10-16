import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

const displayImages = [{
  src: './images/about_1.jpg',
  alt: 'about team'
}, {
  src: './images/about_2.jpg',
  alt: 'about team'
}, {
  src: './images/about_3.jpg',
  alt: 'about team'
}];

export default class About extends Component {

  render() {
    const styles = require('./About.scss');
    const renderImages = () => {
      return displayImages.map((image, key) => {
        return (
          <div className="col-lg-3 col-md-4 col-xs-6 thumb" key={key}>
            <img className="img-responsive" src={require(image.src)} alt={image.alt} />
          </div>
        );
      });
    };
    return (
      <div className={styles.about}>
        <div className="container" className={styles.bg__masthead}>
          <div className={styles.bg__space}></div>
        </div>

        <div className={`container ${styles.intro}`}>
          <h1>The Great A</h1>
          <h2>The Smaller You Are, The Greater You Can Be</h2>
          <DocumentMeta title="The Great A: About Us"/>
          <span>
            <p>Meet the small, but strong team</p>
          </span>
          <div className="row wow fadeIn">
            {renderImages()}
          </div>
        </div>
        <div className={styles.bg__space_short}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Our Process</h1>
            </div>
          </div>
          <div className={`row ${styles.process}`}>
            <div className="row wow fadeIn">
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <h4>Planning</h4>
                <div className={styles.textContainer}>
                  <p>We collect spread pieces of your business and plan a big picture</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <img src={require('./images/planning.jpg')} />
              </div>
            </div>
            <div className="row wow fadeIn">
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <img src={require('./images/design.jpg')} />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <h4>Design</h4>
                <div className={styles.textContainer}>
                  <p>We belive a firm design that suits your own business case is a must</p>
                </div>
              </div>
            </div>
            <div className="row wow fadeIn">
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <h4>Development</h4>
                <div className={styles.textContainer}>
                  <p>We have strong development skills to make </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <img src={require('./images/development.jpg')} />
              </div>
            </div>
            <div className="row wow fadeIn">
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <img src={require('./images/gogreat.jpg')} />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6">
                <h4>Go Great</h4>
                <div className={styles.textContainer}>
                  <p>It is now your time to fly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bg__space_short}></div>
      </div>
    );
  }
}
