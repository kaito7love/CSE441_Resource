// src/screens/DetailContactScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
const DetailContactFavorite = () => {
    const route = useRoute();
    const { contact } = route.params; 

    return (
        <View>
          <View style={{backgroundColor: 'blue', width: '100%', padding: 30, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={[styles.image, {borderColor: 'white', borderWidth: 2}]} source={{ uri: contact.picture.medium }} />
            <Text style={[styles.name, {color: 'white', textAlign: 'center'}]}>{`${contact.name.first} ${contact.name.last}`}</Text>
            <Text style={{color: 'white',fontWeight: 'bold'}}>Phone: {contact.phone}</Text>
          </View>
          <View style={styles.containerDetail}>
            <Text style={styles.titleDetail}>Email</Text>
            <Text style={styles.textDetail}>{contact.email}</Text>
          </View>
          <View style={styles.containerDetail}>
            <Text style={styles.titleDetail}>Work</Text>
            <Text style={styles.textDetail}>{contact.phone}</Text>
          </View>
          <View style={styles.containerDetail}>
            <Text style={styles.titleDetail}>Personal</Text>
            <Text style={styles.textDetail}>{contact.cell}</Text>
          </View>
          <View style={styles.iconContainer}>
        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={() => console.log('Icon Pressed')}
        >
          <Icon name="star" size={30} color={"white"} /> 
        </TouchableOpacity>
      </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
    },
    containerDetail: {
      borderBottomWidth: 1,
      height: 60,
      justifyContent: 'center'
    },
    titleDetail: {
      fontWeight: 'bold',
      marginLeft: 10
    },
    textDetail: {
      color: 'blue',
      marginLeft: 10
    },
    iconContainer: {
      width: '100%',
    },
    iconButton: {
      height: 60, 
      backgroundColor: 'blue',
      width: '100%', 
      justifyContent: 'center',
      alignItems: 'center',
    
    },
});

export default DetailContactFavorite;