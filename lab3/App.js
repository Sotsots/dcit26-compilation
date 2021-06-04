//Charls Sotto
//Kervin Marasigan
//John Reever Valencia
//Jerico Alcantara
//BSCS 3-3
//Lab 3
import React, {useState} from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import SampleModal from './components/SampleModal';

export default function App() {

  const [isModal, setIsModal] = useState(false);

  return (

    <View style={styles.container}>
      <Text style = {styles.ques}>
        What is Artificial Intelligence?
      </ Text>
      <Button title="View" onPress = {() => setIsModal(true)} />
      <SampleModal visible = {isModal} onClose = {() => setIsModal(false)} />
    </ View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  ques: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
