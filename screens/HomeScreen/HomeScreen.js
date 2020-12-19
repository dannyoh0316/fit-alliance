import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import LeaderboardUpdateCard from './LeaderboardUpdateCard';
import StartWorkout from './StartWorkout';
import Target from './Target';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hey, Name!</Text>
      <LeaderboardUpdateCard navigation={navigation} />
      <Target />
      <StartWorkout navigation={navigation} />
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
      fontSize: 20,
      textAlign:'center',
      margin: 20,
      color: 'white',
      fontWeight: 'bold',
  },
});

export default HomeScreen;
