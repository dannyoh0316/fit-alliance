import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';


const SessionScreen = ({ navigation }) => {
  const [hardwareInfo, setHardwareInfo] = useState([{averagebpm: "", steps: "", motorcalories: "", duration: "", timestamp: "", averagebloodo2: ""}]);

  useEffect(() => {
    getHardwareInfo();
  }, []);

  const getHardwareInfo = async () => {
    const res = await axios.post('https://us-central1-aiot-fit-xlab.cloudfunctions.net/fitalliancegetsessions', {
      useremail: 'someguy@email.com'
    });
    console.log(res.data.sessions);
    // setHardwareInfo(res.data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{right: 40, top: 15}} onPress={() => navigation.navigate('WorkoutConnect')}>
          <Image source={require('../Onboarding/images/prev.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.headerText}>Go!</Text>
      </View>
      <View style={styles.header}>
                <Text style={styles.headerText}>Average BPM</Text>
                <TouchableOpacity style={styles.connectDevicesConnected}>
                    <Text style={styles.connectDevicesTextConnected}>99</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Steps</Text>
                <TouchableOpacity style={styles.connectDevicesConnected}>
                    <Text style={styles.connectDevicesTextConnected}>100</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Calories Burned</Text>
                <TouchableOpacity style={styles.connectDevicesConnected}>
                    <Text style={styles.connectDevicesTextConnected}>101</Text>
                </TouchableOpacity>
            </View>
      <TouchableOpacity style={styles.connectDevices} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.connectDevicesText}>Finish session</Text>
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
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 26,
    textAlign: 'center',
    margin: 20,
    color: 'white',
    fontWeight: 'bold',
    right: 20,
  },
  bonusText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#8d9ba1',
  },
  connectDevices: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 40,
    padding: 10,
    minWidth: 320,
    maxWidth: 320,
    backgroundColor: '#34F4F9',
  },
  connectDevicesText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});

export default SessionScreen;
