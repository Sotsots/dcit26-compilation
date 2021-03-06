//Charls Sotto
//Kervin Marasigan
//John Reever Valencia
//Jerico Alcantara
//BSCS 3-3
//Lab 4
import React, {useState} from 'react';
import { Text, View, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import SampleModal from '../components/modalCharls';

const Profile = ({navigation})=>{

  const [isModal, setIsModal] = useState(false);

  return (
    <View style = {styles.container}>
        <View style={{flexDirection: 'column', alignItems: 'center', padding: 10}}>
          <Image style = {styles.profPictureProfile} source = {require('../assets/chrlssttImage.jpg')}/>
          <Text style = {{fontSize: 20, fontWeight: 'bold',}}>
            CHARLS SOTTO
          </ Text>
          <Text style = {{fontSize: 15, paddingTop: 10}}>
           @chrlsstt
          </ Text>
        </View>

        <View style = {{flexDirection: 'row', alignItems: 'center', padding: 10}}>
          <Text style = {styles.textFollow}>  
            1,096 FOLLOWING 
          </ Text>
          <Text style = {styles.textFollow}> 
           890 FOLLOWERS
          </ Text>
        </ View>
        <View style={{paddingBottom: 20}}>
          <AntDesign.Button name="picture" size={20} backgroundColor= "#1da1f2" onPress = {() => setIsModal(true)} > PHOTOS </ AntDesign.Button>
          <SampleModal visible = {isModal} onClose = {() => setIsModal(false)} />
        </ View>
      <AntDesign.Button name="back" size={20} backgroundColor= "#1da1f2" onPress={()=>navigation.goBack()} >  BACK </ AntDesign.Button>
    </ View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  profPictureProfile: {
    alignItems: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
},
  textFollow: {
    fontSize: 15,
    color: '#ada1f2',
    padding: 5,
  },
});