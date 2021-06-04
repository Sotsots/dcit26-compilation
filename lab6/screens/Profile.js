//Charls Sotto
//Kervin Marasigan
//John Reever Valencia
//Jerico Alcantara
//BSCS 3-3
//Lab 6
import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { globalStyles } from '../globalStyles';

const Profile = ({ route }) => {

  const data = route.params;

  return (
    <View style = {globalStyles.container}>
    <ScrollView style={globalStyles.container}>
    
      <View style={{flexDirection: 'column', alignItems: 'center', padding: 10}}>
        <Image style={globalStyles.profPictureProfile}
          source={{ uri: data.picture.large }}
        />
        <Text style={globalStyles.nameProfile}>
          {data.name.first} {data.name.last}
        </Text>
        <Text style={globalStyles.usernameProfile}>
          @{data.login.username}
        </Text>
      </View>

    <View>
      <Text style={globalStyles.textAbout}>
        ABOUT
      </Text>
      <View style={globalStyles.aboutStyle}>
        <Text style={globalStyles.text}>
          Gender: {data.gender}{'\n'}
          Age: {data.dob.age}{'\n'}
          Birthday: {data.dob.date}{'\n'}
        </Text>
      </View>

      <Text style={globalStyles.textAbout}>
        LOCATION
      </Text>
      <View style={globalStyles.aboutStyle}>
        <Text style={globalStyles.text}>
          Address: {data.location.city}, {data.location.state}, {data.location.country}
        </Text>
      </View>

      <Text style={globalStyles.textAbout}>
        CONTACTS
      </Text>
      <View style={globalStyles.aboutStyle}>
        <Text style={globalStyles.text}>
          Email: {data.email}{'\n'}
          Phone: {data.phone}{'\n'}
          Cell: {data.cell}{'\n'}
        </Text>
      </View>

    </View>
    </ScrollView>
    </View>
  );
};
export default Profile;
