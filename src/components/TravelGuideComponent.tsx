import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Fonts from '../utils/Fonts';

interface TravelGuideComponentProps {
  title: string;
  desc: string;
  image: any;
  onPress?: () => void;
}

const TravelGuideComponent: React.FC<TravelGuideComponentProps> = ({
  title,
  desc,
  image,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.descStyle}>{desc}</Text>
        <TouchableOpacity style={styles.buttonContainerStyle} onPress={onPress}>
          <Text style={styles.buttonTitleStyle}>Contact</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <Image source={image} style={styles.imageStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 24,
    backgroundColor: 'white',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {},
  titleStyle: {
    flex: 1,
    fontSize: 24,
    fontFamily: Fonts.AppSemiBold,
    color: 'black',
  },
  descStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.AppRegular,
    marginTop: 8,
    color: 'black',
  },
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  buttonContainerStyle: {
    marginTop: 24,
    borderColor: '#008080',
    borderWidth: 1,
    borderRadius: 8,
    width: 120,
    alignItems: 'center',
    paddingVertical: 8,
  },
  buttonTitleStyle: {
    fontSize: 16,
    fontFamily: Fonts.AppSemiBold,
    color: '#008080',
  },
});

export default TravelGuideComponent;
