/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import styles from './style';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [value, setValue] = useState('');

  const handleNumberInput = (num) =>{
    if (displayValue==='0') {
      setDisplayValue(num.toString())
    } else {
      setDisplayValue(displayValue+num)
    }
  };

const handleOperatorInput = (operator) =>{
  setOperator(operator);
  setValue(displayValue);
  setDisplayValue('0');
}

const handleEqual = () => {
  const num1 = parseFloat(value);
  const num2 = parseFloat(displayValue);

  if (operator=== '+') {
    setDisplayValue((num1+num2).toString());
  }else if (operator=== '-') {
    setDisplayValue((num1-num2).toString());
  }  else if (operator=== '*') {
    setDisplayValue((num1*num2).toString());
  }  else if (operator=== '/') {
    setDisplayValue((num1/num2).toString());
  }  
  setOperator(null);
  setValue('');
};

const handleClear = () =>{
  setDisplayValue('0');
  setOperator(null);
  setValue('');
}

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{displayValue}</Text>
      <View style={styles.input}>
        <TouchableOpacity style={styles.buttonNum} onPress={()=> handleNumberInput('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={()=> handleNumberInput('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={()=> handleNumberInput('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={()=> handleOperatorInput('/')}>
          <Text style={styles.color}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <TouchableOpacity style={styles.buttonNum} onPress={()=> handleNumberInput('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={()=> handleNumberInput('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={()=> handleNumberInput('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={()=> handleOperatorInput('*')}>
          <Text style={styles.color}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <TouchableOpacity style={styles.buttonNum} onPress={()=> handleNumberInput('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={()=> handleNumberInput('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={()=> handleNumberInput('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={()=> handleOperatorInput('-')}>
          <Text style={styles.color}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <TouchableOpacity style={styles.buttonNum} onPress={()=> handleNumberInput('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNum} onPress={()=> handleOperatorInput('+')}>
          <Text style={styles.color}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={()=> handleEqual()}>
          <Text style={styles.color}>=</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <TouchableOpacity style={styles.buttonNum} onPress={()=> handleClear()}>
          <Text style={styles.color}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  
}

export default App;
