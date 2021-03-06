import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { storeLogin } from '../../redux/store'
import { connect, useDispatch, useSelector } from "react-redux"
import axios from 'axios'

const LoginScreen = (props) => {
    const { navigation } = props
    const email = useSelector(state => state.user.email)
    const dispatch = useDispatch()
    const [localEmail, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log('login handler')
        axios.post("https://us-central1-aiot-fit-xlab.cloudfunctions.net/fitalliancelogin", {
            email: localEmail,
            password: password
        }).then(res => {
            if (res.status == 200) {
                dispatch(storeLogin(email))
                console.log("successful login")
                navigation.navigate('BottomTabNavigator')
            } else {
                console.log("invalid login")
            }
        })
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('./../../assets/logo.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={localEmail}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonTitle}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('register')}>
                    <Text style={styles.createAccountText}>Create an account</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}


export default LoginScreen;
