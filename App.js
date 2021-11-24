//import { StatusBar } from 'expo-status-bar';
import React from "react";
import RootStack from "./screens/RootStack";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userReducer from "./Reducers";
const store = createStore(userReducer);
export default class App extends React.Component {
  render() {
    return 
    (
    <Provider store={store}>
      <RootStack />;
    </Provider>
    )

  }
}
