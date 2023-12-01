import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Fonts from '../utils/Fonts';

interface TitleComponentProps {
  title: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  textContainer: {
    fontFamily: Fonts.AppSemiBold,
    fontSize: 16,
    color: 'black',
  },
});

export default TitleComponent;
