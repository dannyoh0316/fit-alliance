import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';


const WorkoutConnect = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Room</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#000',
  },
  header: {
    fontSize: 26,
    textAlign: 'center',
    margin: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WorkoutConnect;
