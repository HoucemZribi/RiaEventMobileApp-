import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from "react-native-animatable";
//import { color } from 'react-native-reanimated';
import FontAwesome  from "react-native-vector-icons/FontAwesome";
import Feather  from "react-native-vector-icons/Feather";
import SignInScreen from './SignIn';
export default class  SignUpScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            check_textInputChange : false ,
            password:'',
            secureTextEntry: true
        }
    }
    textInputChange(value){
        if(value.length!==0){
            this.setState({
                check_textInputChange : true 
            });
        }
        else{
            this.setState({
                check_textInputChange:false
            });
        }
    }
    secureTextEntry(){
        this.setState({
            secureTextEntry : !this.state.secureTextEntry
        })
    }
    render (){
        return (
        <View style={styles.container}>
            <View style = {styles.header}>
                <Text style={styles.text_header}>Create account and join RiaEvent ! </Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}     
            >
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name = 'user-o'
                        color = '#05375a'
                        size = {20}
                        />
                    <TextInput
                        placeholder = "Username"
                        style  = {styles.textInput}
                        onChangeText = {(text)=>this.textInputChange(text)}
                    />
                    {this.state.check_textInputChange?
                        <Animatable.View
                            animation="bounceIn"
                            style={styles.footer}> 
                            <Feather
                                name = "check-circle"
                                color = "green" 
                                size={20}
                            /> 
                        </Animatable.View>
                    : null }
                </View>
                <Text style={[styles.text_footer,{marginTop:35}]}>E-mail</Text>
                <View style={styles.action}>
                    <Feather
                        name = 'mail'
                        color = '#05375a'
                        size = {20}
                        />
                    <TextInput
                        placeholder = "Email"
                        style  = {styles.textInput}
                    />
                   
                </View>
                <Text style={[styles.text_footer,{marginTop:35}]}>Password </Text>
                <View style={styles.action}>
                    <FontAwesome
                        name = 'lock'
                        color = '#05375a'
                        size = {20}
                        />
                        {this.state.secureTextEntry ?
                    <TextInput
                        secureTextEntry={true}
                        placeholder = "Password"
                        style  = {styles.textInput}
                        value = {this.state.password}
                        onChangeText={(text)=>this.setState({
                            password:text
                        })}
                    />
                    :
                    <TextInput
                        
                        placeholder = "Password"
                        style  = {styles.textInput}
                        value = {this.state.password}
                        onChangeText={(text)=>this.setState({
                            password:text
                        })}
                    />}
                    <TouchableOpacity
                    onPress={()=>this.secureTextEntry()}>
                    {this.state.secureTextEntry?
                        <Feather
                            name = "eye-off" 
                            color = "gray" 
                            size={20}
                            
                        /> :
                         <Feather
                            name = "eye" 
                            color = "gray" 
                            size={20}
                            
                        />
                         } 
                    </TouchableOpacity>
                </View>
            
              <View style={styles.button}>
                    <LinearGradient colors={['#05375a','#294B62']}
                        style={styles.signIn}
                        >
                        <Text style = {[styles.signText,{color:'white'}]}>Sign Up</Text>
                     </LinearGradient>
                </View>
                     <TouchableOpacity
                     onPress ={()=>this.props.navigation.navigate}
                     >

                     </TouchableOpacity>
                     <Text style={[styles.text_footer,{marginTop:35}]}>Already have account? 
                            <Text 
                            style={styles.TextButton}
                            onPress ={()=>this.props.navigation.navigate("SignInScreen")} >
                            Sign In
                            
                            </Text>
                     </Text>
              
              
         
            </Animatable.View>

        </View>
    )
}
}
var styles = StyleSheet.create({
container:{
    flex : 1 , 
    backgroundColor : '#05375a'
},
header : {
    flex : 1 , 
    justifyContent : 'flex-end',
    paddingHorizontal : 20 , 
    paddingBottom :  50 
},
text_header:{
    color:'white',
    fontWeight : 'bold',
    fontSize : 30 
},
action:{
    flexDirection:'row',
    marginTop : 10 ,
    borderBottomWidth:1,
    borderBottomColor : "#f2f2f2",
    paddingBottom : 5 
},
text_footer:{
    color : '#05375a',
    fontSize : 18
},
footer:{
    flex : 3 ,
    backgroundColor : 'white',
    borderTopLeftRadius : 30 ,
    borderTopRightRadius : 30 ,
    paddingVertical : 30 ,
    paddingHorizontal : 20 , 
},
textInput:{
    flex : 1 ,
    paddingLeft : 10,
    color : '#05375a'
},
button:{
    alignItems:'center',
    marginTop : 50
},
signIn:{
    width : '100%',
    height : 50,
    justifyContent:'center',
    alignItems : 'center',
    borderRadius : 10 
},
signText:{
    fontSize : 18 , 
    fontWeight : 'bold'
},
TextButton:{
    textDecorationLine: 'underline',
    color:'blue',
    marginLeft:'10px' ,
},
});