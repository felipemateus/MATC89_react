import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff' ,
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
      backgroundColor: '#ffb347',
      margin: 10,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonAcessar: {
      width: 140,
      height: 42,
      backgroundColor: '#8be4db',
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
      backgroundColor: '#CBF3F0',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 20,
    },
    inputLeft:{
      marginLeft:10
    },

    buttonText:{
      fontSize: 18,
      color: '#000000'
    },
    buttonTextWhite:{
      fontSize: 18,
      color: '#000000'
    },



    container1: {
      flex: 1,
      backgroundColor: '#ffffff' 
    },
    textHome:{
      fontSize:30,
      margin:30
    },
    textBoxHead:{
      fontSize:22,
      marginTop:5,
      fontWeight:'bold',
      
    },
    textBox:{
      margin:2,
      fontSize:15,
      marginLeft:10
  
    },
    
  
    statusBox:{
      borderWidth: 2,
      borderTopColor: '#ffbf69',
      borderRadius: 15,
      borderColor:'#cbf3f0',
      backgroundColor:'#b0ffaa', 
      height:120,
      margin:20,
      shadowColor: '#000',
      shadowOffset: {
        width: 10,
        height: 20,
      },
      shadowOpacity: 2.23,
      shadowRadius: 5.62,
  
      elevation: 4,
    },
    statusBoxBig:{
      height:160
    },

    statusBoxBigBig:{
      height:250
    },
    picker: {
      height: 25,
      backgroundColor: '#CBF3F0',
      margin: 10,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    borderPicker: {
      backgroundColor: '#CBF3F0',
      borderWidth: 1,
      borderColor: '#b0fffa', 
      borderRadius: 20  ,
      width: 300,
      marginLeft:10

    },

  });

  //make this component available to the app
  export default styles ;