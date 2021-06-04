import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Profilekervs from "../screens/Profilekervs";
import Profilejek from "../screens/Profilejek"
import Profilereevs from "../screens/Profilereevs"
import Movie from "../screens/Movie"
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#0088cc',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="@chrlsstt" component={Profile} />
      <Stack.Screen name="@kervsmrsgn" component={Profilekervs} />
      <Stack.Screen name="@davidsalon" component={Profilejek} />
      <Stack.Screen name="@im_igorot" component={Profilereevs} />
    </Stack.Navigator>
  );
};

export default HomeStack;