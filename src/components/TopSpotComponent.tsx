import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Fonts from '../utils/Fonts';

interface TopSpotComponentProps {
  index: string;
  title: string;
  image?: any;
  onPress?: () => void;
}

const TopSpotComponent: React.FC<TopSpotComponentProps> = ({
  index,
  title,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.shadowContainer} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.indexStyle}>{index}</Text>
        <Text style={styles.titleStyle}>{title}</Text>
        {image && <Image source={{uri: image}} style={styles.image} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#008080',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 3,
    marginVertical: 6,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    paddingHorizontal: 16,
  },
  indexStyle: {
    fontSize: 16,
    fontFamily: Fonts.AppSemiBold,
    color: '#008080',
    marginVertical: 22,
  },
  titleStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.AppSemiBold,
    color: '#008080',
    marginLeft: 8,
    marginVertical: 22,
  },
  image: {
    width: 120,
    height: 70,
  },
});

export default TopSpotComponent;
