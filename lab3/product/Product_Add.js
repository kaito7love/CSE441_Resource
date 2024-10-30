import React, {useState} from 'react';
import {Alert, ScrollView,TextInput } from 'react-native';
import {Button, Text} from 'react-native-paper';

const Product_Add = () => {
  const [title, setTile] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
      .then(response => response.json())
      .then(console.log);
    Alert.alert('Add Sucessfull');
  };

  return (
    <ScrollView>
      <Text> Add a Product </Text>
      <Text>Title</Text>
      <TextInput placeholder="Enter tilte"></TextInput>
      <Text>Description</Text>
      <TextInput placeholder="Enter description"></TextInput>
      <Text>Price</Text>
      <TextInput placeholder="Enter price"></TextInput>
      <Text>DiscountPercentage</Text>
      <TextInput placeholder="Enter discountPercentage"></TextInput>
      <Text>Rating</Text>
      <TextInput placeholder="Enter rating"></TextInput>
      <Text>Stock</Text>
      <TextInput placeholder="Enter stock"></TextInput>
      <Text>Brand</Text>
      <TextInput placeholder="Enter brand"></TextInput>
      <Text>Category</Text>
      <TextInput placeholder="Enter category"></TextInput>
      <Text>Images</Text>
      <TextInput placeholder="Enter images URL(s)"></TextInput>
      <Button onPress={handleSubmit}>Submit</Button>
    </ScrollView>
  );
};
export default Product_Add;
