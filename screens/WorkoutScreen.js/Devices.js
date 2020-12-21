import React, {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Devices = () => {
    const [selected, setSelected] = useState([]);

    const toggleSelect = device => setSelected(selected => (selected.includes(device) ? selected.filter(q => q !== device) : [...selected, device]));

    const isSelected = device => selected.includes(device);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Heartrate Monitor</Text>
                <TouchableOpacity style={isSelected('heartrate') ? styles.connectDevicesConnected : styles.connectDevices} onPress={() => toggleSelect('heartrate')}>
                    <Text style={isSelected('heartrate') ? styles.connectDevicesTextConnected : styles.connectDevicesText}>{isSelected('heartrate') ? 'Connected' : 'Connect'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Step Counter</Text>
                <TouchableOpacity style={isSelected('step') ? styles.connectDevicesConnected : styles.connectDevices} onPress={() => toggleSelect('step')}>
                    <Text style={isSelected('step') ? styles.connectDevicesTextConnected : styles.connectDevicesText}>{isSelected('step') ? 'Connected' : 'Connect'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Calorie Burn Tracker</Text>
                <TouchableOpacity style={isSelected('cal') ? styles.connectDevicesConnected : styles.connectDevices} onPress={() => toggleSelect('cal')}>
                    <Text style={isSelected('cal') ? styles.connectDevicesTextConnected : styles.connectDevicesText}>{isSelected('cal') ? 'Connected' : 'Connect'}</Text>
                </TouchableOpacity>
            </View>
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
      fontSize: 20,
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
      height: 30,
      padding: 10,
      minWidth: 100,
      maxWidth: 100,
      top: 7,
      backgroundColor: '#fe6813',
    },
    connectDevicesText: {
      fontSize: 12,
      textAlign: 'center',
      margin: 10,
      color: 'black',
    },
    connectDevicesConnected: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 30,
        padding: 10,
        minWidth: 100,
        maxWidth: 100,
        top: 7,
        backgroundColor: '#000',
      },
      connectDevicesTextConnected: {
        fontSize: 12,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
});

export default Devices;
