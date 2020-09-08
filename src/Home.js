import React from 'react';
import {
    StyleSheet, 
    View,
    Text,
    TouchableWithoutFeedback,
    SafeAreaView, 
    FlatList
} from "react-native";

const DATA = [
    {
        id: "1",
        title: "Rebel Without a Cause",
        year: "1955",
    },
    {
        id: "2",
        title: "Hook",
        year: "1991",
    },
    {
        id: "3",
        title: "Goodfellas",
        year: "1990",
    },
    {
        id: "4",
        title: "Joker",
        year: "2019",
    },
    {
        id: "5",
        title: "Pulp Fiction",
        year: "1994",
    },
    {
        id: "6",
        title: "Inglorious Basterds",
        year: "2009",
    },
    {
        id: "7",
        title: "John Wick",
        year: "2014",
    },
    {
        id: "8",
        title: "Running on Empty",
        year: "1988",
    },
    {
        id: "9",
        title: "The Departed",
        year: "2006",
    },
    {
        id: "10",
        title: "The Dark Knight",
        year: "2008",
    },
];



function Home({ navigation }) {
    
    const renderItem = ({ item }) => (
        <TouchableWithoutFeedback onPress={ () => navigation.navigate(item.id)}>
          <View style={styles.listItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.year}>{item.year}</Text>
          </View>
        </TouchableWithoutFeedback>
      );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#711324",
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    listItem: {
        backgroundColor: '#fff',
        borderStyle: "solid",
        borderWidth: 1,
        marginLeft: 6,
        marginRight: 6,
        marginTop: 3,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 50,
        borderColor: '#000'
      },
      title: {
        fontSize: 27,
        textAlign: "center",
        fontWeight: "700",
        color: '#000',
        fontStyle: "italic",
        textDecorationLine: "underline",
      },
      year: {
        textAlign: 'center',
      },
      actors: {
        textAlign: 'center',
      },
      description: {
        fontSize: 15,
        marginBottom: 7,
        color: '#000',
        textAlign: 'center',
      },
  });

export default Home;

