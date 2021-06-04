//import liraries
import 'react-native-gesture-handler';
import React, { Component,useContext, useState ,useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity , Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import styles from '../styles/ManipulandoStyles';

import {AuthContext} from '../contexts/auth';

import firebase from '../firebaseConnection';
import { set } from 'react-native-reanimated';



// create a component
export default function Login() {
  const navigation = useNavigation();
  const[nome,setNome] = useState('');
  const[email,setEmail] = useState('');
  const[senha,setSenha] = useState('');
  const[uid,setUid] = useState('');



  const {user,logarUser,logado}= useContext(AuthContext);


 
  //console.log(user.nome);

  function handleLogin() {
    logarUser(email,senha,navigation)
    
  }


  function irHome() {
    user.nome = email
    navigation.navigate('Home')
  }
  function irCadastrar() {
    navigation.navigate('Cadastrar')
  }
  
  

  pressed = () => {
    Alert.alert("Aprendendo manipular elementos visuais com React native.", "Pode acessar a aplicação.")

  }


  
  return (
    <View style={styles.container}>

      <Image
        source={require('../image/suaPresenca.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText = {(text) => setEmail(text) }
        value={email}
      />


      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText = {(text) => setSenha(text) }
        secureTextEntry={true}
        value={senha}
      />
      
      <View style={{flexDirection:'row' }} >
        <TouchableOpacity
          //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
          style={styles.buttonAcessar}  onPress={handleLogin}>
            <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCadastrar} onPress={irCadastrar}>
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        
      </View>
 
    </View>

  );
  
}





