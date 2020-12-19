import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const TargetScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Target</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor:'#15202B',
  },
  header:{
      fontSize:26,
      textAlign:'center',
      margin:20,
      color:'white',
      fontWeight:'bold'
  }
});

export default TargetScreen;
