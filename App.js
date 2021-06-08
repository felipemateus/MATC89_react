//import liraries
import 'react-native-gesture-handler';

import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


import styles from './src/styles/ManipulandoStyles';
import Login from './src/components/Login'
import Home from './src/components/Home'
import Turmas from './src/components/Turmas'
import Cadastrar from './src/components/Cadastrar';
import AuthProvider from './src/contexts/auth'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator
      tabBarOptions={{
        showLabel:false,
        keyboardHidesTabBar:true,
        style:{
          position:'absolute',
          bottom:10,
          left:20,
          right:20,
          elevation:0,
          backgroundColor:'#ffffff',
          borderRadius:15,
          height:60,
          ...styleTab.shadow
        }
      }}
    >
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon:({focused}) => (
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image
              source={require('../meuApp/assets/icons/home.png')}
              resizeMode='contain'
              style={{
                width:25,
                height:25,
                tintColor:focused ? '#41b6fa' : '#748c94'
              }}
            />
            <Text style={{color:focused ? '#41b6fa' : '#748c94',fontSize:10}}>
              Home
            </Text>
          </View>
        )
      }}
      />
      <Tab.Screen name="Turmas" component={Turmas}
         options={{
          tabBarIcon:({focused}) => (
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image
                source={require('../meuApp/assets/icons/book-1.png')}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor:focused ? '#41b6fa' : '#748c94'
                }}
              />
              <Text style={{color:focused ? '#41b6fa' : '#748c94',fontSize:10}}>
                Turmas
              </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
  
}

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen 
            name="Login" 
            component={Login}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen 
            name="Home" 
            component={Tabs}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen name="Cadastrar" component={Cadastrar}/>
        </Stack.Navigator>
      </AuthProvider>
 
    </NavigationContainer>
  );
}


const styleTab = StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5

  }
});



