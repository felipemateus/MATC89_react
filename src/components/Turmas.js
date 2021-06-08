//import liraries
import 'react-native-gesture-handler';
import React, { Component,useContext,useEffect } from 'react';
import { Text, View,ScrollView, Image, TextInput, TouchableOpacity , Alert,FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//import {} from 'react-navi'

import {AuthContext} from '../contexts/auth';

import firebase from '../firebaseConnection';
import Listagem from '../components/ListTurmas'


import styles from '../styles/ManipulandoStyles';
import { useState } from 'react/cjs/react.development';
import { set } from 'react-native-reanimated';

// create a component
export default function Turmas({ route,navigation }){
  
  const {user}= useContext(AuthContext);

  const [novaTurma,setNovaTurama] = useState('');
  const [turmas,setTurmas] = useState([]);
  

  async function cadastrarTurma() {
    if (novaTurma !== ''){
        let turmas = await firebase.database().ref('turmas');
        let chave =  turmas.push().key;
        turmas.child(chave).set({
            user: user.uid,
            nomeTurma: novaTurma,
            codigo: Math.random().toString(36).substring(7),
            qtdAulas:0
        });
        alert('Cadastro de turma feito com sucesso!');
        setNovaTurama('');

    }else{
        alert('Falha');
    }
    
  }


  useEffect(()=>{
    async function dadosTumas() {
      setTurmas([]);

      
      //dados = firebase.database().ref('turmas').orderByChild('user').equalTo(user.uid);
      turmasRef =await firebase.database().ref('turmas');
      turmasRef.orderByChild('user').equalTo(user.uid).on("child_added",function(snapshot){
        let dado = {
          key:      snapshot.key,
          codigo:   snapshot.val().codigo,
          nomeTurma:snapshot.val().nomeTurma,
          qtdAulas:snapshot.val().qtdAulas

        };
        setTurmas(oldArray =>[...oldArray,dado]);
        //console.log(snapshot.key);
        //console.log(snapshot.val().nomeTurma);

      });
      console.log("Imprimindo turmas");
      console.log(turmas)

      //setTurmas(dados);
    }

    dadosTumas();
  },[]);


  return (
    <ScrollView style={styles.container1}>
      <Text style={styles.textHome}>Suas Turmas {user.nome}:</Text>


      <View style={[styles.statusBox, styles.statusBoxBig]}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Criar Turma:</Text>
        <TextInput
          style={[styles.input, styles.inputLeft]}
          placeholder="Nome da Turma"
          onChangeText={(text) => setNovaTurama(text)}
          value={novaTurma}
        />
        <TouchableOpacity
            //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
            style={styles.buttonAcessar}
            onPress={cadastrarTurma} 
            >
            <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={item => item.key}
        data= {turmas}
        renderItem={ ({item})=> (<Listagem data={item}/> ) }
      />


      

      


      



    </ScrollView>

  );
  
}

//make this component available to the app







