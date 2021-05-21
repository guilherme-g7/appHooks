import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


export default function App() {


  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  function alteraNome() {
    setNome(input);
    setInput('');
  }

  return (
    <View style={styles.container}>

      <TextInput 
        placeholder="Seu nome..."
        value={input}
        onChangeText={(texto) => setInput(texto)}
      />

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>
          Altera Nome
        </Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nome}</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  texto: {
    fontSize: 35,
    color: '#000'
  },
  btn: {
    backgroundColor: '#222'
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center'
  }
});



