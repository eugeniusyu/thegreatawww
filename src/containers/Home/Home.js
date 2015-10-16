import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { GithubButton } from 'components';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    // const backgroundImage = require('./hero-bg.png');
    const heroLogo = require('./logo-hero.svg');
    return (
      <div className={styles.home}>
      <div className={styles.bg__space_short}></div>
        <div className={styles.bg__masthead}>
          <section className={styles.masthead}>
            <div className="container">
              <section>

              </section>
              <div className={styles.logo}>
                <img src={heroLogo}/>
              </div>
              <div className={styles.headerWrapper}>
                <h1>Plan | Design | Build your own A</h1>
              </div>

              <h2>Heading h2</h2>

              <p>
                <a href="#"
                  target="_blank">
                  <i className="fa fa-github"/> Contact us
                </a>
              </p>
            </div>
          </section>
        </div>
        <div className={styles.bg__space_short}></div>
      </div>
    );
  }
}
