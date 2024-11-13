import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const navigation = useNavigation(); 
    const [phone, setPhone] = useState(''); 
    const [password, setPassword] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        const data = {
            
            phone: '0373007856',
            password: '123'
        };
    
        const config = {
            method: 'post',
            url: 'https://kami-backend-5rs0.onrender.com/auth',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
    
        

      
        try {
            const response = await axios(config);
            setResponseData(response.data);
            console.log(response.data);
        
          
            const token = response.data.token; 
            await AsyncStorage.setItem('token', token);
        
            Alert.alert('Successful');
            navigation.navigate('HomeScreen'); 
        } catch (err) {
            setError(err);
            console.error('Error:', err);
            Alert.alert('Login failed', 'Please check your credentials and try again.'); 
        }
    };

    return (
        <View>
            <Text style={{ color: '#E60861', textAlign: 'center', marginTop: 150, fontSize: 40, fontWeight: 'bold' }}>Login</Text>
            <View style={{ marginTop: 30 }}>
                <TextInput
                    placeholder='Phone'
                    value={phone} 
                    onChangeText={setPhone} 
                    style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 10,
                        width: 350,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: 20
                    }}
                />
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword} 
                        secureTextEntry={true} 
                        style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                            width: 350,
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    />
                </View>
            </View>
            <TouchableOpacity
                onPress={handleLogin} 
                style={{
                    backgroundColor: '#E60861',
                    width:350,
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
                        fontSize:25
                    }}>Login
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;