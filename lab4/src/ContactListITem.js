import React from 'react';
import {View, StyleSheet, TouchableHighlight, Text, Image} from 'react-native';
const ContactListItem = ({name, avatar, phone, onPress}) => {
  return (
    <TouchableHighlight
      underlayColor="grey"
      styles={styles.container}
      onPress={onPress}>
      <View style={styles.contactInfo}>
        <Image source={{uri: avatar}} style={styles.avatar} />
        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
export default ContactListItem;