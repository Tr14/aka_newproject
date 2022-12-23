import React from 'react'
import { StyleSheet, Text, View,StatusBar,Image } from 'react-native'
import {Colors} from '../../src/constants'


const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('Onboarding')
    }, 1000)
    return (
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#fcd605'}} >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#fcd605" />
            <Image source={require('../assets/images/icon.png')} style={{width:250,height:250}}  />
            <Text style={{fontFamily:'OpenSans-Bold',fontSize:30,color:Colors.white}} >AKA Digital VN</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})