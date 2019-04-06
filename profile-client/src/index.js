import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "redux/configureStore";
import App from "components/App";
import jwt_decode from "jwt-decode";
import setAuthToken from "redux/setAuthToken";
import { setCurrentUser, logoutUser } from "redux/actions/authentication";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser(history));
    window.location.href = "/login";
  }
}

//console.log(store.getState());
//store.dispatch({ type: "PROJECTS_LOADED" });

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
