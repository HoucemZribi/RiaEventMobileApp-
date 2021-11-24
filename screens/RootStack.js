import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SplashComponent from "./plash";
import QrScreen from "./QrScreen";
import SignInScreen from "./SignIn";
import ProfileScreen from "./Profile";

const StackNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashComponent,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  QrScreen: {
    screen: QrScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(StackNavigator);
