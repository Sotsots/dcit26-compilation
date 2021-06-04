import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  conDetails: {
    flexDirection: 'row',
    alignItems: 'left',
    padding: 5,
  },
  profPictureProfile: {
    alignItems: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#ada1f2',
  },
  profPicture: {
    alignItems: 'center',
    height: 250,
    width: 250,
    borderRadius: 10,
  },
  profPictureMini: {
    alignItems: 'center',
    height: 35,
    width: 35,
    borderRadius: 17.5,
    borderColor: '#ada1f2',
    borderWidth: 3,
  },
  textAbout: {
    fontFamily: 'sans-serif',
    fontSize: 20,
  },

  name: {
    fontFamily: 'sans-serif',
    color: '#0000ff',
    fontSize: 20,
  },
  nameProfile: {
    fontFamily: 'sans-serif',
    color: '#000000',
    fontSize: 25,
    padding: 10,
  },
  username: {
    fontFamily: 'sans-serif',   
    color: '#0000ff',
    fontSize: 15,
    paddingLeft: 5,
  },
  usernameProfile: {
    fontFamily: 'sans-serif',   
    color: '#0000ff',
    fontSize: 15,
    paddingBottom: 20,
  },
  aboutStyle: {
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 10,
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});