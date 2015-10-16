import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    const styles = require('./Contact.scss');

    return (
      <div>
        <div className="container" className={styles.bg__masthead}>
          <div className={styles.bg__space}></div>
        </div>
        <div className="container wow fadeIn">
          <h1>Melbourne's Hidden Ace</h1>
          <h2>Yes, we are independently based in one the most liveable cities in the world.</h2>
          <iframe className={styles.map} width="100%" height="500px" frameBorder="0" src="https://a.tiles.mapbox.com/v4/thegreata.cifmcxqhn38dss3kqukmk4nbm/attribution,zoompan,zoomwheel,geocoder,share.html?access_token=pk.eyJ1IjoidGhlZ3JlYXRhIiwiYSI6ImNpZm1jeHJ5Z2Z1cmVzZW03ZDYzYmh1NWsifQ.yWgOQpH1N_73dGwVPm_ZXQ"></iframe>
          <h3>Contact Details</h3>
          <p>(+61) 433 626 341</p>
          <p>yes@thegreata.com</p>
          <h3>Looking forward to going Great?</h3>
        </div>
        <div className={styles.bg__space_short}></div>
      </div>
    );
  }
}
