import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import {Prev} from '../Onboarding/images/prev.png'

const WorkoutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Room</Text>
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Image source={Prev} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
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

export default WorkoutScreen;
