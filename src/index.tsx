import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';
import { Provider } from 'react-redux';
import { fetchOffersAction } from './store';
import { checkAuthAction } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);
