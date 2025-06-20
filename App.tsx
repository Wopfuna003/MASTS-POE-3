import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import WelcomeScreen from "./Welcome";
import HomeScreen from "./HomeScreen";
import AddDish from "./AddDish";
import CheckOut from "./CheckOut";
import Filter  from "./Filter";
import React from 'react';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
  
<NavigationContainer>
  
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#e91e63',
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Welcome':
                iconName = 'calendar';
                break;
              case 'Home':
                iconName = 'home';
                break;
              case 'Add':
                iconName = 'add';
                break;
              case 'Check':
                iconName = 'list';
                break;
              
            }

            return <Ionicons calender={iconName} size={20} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={AddDish} />
        <Tab.Screen name="Check" component={CheckOut} />
        <Tab.Screen name="Filter" component={Filter}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
