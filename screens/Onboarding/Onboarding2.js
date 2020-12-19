import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Next from "./images/next.png";
import Prev from "./images/prev.png";
import styles from './styles';

export default function onboarding2(props) {
    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [mentalCondition, setMentalCondition] = React.useState('');
    
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Few More Questions</Text>

            <Text style={styles.title}>Profile setup</Text>
            <Text style={styles.questions}>What's your height?</Text>
            <TextInput
                className={styles.textinput}
                style={{ height: 27, borderColor: 'gray', borderWidth: 1, color: "white", textAlign: "center", borderRadius: "16px", marginBottom: "15px" }}
                onChangeText={height => setHeight(height)}
                value={height}
            />

            <Text style={styles.questions}>What's your weight?</Text>
            <TextInput
                className={styles.textinput}
                style={{ height: 27, borderColor: 'gray', borderWidth: 1, color: "white", textAlign: "center", borderRadius: "16px", marginBottom: "15px" }}
                onChangeText={weight => setWeight(weight)}
                value={weight}
            />

            <Text style={styles.questions}>Do you have any mental conditions?</Text>

            <TextInput
                className={styles.textinput}
                style={{ height: 60, borderColor: 'gray', borderWidth: 1, color: "white", textAlign: "center", marginBottom: "15px", borderRadius: "16px", width: "260px" }}
                onChangeText={mentalCondition => setMentalCondition(mentalCondition)}
                value={mentalCondition}
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
