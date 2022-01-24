import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const SelectJob = ({label, value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}>
          <Picker.Item label="Dokter" value="Dokter" />
          <Picker.Item label="Perawat" value="Perawat" />
          <Picker.Item label="Umum" value="Umum" />
          <Picker.Item label="Mahasiswa" value="Mahasiswa" />
          <Picker.Item label="Pegawai Swasta" value="Pegawai Swasta" />
        </Picker>
      </View>
    </View>
  );
};

export default SelectJob;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
