import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailContactScreen from './src/screens/DetailContactScreen';
import DetailContactFavorite from './src/screens/DetailContactFavorite';
import FavoriteScreen from './src/screens/FavoriteScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();

function ContactsScreens() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="Contacts"
        component={HomeScreen}
        options={{ title: 'Contacts' }}
      />
      <Stack.Screen
        name="DetailContactScreen"
        component={DetailContactScreen}
        options={{ title: 'Profile contact' }}
      />
    </Stack.Navigator>
  );
}

function FavoriteScreens() {
  return (
    <Stack.Navigator
      initialRouteName="FavoriteScreen"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{ title: 'Favorites' }}
      />
      <Stack.Screen
        name="DetailContactFavorite"
        component={DetailContactFavorite}
        options={{ title: 'Profile contact' }}
      />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Contacts"
    barStyle={{ backgroundColor: 'blue' }}
    labeled={false}
    activeColor="blue"  
    inactiveColor="white">  
    <Tab.Screen
      name="HomeScreen"
      component={ContactsScreens}
      options={{
        tabBarIcon: 'format-list-bulleted',
      }}
    />
    <Tab.Screen
      name="FavoriteScreen"
      component={FavoriteScreens}
      options={{
        tabBarIcon: 'star-check',
      }}
    />
  </Tab.Navigator>
  
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
