import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b0fffa' ,
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    texto1:{
      color: '#f8f8ff',
      fontSize: 24,
      padding: 30
    },
    texto2: {
      color: '#fffaf0',
      fontSize: 16,
      padding: 30
    },
    texto3:{
      color: '#f0ffff',
      fontSize: 18,
      textAlign: 'center',
      letterSpacing: 2,
      padding: 30,
      backgroundColor: '#000000',
    },

    texto4:{
      color: '#800000',
      fontSize: 12,
      textAlign: 'center',
      letterSpacing: 2,
    },

    buttonTerminarAula: {
      width: 140,
      height: 42,
      backgroundColor: '#f54242',
      margin: 10,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonAcessar: {
      width: 140,
      height: 42,
      backgroundColor: '#00ff91',
      margin: 10,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonCadastrar: {
      width: 140,
      height: 42,
      backgroundColor: '#41b6fa',
      margin: 10,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 250,
      height: 250,
      borderRadius: 5,
    },

    input:{
      marginTop: 10,
      padding: 10,
      width: 300,
      backgroundColor: '#00ffea',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 20,
    },
    inputLeft:{
      marginLeft:10
    },

    buttonText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#800000'
    },
    buttonTextWhite:{
      fontSize: 18,
      color: '#ffffff'
    },



    container1: {
      flex: 1,
      backgroundColor: '#b0fffa' 
    },
    textHome:{
      fontSize:30,
      margin:30
    },
    textBoxHead:{
      fontSize:20,
      marginTop:5
      
    },
    textBox:{
      margin:2,
      fontSize:15,
      marginLeft:10
  
    },
    
  
    statusBox:{
      backgroundColor:'#b0ffaa', 
      height:120,
      margin:20,
      borderRadius:5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
  
      elevation: 4,
    },
    statusBoxBig:{
      height:160
    },

    statusBoxBigBig:{
      height:250
    },
    picker: {
      height: 20,
      backgroundColor: '#00ffea',
      margin: 10,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    borderPicker: {
      backgroundColor: '#00ffea',
      borderWidth: 1,
      borderColor: '#b0fffa', 
      borderRadius: 20  ,
      width: 300,
      marginLeft:10

    },

  });

  //make this component available to the app
  export default styles ;