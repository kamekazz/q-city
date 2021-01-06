/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { connect } from "react-redux"; // HOC
import Hero from "components/Hero";
import ServiceItem from "components/service/ServiceItem";

import { fetchServices } from "Redux/actions";
import axios from "axios";

class Home extends React.Component {
  state = {
    services: [],
  };

  componentDidMount() {
    this.props.fetchServices();
    this.getInfoForSalsify();
  }

  renderServices = (services) =>
    services.map((service) => (
      <ServiceItem key={service.id} service={service} />
    ));

  getInfoForSalsify = () => {
    axios
      .get(
        "https://app.salsify.com/catalogs/api/catalogs/cea4e749-855a-4b54-adc5-6e437fbde1da/products/538010"
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  render() {
    const { services } = this.props;
    return (
      <div>
        <Hero />
        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">
                With great Responsability
              </h3>
              <div className="divider is-centered"></div>
              {/* <img src="https://images.salsify.com/image/upload/s--cJxbvTPb--/c_limit,cs_srgb,h_600,w_600/zrtedbhc0qwqylmakxda.jpg" alt="https://images.salsify.com/image/upload/s--cJxbvTPb--/c_limit,cs_srgb,h_600,w_600/zrtedbhc0qwqylmakxda.jpg"/> */}
            </div>

            <div className="content-wrapper">
              <div className="columns is-multiline">
                {this.renderServices(services)}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ services: state.services.all });

export default connect(mapStateToProps, { fetchServices })(Home);
