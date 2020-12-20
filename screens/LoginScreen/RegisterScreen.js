import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { storeLogin } from '../../redux/store'
import { connect, useDispatch, useSelector } from "react-redux"
import axios from 'axios'

const RegisterScreen = (props) => {
    const { navigation } = props
    const email = useSelector(state => state.user.email)
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [localEmail, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://us-central1-aiot-fit-xlab.cloudfunctions.net/fitallianceregister", {
            name: name,
            email: localEmail,
            password: password
        }).then(res => {
            console.log(res.status)
        })
        dispatch(storeLogin(email))
        navigation.navigate('Onboarding1')
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
                    placeholder='Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setName(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
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
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonTitle}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={styles.createAccountText}>Already have an account? Log in</Text>
                </TouchableOpacity>

            </KeyboardAwareScrollView>
        </View>
    )
}


export default RegisterScreen;
