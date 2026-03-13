import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
        backgroundColor: '#fff',
        paddingEnd: 10,
        height: 70
        },  
        tabBarBackground: () => (
          <View style={styles.backgroundContainer}>
            <View style={styles.gestureBar} />
          </View>
        )
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: 'Config',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />     
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  gestureBar: {
    width: 60,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#C7C7CC',
    marginBottom: 6,
  },
});