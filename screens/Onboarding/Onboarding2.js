import React, { useEffect, useState } from 'react'
import styles from './styles';
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import Next from "./images/next.png"
import Prev from "./images/prev.png"

export default function onboarding2(props) {
    const [value, onChangeText] = React.useState('');
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Few More Questions</Text>

            <Text style={styles.title}>Profile setup</Text>
            <Text style={styles.questions}>What's your height?</Text>
            <TextInput
                className={styles.textinput}
                style={{ height: 27, borderColor: 'gray', borderWidth: 1, color: "white", textAlign: "center", borderRadius: "16px", marginBottom: "15px" }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />

            <Text style={styles.questions}>What's your weight?</Text>
            <TextInput
                className={styles.textinput}
                style={{ height: 27, borderColor: 'gray', borderWidth: 1, color: "white", textAlign: "center", borderRadius: "16px", marginBottom: "15px" }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />

            <Text style={styles.questions}>Do you have any mental conditions?</Text>

            <TextInput
                className={styles.textinput}
                style={{ height: 60, borderColor: 'gray', borderWidth: 1, color: "white", textAlign: "center", marginBottom: "15px", borderRadius: "16px", width: "260px" }}
                onChangeText={text => onChangeText(text)}
                value={value}
                multiline
            />

            <TouchableOpacity>
                <Image source={Prev} style={{ width: 50, height: 50, position: "absolute", right: "13px", bottom: "13px" }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigate("Onboarding2")}>
                <Image source={Next} style={{ width: 50, height: 50, position: "absolute", left: "13px", bottom: "13px" }} />
            </TouchableOpacity>

        </View>
    )
}
