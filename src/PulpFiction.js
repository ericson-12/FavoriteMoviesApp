import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function PulpFiction({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pulp-fiction-1-1570825810.jpg?resize=480:*'}}/>
            <Text style={styles.title}>Pulp Fiction</Text>
            <Text style={styles.year}>1994</Text>
            <Text style={styles.actors}>Samuel L. Jackson, Bruce Wilis, and John Travolta</Text>
            <Text style={styles.description}>Pulp Fiction is the story of three men — Jules, Vincent, and Butch — and the choices each of them makes regarding life and death, honor and disgrace, and the vagaries of chance. ... When they get to Marsellus's club, Jules exits the narrative and we never see him again.</Text>
        </View>
    );
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
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        fontStyle: "italic",
        textAlign: "center",
    },
    actors: {
        fontSize: 25,
        fontWeight: "500",
        color: "#fff",
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

export default PulpFiction;
