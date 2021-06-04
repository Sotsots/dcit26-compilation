//Charls Sotto
//Kervin Marasigan
//John Reever Valencia
//Jerico Alcantara
//BSCS 3-3
//Lab 4
import React from 'react';
import { Text, View, Button, StyleSheet,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const About = ({navigation})=>{
  return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>
          KozApp ver. CS. 3.3.0
        </Text>
        <View style = {{paddingBottom: 20,}}>
          <Text>
            Members:{'\n'}{'\n'}
              CHARLS SOTTO{'\n'}
              KERVIN MARASIGAN{'\n'}
              JOHN REEVER VALENCIA{'\n'}
              JERICO ALCANTARA
          </ Text>
        </ View>
        <AntDesign.Button name="back" size={20} backgroundColor= "#1da1f2" onPress={()=>navigation.goBack()}> Back
        </AntDesign.Button>
      </View>
  );
}
export default About;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingBottom: 30,
  },

});