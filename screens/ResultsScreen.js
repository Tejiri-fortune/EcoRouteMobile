
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ResultsScreen = ({ route, navigation }) => {
  const { routes } = route.params;

  // Sort by score ascending
  const sortedRoutes = [...routes].sort((a, b) => a.score - b.score).slice(0, 3);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Map', { mode: item.mode })}
    >
      <Text style={styles.title}>{item.mode.toUpperCase()}</Text>
      <Text>Distance: {item.distance_km} km</Text>
      <Text>Time: {item.time_min} mins</Text>
      <Text>CO₂: {item.co2_g} g</Text>
      <Text style={styles.score}>Score: {item.score}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedRoutes}
        renderItem={renderItem}
        keyExtractor={(item) => item.mode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  score: {
    marginTop: 8,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default ResultsScreen;

