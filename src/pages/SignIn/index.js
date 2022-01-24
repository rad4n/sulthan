import { StyleSheet, View } from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Login untuk mengikuti pelatihan kami" />
      <View style={styles.container}>
        <TextInput
          label="Email"
          placeholder="Ketikan email Anda"
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Ketikan Password Anda"
          secureTextEntry
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={()=> navigation.navigate('MainApp')} />
        <Gap height={12} />
        <Button
          text="Daftar Baru"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
