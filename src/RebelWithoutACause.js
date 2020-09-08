import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function RebelWithoutACause({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://s3.amazonaws.com/burnsfilm-prod/images/000/004/811/large/20160120175246-rebel-without-cause-canted-frame.jpg'}}/>
            <Text style={styles.title}>Rebel Without a Cause</Text>
            <Text style={styles.year}>1955</Text>
            <Text style={styles.actors}>James Dean and Natalie Wood</Text>
            <Text style={styles.description}>Jim is a new student and inorder to fit in, finds himself over his head and torn on a decision that could impact the rest of his life.</Text>
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

export default RebelWithoutACause;
