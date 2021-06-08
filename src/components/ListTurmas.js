import React, {useState, useEffect} from 'react';
import {View,Text,TouchableOpacity, Style, StyleSheet} from 'react-native';
import styles from '../styles/ManipulandoStyles';
import firebase from '../firebaseConnection';
import { set } from 'react-native-reanimated';


export default function Listagem({data}) {
    const [statusAula,setStatusAula] = useState('');
    const [qtdAulas,setQtdAulas] = useState(0);
    const [codigoAula,setCodigoAula ] = useState('');



    async function iniciarAula() {
        let statusAula = true;
        let codigoAula = Math.random().toString(36).substring(7);
        setStatusAula(statusAula);
        setCodigoAula(codigoAula);
        await firebase.database().ref('turmas').child(data.key).update({
            statusAula:statusAula,
            codigoAula: codigoAula,
            data: (new Date().toString()),
            qtdAulas:(qtdAulas+1)

        });
   

        
    }
    async function encerrarAula() {
        let statusAula = false;
        let codigoAula = "";
        setStatusAula(statusAula);
        setCodigoAula(codigoAula);
        await firebase.database().ref('turmas').child(data.key).update({
            statusAula:statusAula,
            codigoAula: codigoAula,
            
        });
        
    }


    useEffect(()=>{
        async function getStatusTurma() {
            let dado = await firebase.database().ref('turmas').child(data.key).get();
            if (dado.val().statusAula == null){
                setStatusAula(false)
            }else{
                setStatusAula(dado.val().statusAula);
                setQtdAulas(dado.val().qtdAulas);

            }
        }

        getStatusTurma();
    });

    return (
        <View style={[styles.statusBox, styles.statusBoxBigBig]}>
            <Text style= {[styles.textBox,styles.textBoxHead]}>{data.nomeTurma}</Text>
            <Text style= {[styles.textBox,styles.textBoxHead]}>Código: {data.codigo}</Text>
            <Text style= {[styles.textBox,styles.textBoxHead]}>Quantidade de aulas: {qtdAulas}</Text>


            <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
                onPress={iniciarAula}
                style={styles.buttonAcessar} >
                    <Text style={styles.buttonText}>Iniciar Aula</Text>
            </TouchableOpacity>

            <TouchableOpacity
                //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
                onPress={encerrarAula}
                style={styles.buttonTerminarAula} >
                    <Text style={styles.buttonTextWhite}>Encerrar Aula</Text>
            </TouchableOpacity>
            </View>
            
            <Text style= {styles.textBox}>Codigo da Aula: {codigoAula}</Text>
            
            <Text style= {styles.textBox}>Status da Aula: {statusAula ? 'Aula em Andamento': 'Aula Encerrada'}</Text>


      </View>
    )
    
}

