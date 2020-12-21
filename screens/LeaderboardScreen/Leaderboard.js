import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';


const Leaderboard = ({ selected, allFriends }) => {
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
                    <Text style={styles.friendName}>1000</Text>
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
      top: 20,
      color: 'white',
    },
    friendImage: {
      width: 65,
      height: 65,
      borderRadius: 50,
    },
    metaInfo: {
      marginLeft: 20,
    },
});

export default Leaderboard;
