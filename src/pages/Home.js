/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';

import Hero from 'components/Hero';
import ServiceItem from 'components/service/ServiceItem';

// import axios from 'axios';

class Home extends React.Component {
  state = {
    services: [],
  };

  render() {
    // const { services } = this.props;
    return (
      <div>
        <Hero />
      </div>
    );
  }
}

export default Home;
