import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Next from "./images/next.png";
import Prev from "./images/prev.png";
import styles from './styles';
import {storeWeight, storeHeight, storeMentalCondition} from '../../redux/store'
import { useDispatch } from 'react-redux';

const Onboarding2 = ({ navigation }) => {
    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [mentalCondition, setMentalCondition] = React.useState('');
    const dispatch = useDispatch()

    const handleNext = () => {
      dispatch(storeHeight(height))
      dispatch(storeWeight(weight))
      dispatch(storeMentalCondition(mentalCondition))
      navigation.navigate('Onboarding3')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Few More Questions</Text>
            <Text style={styles.title}>Profile setup</Text>
            <Text style={styles.questions}>What's your height?</Text>
            <TextInput
                className={styles.textinput}
                style={{ height: 27, width: 166, borderColor: 'gray', borderWidth: 1, color: "white", textAlign: "center", borderRadius: 16, marginBottom: 15 }}
                onChangeText={height => setHeight(height)}
                value={height}
            />
            <Text style={styles.questions}>What's your weight?</Text>
            <TextInput
                className={styles.textinput}
                style={{ height: 27, width: 166, borderColor: 'gray', borderWidth: 1, color: "white", textAlign: "center", borderRadius: 16, marginBottom: 15 }}
                onChangeText={weight => setWeight(weight)}
                value={weight}
            />
            <Text style={styles.questions}>Do you have any mental conditions?</Text>
            <TextInput
                className={styles.textinput}
                style={{ height: 60, borderColor: 'gray', borderWidth: 1, color: "white", textAlign: "center", marginBottom: 15, borderRadius: 16, width: 260 }}
                onChangeText={mentalCondition => setMentalCondition(mentalCondition)}
                value={mentalCondition}
                multiline
            />
            <View style={styles.arrows}>
                <TouchableOpacity onPress={() => navigation.navigate('Onboarding1')}>
                    <Image source={Prev} style={{ width: 50, height: 50}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext}>
                    <Image source={Next} style={{ width: 50, height: 50}} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Onboarding2;
