import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BottomTabNavigator from '../../navigators/BottomTabNavigator';
import Next from "./images/next.png";
import Prev from "./images/prev.png";
import styles from './styles';
import { storeLevel } from '../../redux/store'
import axios from 'axios'

const Onboarding3 = ({ navigation }) => {
    const [level, setLevel] = useState("average")
    const dispatch = useDispatch()
    const { age, email, gender, height, mentalCondition, profilepic, weight } = useSelector(state => state.user)
    const handleNext = () => {
        dispatch(storeLevel(level))
        console.log('q', age)
        // UNHANDLED REQUEST WHEN PASSING IN BODY FOR SOME REASON
        axios.post(`https://us-central1-aiot-fit-xlab.cloudfunctions.net/fitallianceupdateuser`, {
            // age: age, 
            // email: email, 
            // gender: gender, 
            // height: height, 
            // profilepic: profilepic, 
            // weight: weight, 
            // mentalcondition: mentalCondition
        })
        .then(res => {
            console.log(res.status)
        })

        navigation.navigate('BottomTabNavigator')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>One last step...</Text>
            <Text style={styles.title}>Choose your level</Text>
            <Text style={styles.questions}>You can always change it later in the settings</Text>
            <View style={styles.btns}>
                <TouchableOpacity
                    style={level == "beginner" ? styles.selected : styles.options}
                    onPress={() => { setLevel("beginner") }}
                >
                    <Text className={styles.buttonTitle}>Beginner</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={level == "average" ? styles.selected : styles.options}
                    onPress={() => { setLevel("average") }}
                >
                    <Text className={styles.buttonTitle}>Average</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={level == "advanced" ? styles.selected : styles.options}
                    onPress={() => { setLevel("advanced") }}
                >
                    <Text className={styles.buttonTitle}>Advanced</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={level == "professional" ? styles.selected : styles.options}
                    onPress={() => { setLevel("professional") }}
                >
                    <Text className={styles.buttonTitle}>Professional</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.arrows}>
                <TouchableOpacity onPress={() => navigation.navigate('Onboarding2')}>
                    <Image source={Prev} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext}>
                    <Image source={Next} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Onboarding3;
