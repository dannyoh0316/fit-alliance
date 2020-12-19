import React, { useEffect, useState } from 'react'
import styles from './styles';
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import Next from "./images/next.png"
import Prev from "./images/prev.png"

export default function onboarding1(props) {
    const [value, onChangeText] = React.useState('');
    const { navigate } = props.navigation;

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

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: "white", textAlign: "center" }}
                onChangeText={text => onChangeText(text)}
                value={value}
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
