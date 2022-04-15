import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Resultado from './src/pages/Resultado';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#53a6d4',
            
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
            
              title: 'CalcFuel',
            }
          }
        />
        <Stack.Screen
          name="Resultado"
          component={Resultado}
          options={
            {
              title: 'CalcFuel',
            }
          }
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;