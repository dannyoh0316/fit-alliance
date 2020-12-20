import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const TargetSummary = () => {
    return (
        <>
            <Text style={styles.mainText}>
                Hurray! You have completed today's workout target.
            </Text>
            <View style={styles.summary}>
                <Text style={styles.text}>Pushups x10</Text>
                <Text style={styles.text}>Situps x10</Text>
                <Text style={styles.text}>Side plank</Text>
                <Text style={styles.text}>Plank</Text>
                <Text style={styles.text}>Squats x20</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    mainText: {
      fontSize: 17,
      textAlign: 'center',
      color: '#8d9ba1',
    },
    text: {
        fontSize: 16,
        color: '#8d9ba1',
    },
    summary: {
        margin: 30,
    }
  });

export default TargetSummary;
