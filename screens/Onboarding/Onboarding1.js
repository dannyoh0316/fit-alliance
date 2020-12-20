import React, { useState } from 'react'
import styles from './styles';
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import Next from "./images/next.png";
import Prev from "./images/prev.png";
import { useDispatch } from 'react-redux';
import { storeGender, storeAge } from '../../redux/store'

const Onboarding1 = ({ navigation }) => {
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch()

    const handleNext = () => {
        dispatch(storeGender(gender))
        dispatch(storeAge(age))
        navigation.navigate('Onboarding2')
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>Welcome onboard!</Text>
                <Text style={styles.title}>Profile setup</Text>
                <View style={{ marginTop: 50 }}>
                    <Text style={styles.questions}>What's your gender?</Text>
                </View>

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
                <View style={{ marginTop: 50 }}>
                    <Text style={styles.questions}>What's your age?</Text>
                </View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: "white", textAlign: "center" }}
                    onChangeText={age => setAge(age)}
                    value={age}
                />
            </View>
            <View style={styles.arrows}>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Image source={Prev} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext}>
                    <Image source={Next} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Onboarding1;
