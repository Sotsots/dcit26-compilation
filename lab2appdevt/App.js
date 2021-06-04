//CHARLS SOTTO
//KERVIN MARASIGAN
//JERICO ALCANTARA
//JOHN REEVER VALENCIA
//BSCS 3-3
import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';


export default function App() {

  const [enteredItems, setEnteredItems ] = useState('');
  const [items, setItems] = useState([]);

  const itemsHandler = (enteredText) => {
    setEnteredItems(enteredText);
  };

  const addItemsHandler = () => {
    setItems(currentItems => [...currentItems, enteredItems])
    setEnteredItems('');
  };
 
  return (
      <View style={myStyles.container}>
        <View style={myStyles.flexContainer}>
          <TextInput style={myStyles.inputContainer} 
          placeholder="Enter Item" onChangeText={itemsHandler} 
          value={enteredItems} require />
          <TouchableOpacity>
            <Button title="Add" onPress={addItemsHandler} />
          </ TouchableOpacity>
        </ View>
          <View >
           <Text style={myStyles.urItems} > ITEMS:</ Text>
          </ View>
        <View>
          {items.map((anyNames) => 
          <View style={myStyles.itemList} key={anyNames}><Text>{anyNames}</Text></View>)}
        </View>
      </View>
  );
}

//STYLE
const myStyles = StyleSheet.create({
  container: {
    padding: 50,
  },
  flexContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  inputContainer: {
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 2
  },
  urItems: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 12,
  },
  itemList:{
    padding: 7,
    marginVertical: 7,
    backgroundColor: '#b4cdcd',
    borderRadius: 7,
    borderColor: 'blue',
    borderWidth: 1
  }
});
