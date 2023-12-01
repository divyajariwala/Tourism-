import { Dimensions, StyleSheet } from "react-native";
import Fonts from '../../utils/Fonts';

export const styles = StyleSheet.create({
  mainContainerStyle: {
    height: '100%',
  },
  wrapperViewStyle: {
    paddingVertical: 25,
  },
  textContainerStyle: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  scrollviewStyle: {
    paddingBottom: 70,
    backgroundColor: '#E2F0F0',
    justifyContent: 'space-between',
  },
  imageStyle: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.7,
    width: '100%',
    justifyContent: 'center',
  },
  descStyle: {
    fontSize: 16,
    fontFamily: Fonts.AppRegular,
    marginTop: 8,
    lineHeight: 27,
    color: 'black'
  },
})