import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import HomeScreen from './src/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddService from './src/AddService';
import ServiceDetail from './src/ServiceDetail';
import EditService from './src/EditService';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddService" 
          component={AddService} options={{
            headerStyle: {
              backgroundColor: '#E60861',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
        <Stack.Screen name="ServiceDetail" 
          component={ServiceDetail} options={{
            headerStyle: {
              backgroundColor: '#E60861',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
        <Stack.Screen name="EditService" 
          component={EditService} options={{
            headerStyle: {
              backgroundColor: '#E60861',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;