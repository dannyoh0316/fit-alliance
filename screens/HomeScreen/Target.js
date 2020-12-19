import React from 'react';
import { Text, StyleSheet } from 'react-native';


const Target = () => {
    return (
        <Text style={styles.header}>Today's target</Text>
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
});

export default Target;
