import React from 'react';
import { Switch, Route } from 'react-router-dom';
//
import HomePage from './pages/Home';
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
    <Route path="/products/income">
      <IncomeProductReview />
    </Route>
    <Route path="/logout">
      <LogoutPage />
    </Route>

    <Route path="/profile">
      <ProfilePage />
    </Route>
    <Route path="/faq">
      <FaqPage />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
);

export default Routes;
