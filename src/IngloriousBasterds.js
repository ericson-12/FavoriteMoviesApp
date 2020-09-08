import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function IngloriousBasterds({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://sm.mashable.com/t/mashable_in/photo/default/why-is-inglourious-basterds-the-perfect-quentin-tarantino-fi_hcbv.960.jpg'}}/>
            <Text style={styles.title}>Inglorious Basterds</Text>
            <Text style={styles.year}>2009</Text>
            <Text style={styles.actors}>Christoph Waltz, Brad Pitt, and Melanie Laurent</Text>
            <Text style={styles.description}>In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same. In German-occupied France, young Jewish refugee Shosanna Dreyfus witnesses the slaughter of her family by Colonel Hans Landa.</Text>
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

export default IngloriousBasterds;
