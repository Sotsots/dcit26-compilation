import React, { useState, useEffect} from 'react'
import { Text, View,  } from 'react-native' ;

const Movie = ({ route }) => {
  const data = route.params;

  return (
    <View>
      <Text>{data.title}</Text>
      <Text>{data.releaseYear}</Text>
    </View>
  );
};

export default Movie;