import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { storeLogin } from '../../redux/store'

const LoginScreen = (props) => {
    const { email, navigation } = props
    const [localEmail, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                    onPress={() => {
                        storeLogin(email)
                        navigation.navigate('BottomTabNavigator')
                    }}
                >
                    <Text style={styles.buttonTitle}>Submit</Text>
                </TouchableOpacity>
                <Text style={styles.buttonTitle}>{email != "" ? email : null}</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Onboarding1')}>
                    <Text style={styles.createAccountText}>Create an account</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        email: state.user.email
    }
}

const mapDispatchToProps = {
    storeLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
