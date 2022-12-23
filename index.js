/**
 * @format
 */
import PushIOManager from '@oracle/react-native-pushiomanager';
import messaging from '@react-native-firebase/messaging';
import {AppRegistry} from 'react-native';
import { Alert } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('FCM Message handled in the background: ', remoteMessage);
});
/*
messaging().setBackgroundMessageHandler(async remoteMessage => {

    console.log('New FCM message received:', JSON.stringify(remoteMessage));

    PushIOManager.isResponsysPush(remoteMessage, (error, response) => {

        if (response) {
            console.log("Push From Responsys background");
            console.log("Payload", JSON.stringify(remoteMessage));
            PushIOManager.handleMessage(remoteMessage);
        } else {
            console.log("Push From Firebase background");
            console.log("Payload", JSON.stringify(remoteMessage));
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        }
    });
});


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
       */


AppRegistry.registerComponent(appName, () => App);
