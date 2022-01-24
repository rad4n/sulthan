import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components';
import { IlSuccessSignUp } from '../../assets';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={IlSuccessSignUp} />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Sekarang Anda bisa mulai memilih </Text>
      <Text style={styles.subTitle}>Mengikuti Event pelatihan Kami</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Cari Event"
          onPress={()=>navigation.navigate('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
  image:{
    width:'70%',
    height:'20%'
  }
});
