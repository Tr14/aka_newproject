import React, { useState, useEffect } from 'react';
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Splash,Onboarding,Login,Home} from './src/screens'

import { Platform, Linking } from 'react-native';
import linking from "./linking";

import PushIOManager from '@oracle/react-native-pushiomanager';
import messaging from '@react-native-firebase/messaging';

const Stack = createNativeStackNavigator();
const App = ()=>{

  //PushIOManager.fetchMessagesForMessageCenter(messageCenterName, (error, response) => {});

  //PushIOManager.fetchRichContentForMessage(messageID, (error, response) => {/*'response' is the HTML content*/});

  PushIOManager.setNotificationLargeIcon("android/app/src/main/res/drawable/icon.png");
  PushIOManager.setNotificationSmallIcon("android/app/src/main/res/drawable/icon.png");

  messaging().onMessage(async remoteMessage => {

          console.log('New FCM message received:',
          JSON.stringify(remoteMessage));

          PushIOManager.isResponsysPush(remoteMessage, (error, response) => {

              if (response) {
                  console.log("Received Push Message from Responsys");
                  PushIOManager.handleMessage(remoteMessage);
              } else {
                  console.log("Not a Responsys Push, handle it appropriately");
                  alert('FCM:'+JSON.stringify(remoteMessage));
              }
          });
  });

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