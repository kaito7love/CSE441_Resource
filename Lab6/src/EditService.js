import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditService = ({ navigation }) => {
    const route = useRoute();
    const { serviceId, name: initialName, price: initialPrice } = route.params || {};

    const [name, setName] = useState(initialName || '');
    const [price, setPrice] = useState(initialPrice || '');

    const handleSubmit = async () => {
        const filePath = `https://kami-backend-5rs0.onrender.com/services/${serviceId}`;
        
        const serviceData = { name, price };

        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                Alert.alert('Error', 'You must be logged in to add or edit a service.');
                return;
            }

            const response = await fetch(filePath, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(serviceData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.errors[0].msg || 'Failed to save the service.');
            }

            Alert.alert('Success', 'Service saved successfully', [
                { text: 'OK', onPress: () => navigation.navigate('HomeScreen', { refresh: true }) }
            ]);
        } catch (error) {
            console.error('Submit error:', error);
            Alert.alert('Error', error.message || 'Failed to save the service. Please try again later.');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Service Name"
                value={name}
                onChangeText={setName}
                style={{ borderWidth: 1, borderColor: 'lightgrey', marginBottom: 10, padding: 10 }}
            />
            <TextInput
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                style={{ borderWidth: 1, borderColor: 'lightgrey', marginBottom: 10, padding: 10 }}
            />
            <Button color={"#E60861"} title="Save" onPress={handleSubmit} />
        </View>
    );
};

export default EditService;