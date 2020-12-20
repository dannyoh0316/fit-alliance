import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 20,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column"
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
        marginTop: 15,
        marginBottom: 15
    },
    selected: {
        width: 177,
        height: 42,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        backgroundColor: "#FE6813"
    },
    arrows: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 10,
    }
})