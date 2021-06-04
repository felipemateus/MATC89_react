//import liraries
import 'react-native-gesture-handler';
import React, { Component,useContext } from 'react';
import { Text, View,ScrollView, Image, TextInput, TouchableOpacity , Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'
//import {} from 'react-navi'

import {AuthContext} from '../contexts/auth'


import styles from '../styles/ManipulandoStyles';

// create a component
export default function Turmas({ route,navigation }){
  //const navigation = useNavigation();
  //const nome = navigation.getParam('nome')
  //const { nome } = route.params;
  const {user}= useContext(AuthContext)


  return (
    <ScrollView style={styles.container1}>
      <Text style={styles.textHome}>Suas Turmas {user.nome}:</Text>


      <View style={[styles.statusBox, styles.statusBoxBig]}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Criar Turma:</Text>
        <TextInput
          style={[styles.input, styles.inputLeft]}
          placeholder="Nome da Turma"
        />
        <TouchableOpacity
            //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
            style={styles.buttonAcessar} >
              <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.statusBox, styles.statusBoxBigBig]}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Nome da disciplina:</Text>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Código:</Text>
        <Text style= {styles.textBox}>Alunos:</Text>
        <Text style= {styles.textBox}>Aulas:</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
              //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
              style={styles.buttonAcessar} >
                <Text style={styles.buttonText}>Iniciar aula</Text>
          </TouchableOpacity>

          <TouchableOpacity
              //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
              style={styles.buttonTerminarAula} >
                <Text style={styles.buttonTextWhite}>Terminar Aula</Text>
          </TouchableOpacity>
        </View>
        
        <Text style= {styles.textBox}>Codigo da Aula:</Text>

      </View>

      <View style={[styles.statusBox, styles.statusBoxBigBig]}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Nome da disciplina:</Text>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Código:</Text>
        <Text style= {styles.textBox}>Alunos:</Text>
        <Text style= {styles.textBox}>Aulas:</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
              //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
              style={styles.buttonAcessar} >
                <Text style={styles.buttonText}>Iniciar aula</Text>
          </TouchableOpacity>

          <TouchableOpacity
              //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
              style={styles.buttonTerminarAula} >
                <Text style={styles.buttonTextWhite}>Terminar Aula</Text>
          </TouchableOpacity>
        </View>
        
        <Text style= {styles.textBox}>Codigo da Aula:</Text>

      </View>


      



    </ScrollView>

  );
  
}

//make this component available to the app







