import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import CustomTabBar from '../components/CustomTabBar';

// Import your screens for each tab
import Home from '../screens/Home/index';
import Surfing from '../screens/Surfing/index';

import HomeIcon from '.././assets/image/TabIcons/home-icon.png';
import HulaIcon from '.././assets/image/TabIcons/hula-icon.png';
import SurfingIcon from '.././assets/image/TabIcons/surfing-icon.png';
import VulcanoIcon from '.././assets/image/TabIcons/vulcano-icon.png';
// ... import other screens
interface TabItem {
  name: string;
  image: any;
  index: number;
  comp: any;
  param: string;
}

const Tab = createBottomTabNavigator();

const tabData: TabItem[] = [
  {
    name: 'Home',
    image: HomeIcon,
    index: 0,
    comp: Home,
    param: '',
  },
  {
    name: 'Surfing',
    image: SurfingIcon,
    index: 1,
    comp: Surfing,
    param: 'Surfing',
  },
  {
    name: 'Hula',
    image: HulaIcon,
    index: 2,
    comp: Surfing,
    param: 'Traditional Festivals',
  },
  {
    name: 'Vulcano',
    image: VulcanoIcon,
    index: 3,
    comp: Surfing,
    param: 'Volcanoes',
  },
];

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      tabBar={({state, navigation}) => (
        <View style={{flexDirection: 'row'}}>
          {tabData.map((item, index) => (
            <CustomTabBar
              key={item.name}
              label={item.name}
              imageSource={item.image}
              onPress={() => navigation.navigate(item.name)}
              isFocused={state.index === index}
            />
          ))}
        </View>
      )}>
      {tabData.map(item => {
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.comp}
            initialParams={{screen: item.param}}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
