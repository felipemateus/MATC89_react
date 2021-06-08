//import liraries
import 'react-native-gesture-handler';
import React, { Component ,useState} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity , Alert} from 'react-native';

import styles from '../styles/ManipulandoStyles';
import firebase from '../firebaseConnection';



// create a component
export default function Cadastrar(){
    const[nome,setNome]= useState('');
    const[email,setEmail]= useState('');
    const[senha,setSenha]= useState('');



  


    async function cadastrar() {
        if (nome !== '' & email !=='' & senha!== ''){
            let usuarios = await firebase.database().ref('usuarios');
            let chave =  usuarios.push().key;
            usuarios.child(chave).set({
                nome: nome,
                email: email,
                senha:senha
            });
            alert('Cadastro feito com sucesso!')
            setEmail('')
            setNome('')
            setSenha('')

        }else{
            alert('Falha')
        }
        
    }
    async function cadastrarAuth() {
        if (nome !== '' & email !=='' & senha!== ''){
            await firebase.auth().createUserWithEmailAndPassword(email,senha).then( (value) => {
                alert("Cadastrado com Sucesso!");
                firebase.database().ref('usuarios').child(value.user.uid).set({
                    nome:nome
                })
            })
            .catch( (error) => {
                if(error.code === 'auth/weak-password'){
                    alert('sua senha deve ter pelo menos 6 caracteres');
                }
                if(error.code === 'auth/invalid-email'){
                    alert('Email invalido ');
                }else{
                    alert('Algo deu errado');
                }
            })
            
            setEmail('');
            setNome('');
            setSenha('');
        }else{
            alert('Falha')
        }
    }


    return (
        <View style={styles.container}>
        <Text style={styles.textHome}>Tela de Cadastro</Text>

        <TextInput
            style={styles.input}
            onChangeText = {(text) => setNome(text) }
            placeholder="Nome"
            value={nome}
        />
        <TextInput
            style={styles.input}
            onChangeText = {(text) => setEmail(text) }
            placeholder="E-mail"
            value={email}
        />

        <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText = {(text) => setSenha(text)}
            value={senha}
        />

        <TouchableOpacity
            //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
            style={styles.buttonCadastrar}  onPress={cadastrarAuth}>
                <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        </View>

    );
  
}







