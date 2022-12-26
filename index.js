/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import PushIOManager from '@oracle/react-native-pushiomanager';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('FCM Message handled in the background: ', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
