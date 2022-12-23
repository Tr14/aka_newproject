import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'
import { NavigationContainer } from '@react-navigation/native'

import PushIOManager from '@oracle/react-native-pushiomanager';

export default function HomeScreen({ navigation }) {

  PushIOManager.trackEvent("Login_Success", {});

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}>
      <Buttons
        btn_text={"Logout"}
        on_press={()=> {
            PushIOManager.unregisterUserId();
            navigation.navigate("Login")
        }}
      />
    </View>
  );
}