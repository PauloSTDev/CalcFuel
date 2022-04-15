import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function Resultado({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Aqui vai o resultado</Text>

                
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
    }
});