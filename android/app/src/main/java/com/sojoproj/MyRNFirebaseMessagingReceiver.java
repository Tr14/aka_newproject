package com.sojoproj;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.google.firebase.messaging.RemoteMessage;
import com.pushio.manager.PushIOManager;
import io.invertase.firebase.app.ReactNativeFirebaseApp;
import io.invertase.firebase.common.ReactNativeFirebaseEventEmitter;
import io.invertase.firebase.common.SharedUtils;
import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingSerializer;


public class MyRNFirebaseMessagingReceiver extends BroadcastReceiver {
    private static final String TAG = "MyRNFirebaseMsgReceiver";

    /*
  @Override
  public void onReceive(Context context, Intent intent) {
    Log.d(TAG, "Push notification broadcast received");

    RemoteMessage remoteMessage = new RemoteMessage(intent.getExtras());

    if (SharedUtils.isAppInForeground(context)) {
        Log.d(TAG, "App is in foreground, passing it to firebase onMessage handler");
        if (ReactNativeFirebaseApp.getApplicationContext() == null) {
            ReactNativeFirebaseApp.setApplicationContext(context.getApplicationContext());
        }
        ReactNativeFirebaseEventEmitter emitter = ReactNativeFirebaseEventEmitter.getSharedInstance();
        emitter.sendEvent(ReactNativeFirebaseMessagingSerializer.remoteMessageToEvent(remoteMessage, false));
    }else{
        Log.d(TAG, "App not in foreground, push message will be handled by Responsys SDK 1");

            if (PushIOManager.getInstance(context).isResponsysPush(remoteMessage)) {
                PushIOManager.getInstance(context).handleMessage(remoteMessage);
                Log.d(TAG, "Push From Responsys background");
            } else {
                Log.d(TAG, "Push From FCM background");
                Log.d(TAG, remoteMessage.getNotification().getBody());
            }
    }

    abortBroadcast();
  }
  */
    @Override
    public void onReceive(Context context, Intent intent) {
        Log.d(TAG, "Push notification broadcast received");
        RemoteMessage remoteMessage = new RemoteMessage(intent.getExtras());

        if (SharedUtils.isAppInForeground(context)) {
            Log.d(TAG, "App is in foreground, passing it to firebase onMessage handler");
            if (ReactNativeFirebaseApp.getApplicationContext() == null) {
                ReactNativeFirebaseApp.setApplicationContext(context.getApplicationContext());
            }
            ReactNativeFirebaseEventEmitter emitter = ReactNativeFirebaseEventEmitter.getSharedInstance();

            emitter.sendEvent(ReactNativeFirebaseMessagingSerializer.remoteMessageToEvent(remoteMessage, false));
            abortBroadcast();
        }else{
            Log.d(TAG, "App not in foreground");


            if(PushIOManager.getInstance(context).isResponsysPush(remoteMessage)){
                Log.d(TAG, "Push message will be handled by Responsys SDK");
                PushIOManager.getInstance(context).handleMessage(remoteMessage);
                abortBroadcast();
            }else{
                Log.d(TAG, "Push message forwarded to FCM");
            }
        }
    }

}