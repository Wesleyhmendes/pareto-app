/* eslint-disable max-len */
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="513499082039-mt45nn20mqmustolarmi6a76e5lf1gq7.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </BrowserRouter>,
);
