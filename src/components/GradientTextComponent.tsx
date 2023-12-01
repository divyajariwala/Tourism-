import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import Fonts from '../utils/Fonts';

interface GradientTextComponentProps {
  title: string;
  colors?: string[];
}

const GradientTextComponent: React.FC<GradientTextComponentProps> = ({
  title,
  colors,
}) => {
  const defaultColors =
    colors === undefined
      ? ['rgba(255, 255, 255, 0.50)', 'rgba(255, 255, 255, 1)']
      : colors;

  return (
    <>
      {Platform.OS == 'ios' ? (
        <MaskedView
          maskElement={<Text style={styles.welcomeTextStyle}>{title}</Text>}>
          <LinearGradient
            locations={[0, 1]}
            colors={defaultColors}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <Text style={[styles.welcomeTextStyle, {opacity: 0}]}>{title}</Text>
          </LinearGradient>
        </MaskedView>
      ) : (
        <LinearTextGradient
          style={styles.welcomeTextStyle}
          locations={[0, 1]}
          colors={defaultColors}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Text style={{opacity: 0}}>{title}</Text>
        </LinearTextGradient>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  welcomeTextContainerStyle: {
    alignContent: 'center',
  },
  welcomeTextStyle: {
    fontSize: 56,
    textAlign: 'center',
    fontFamily: Fonts.AppSemiBold,
  },
});

export default GradientTextComponent;
