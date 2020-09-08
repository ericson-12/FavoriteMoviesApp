import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function TheDarkKnight({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://cdn.vox-cdn.com/thumbor/U23CEo37m2zQ_p_W4JnQjpXa-Wk=/0x0:1200x675/620x413/filters:focal(478x31:670x223)/cdn.vox-cdn.com/uploads/chorus_image/image/60384393/0_c9S8ajFBpwX89ZuU.0.jpeg'}}/>
            <Text style={styles.title}>The Dark Knight</Text>
            <Text style={styles.year}>2008</Text>
            <Text style={styles.actors}>Christian Bale, Michael Caine, Heath Ledger, and Gary Oldman</Text>
            <Text style={styles.description}>Batman, Police Lieutenant James Gordon, and District Attorney Harvey Dent form an alliance to dismantle organized crime in Gotham City, but are menaced by an anarchistic mastermind known as the Joker, who seeks to undermine Batman's influence and throw the city into anarchy.</Text>
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

export default TheDarkKnight
