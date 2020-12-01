import React from 'react';
import logo from './logo.svg';
import './App.css';
import { KeycloakInstance, KeycloakTokenParsed } from 'keycloak-js';

interface IdTokenParsed extends KeycloakTokenParsed {
  name?: string;
  preferred_username?: string;
  email?: string;
}

interface KcInstance extends KeycloakInstance {
  idTokenParsed?: IdTokenParsed;
}

const App: React.FC<{keycloak: KcInstance}> = ({ keycloak }) => {
  // useEffect(() => {
  //   keycloak.loadUserProfile().then((profile: KeycloakProfile) => {
  //     console.log(profile);
  //   });
  // });
  return (
    <div className="App">
      <header className="App-header">
        <p>{keycloak.idTokenParsed?.preferred_username}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => keycloak.logout()}>
          LOGOUT
        </button>
      </header>
    </div>
  );
}

export default App;
