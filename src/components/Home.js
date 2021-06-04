//import liraries
import 'react-native-gesture-handler';
import React, { Component,useState,useContext } from 'react';
import { Text, View,ScrollView, Image,StyleSheet, TextInput, TouchableOpacity , Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Picker} from '@react-native-picker/picker';


import {AuthContext} from '../contexts/auth'

import styles from '../styles/ManipulandoStyles';

// create a component
export default function Home(){

 

  const [selectedTurma, setSelectedTurma] =  useState();


  const {user}= useContext(AuthContext)

  console.log(user.nome)
  console.log(user.uid)

  

  return (
    <ScrollView style={styles.container1} >
      <Text style={styles.textHome}>Olá {user.nome}!</Text>


      <View style={styles.statusBox}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Status:</Text>
        <Text style= {styles.textBox}>Turmas:</Text>
        <Text style= {styles.textBox}>Aulas:</Text>
        <Text style= {styles.textBox}>Faltas:</Text>
      </View>


      <View style={[styles.statusBox, styles.statusBoxBigBig]}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Confirmar Presença:</Text>
        <Text style= {styles.textBox}>Turma:</Text>

        <View style={styles.borderPicker}>
          <Picker
          style={styles.picker}
          selectedValue={selectedTurma}
          onValueChange={(itemValue,itemIndex) => setSelectedTurma(itemValue)}
          >
            <Picker.Item value={1} label="Dispositivos Moveis"  />
            <Picker.Item value={2} label="IA"  />
            <Picker.Item value={3} label="Eng Software"  />
            <Picker.Item value={4} label="POO"  />
          </Picker>

        </View>
       

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
      <View style={styles.statusBox}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Próximas Aulas:</Text>
        <Text style= {styles.textBox}>Aula: Nome Da disciplina  </Text>
        
      </View>
      <View style={styles.statusBox}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Próximas Aulas:</Text>
        <Text style= {styles.textBox}>Aula: Nome Da disciplina  </Text>
        
      </View>


    </ScrollView>

  );
  
}
