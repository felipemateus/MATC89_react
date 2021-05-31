//import liraries
import 'react-native-gesture-handler';
import React, { Component,useContext } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity , Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import styles from '../styles/ManipulandoStyles';

import {AuthContext} from '../contexts/auth'



// create a component
export default function Login({navigation}) {
  //const navigation = useNavigation();

  const {user}= useContext(AuthContext)

  console.log(user.nome);


  function irHome() {
    user.nome = this.state.nome
    navigation.navigate('Home',{'nome':this.state.nome})
  }
  function irCadastrar() {
    navigation.navigate('Cadastrar')
  }
  
  

  pressed = () => {
    Alert.alert("Aprendendo manipular elementos visuais com React native.", "Pode acessar a aplicação.")

  }

  state = {
      nome:''
  }


  
  return (
    <View style={styles.container}>

      <Image
        source={require('../image/suaPresenca.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        onChangeText = {text => this.state.nome = text }
        placeholder="E-mail"
      />


      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />
      
      <View style={{flexDirection:'row' }} >
        <TouchableOpacity
          //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
          style={styles.buttonAcessar}  onPress={irHome}>
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





