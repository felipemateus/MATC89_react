//import liraries
import 'react-native-gesture-handler';
import React, { Component,useState,useContext } from 'react';
import { Text, View, Image,StyleSheet, TextInput, TouchableOpacity , Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'


import {AuthContext} from '../contexts/auth'

import styles from '../styles/ManipulandoStyles';

// create a component
export default function Home({ route,navigation }){
  //const navigation = useNavigation();
  //const nome = navigation.getParam('nome')
  //const { nome } = route.params;
  const {user}= useContext(AuthContext)

  console.log(user.nome)
  return (
    <View style={styles.container1} >
      <Text style={styles.textHome}>Olá {user.nome}!</Text>


      <View style={styles.statusBox}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Status:</Text>
        <Text style= {styles.textBox}>Turmas:</Text>
        <Text style= {styles.textBox}>Aulas:</Text>
        <Text style= {styles.textBox}>Faltas:</Text>
      </View>


      <View style={[styles.statusBox, styles.statusBoxBig]}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Confirmar Presença:</Text>
        <TextInput
          style={[styles.input, styles.inputLeft]}
          placeholder="Código da Aula"
        />
        <TouchableOpacity
            //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
            style={styles.buttonAcessar} >
              <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusBox}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Próximas Aulas:</Text>
        <Text style= {styles.textBox}>Aula: Nome Da disciplina  </Text>
        
      </View>


    </View>

  );
  
}
