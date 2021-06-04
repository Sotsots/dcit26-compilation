import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign, Ionicons } from '@expo/vector-icons';


import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const MainNav=()=>{
  
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContentOptions={{activeTintColor: '#150f28'}} 
              drawerStyle={{backgroundColor: "#0088cc"}}>
                <Drawer.Screen name="Home" component={HomeStack} 
                options = {{title: 'Home', drawerIcon: ({focus, size}) => 
                (<AntDesign name="home" size={20} />)}}/>
                <Drawer.Screen name="About" component={AboutStack} 
                options = {{title: 'About', drawerIcon: ({focus, size}) => 
                (<Ionicons name="information" size={20} />)}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MainNav;