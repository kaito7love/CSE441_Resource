import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomerDetail = ({ navigation }) => {

    const route = useRoute();
    const { service } = route.params;
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);

    const handleDelete = async () => {
        const filePath = `https://kami-backend-5rs0.onrender.com/customers/${service._id}`;
    
        try {
            console.log('Attempting to delete service with ID:', service._id);
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                Alert.alert('Error', 'You must be logged in to delete a service.');
                return;
            }
    
            const response = await fetch(filePath, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.errors[0].msg || 'Failed to delete the service.');
            }
    
            Alert.alert('Success', 'Service deleted successfully', [
                { text: 'OK', onPress: () => navigation.navigate('Customer', { refresh: true }) }
            ]);
        } catch (error) {
            console.error('Delete error:', error);
            Alert.alert('Error', error.message || 'Failed to delete the service. Please try again later.');
        }
    };

    const handleEdit = () => {
        navigation.navigate('EditService', {
            serviceId: service._id,
            name: service.name,
            price: service.price,
        });
    };

    return (
        <View style={{ marginLeft: 10, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Service name: </Text>
                <Text>{service.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Price: </Text>
                <Text>{service.price}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Creator: </Text>
                <Text>{service.createdBy}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Time: </Text>
                <Text>{service.createdAt}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Final update: </Text>
                <Text>{service.updatedAt}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={{
                        backgroundColor: 'black',
                        width: 100, 
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                        padding: 5, 
                        borderRadius: 10, 
                        marginTop: 20
                    }}
                    onPress={handleDelete}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Delete</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{
                        backgroundColor: 'black',
                        width: 100, 
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                        padding: 5, 
                        borderRadius: 10, 
                        marginTop: 20
                    }}
                    onPress={handleEdit}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomerDetail;