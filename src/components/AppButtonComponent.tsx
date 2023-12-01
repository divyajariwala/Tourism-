import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Fonts from '../utils/Fonts';

interface AppButtonComponentProps {
  title: string;
  onPress?: () => void;
}

const AppButtonComponent: React.FC<AppButtonComponentProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.buttonContainerStyle} onPress={onPress}>
      <Text style={styles.buttonTitleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainerStyle: {
    backgroundColor: '#008080',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#073838',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 8,
  },
  buttonTitleStyle: {
    fontSize: 16,
    fontFamily: Fonts.AppSemiBold,
    color: 'white',
    marginVertical: 15,
  },
  buttonContainerandroidStyle: {
    backgroundColor: '#008080',
    borderRadius: 8,
    alignItems: 'center',
    elevation: 40,
  },
});

export default AppButtonComponent;
