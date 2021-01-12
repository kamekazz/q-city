import React from 'react';

import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import initStore from './Redux/store';

import { BrowserRouter as Router } from 'react-router-dom';
import MainApp from './MainApp';

import {
  onAuthStateChanged,
  storeAuthUser,
  subscribeToMessages,
  checkUserConnection,
} from './Redux/actions';
import GlobalStyle from 'styles/global.styles';

const store = initStore();

class App extends React.Component {
  componentDidMount() {
    this.unsubscribeAuth = onAuthStateChanged((authUser) => {
      store.dispatch(storeAuthUser(authUser));

      if (authUser) {
        checkUserConnection(authUser.uid);
        this.unsubscribeMessages = store.dispatch(
          subscribeToMessages(authUser.uid)
        );
      }

      if (!authUser) {
        this.unsubscribeMessages && this.unsubscribeMessages();
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
    this.unsubscribeMessages();
  }

  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <ToastProvider>
          <Router>
            <MainApp />
          </Router>
        </ToastProvider>
      </Provider>
    );
  }
}

export default App;
