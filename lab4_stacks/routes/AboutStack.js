import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/About";

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#0088cc',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default AboutStack;