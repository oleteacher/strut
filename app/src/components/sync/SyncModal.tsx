import * as React from "react";
import AppState from "../../domain/ephemeral/AppState";
import styles from "./SyncModal.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function SyncModal({ appState }: { appState: AppState }) {
  const syncState = appState.syncState;
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1>Sync</h1>
      </div>
      <div className={styles.body}>
        {syncState.isConnected ? (
          <button>Disconnect</button>
        ) : isAuthenticated ? (
          <button>Connect</button>
        ) : null}
        {isAuthenticated ? (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        ) : (
          <a href="#" onClick={() => loginWithRedirect()}>
            Log In
          </a>
        )}
      </div>
    </div>
  );
}
