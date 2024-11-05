import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

const FavoriteScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const filePath = 'https://randomuser.me/api/?results=5';

    useEffect(() => {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(d => {
                setData(d.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const contacts = useSelector(state => state.contacts);

    const handlePress = (item) => {
        navigation.navigate('DetailContactFavorite', { contact: item });
    };

    const goHome = () => {
        navigation.navigate('Contact')
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
                style={styles.imageContainer} 
                onPress={() => handlePress(item)}
            >
                <Image 
                    style={styles.image} 
                    source={{ uri: item.picture.medium }} 
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.login.uuid}
                numColumns={3}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%',
    },
    imageContainer: {
        flex: 1,
        margin: 5, 
        alignItems: 'center',
    },
    image: {
        width: 80, 
        height: 80, 
        borderRadius: 50,
    },
    columnWrapper: {
        justifyContent: 'space-between', 
    },
});

export default FavoriteScreen;