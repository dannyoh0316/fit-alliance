import React, { useEffect, useState } from 'react'
import styles from './styles';
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

export default function onboarding1() {

    const [sub, setSub] = useState('Charity');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome onboard!</Text>

            <Text style={styles.title}>Profile setup</Text>
            <Text style={styles.questions}>What's your gender?</Text>

            <View style={styles.btns}>
                <TouchableOpacity
                    style={styles.options}
                    onPress={() => { }}
                >
                    <Text style={styles.buttonTitle}>Male</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.options}
                    onPress={() => { }}
                >
                    <Text style={styles.buttonTitle}>Female</Text>
                </TouchableOpacity>

            </View>

            <Text style={styles.questions}>What's your age?</Text>

        
        </View>
    )
}
