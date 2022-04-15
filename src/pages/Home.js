import { StyleSheet, View, Text, TextInput, Button} from 'react-native';

export default function Home({ navigation }) {

  const resultadoOpe = () => {
    navigation.navigate("Resultado")
}

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Digite o valor de Km rodado</Text>
        <TextInput
          style={styles.textInput}
          keyboardType='numeric'

        />
        <Text style={styles.text}>Digite quantos litros</Text>
        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.container}>
        <Button style={styles.button}

        
          title='Calcular'
          onPress={resultadoOpe}
          
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
  button: {
    backgroundColor: "#53a6d4",
    color: "#53a6d4",
    tintColor: "#53a6d4",
  }
});