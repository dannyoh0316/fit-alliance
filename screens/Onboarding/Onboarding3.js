import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles';

export default function onboarding3() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>One last step...</Text>

            <Text style={styles.title}>Choose your level</Text>
            <Text style={styles.questions}>You can always change it later in the settings</Text>



            <Text style={styles.questions}>What's your age?</Text>
        </View>
    )
}
