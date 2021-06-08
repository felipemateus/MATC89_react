//import liraries
import 'react-native-gesture-handler';
import React, { Component,useState,useContext,useEffect } from 'react';
import { Text, View,ScrollView, Image,StyleSheet, TextInput, TouchableOpacity , FlatList,Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Picker} from '@react-native-picker/picker';


import {AuthContext} from '../contexts/auth'
import firebase from '../firebaseConnection';

import styles from '../styles/ManipulandoStyles';
import ListagemDisciplinas from './ListaDisciplinas';

// create a component
export default function Home(){

  const {user}= useContext(AuthContext);

  const [selectedTurma, setSelectedTurma] =  useState();
  const [codigoTurma, setCodigoTurma] =  useState();
  const [codigoAula, setCodigoAula] =  useState();
  const [disciplinas, setDisciplinas] = useState([]);




  console.log(user.nome);
  console.log(user.uid);

  async function confirmarPresenca() {
    //turmasRefStatus =await firebase.database().ref('turmas/'+selectedTurma.key+'/statusAula');
    turmasRefStatus =await firebase.database().ref('turmas/'+selectedTurma.key);
    turmasRefStatus.on("value",function(snapshot){
      let dado = {
        key:    snapshot.val().key,
        status: snapshot.val().statusAula,
        codigoAula: snapshot.val().codigoAula
      }

      if (dado.status ===true && dado.codigoAula ===codigoAula){
        tempQtdPresenca= selectedTurma.qtdPresenca+1;

        firebase.database().ref('usuarios/'+user.uid+'/turmas/'+selectedTurma.key).update({
          qtdPresenca: tempQtdPresenca
        });
        

        console.log("Presença Confirmada")
      }else{
        console.log("Presença não Confirmada")
      } 
    });
    
  } 

  async function cadastrarDisciplina() {
    if(codigoTurma!== ''){
      turmasRef =await firebase.database().ref('turmas');
      turmasRef.orderByChild('codigo').equalTo(codigoTurma).on("child_added",function(snapshot){
        let dado = {
          key:      snapshot.key,
          codigo:   snapshot.val().codigo,
          nomeTurma:snapshot.val().nomeTurma,
          professor:snapshot.val().user,
          qtdPresenca:0
        };

        if(dado!== null){
          console.log(dado);
          firebase.database().ref('usuarios/'+user.uid+'/turmas/'+dado.key).set(dado);
          alert('Cadastro de turma feito com sucesso!');
          setCodigoTurma('');
  
        }else{
           alert('Turma não encontrada!');
  
        }
  
      });
    }
    alert('Cadastro de turma feito com sucesso!');
  }

  let getPickerDisciplinas = disciplinas.map((disciplina) => 
    <Picker.Item value={disciplina} label={disciplina.nomeTurma}  />
  ); 

  useEffect(()=>{
    async function dadosDisciplinas() {
      setDisciplinas([]);

      
      //dados = firebase.database().ref('turmas').orderByChild('user').equalTo(user.uid);
      turmasUserRef =await firebase.database().ref('usuarios/'+user.uid+'/turmas');
      turmasUserRef.on("child_added",function(snapshot){
        let dado = {
          key:      snapshot.key,
          codigo:   snapshot.val().codigo,
          nomeTurma:snapshot.val().nomeTurma,
          professor:snapshot.val().professor,
          qtdPresenca:snapshot.val().qtdPresenca

        };
        setDisciplinas(oldArray =>[...oldArray,dado]);
        //console.log(snapshot.key);
        //console.log(snapshot.val().nomeTurma);

      });
      console.log("Imprimindo Disciplinas");
      console.log(disciplinas)

      //setTurmas(dados);
    }

    dadosDisciplinas();
  },[]);
  

  return (
    <ScrollView style={styles.container1} >
      <Text style={styles.textHome}>Olá {user.nome}!</Text>


      <View style={styles.statusBox}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Status:</Text>
        <Text style= {styles.textBox}>Turmas:</Text>
        <Text style= {styles.textBox}>Aulas:</Text>
        <Text style= {styles.textBox}>Faltas:</Text>
      </View>


      <View style={[styles.statusBox, styles.statusBoxBig]}>
        <Text style= {[styles.textBox,styles.textBoxHead]}>Cadastrar Disciplina:</Text>

        <TextInput
          style={[styles.input, styles.inputLeft]}
          placeholder="Código da Disciplina"
          onChangeText= {(text) =>setCodigoTurma(text)}
          value= {codigoTurma}
        />
        <TouchableOpacity
            //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
            onPress={cadastrarDisciplina}
            style={styles.buttonAcessar} >
              <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>

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
            {getPickerDisciplinas}
          </Picker>

        </View>
       

        <TextInput
          style={[styles.input, styles.inputLeft]}
          placeholder="Código da Aula"
          value={codigoAula}
          onChangeText= {(text) =>setCodigoAula(text)}

        />
        <TouchableOpacity
            //style={styles.buttonAcessar} onPress={() => {this.pressed()}}>
            onPress={confirmarPresenca}
            style={styles.buttonAcessar} >

              <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={item => item.key}
        data= {disciplinas}
        renderItem={ ({item})=> (<ListagemDisciplinas data={item}/> ) }
      />




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
