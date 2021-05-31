//import liraries
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity , Alert} from 'react-native';

import styles from '../styles/ManipulandoStyles';

// create a component
export default function Cadastrar(){




    return (
        <View style={styles.container}>
        <Text>Tela de Cadastro</Text>

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

        <TouchableOpacity
            //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
            style={styles.buttonCadastrar}  onPress={() => {this.props.navigation.navigate('Home',{'nome':this.state.nome})}}>
                <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        </View>

    );
  
}







