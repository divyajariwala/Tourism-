import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1
  },
  wrapperViewStyle: {
    paddingVertical: 25,
  },
  imageContainerStyle: {
    overflow: 'hidden',
  },
  scrollviewStyle: {
    paddingBottom: 70,
    backgroundColor: '#E2F0F0',
    justifyContent: 'space-between',
  },
  imageStyle: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 1.4,
    width: '100%',
    justifyContent: 'center',
  },
});
