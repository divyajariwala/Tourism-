import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface TabProps {
  label: string;
  imageSource: any;
  onPress: () => void;
  isFocused: boolean;
}

const CustomTabBar: React.FC<TabProps> = ({
  label,
  imageSource,
  onPress,
  isFocused,
}) => {
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <Image
        source={imageSource}
        style={[styles.tabIcon, {tintColor: isFocused ? '#008080' : 'black'}]}
      />
      <Text style={[styles.tabLabel, {color: isFocused ? '#008080' : 'black'}]}>
        {label}
      </Text>
      {isFocused && <View style={styles.activeIndicator} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 60,
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  tabLabel: {
    fontSize: 12,
  },
  activeIndicator: {
    height: 3,
    width: '100%',
    backgroundColor: '#008080',
    position: 'absolute',
    bottom: 0,
  },
});

export default CustomTabBar;
