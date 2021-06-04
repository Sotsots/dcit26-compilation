//Charls Sotto
//Kervin Marasigan
//John Reever Valencia
//Jerico Alcantara
//BSCS 3-3
//Lab 3
import React from 'react';
import {View, Text, ScrollView, StyleSheet, Modal, Button, Image} from 'react-native';

const SampleModal = props => {
  return(
    <Modal visible = {props.visible} animationType = "fade" >
    <View style = {style.containers}>
      <ScrollView>
        <View>
          <Image style = {style.picture} source = {require('../assets/ai.jpg')} />
        </ View>
        <View>
          <Text style = {style.textTitle}>
          {'\n'}What Is Artificial Intelligence (AI)? {'\n'}
          </ Text>
          <Text style = {style.textParag}>
          {'\t\t\t'}Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.{'\n\n'}

          {'\t\t\t'}The ideal characteristic of artificial intelligence is its ability to rationalize and take actions that have the best chance of achieving a specific goal. A subset of artificial intelligence is machine learning, which refers to the concept that computer programs can automatically learn from and adapt to new data without being assisted by humans. Deep learning techniques enable this automatic learning through the absorption of huge amounts of unstructured data such as text, images, or video. {'\n\n'}
          </ Text>
          <Text style = {style.textTitle}>
          Understanding Artificial Intelligence (AI) {'\n'}
          </ Text>
          <Text style = {style.textParag}>
  {'\t\t\t'}When most people hear the term artificial intelligence, the first thing they usually think of is robots. That's because big-budget films and novels weave stories about human-like machines that wreak havoc on Earth. But nothing could be further from the truth. {'\n\n'}

  {'\t\t\t'}Artificial intelligence is based on the principle that human intelligence can be defined in a way that a machine can easily mimic it and execute tasks, from the most simple to those that are even more complex. The goals of artificial intelligence include mimicking human cognitive activity. Researchers and developers in the field are making surprisingly rapid strides in mimicking activities such as learning, reasoning, and perception, to the extent that these can be concretely defined. Some believe that innovators may soon be able to develop systems that exceed the capacity of humans to learn or reason out any subject. But others remain skeptical because all cognitive activity is laced with value judgements that are subject to human experience. {'\n\n'}

  {'\t\t\t'}AI is continuously evolving to benefit many different industries. Machines are wired using a cross-disciplinary approach based on mathematics, computer science, linguistics, psychology, and more. {'\n\n'}
          </ Text>
        </ View>
        <Text>
          Reference: {'\n'}
        <Text style = {style.refUrl}>  
          https://www.investopedia.com/terms/a/artificial-intelligence-ai.asp#:~:text=Artificial%20intelligence%20(AI)%20refers%20to,as%20learning%20and%20problem%2Dsolving.
        </ Text>
        </ Text>
      </ ScrollView>
      <Button title = "CLOSE" onPress = {props.onClose} />
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

  picture: {
    alignItems: 'center',
    height: 120,
    width: 300,
    borderRadius: 10,
  },

  textTitle: {
    fontWeight: 'bold'
  },

  textParag: {
    textAlign: 'justify'
  },

  refUrl: {
    textDecorationLine: 'underline',
  },

});

export default SampleModal;