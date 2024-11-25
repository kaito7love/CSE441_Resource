import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {store} from './src/store/store';
import Login from './src/Login';
import HomeScreen from './src/HomeScreen';
import Customer from './src/customer/Customer';
import AddCustomer from './src/customer/AddCustomer';
import CustomerDetail from './src/customer/CustomerDetail';
import Transaction from './src/transaction/Transaction';
import TransactionDetail from './src/transaction/TransactionDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logout from './src/logout/Logout';
import AddService from './src/AddService';
import ServiceDetail from './src/ServiceDetail';
import EditService from './src/EditService';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeScreens() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'HomeScreen'}}
      />
      <Stack.Screen
        name="ServiceDetail"
        component={ServiceDetail}
        options={{title: 'ServiceDetail'}}
      />
      <Stack.Screen
        name="AddService"
        component={AddService}
        options={{title: 'AddService'}}
      />
      <Stack.Screen
        name="EditService"
        component={EditService}
        options={{title: 'EditService'}}
      />
    </Stack.Navigator>
  );
}

function CustomerScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Customer"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="Customer"
        component={Customer}
        options={{title: 'Customer'}}
      />
      <Stack.Screen
        name="CustomerDetail"
        component={CustomerDetail}
        options={{title: 'Customer Detail'}}
      />
      <Stack.Screen
        name="AddCustomer"
        component={AddCustomer}
        options={{title: 'Add Customer'}}
      />
    </Stack.Navigator>
  );
}

function TransactionScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Transaction"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{title: 'Transaction'}}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{title: 'Transaction Detail'}}
      />
    </Stack.Navigator>
  );
}
function LogoutScreens({onLogout}) {
  return (
    <Stack.Navigator
      initialRouteName="Logout"
      screenOptions={{headerShown: true}}>
      <Stack.Screen name="Logout">
        {() => <Logout onLogout={onLogout} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
const TabNavigator = ({onLogout}) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreens"
      barStyle={{backgroundColor: '#E60861'}}
      labeled={true}
      activeColor="#E60861"
      inactiveColor="white">
      <Tab.Screen
        name="HomeScreens"
        component={HomeScreens}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
          tabBarLabel: 'HomeScreen',
        }}
        
      />
      <Tab.Screen
        name="CustomerScreen"
        component={CustomerScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="group" color={color} size={24} />
          ),
          tabBarLabel: 'Customer',
        }}
      />
      <Tab.Screen
        name="TransactionScreen"
        component={TransactionScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="store" color={color} size={24} />
          ),
          tabBarLabel: 'Transaction',
        }}
      />
      <Tab.Screen
        name="LogoutScreens"
        component={() => <LogoutScreens onLogout={onLogout} />}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="meeting-room" color={color} size={24} />
          ),
          tabBarLabel: 'Logout',
        }}
        
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = async () => {
    // Clear user data from AsyncStorage or any other storage
    await AsyncStorage.removeItem('token'); // Adjust this based on your storage keys
    await AsyncStorage.removeItem('userData'); // If you store user data, clear it too
    setIsLoggedIn(false);
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isLoggedIn ? 'TabNavigator' : 'Login'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login">
            {() => <Login onLoginSuccess={handleLogin} />}
          </Stack.Screen>
          <Stack.Screen name="TabNavigator">
            {() => <TabNavigator onLogout={handleLogout} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
