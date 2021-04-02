
import { StyleSheet, Text, View,Button } from 'react-native';
import { CounterStoreContext } from './components/CounterStore';
import React, { useContext } from "react";

import {observer} from "mobx-react";
// import {observer} from "mobx-react-lite";
// You can import observer from either mobx-react or mobx-react-lite
// Just make sure not to put both of them together so as to avoid duplication error

const App = observer(() => {
  const counterStore = useContext(CounterStoreContext);
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>MobX in Functional Component</Text>
      <Text style={styles.text}>Just Press the damn button</Text>
      <Text style={styles.result}>Value : {counterStore.count}</Text>
      <Button title="Increase" onPress={counterStore.addCount}/>   
      <Button title="Decrease" onPress={counterStore.subtractCount}/> 
      <Button title="getCountValue in log" onPress={()=>{
        console.log(`getCountValue => ${counterStore.getCountValue}`)
        console.log("=============================================")
      }}/>    
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  text:{
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
  },
  result:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
