import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AlohaIcon from '../../src/assets/image/aloha-text.png';

interface TopNavBarComponentProps {
  title: string;
  onBackPress?: () => void;
}

const TopNavBar: React.FC<TopNavBarComponentProps> = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      {onBackPress != undefined && (
        <TouchableOpacity style={styles.navItem}></TouchableOpacity>
      )}
      <View style={styles.textContainer}>
        <Image style={styles.navText} source={AlohaIcon}></Image>
      </View>
      {onBackPress != undefined && (
        <TouchableOpacity style={styles.navItem}></TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'android' ? 58 : 44,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 1,
    height: Platform.OS === 'android' ? 58 : 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItem: {
    width: Platform.OS === 'android' ? 58 : 44,
    height: '100%',
  },
  navText: {
    height: 26,
    width: 70,
  },
});

export default TopNavBar;
