import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AnimalDetailScreen from './screens/AnimalDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="AnimalDetail" component={AnimalDetailScreen} options={({ route }) => ({
          title: route.params?.animal?.nome || 'Detalhes do Animal',})} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
