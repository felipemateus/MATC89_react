//import liraries
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity , Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'
//import {} from 'react-navi'

import styles from '../styles/ManipulandoStyles';

// create a component
export default function Turmas({ route,navigation }){
  //const navigation = useNavigation();
  //const nome = navigation.getParam('nome')
  //const { nome } = route.params;

  return (
    <View style={styles.container}>

      <Image
        source={require('../image/suaPresenca.png')}
        style={styles.logo}
      />
      <Text>Seja bem vindo(a) ao Turmas</Text>


    </View>

  );
  
}

//make this component available to the app







