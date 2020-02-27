import React from'react';
import{View, Text, StyleSheet, FlatList} from 'react-native';

export default function SettingScreen(props) {
  const{ params} =   props.navigation.state;
    return(
  <View style={styles.container}>
    <Text>History</Text>
    <View style ={{flex: 4}}>
    <FlatList data ={params.data} renderItem={({item}) =>
    <Text>{item.key}
    </Text>}/>
    </View>
  </View>
    )}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 100
    
    }});


      
 ;
   

