import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Alert} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TransactionDetail = ({navigation}) => {
  const route = useRoute();
  const {transaction} = route.params;
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, [transaction]);
  const totalAmount = () => {
    return transaction.services.reduce(
      (total, service) => total + service.price * service.quantity,
      0,
    );
  };
  const handleDelete = async () => {
    const filePath = `https://kami-backend-5rs0.onrender.com/transactions/${transaction._id}`;

    try {
      console.log('Attempting to delete transaction with ID:', transaction._id);
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Error', 'You must be logged in to delete a transaction.');
        return;
      }

      const response = await fetch(filePath, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.errors[0].msg || 'Failed to delete the transaction.',
        );
      }

      Alert.alert('Success', 'Service deleted successfully', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Customer', {refresh: true}),
        },
      ]);
    } catch (error) {
      console.error('Delete error:', error);
      Alert.alert(
        'Error',
        error.message ||
          'Failed to delete the transaction. Please try again later.',
      );
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
    <View
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        padding: 5,
      }}>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: 'white',
          borderWidth: 1,
          padding: 5,
          marginBottom: 10,
          width: '99%',
        }}>
        <View>
          <Text
            style={{
              padding: 5,
              color: '#E60861',
              fontSize: 20,
              marginBottom: 5,
              fontWeight: 'bold',
            }}>
            General information
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#A0A0A0',
                padding: 5,
                width: '50%',
              }}>
              Transaction code :
            </Text>
            <Text style={{padding: 5, fontWeight: 'bold', fontSize: 18}}>
              {transaction.id}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#A0A0A0',
                padding: 5,
              }}>
              Customer :
            </Text>
            <Text style={{padding: 5, fontWeight: 'bold', fontSize: 18}}>
              {transaction.customer.name}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#A0A0A0',
                padding: 5,
              }}>
              Creation time :
            </Text>
            <Text style={{padding: 5, fontWeight: 'bold', fontSize: 18}}>
              {new Date(transaction.customer.createdAt).toLocaleString('en-US')}
            </Text>
          </View>
        </View>
      </View>

      {/* Service List */}

      <View
        style={{
          borderRadius: 10,
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: 1,
          padding: 5,
          marginBottom: 10,
          width: '98%',
        }}>
        <View>
          <Text
            style={{
              padding: 5,
              color: '#E60861',
              fontSize: 20,
              marginBottom: 5,
              fontWeight: 'bold',
            }}>
            Service List
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                width: '30%',
                padding: 5,
              }}>
              {transaction.services.slice(0, 1).map(service => (
                <Text key={service._id}>{service.name}</Text>
              ))}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#A0A0A0',
                padding: 5,
                width: '30%',
              }}>
              {transaction.services.slice(1, 2).map(service => (
                <Text key={service._id}>x{service.quantity}</Text>
              ))}
            </Text>
            <Text style={{padding: 5, fontWeight: 'bold', fontSize: 18}}>
              {transaction.services.slice(0, 1).map(service => (
                <Text key={service._id}>{service.price} ₫</Text>
              ))}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                width: '50%',
                padding: 5,
              }}>
              {transaction.services.slice(1, 2).map(service => (
                <Text key={service._id}>{service.name}</Text>
              ))}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#A0A0A0',
                padding: 5,
              }}>
              {transaction.services.slice(1, 2).map(service => (
                <Text key={service._id}>x{service.quantity}</Text>
              ))}
            </Text>
            <Text style={{padding: 5, fontWeight: 'bold', fontSize: 18}}>
              {transaction.services.slice(1, 2).map(service => (
                <Text key={service._id}>{service.price} ₫</Text>
              ))}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',

                padding: 5,
              }}>
              Total :
            </Text>
            <Text style={{padding: 5, fontWeight: 'bold', fontSize: 18}}>
              {totalAmount()} ₫
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: 1,
          padding: 5,
          marginBottom: 10,
          width: '98%',
        }}>
        <View>
          <Text
            style={{
              padding: 5,
              color: '#E60861',
              fontSize: 20,
              marginBottom: 5,
              fontWeight: 'bold',
            }}>
            Service List
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                width: '50%',
                color: '#A0A0A0',
                padding: 5,
              }}>
              Amount of Money :
            </Text>

            <Text style={{padding: 5, fontWeight: 'bold', fontSize: 18}}>
              {totalAmount()} đ
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                width: '50%',
                color: '#A0A0A0',
                padding: 5,
              }}>
              Discount :
            </Text>
            <Text style={{padding: 5, fontWeight: 'bold', fontSize: 18}}>
              <Text style={{flex: 1, textAlign: 'right', fontWeight: 'bold'}}>
                - {Math.floor(totalAmount() * 0.05)} ₫
              </Text>
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              marginTop:10
            }}>
            <Text
              style={{
                fontSize: 23,
                fontWeight: 'bold',
                width: '50%',
                padding: 5,
              }}>
              Total Payment
            </Text>
            <Text style={{padding: 5, fontWeight: 'bold', fontSize: 23}}>
              <Text style={{flex: 1, color: '#E60861', textAlign: 'right', fontWeight: 'bold'}}>
                {totalAmount() - Math.floor(totalAmount() * 0.05)} ₫
              </Text>
            </Text>
          </View>
        </View>
      </View>

      {/* <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            width: 100,
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 5,
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={handleDelete}>
          <Text style={{color: 'white', textAlign: 'center'}}>Delete</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            width: 100,
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 5,
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={handleEdit}>
          <Text style={{color: 'white', textAlign: 'center'}}>Edit</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default TransactionDetail;
