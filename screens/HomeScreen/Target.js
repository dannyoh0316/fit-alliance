import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Target = () => {
    return (
        <>
            <Text style={styles.header}>Today's target</Text>
            <TouchableOpacity>
                <Text style={styles.text}>Set target</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        textAlign:'center',
        margin: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 15,
        color: '#fe6813',
    },
});

export default Target;
