import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Selector = ({ selected, setSelected }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setSelected('daily')}>
                <Text style={selected !== 'daily' ? styles.textNotSelected : styles.textSelected}>Daily</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setSelected('weekly')}>
                <Text style={selected !== 'weekly' ? styles.textNotSelected : styles.textSelected}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setSelected('monthly')}>
                <Text style={selected !== 'monthly' ? styles.textNotSelected : styles.textSelected}>Monthly</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 50,
        padding: 10,
        minWidth: 100,
        maxWidth: 100,
    },
    textNotSelected: {
        fontSize: 15,
        color: 'white',
    },
    textSelected: {
        fontSize: 15,
        color: '#fe6813',
    },
});

export default Selector;
