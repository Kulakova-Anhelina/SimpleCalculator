
import React from'react';
import {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';


export default function CalculatorScreen(props)
{navigationOptions= {title: 'Calculator',};
const{navigate} = props.navigation;


const[number1, setNumber1] = useState('');
const[number2, setNumber2] = useState('');
const [result, setResult] = useState([]);
const[data, setData] = useState([]);
let resultText;


const buttonAdd = () =>{
    const res = parseInt(number1)+ parseInt(number2);
    setResult(parseInt(number1)+ parseInt(number2))
    resultText = number1 + "+" +  number2  + "=" + res;
    setData([...data, {key: resultText}]);
    setNumber1('')
    setNumber2('')
};
const buttonMinus = () =>{
    const res = parseInt(number1)- parseInt(number2);
    setResult(parseInt(number1)- parseInt(number2))
    resultText = number1 + "-" +  number2  + "=" + res;
    setData([...data, {key: resultText}]);
    setNumber1('')
    setNumber2('')
};
 
return(
<View style = {styles.container} >
    <Text>{result}</Text>
    <TextInput style={{width:200, borderColor:'gray',  borderWidth:1}} 
    onChangeText = {(text) => setNumber1(text)} value={number1} keyboardType = "number-pad"/>
    <TextInput style={{width:200, borderColor:'gray',  borderWidth:1}}
    onChangeText  ={(text2) => setNumber2(text2)} value={number2} keyboardType = "number-pad"/>
    <View style={styles.buttonContainer}>
    <View style ={{backgroundColor:'#841584'}}>
   <Button onPress={buttonAdd} title="+" color = 'white' />
   </View>
   <View style ={{backgroundColor:'#841584'}}>
   <Button onPress={buttonMinus} title="-" color = 'white'/>
   </View>
   <View style ={{backgroundColor:'#841584'}}>
   <Button onPress={() => navigate('History', {data: data} )} title="History" color = 'white'/>
  </View>
  </View>
  </View>);

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 100,
   
    },

    buttonContainer:{
        flexDirection :'row',  
        alignItems:'center', 
        width : 200, 
        margin: 20,
        justifyContent : 'space-between', 
    }
});




