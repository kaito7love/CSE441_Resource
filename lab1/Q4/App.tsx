import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import data from './Data';
import Square from './Square';
import styles from "./style";

export default App=()=> {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, index)=>(
        <Square key={index} text={`Square ${index +1}`} />
      ))}
    </ScrollView>
  );
};