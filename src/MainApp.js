import React from 'react';
import { connect } from 'react-redux';

import Navbar from 'components/Layout/Nav/Header';
import Routes from './Routes';
import Spinner from 'components/Spinner';
import Footer from 'components/Layout/footer';

class MainApp extends React.Component {
  renderApplication = (auth) => (
    <>
      <Navbar auth={auth}></Navbar>
      <Routes />
      <Footer />
    </>
  );

  render() {
    const { auth } = this.props;
    return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />;
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(MainApp);
