import { StyleSheet, View, Text} from 'react-native';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
        <Text>Digite o valor de KM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center"
  },
});