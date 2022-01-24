import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.page}>
        <Header
          title="Daftar Baru"
          subTitle="Isikan data Anda"
          // onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={()=>console.log('upload')}>
              <View style={styles.borderPhoto}>
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label="Nama lengkap"
            placeholder="Ketikan Nama lengkap Anda"
          />
          <Gap height={16} />
          <TextInput
            label="Email"
            placeholder="Ketikan Email Anda"
          />
          <Gap height={16} />
          <TextInput
            label="Password"
            placeholder="Ketikan Password Anda"
            secureTextEntry
          />
          <Gap height={16} />
          <TextInput
            label="Facebook Id"
            placeholder="Isikan Link Facebook Anda"
          />
          <Gap height={16} />
          <TextInput
            label="Instagram Id"
            placeholder="Isikan Link Instagram Anda"
          />
          <Gap height={24} />
          <Button text="Continue" onPress={()=>navigation.navigate('SignUpAddress')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
