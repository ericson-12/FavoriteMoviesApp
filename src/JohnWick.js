import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function JohnWick({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://cdn.onebauer.media/one/empire-tmdb/films/245891/images/mFb0ygcue4ITixDkdr7wm1Tdarx.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg'}}/>
            <Text style={styles.title}>John Wick</Text>
            <Text style={styles.year}>2014</Text>
            <Text style={styles.actors}>Keanu Reeves, Michael Nyqvist, and Willem Dafoe</Text>
            <Text style={styles.description}>The story focuses on John Wick searching for the men who broke into his home, stole his vintage car and killed his puppy, which was a last gift to him from his recently deceased wife.</Text>
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
});

export default JohnWick;
