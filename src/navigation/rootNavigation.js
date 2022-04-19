import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Route } from '../contanst';
import { First, Login } from '../screens';
import React, { useEffect, useRef } from 'react';
import {navigationRef, isMountedRef} from './navigationServices'
const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Route.FIRST}>
        <Stack.Screen name={Route.FIRST} component={First} />
        <Stack.Screen name={Route.LOGIN} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
