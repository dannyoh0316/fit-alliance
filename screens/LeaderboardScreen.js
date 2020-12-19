import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


const friendsData = [
  { id: '1', title: 'Adam' },
  { id: '2', title: 'Bob' },
  { id: '3', title: 'Carl' },
  { id: '4', title: 'David' },
];

const LeaderboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      <FlatList
        data={friendsData}
        keyExtractor={friend => friend.id}
        renderItem={({ item }) => (
          <View style={styles.friend}>
            <Text style={styles.friendText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor:'#000',
  },
  header: {
      fontSize:26,
      textAlign:'center',
      margin:20,
      color:'white',
      fontWeight:'bold'
  },
  friend: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%'
  },
  friendText: {
    fontSize: 18
  },
});

export default LeaderboardScreen;
