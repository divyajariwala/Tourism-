import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import ForwardArrowIcon from '../assets/image/arrow-forward.png';
import Fonts from '../utils/Fonts';
interface HighlightsComponentProps {
  title: string;
  desc: string;
  image: any;
  onPress?: () => void;
}

const HighlightsComponent: React.FC<HighlightsComponentProps> = ({
  title,
  desc,
  image,
  onPress,
}) => {
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.container}>
        <FastImage source={{uri: image}} style={styles.image} />
        <View style={styles.labelsContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.descStyle}>{desc}</Text>
          <TouchableOpacity style={styles.arrowViewStyle} onPress={onPress}>
            <Image source={ForwardArrowIcon} style={styles.arrowImageStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HighlightsComponent;

const styles = StyleSheet.create({
  shadowContainer: {
    width: Dimensions.get('window').width - 100,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#008080',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  labelsContainer: {
    padding: 20,
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: Fonts.AppMedium,
    color: 'black',
  },
  descStyle: {
    fontSize: 16,
    fontFamily: Fonts.AppRegular,
    marginTop: 8,
    color: 'black',
  },
  arrowViewStyle: {
    borderRadius: 20,
    backgroundColor: '#E6F2F2',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    marginTop: 16,
  },
  arrowImageStyle: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
});
