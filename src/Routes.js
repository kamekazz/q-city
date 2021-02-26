import React from 'react';
import { Switch, Route } from 'react-router-dom';
//
import LandingPage from './pages/LandingPage';
import FaqPage from './pages/Faq';
import ProfilePage from './pages/Profile';

//
import LoginPage from './pages/Login';
import LogoutPage from './pages/Logout';
import RegisterPage from './pages/Register';

//new
import CreateReport from 'pages/CreateReport';
import CreateIssueCode from 'pages/CreateIssueCode';
import IncomeProductReview from 'pages/IncomeProductReview';
import GunTran from 'pages/GunTran';

const Routes = () => (
  <Switch>
    <Route path="/register">
      <RegisterPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route exact path="/issue">
      <CreateReport />
    </Route>
    <Route path="/issue/create_report">
      <CreateReport />
    </Route>
    <Route path="/issue/create_issue_code">
      <CreateIssueCode />
    </Route>
    <Route path="/products">
      <IncomeProductReview />
    </Route>
    <Route path="/products/income">
      <IncomeProductReview />
    </Route>
    <Route path="/logout">
      <LogoutPage />
    </Route>

    <Route path="/profile">
      <ProfilePage />
    </Route>
    <Route path="/contact_us">
      <FaqPage />
    </Route>
    <Route exact path="/">
      <LandingPage />
    </Route>
    <Route exact path="/equipment">
      <GunTran />
    </Route>
    <Route exact path="/dashboard">
      {'dashboard'}
    </Route>
  </Switch>
);

export default Routes;
