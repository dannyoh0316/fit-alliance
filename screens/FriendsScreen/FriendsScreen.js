import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import SearchBar from './SearchBar';
// import filter from 'lodash.filter';


const friendsData = [
  { id: '1', title: 'Adam' },
  { id: '2', title: 'Bob' },
  { id: '3', title: 'Carl' },
  { id: '4', title: 'David' },
  { id: '5', title: 'Ethan' },
  { id: '6', title: 'Frank' },
  { id: '7', title: 'Gareth' },
  { id: '8', title: 'Harry' },
];

const FriendsScreen = () => {
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Friends</Text>
      <SearchBar query={query} setQuery={setQuery} />
      <FlatList
        data={friendsData}
        keyExtractor={friend => friend.id}
        renderItem={({ item }) => (
          <View style={styles.friend}>
            <Image
              source={require('./../../assets/icon.png')}
              style={styles.friendImage}
            />
            <View style={styles.metaInfo}>
              <Text style={styles.friendName}>{item.title}</Text>
            </View>
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
      fontWeight:'bold',
  },
  friend: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  friendName: {
    fontSize: 20,
    width: 200,
    top: 25,
    color: 'white',
  },
  friendImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  metaInfo: {
    marginLeft: 40,
  },
});

export default FriendsScreen;
