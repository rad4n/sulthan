import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import React from 'react';
import { FoodDummy1, FoodDummy2, FoodDummy3 } from '../../assets';

const Home = ({navigation}) => {
  return (
    
      <View style={styles.page}>
        {/* <HomeProfile /> */}
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
                  <FoodCard
                    key={1}
                    name={'Baby Spa'}
                    image={FoodDummy1}
                    rating={2}
                    onPress={() => console.log('test')}
                  />
                  <FoodCard
                    key={3}
                    name={'Aestetic'}
                    image={FoodDummy2}
                    rating={2}
                    onPress={() => console.log('test')}
                  />
                  <FoodCard
                    key={2}
                    name={'Beauty'}
                    image={FoodDummy3}
                    rating={2}
                    onPress={() => console.log('test')}
                  />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          {/* <ScrollView> */}
            <HomeTabSection />
          {/* </ScrollView> */}
        </View>
      </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  foodCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
});
