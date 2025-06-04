import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const MapScreen = ({ navigation }) => {
  const start = { latitude: 37.7749, longitude: -122.4194 }; // San Francisco
  const end = { latitude: 37.7849, longitude: -122.4094 };   // Nearby coordinate

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: start.latitude,
          longitude: start.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={start} title="Start" />
        <Marker coordinate={end} title="End" />
        <Polyline coordinates={[start, end]} strokeColor="#007AFF" strokeWidth={3} />
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Back to Results" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
});

export default MapScreen;

