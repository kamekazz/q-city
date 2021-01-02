import React from "react";
import { connect } from "react-redux";

import Sidebar from "components/Sidebar";
import Navbar from "components/Layout/Navbar";
import Routes from "./Routes";
import Spinner from "components/Spinner";

class MainApp extends React.Component {
  renderApplication = (auth) => (
    <>
      <Navbar loadFresh id="navbar-main" auth={auth} />
      <Navbar auth={auth} id="navbar-clone" />
      <Sidebar />
      <Routes />
    </>
  );

  render() {
    const { auth } = this.props;
    return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />;
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(MainApp);
