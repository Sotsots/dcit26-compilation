import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#0088cc',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
};

export default HomeStack;