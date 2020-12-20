import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';


const FriendsList = ({ allFriends }) => {
    return (
        <FlatList
            data={allFriends}
            keyExtractor={friend => friend.friendid}
            renderItem={({ item }) => (
                <View style={styles.friend}>
                    <Image
                        source={require('./../../assets/icon.png')}
                        style={styles.friendImage}
                    />
                    <View style={styles.metaInfo}>
                        <Text style={styles.friendName}>{item.friendname}</Text>
                    </View>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
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

export default FriendsList;
