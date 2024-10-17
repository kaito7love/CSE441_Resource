import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

export default function HailStone() {
  const [even, setEven] = useState('');
  const [sequence, setSequence] = useState([]);
  const handleHailStone = () => {
    let number = parseInt(even, 10);
    const sequenceArray = [number];
    while (number !== 1) {
      if (number % 2 === 0) {
        number = number / 2;
      } else {
        number = number * 3 + 1;
      }
      sequenceArray.push(number);
    }
    // [1,2,3,3,4,,5]
    setSequence(sequenceArray);
    Alert.alert(`Your number is ${sequence.join(' ')}`);
  };
  return (
    <View>
      <Text>Your number is:</Text>
      <TextInput value={even} onChangeText={test => setEven(test)}></TextInput>
      <Button onPress={handleHailStone} title="HailStone"></Button>
    </View>
  );
}
