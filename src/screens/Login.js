import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'
import { NavigationContainer } from '@react-navigation/native'

import PushIOManager from '@oracle/react-native-pushiomanager';

const Login = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:50,paddingLeft:'5%',paddingRight:'1%'}} >
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                    <Text style={{fontFamily:'OpenSans-SemiBold',fontSize:30,color:Colors.black}} >Welcome Back</Text>
                    <Image source={require('../assets/images/waving_hand.png')} style={{width:30,height:30}}  />
                </View>
                <Text style={{fontFamily:"OpenSans-Regular",fontSize:14,paddingTop:10,color:"#777"}} >Please login to see more about our product</Text>

                <View style={{flexDirection:'column',paddingTop:20}} >
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
                        <Icon name="envelope-o" size={22} color="#818181" />
                        <TextInput onChangeText={(value) => setUsername(value)} value={username} style={styles.input} placeholder="Enter Username" placeholderTextColor="#818181" />

                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20}} >
                        <Icon name="lock" size={22} color="#818181" />
                        <TextInput secureTextEntry onChangeText={(value) => setPass(value)} value={password} style={styles.input} placeholder="Enter Password" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    <View style={{width:'95%',marginBottom:10}} >
                        <Text style={{fontSize:17,fontFamily:'OpenSans-SemiBold',
                    color:'#818181',alignSelf:'flex-end',paddingTop:10}} >Forgot Password?</Text>
                    </View>

                    <Buttons
                        btn_text={"Login In"}
                        on_press={()=> {
                            if (username.localeCompare('0') != 0 || username.localeCompare('0') != 0) {
                                PushIOManager.registerUserId(username);
                                navigation.navigate("Home")
                            }
                        }}
                    />
                </View>
            </View>

            {/* social login section */}
            <View style={{flex:2,backgroundColor:'#fff',flexDirection:'column',paddingLeft:'5%',paddingRight:'1%'}} >
                <Text style={{fontFamily:"OpenSans-Bold",textAlign:'center',marginVertical:35,paddingRight:'5%',color:'#818181',fontSize:20}} >Or</Text>

                <View style={{flexDirection:'column',alignItems:'center',width:'95%'}} >
                    <TouchableOpacity onPress={()=>console.log("google login")} style={styles.social_btn} >
                        <Image style={styles.social_img} source={require('../assets/images/google_icon.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:16,fontFamily:'OpenSans-Medium',color:'#000'}} >Login with Google </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>console.log("facebook login")} style={styles.social_btn} >
                        <Image style={styles.social_img} source={require('../assets/images/facebook_icon.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:16,fontFamily:'OpenSans-Medium',color:'#000'}} >Login with Facebook </Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'flex-end',backgroundColor:'#fff',marginBottom:40}} >
                    <Text style={{fontFamily:'OpenSans-Medium',fontSize:17,color:'#818181'}} >Don't have a account? </Text>
                    <Text style={{fontSize:18,fontFamily:'OpenSans-SemiBold',color:'#333'}} >Sign Up</Text>
                </View>



            </View>

        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        fontFamily:'OpenSans-Medium',
        paddingLeft:20,
        color:'#000'
    },
    social_btn:{
        height:55,
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
        backgroundColor:'#fcd605'
    },
    social_img:{
        width:25,
        height:25,
        marginLeft:15
    }
})