// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import { FoodDummy3 } from '../../../assets';
import ItemListFood from '../ItemListFood';
// import {useDispatch, useSelector} from 'react-redux';
// import {getFoodDataByTypes} from '../../../redux/action';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused}) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);

const NewTaste = () => {
  return (
    <View style={styles.containerNewTaste}>
      <ItemListFood
            key={1}
            type="product"
            name={'Baby Spa Bandung'}
            price={2250000}
            rating={5}
            image={FoodDummy3}
            onPress={() => console.log('test')}
          />
    </View>
  );
};

const Popular = () => {
  
  return (
    <View style={styles.containerPopular}>
      {/* {popular.map((item) => {
        return ( */}
           <ItemListFood
            key={1}
            type="product"
            name={'event baru'}
            price={120000}
            rating={5}
            image={FoodDummy3}
            onPress={() => console.log('test')}
          />
        {/* );
      })} */}
    </View>
  );
};

const Recommended = () => {
  
  return (
    <View style={styles.containerRecommended}>
      {/* {recommended.map((item) => {
        return ( */}
           <ItemListFood
            key={1}
            type="product"
            name={'event baru'}
            price={120000}
            rating={5}
            image={FoodDummy3}
            onPress={() => console.log('test')}
          />
        {/* );
      })} */}
    </View>
  );
};


const HomeTabSection = () => {
  const initialLayout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Event Terbaru'},
    {key: '2', title: 'Event Di kotamu'},
    {key: '3', title: 'Paling di minati'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  tabView: {backgroundColor: 'white'},
  indicator: {
    backgroundColor: '#020202',
    height: 2,
    // width: '15%',
    // marginLeft: '3%',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabStyle: {width: 'auto'},
  tabText: (focused) => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
  containerNewTaste: {paddingTop: 8, paddingHorizontal: 24},
  containerPopular: {paddingTop: 8, paddingHorizontal: 24},
  containerRecommended: {paddingTop: 8, paddingHorizontal: 24},
});
