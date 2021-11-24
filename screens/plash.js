import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Button,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
//import { useTheme } from '@react-navigation/native';

export default class SplashComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#05375a"
          barStyle="dark-content"
          hidden={false}
          translucent={true}
        />

        <View style={styles.header}>
          <Animatable.Image
            source={require("../assets/RiaEvent.png")}
            style={styles.logo}
            // resizeMode={"stretch"}
            animation="bounceIn"
            duration={2500}
          />
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.title}>Stay connected ! </Text>
          <Text style={styles.text}>Sign In to verify your guests </Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SignInScreen")}
            >
              <LinearGradient
                colors={["#05375a", "#294B62"]}
                style={styles.SignIn}
              >
                <Text style={styles.textSignIn}>Get started</Text>
                <MaterialIcons name="navigate-next" color="white" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}
const { height } = Dimensions.get("screen");
const height_logo = 150;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05375a",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: 190,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontWeight: "bold",
    fontSize: 30,
  },
  text: {
    color: "gray",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  SignIn: {
    width: 158,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSignIn: {
    color: "white",
    fontWeight: "bold",
  },
});
