import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoaderComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#008080" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default LoaderComponent;
