import React, { FC } from "react";
import ReduxThunk from 'redux-thunk'
import { Provider, } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from "./src/redux/rootReducer";
import { Navigation } from "./src/navigation/mainNavigation";

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

