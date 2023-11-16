import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from './component/Explore';
import Home from './component/Home';
import Profile from './component/Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Music from './component/Music';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MusicStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Music" component={Music} options={{ headerShown: false }} />
      <Stack.Screen name="Explore" component={Explore} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

const TabNav: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: 'black' },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Hides the header for all screens
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'search1' : 'search1';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={MusicStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
};

export default App;
