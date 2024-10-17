import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

export default function FindMinimum() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [minimum, setMinimum] = useState(0);
  const handleMinimum = () => {
    const num1 = parseInt(number1, 10);
    const num2 = parseInt(number2, 10);
    const num3 = parseInt(number3, 10);

    let min = num1;
    if (num2 < min) {
      min = num2;
    }
    if (num3 < min) {
      min = num3;
    }
    setMinimum(min);
    Alert.alert(`The minimum number is ${minimum}`);
  };
  return (
    <View>
      <Text>Number 1:</Text>
      <TextInput
        value={number1}
        onChangeText={text1 => setNumber1(text1)}></TextInput>
      <Text>Number 2:</Text>
      <TextInput
        value={number2}
        onChangeText={text2 => setNumber2(text2)}></TextInput>
      <Text>Number 3:</Text>
      <TextInput
        value={number3}
        onChangeText={text3 => setNumber3(text3)}></TextInput>
      <Button onPress={handleMinimum} title="The Minimum Number"></Button>
    </View>
  );
}
