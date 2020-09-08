import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function Joker({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://images.indianexpress.com/2019/07/joaquin-phoenix-joker-1200.jpg'}}/>
            <Text style={styles.title}>Joker</Text>
            <Text style={styles.year}>2019</Text>
            <Text style={styles.actors}>Joaquin Phoenix and Robert Di Nero</Text>
            <Text style={styles.description}>Arthur Flec just wanted to make people happy and always tried to put on a happy face. As a professional clown, he is mediocre and eventually. Things boil over for Authur and he snaps, leading to him unintentionally starting a movement among the less fortunate population of Gotham City.</Text>
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

export default Joker;