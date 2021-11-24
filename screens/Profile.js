import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import Ionicons from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animatable.Image
            source={require("../assets/qr.png")}
            style={styles.logo}
            // resizeMode={"stretch"}
            animation="bounceIn"
            duration={2500}
          />
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("QrScreen")}
          style={{ marginTop: 300 }}
        >
          <LinearGradient colors={["#05375a", "#294B62"]}>
            <Text style={styles.textSignIn}>Verify Guests!</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}
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
    backgroundColor: "#FFF",

    marginTop: 300,
    width: 220,
    height: 220,
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
    marginLeft: 120,
    padding: 10,
    color: "white",
    fontWeight: "bold",
  },
});
