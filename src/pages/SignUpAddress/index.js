import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Select, SelectJob, TextInput} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.page}>
        <Header
          title="Alamat"
          subTitle="Pastikan Alamat Anda valid"
          // onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <TextInput
            label="No Handphone"
            placeholder="Ketikan No handphone Anda"
          />
          <Gap height={16} />
          <SelectJob label="Profesi"/>
          <Gap height={16} />
          <TextInput
            label="Instansi"
            placeholder="Ketikan Instansi Anda bekerja"
          />
          <Gap height={16} />
          <Select
            label="Kota"
          />
         
          <Gap height={24} />
          <Button text="Sign Up Now" onPress={()=>navigation.navigate('SuccessSignUp')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  scroll: {flexGrow: 1},
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
