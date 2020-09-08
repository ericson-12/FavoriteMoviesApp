import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function Goodfellas({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://www.shortlist.com/media/imager/202006/48777-posts.facebook_lg.jpg'}}/>
            <Text style={styles.title}>Goodfellas</Text>
            <Text style={styles.year}>1990</Text>
            <Text style={styles.actors}>Robert Di Nero, Joe Pecsi, and Ray Liotta</Text>
            <Text style={styles.description}>Since he was a kid, Henry always wanted to be a gangster, a Mafioso. Unfortunately for Henry, sometimes dreams come true.</Text>
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

export default Goodfellas;