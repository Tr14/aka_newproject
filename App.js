import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import NotificationsScreen from "./components/NotificationsScreen";
import ProfileScreen from "./components/ProfileScreen";
import SettingsScreen from "./components/SettingsScreen";
import LinkingButtonScreen from "./components/LinkingButtonScreen";
import linking from "./linking";

import PushIOManager from '@oracle/react-native-pushiomanager';
import { Platform, Linking } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import { Alert } from 'react-native';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="LinkingButton" component={LinkingButtonScreen} />
    </Stack.Navigator>
  );
}

export default function App() {

    //Responsys
    PushIOManager.configure("pushio_config.json", (error, response) => {

    });

  if (Platform.OS === 'android') {
          PushIOManager.registerApp(true, (error, response) => {

          });
  } else {
          PushIOManager.registerForAllRemoteNotificationTypes((error, response) => {

              PushIOManager.registerApp(true, (error, response) => {

              });
          });
  }

/*
  PushIOManager.fetchMessagesForMessageCenter("Primary", (error, response) => {

  });

  PushIOManager.fetchRichContentForMessage("ABE_qBPwpFLE4Aw_7lStX6SBu0bBwtzEKUf--gqKtsZeCoaQvHPaQaHZDVELmiiov69wuIdO91iCgtBc12vjZnTnYivkshzihCerwFs3jyDVcvA84Bw7ZiFg", (error, response) => {
    	      // 'response' is the HTML content
  });
  */

  //multiple push SDK
  /*
   useEffect(() => {
        messaging().onMessage(async remoteMessage => {

         console.log('New FCM message received:', JSON.stringify(remoteMessage));

         PushIOManager.isResponsysPush(remoteMessage, (error, response) => {

           if (response) {
             console.log("Push From Responsys foreground");
             console.log("Payload", JSON.stringify(remoteMessage));
             PushIOManager.handleMessage(remoteMessage);
           } else {
             console.log("Push From Firebase foreground");
             Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
             console.log("Payload", JSON.stringify(remoteMessage));
             PushNotification.localNotification({ title: remoteMessage.notification.title, message: remoteMessage.notification.body, });
           }

         });

       });
   });
   */
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

    useEffect(() => {
        const deepLinkListener = PushIOManager.setOpenURLListener(true, deeplink =>{
                console.log("Deeplink: " + deeplink);
                Linking.openURL(deeplink);
                deepLinkListener.remove();
        });

    	return () => {
            deepLinkListener.remove();
    	};
    });

  return (
     <NavigationContainer linking={linking}>
        <MyStack />
     </NavigationContainer>
  );
}