import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = ({ onLogout }) => {
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            // Clear token from AsyncStorage
            await AsyncStorage.removeItem('token');
            
            // Call the onLogout function to update the app state
            onLogout();

            Alert.alert('Logout Successful', 'You have been logged out.');
            navigation.navigate('Login'); // Navigate back to the Login screen
        } catch (err) {
            console.error('Error during logout:', err);
            Alert.alert('Logout failed', 'An error occurred while logging out. Please try again.');
        }
    };

    return (
        <View>
            <TouchableOpacity
                onPress={handleLogout} 
                style={{
                    backgroundColor: '#E60861',
                    width: 350,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: 10,
                    height: 40,
                    marginTop: 20
                }}>
                <Text  
                    style={{
                        textAlign: 'center',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 25,
                    }}>Logout
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Logout;