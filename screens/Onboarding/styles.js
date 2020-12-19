import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#14171A',
        padding: 20,
    },
    btns: {
        flexDirection: 'column',
        margin: 10,
    },

    input: {
        height: 200,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#006666',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        color: 'white'
    },
    button: {
        backgroundColor: '#34F4F9',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        height: 48,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center'
    },
    options: {
        width: 177,
        height: 42,
        backgroundColor: "#E5E5E5",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20
    },
    questions: {
        fontSize: 14,
        textAlign: 'center',
        color: '#8D9BA2',
        fontWeight: 'bold',
        marginTop: 20
    },
    txt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        margin: 10
    },
    tx: {
        color: 'white',
        textAlign: 'center'
    },
    picker: {
        height: 150,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 40
    },
    lc: {
        backgroundColor: "#006666"
    },
    dc: {
        backgroundColor: "#34F4F9"
    }
})