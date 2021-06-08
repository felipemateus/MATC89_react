import React, {useState, useEffect,useContext} from 'react';
import {View,Text,TouchableOpacity, Style, StyleSheet} from 'react-native';
import styles from '../styles/ManipulandoStyles';
import firebase from '../firebaseConnection';
import { set } from 'react-native-reanimated';

import {AuthContext} from '../contexts/auth'



export default function ListagemDisciplinas({data}) {
    const [statusAula,setStatusAula] = useState('');
    const [qtdAulas,setQtdAulas] = useState(0);
    const [qtdPresenca,setQtdPresensa] = useState(0);
    const {user}= useContext(AuthContext);


  


    useEffect(()=>{
        async function getStatusTurma() {
            let dado = await firebase.database().ref('turmas').child(data.key).get();
            if (dado.val().statusAula == null){
                setStatusAula(false)
            }else{
                setStatusAula(dado.val().statusAula)
                setQtdAulas(dado.val().qtdAulas)
                dadoQtdPresensa = await firebase.database().ref('usuarios/'+user.uid+'/turmas/'+data.key).get();
                setQtdPresensa(dadoQtdPresensa.val().qtdPresenca);

            }
        }

        getStatusTurma();
    });

    return (
        <View style={[styles.statusBox, styles.statusBoxBig]}>
            <Text style= {[styles.textBox,styles.textBoxHead]}>{data.nomeTurma}</Text>
            <Text style= {[styles.textBox]}>Código: {data.codigo}</Text>
            <Text style= {[styles.textBox]}>Quantidade de Aulas: {qtdAulas}</Text>
            <Text style= {[styles.textBox]}>Quantidade de Presenças: {qtdPresenca}</Text>




      </View>
    )
    
}

