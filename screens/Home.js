import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView,  View,Text,ImageBackground } from 'react-native';
import {
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native-gesture-handler";
import {FontAwesome5} from "@expo/vector-icons"
import {LinearGradient} from "expo-linear-gradient"
const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation})=>{
  return(
    <View style={{backgroundColor:"#FFF",flex:1}}> 
      <View style={{backgroundColor:"#00a4",
      height:"28%",
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      
      }}>
      <Ima

      </View>
    </View>
  )

}
export default HomeScreen;