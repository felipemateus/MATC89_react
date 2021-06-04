import React, {createContext} from 'react';
import { useState } from 'react';
import firebase from '../firebaseConnection';

export const AuthContext = createContext({});
import {useNavigation} from '@react-navigation/native'


function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    //Função para logar
    async function logarUser(email,senha,navigation) {
        await firebase.auth().signInWithEmailAndPassword(email,senha).then(async (value) => {
            let uid = value.user.uid;
            console.log('Usuario Logado com sucesso'+uid);
    
            await firebase.database().ref('usuarios').child(uid).once('value')
            .then((snapshot)=>{
              let data = {
                uid:uid,
                nome:snapshot.val().nome,
                email:value.user.email
              };
              //AuthContext.Provider.
              //user.
              setUser(data);
              console.log(data);
              navigation.navigate('Home')

    
            });
        })
        .catch( (error) => {
    
          console.error(error);
          return;
            
        })
    }

    //cadastrarUsuario
    async function cadastrarAuth(email,senha, nome ) {
        if (nome !== '' & email !=='' & senha!== ''){
            await firebase.auth().createUserWithEmailAndPassword(email,senha).then( async(value) => {
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
            
        
        }else{
            alert('Falha');
        }
    }

    return(
        <AuthContext.Provider value={{ logado:!!user ,user,cadastrarAuth,logarUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;