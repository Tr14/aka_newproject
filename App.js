import React from 'react';
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Splash,Onboarding,Login,Home} from './src/screens'

import { Platform, Linking } from 'react-native';
import linking from "./linking";

import PushIOManager from '@oracle/react-native-pushiomanager';

const Stack = createNativeStackNavigator();
const App = ()=>{

  //PushIOManager.fetchMessagesForMessageCenter(messageCenterName, (error, response) => {});

  //PushIOManager.fetchRichContentForMessage(messageID, (error, response) => {/*'response' is the HTML content*/});

  PushIOManager.setNotificationLargeIcon("android/app/src/main/res/drawable/icon.png");
  PushIOManager.setNotificationSmallIcon("android/app/src/main/res/drawable/icon.png");

  return (
          <NavigationContainer linking={linking}>
            <Stack.Navigator screenOptions={{headerShown:false}} >
              
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App