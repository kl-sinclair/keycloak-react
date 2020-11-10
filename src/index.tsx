import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Keycloak from 'keycloak-js';

const config: Keycloak.KeycloakConfig = {
  url: "http://localhost:8888/auth",
  realm: "backoffice",
  clientId: "billing"
};

const keycloak = Keycloak(config);

keycloak.init({onLoad: "login-required", pkceMethod: "S256"}).then((auth: boolean) => {
  if (!auth) {
    window.location.reload();
  }

  console.log(keycloak);
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
