import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


const StartWorkout = ({ navigation }) => {
    return (
        <>
        <Text style={styles.header}>Start workout session</Text>
        <TouchableOpacity style={styles.startWorkoutCard} onPress={() => navigation.navigate('Leaderboard')}>
            <Text style={styles.startWorkoutCardText}>
                Get started
            </Text>
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
    startWorkoutCard: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 130,
        padding: 10,
        minWidth: 320,
        maxWidth: 320,
        backgroundColor: '#333333',
    },
    startWorkoutCardText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
});

export default StartWorkout;
