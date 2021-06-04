//Charls Sotto
//Kervin Marasigan
//John Reever Valencia
//Jerico Alcantara
//BSCS 3-3
//Lab 6
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ActivityIndicator, TouchableOpacity, Button} from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';

import { globalStyles } from '../globalStyles';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    fetchRandomData();
  }, []);

    return (
    <View >
    <View style = {{paddingTop: 50}}>
    
        {isLoading ? <ActivityIndicator size= "large" color= "#0000FF"/> : (
          <View>

            <View style={globalStyles.conDetails}>
              <Image style={globalStyles.profPictureMini} source= {{uri : data.picture.large}} />
              <Text style={globalStyles.username}>
                {data.name.first} {data.name.last}{'\n'}
                @{data.login.username}
              </Text>
            </View>

            <View style={globalStyles.container}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
                <Image style={globalStyles.profPicture} source= {{uri : data.picture.large}} />
              </TouchableOpacity>
              <View style={globalStyles.buttonStyle}>
                <AntDesign.Button name="profile" size={20} backgroundColor= "#1da1f2" 
                 onPress={fetchRandomData}> RANDOM USER 
                </AntDesign.Button>
              </View>
            </View>
          
          </View>
        )}

    </View>
    </View>
  );
};
export default Home;
