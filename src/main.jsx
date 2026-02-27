/**
 * Application entry point. Mounts the React app with Redux and global toast notifications.
 */
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { ToastContainer } from 'react-toastify';
import { store } from './store.js';
import { Provider } from 'react-redux';

// Wrap entire app in Redux Provider so all components can access store (cart, user state)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer position='top-center' />
  </Provider>
);
