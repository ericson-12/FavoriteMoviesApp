import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function RunningOnEmpty({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://hotcorn-cdn.s3.amazonaws.com/wp-content/uploads/sites/5/2018/11/02114345/Running-on-Empty-4-1024x576.jpg'}}/>
            <Text style={styles.title}>Running On Empty</Text>
            <Text style={styles.year}>1988</Text>
            <Text style={styles.actors}>River Phoenix, Christine Lahti, and Judd Hirsch</Text>
            <Text style={styles.description}>The Popes, a married couple, have been on the ru from the law since the 1960s, and their children - especially Danny, who is a senior in high school and has never known any other kind of lifestyle.</Text>
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

export default RunningOnEmpty
