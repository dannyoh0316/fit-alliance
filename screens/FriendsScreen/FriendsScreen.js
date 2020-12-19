import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import FriendsList from './FriendsList';
import SearchBar from './SearchBar';
// import filter from 'lodash.filter';


const FriendsScreen = () => {
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Friends</Text>
      <SearchBar query={query} setQuery={setQuery} />
      <FriendsList />
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
});

export default FriendsScreen;
