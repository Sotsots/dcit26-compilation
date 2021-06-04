//Charls Sotto
//Kervin Marasigan
//John Reever Valencia
//Jerico Alcantara
//BSCS 3-3
//Lab 4
import React from 'react';
import { Text, View, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons'; 

const Home = ({navigation})=>{
  return (
    <ScrollView>
      <View style = {{paddingTop: 10}}>
        <Text style={{paddingLeft: 20}}>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Image style = {styles.profPictureMini} source = {require('../assets/chrlssttImage.jpg')}/>
            <Text style = {{fontSize: 15, paddingLeft: 5}}>
              CHARLS SOTTO{'\n'}
              @chrlsstt
            </ Text>
          </ View>
        </ Text>
      <View style={styles.container}>
        <Image style = {styles.profPicture} source = {require('../assets/chrlssttImage.jpg')} />
        <View style={{paddingTop:10, paddingBottom: 25}}>
          <AntDesign.Button name="profile" size={20} backgroundColor= "#1da1f2" 
          onPress={()=>navigation.navigate('@chrlsstt')}> Profile 
          </AntDesign.Button>
        </ View>
      </View>
      </ View>

      <View style = {{paddingTop: 10}}>
        <Text style={{paddingLeft: 20}}>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Image style = {styles.profPictureMini} source = {require('../assets/krvnmrsgnImage.jpg')}/>
            <Text style = {{fontSize: 15, paddingLeft: 5}}>
              KERVIN MARASIGAN{'\n'}
              @kervsmrsgn
            </ Text>
          </ View>
        </ Text>
      <View style={styles.container}>
        <Image style = {styles.profPicture} source = {require('../assets/krvnmrsgnImage.jpg')} />
        <View style={{paddingTop:10, paddingBottom: 25}}>
          <AntDesign.Button name="profile" size={20} backgroundColor= "#1da1f2" 
          onPress={()=>navigation.navigate('@kervsmrsgn')}> Profile 
          </AntDesign.Button>
        </ View>
      </View>
      </ View>

      <View style = {{paddingTop: 10}}>
        <Text style={{paddingLeft: 20}}>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Image style = {styles.profPictureMini} source = {require('../assets/jrclcntrImage.jpg')}/>
            <Text style = {{fontSize: 15, paddingLeft: 5}}>
              JERICO D. ALCANTARA{'\n'}
              @davidsalon
            </ Text>
          </ View>
        </ Text>
      <View style={styles.container}>
        <Image style = {styles.profPicture} source = {require('../assets/jrclcntrImage.jpg')} />
        <View style={{paddingTop:10, paddingBottom: 25}}>
          <AntDesign.Button name="profile" size={20} backgroundColor= "#1da1f2" 
          onPress={()=>navigation.navigate('@davidsalon')}> Profile 
          </AntDesign.Button>
        </ View>
      </View>
      </ View>

      <View style = {{paddingTop: 10}}>
        <Text style={{paddingLeft: 20}}>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Image style = {styles.profPictureMini} source = {require('../assets/jhnrvrvlncImage.jpg')}/>
            <Text style = {{fontSize: 15, paddingLeft: 5}}>
              JOHN REEVER VALENCIA{'\n'}
              @im_igorot
            </ Text>
          </ View>
        </ Text>
      <View style={styles.container}>
        <Image style = {styles.profPicture} source = {require('../assets/jhnrvrvlncImage.jpg')} />
        <View style={{paddingTop:10, paddingBottom: 25}}>
          <AntDesign.Button name="profile" size={20} backgroundColor= "#1da1f2" 
          onPress={()=>navigation.navigate('@im_igorot')}> Profile 
          </AntDesign.Button>
        </ View>
      </View>
      </ View>

    </ ScrollView>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  profPicture: {
    alignItems: 'center',
    height: 250,
    width: 250,
    borderRadius: 10,
  },
  profPictureMini: {
    alignItems: 'center',
    height: 35,
    width: 35,
    borderRadius: 17.5,
    borderColor: '#ada1f2',
    borderWidth: 3,
  },
  textUserAndName: {
    fontFamily: 'sans-serif',
    color: 'blue',
    fontSize: 20,
  },
});