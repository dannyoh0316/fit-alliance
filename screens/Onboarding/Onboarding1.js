import React, { useState } from 'react'
import styles from './styles';
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import Next from "./images/next.png";
import Prev from "./images/prev.png";


const Onboarding1 = ({ navigation }) => {
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome onboard!</Text>
            <Text style={styles.title}>Profile setup</Text>
            <Text style={styles.questions}>What's your gender?</Text>
            <View style={styles.btns}>
                <TouchableOpacity
                    style={gender === "male" ? styles.selected : styles.options}
                    onPress={() => { setGender("male") }}
                >
                    <Text style={styles.buttonTitle}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={gender === "female" ? styles.selected : styles.options}
                    onPress={() => { setGender("female") }}
                >
                    <Text style={styles.buttonTitle}>Female</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.questions}>What's your age?</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: "white", textAlign: "center" }}
                onChangeText={age => setAge(age)}
                value={age}
            />
            <View style={styles.arrows}>
                <TouchableOpacity>
                    <Image source={Prev} style={{ width: 50, height: 50}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Onboarding2')}>
                    <Image source={Next} style={{ width: 50, height: 50}} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Onboarding1;
