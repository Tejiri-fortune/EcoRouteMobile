import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchRoutes } from '../services/routeService';

export default function InputScreen() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleFindRoutes = async () => {
    setLoading(true);
    try {
      const routes = await fetchRoutes();
      navigation.navigate('Results', { routes });
    } catch (error) {
      Alert.alert('Error', 'Failed to load routes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>From</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter starting point"
        value={from}
        onChangeText={setFrom}
      />
      <Text style={styles.label}>To</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter destination"
        value={to}
        onChangeText={setTo}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <Button
          title="Find Routes"
          onPress={handleFindRoutes}
          disabled={!from || !to}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginBottom: 16,
  },
});

