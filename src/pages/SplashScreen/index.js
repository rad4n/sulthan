import React, {useEffect} from 'react';
import { StyleSheet, View,Text, Image } from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
          navigation.replace('SignIn');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width:'80%',
    height:'14%'
  }
})
