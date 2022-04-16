import { StyleSheet, View, Text, TextInput, Button} from 'react-native';

import { useState, useLayoutEffect } from 'react';

export default function Home({ navigation }) {

  const [km, setKm] = useState("");
  const [litros, setLitros] = useState("");


  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Digite o valor de Km rodado</Text>
        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
          value={km}
          set={setKm}
          onChangeText={(texto) => {setKm(texto)}}

        />
        <Text style={styles.text}>Digite quantos litros</Text>
        <TextInput
          style={styles.textInput}
          value={litros}
          set={setLitros}
          keyboardType='numeric'
          onChangeText={(texto) => {setLitros(texto)}}
        />
      </View>

      <View style={styles.containerButton}>
        <Button      
          title='Calcular'
          onPress={() => navigation.navigate("Resultado", {resultado: km/litros, km: km, litros: litros})}
        
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  textInput: {
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center"
  },
  text: {
    fontSize: 25,
    fontWeight: "bold"
  },
  containerButton: {
    flex: 1,
    paddingTop: 40
  }
});