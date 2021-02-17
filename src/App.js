import React from 'react';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import initStore from './Redux/store';

import { BrowserRouter as Router } from 'react-router-dom';
import MainApp from './MainApp';

import { subscribeToMessages, checkUserConnection } from './Redux/actions';
import { storeAuthUser, onAuthStateChanged } from 'Redux/reducers/auth';
import GlobalStyle from 'styles/global.styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'styles/muiTheme';

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
          <ThemeProvider theme={theme}>
            <Router>
              <MainApp />
            </Router>
          </ThemeProvider>
        </ToastProvider>
      </Provider>
    );
  }
}

export default App;
