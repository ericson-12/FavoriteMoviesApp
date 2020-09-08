import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function Hook({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://am22.mediaite.com/tms/cnt/uploads/2020/03/hook-1200x675.jpg'}}/>
            <Text style={styles.title}>Hook</Text>
            <Text style={styles.year}>1991</Text>
            <Text style={styles.actors}>Robin Williams, Duston Hoffman, and Julia Roberts</Text>
            <Text style={styles.description}>Captain James Hook has returned from 'Neverland' and kiddnapped Peter Banning's childern. Peter has to return to 'Neverland' and do what it takes to rescue them.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        padding: 15,
        backgroundColor: "#711324",
    },
    image: {
        width: 390,
        height: 300,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 9,
    },
    title: {
        fontSize: 35,
        textAlign: "center",
        marginTop: 2,
        fontWeight: "700",
        color: '#fff',
        fontStyle: "italic",
        textDecorationLine: "underline",
    },
    year: {
        fontSize: 25,
        fontWeight: "500",
        color: "#fff",
    },
    actors: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        fontStyle: "italic",
        textAlign: "center",
    },
    description: {
        fontSize: 20,
        marginBottom: 7,
        textAlign: 'center',
        padding: 10,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: "#000",
        borderRadius: 9,
        backgroundColor: "#fff",
        color: "#000",
    },
})

export default Hook;
