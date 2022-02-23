import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { SectionList } from 'react-native-web';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonAdd = () => {
    setData([...data, { key: text }]);
    setText('');
  }


  return (
    <View style={styles.container}>
      <Text>Lisää ostoslistalle:</Text>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
       <View style={styles.operators}>
          <Button onPress={buttonAdd} title="Lisää" />
          <Button onPress={() => setData([])} title="Tyhjennä" />
        </View> 

      <Text style={styles.ostoslista}>Ostoslista:</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 80,
    fontSize: 20,
  },
  ostoslista: {
    marginTop: 20,
    color: 'blue',
    fontSize: 20,
  },
  list: {
    marginTop: 20,
  },
  operators: {                              
    width: '50%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  }
});