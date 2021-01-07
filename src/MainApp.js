import React from "react";
import { connect } from "react-redux";

import Navbar from "components/Layout/Nav/Navbar";
import Routes from "./Routes";
import Spinner from "components/Spinner";

class MainApp extends React.Component {
  renderApplication = (auth) => (
    <>
      <Navbar loadFresh id="navbar-main" auth={auth}>
        <Routes />
      </Navbar>
    </>
  );

  render() {
    const { auth } = this.props;
    return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />;
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(MainApp);
