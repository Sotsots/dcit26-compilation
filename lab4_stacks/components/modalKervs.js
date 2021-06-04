//Charls Sotto
//Kervin Marasigan
//John Reever Valencia
//Jerico Alcantara
//BSCS 3-3
//Lab 4
import React from 'react';
import {View, Text, ScrollView, StyleSheet, Modal, Button, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const SampleModal = props => {
  return(
    <Modal visible = {props.visible} animationType = "fade" >
      <View style = {style.containers}>
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', }}>
          <Image style = {style.gallery} source = {require('../assets/krvnmrsgnImage.jpg')}/>
          <Image style = {style.gallery} source = {require('../assets/k1.jpeg')}/>
          <Image style = {style.gallery} source = {require('../assets/k2.jpg')}/>
          <Image style = {style.gallery} source = {require('../assets/k3.jpg')}/>
        </ View>
        <View>
          
        </ View>
      </ ScrollView>
      <AntDesign.Button name="closecircleo" size={20} backgroundColor= "#1da1f2" onPress = {props.onClose} >
      CLOSE </ AntDesign.Button>
      </ View>
    </ Modal>
  )
}

const style = StyleSheet.create({
  containers: {
    padding: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  gallery: {
    margin: 2,
    height: 145,
    width: 145,
    padding: 2,
  },


});

export default SampleModal;