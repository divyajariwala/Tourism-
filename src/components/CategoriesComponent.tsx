import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ForwardArrowIcon from '../assets/image/arrow-forward.png';
import Fonts from '../utils/Fonts';
interface CategoriesComponentProps {
  title: string;
  onPress?: () => void;
}

const CategoriesComponent: React.FC<CategoriesComponentProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Image source={ForwardArrowIcon} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  titleStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.AppRegular,
    color: 'black',
  },
  image: {
    width: 15,
    height: 15,
  },
});

export default CategoriesComponent;
