import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function TheDeparted({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/11/The-Departed-1.jpg?q=50&fit=crop&w=943&h=500'}}/>
            <Text style={styles.title}>The Departed</Text>
            <Text style={styles.year}>2006</Text>
            <Text style={styles.actors}>Leonardo DiCaprio, Matt Damon and Jack Nicholson</Text>
            <Text style={styles.description}>A tale of deception, the story focuses on a young cop, Billy Costigan who risks his morals, and his sanity to infiltrate an American- Irish mob and gain the trust of its leader - Frank Costello. The plot thickens when both Billy and Costello discover a rat in their disparate organisations, and chaos ensues.</Text>
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

export default TheDeparted
