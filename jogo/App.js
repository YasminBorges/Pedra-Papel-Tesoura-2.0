import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';


export default function App() {
  const [comp,setComp] = useState();
  const [voce,setVoce] = useState();
  const [pontos,setPontos] = useState(0);
  const [pontosComp,setPontosComp] = useState(0);
  const [empate,setEmpate] = useState(0);
  var verifica;
  var verificaSeu;
  var numero_aleatorio = 0;

  function GeraNumero(){
    numero_aleatorio = Math.floor(Math.random() * 3);

    if(numero_aleatorio == 0)
    {
      verifica = 'Pedra';
      setComp(verifica); 
      comp;
    }else if(numero_aleatorio == 1)
    {
      verifica = 'Papel';
      setComp(verifica);
      comp;
    }else
    {
      verifica = 'Tesoura';
      setComp(verifica);
      comp;
    }
   }

   function VerificaEscolha(escolha){
    
 
    if(escolha == 0)
    {
      verificaSeu = 'Pedra';
      setVoce(verificaSeu); 
      voce;
    }else if(escolha == 1)
    {
      verificaSeu = 'Papel';
      setVoce(verificaSeu); 
      voce;
    }else
    {
      verificaSeu = 'Tesoura';
      setVoce(verificaSeu); 
      voce;
    }
    
  }

 

  function contador(resp){
     GeraNumero();
     VerificaEscolha(resp);
     
     console.log('cont -',numero_aleatorio)
     console.log('botao escolhido -',resp);
   if(resp == 0 &&  numero_aleatorio == 2 )
   {
    setPontos(pontos + 1);
   }
   else if(resp == 1 && numero_aleatorio == 0)
   {
    setPontos(pontos + 1);
   }
   else if(resp == 2 && numero_aleatorio == 1)
   {
     setPontos(pontos + 1);
   }
   else if(resp == numero_aleatorio)
   {
    setEmpate(empate + 1);
   }
   else
   {
    setPontosComp(pontosComp + 1);
   }


  }

  function resetar(){
    setPontos(0);
    setPontosComp(0);
    setComp('');
    setEmpate(0);
    setVoce('');
  }

 




  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Pedra Papel Tesoura!</Text>
      
      <View style={styles.buttons}>

          <TouchableOpacity style={styles.button}  onPress={() => contador(0)}  >
            <Image source={require('./assets/Pedra.jpg')} style={styles.image}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}   onPress={ () => contador(1)}>
            <Image source={require('./assets/Papel.jpg')} style={styles.image}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}  onPress={ () => contador(2)}>
            <Image source={require('./assets/Tesoura.jpg')} style={styles.image}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.h2}>Computador:</Text>
        <Text style={styles.pontComp}>{comp}</Text>
        <Text style={styles.h2}>Você:</Text>
        <Text style={styles.PontVoce}>{voce}</Text>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.h2}>Computador:</Text>
        <Text style={styles.pontComp}>{pontosComp}</Text>
        <Text style={styles.h2}>Empate:</Text>
        <Text style={styles.empate}>{empate}</Text>
        <Text style={styles.h2}>Você:</Text>
        <Text style={styles.PontVoce}>{pontos}</Text>
      </View>

      <TouchableOpacity style={styles.resetar} onPress={resetar}>
        <Image source={require('./assets/reload.png')} style={styles.imageResetar}></Image>
      </TouchableOpacity>
    
      
      <StatusBar style="auto" />
     
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image:{
    width:90,
    height:90,
    borderRadius:15,
  },
  buttons:{
    flexDirection:'row' ,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 55,
    
  },
  button:{
    margin:5,
    
  },
  h1:{
    color:'#fe4',
    fontSize:25,
    paddingBottom:5,
    fontWeight:'500',
  },
  h2:{
    color:'#fff',
    margin:5,
    fontSize:18,
    
  },
  resultado:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop:35,

  },
  pontComp:{
    color:'#f57',
    fontSize:18,
    margin:5,
    fontWeight:'500',
  
  },
  PontVoce:{
    color:'#92e37c',
    fontSize:18,
    fontWeight:'500',
  },
  empate:{
    color:'#fe4',
    fontSize:18,
    margin:5,
    fontWeight:'500',
  },
  resetar:{
    backgroundColor: '#fe4',
    borderRadius:10,
    width:60,
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    margin:30,
  },
  imageResetar:{
    width:40,
    height:40,
  
  }

});
