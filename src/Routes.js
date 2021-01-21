import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import FaqPage from './pages/Faq';
import ProfilePage from './pages/Profile';
import ServicesPage from './pages/Services';
import ServiceDetailPage from './pages/ServiceDetail';
import LoginPage from './pages/Login';
import LogoutPage from './pages/Logout';
import RegisterPage from './pages/Register';
import SecretPage from './pages/Secret';

import ServiceCreatePage from './pages/services/ServiceCreate';
import UserServicesPage from './pages/services/UserServices';

import SentOffersPage from './pages/offers/SentOffers';
import ReceivedOffersPage from './pages/offers/ReceivedOffers';

import ReceivedCollaborationsPage from './pages/collaborations/ReceivedCollaborations';
import CollaborationDetailPage from './pages/collaborations/CollaborationDetail';
import CreateIssue from 'pages/CreateIssue';

const Routes = () => (
  <Switch>
    <Route path="/secret">
      <SecretPage />
    </Route>

    <Route path="/register">
      <RegisterPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/issue/create_issue">
      <CreateIssue />
    </Route>
    <Route path="/logout">
      <LogoutPage />
    </Route>
    <Route path="/collaborations/me">
      <ReceivedCollaborationsPage />
    </Route>
    <Route path="/collaborations/:id">
      <CollaborationDetailPage />
    </Route>
    <Route path="/offers/sent">
      <SentOffersPage />
    </Route>
    <Route path="/offers/received">
      <ReceivedOffersPage />
    </Route>
    <Route path="/service/me">
      <UserServicesPage />
    </Route>
    <Route path="/service/new">
      <ServiceCreatePage />
    </Route>
    <Route path="/service/:serviceId">
      <ServiceDetailPage />
    </Route>
    <Route path="/service">
      <ServicesPage />
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
