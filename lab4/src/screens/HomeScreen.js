// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const filePath = 'https://randomuser.me/api/?results=50';

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
        navigation.navigate('DetailContactScreen', { contact: item });
    };

    const goFavorite = () => {
        navigation.navigate('FavoriteScreen');
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item)} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, padding: 10, backgroundColor: '#fff', borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 }}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50, marginRight: 15 }} source={{ uri: item.picture.medium }} />
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>{`${item.name.first} ${item.name.last}`}</Text>
                            <Text style={{ color: 'blue' }}>Phone: {item.phone}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.login.uuid}
            />
        </View>
    );
};

export default HomeScreen;