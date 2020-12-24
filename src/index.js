import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import { createStore, applyMiddleware, compose } from 'redux'
import todoApp from './store/reducer/reducers'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import fbConfig from './config/fbconfig'
import thunk from 'redux-thunk'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* const store = createStore(
  todoApp,
  compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }),
  reduxFirestore(fbConfig))),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) */

  const store = createStore(todoApp, composeEnhancer(applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebase, fbConfig)))

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch
}

render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>

  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();