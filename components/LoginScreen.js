import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native';
import PushIOManager from '@oracle/react-native-pushiomanager';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');

    return (
        <View style={styles.container} >
            <StatusBar backgroundColor="#1e90ff" barStyle='dark-content' />
            <Text style={styles.welcome}>Login To Aka Store</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="gray"
                onChangeText={(value) => setUsername(value)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry
                onChangeText={(value) => setPass(value)}
                value={password}
            />
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.userBtn} onPress={() => {
                    if (username.localeCompare('0') != 0 || username.localeCompare('0') != 0) {
                        PushIOManager.registerUserId(username);
                        navigation.navigate("Home");
                    }
                }
                    //Handle LOGIN

                }>
                    <Text style={styles.btnTxt}>Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Register");
            }
            }>
                <Text style={styles.btnTxt}>Don't have account, please {''}
                    <Text style={styles.btnTxtRegister}>Signup
                    </Text></Text>

            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#ffc2c2',
    },
    welcome: {
        fontSize: 45,
        textAlign: 'center',
        margin: 10,
        color: "#fff",
        fontFamily: "DancingScript-Bold"
    },
    input: {
        color: "black",
        margin: 20,
        width: "90%",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,

    },
    btnContainer: {
        justifyContent: "space-between",
        width: "100%",
        alignItems: 'center',
        padding: 15,
    },
    userBtn: {
        backgroundColor: "#1e90ff",
        padding: 15,
        width: "45%"
    },
    btnTxt: {
        fontSize: 18,
        textAlign: "center"
    },
    btnTxtRegister: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }


});