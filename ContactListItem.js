import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ContactListItem = ({ profileImage, name , index}) => (
  <View style={[styles.container,{flexDirection: `${index % 2}` == 0 ? 'row-reverse': 'row'}]} key={index}>
    <Image source={{uri:profileImage}} style={{ width: 50, height: 50,borderRadius:25 }} />
    <Text style={{marginLeft:10}}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    flexDirection: "row",
    marginRight:10,
    marginLeft:10,
    marginBottom:10
  }
});

export default ContactListItem;