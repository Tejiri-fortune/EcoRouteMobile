import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from './screens/InputScreen';
import ResultsScreen from './screens/ResultsScreen'; // You'll create this next
import MapScreen from './screens/MapScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Input">
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
	<Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



