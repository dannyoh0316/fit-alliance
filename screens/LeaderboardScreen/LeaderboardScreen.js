import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { color } from 'react-native-reanimated';
import Leaderboard from './Leaderboard';


const LeaderboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      <Leaderboard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex:1,
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
      fontWeight: 'bold'
  },
});

export default LeaderboardScreen;
