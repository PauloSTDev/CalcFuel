import { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function Resultado(props) {

    const resultado = props.route.params.resultado
    const [icv, setIcv] = useState("")
    const km = props.route.params.km
    const litros = props.route.params.litros

    useLayoutEffect(() => {
        if (resultado > 12)
            setIcv("A, mais de 12 km/l")
        else if(resultado > 10 && resultado <= 12)
            setIcv("B, até 12 km/l")
        else if(resultado > 8 && resultado <= 10)
            setIcv("C, até 10 km/l")
        
        else if(resultado > 4 && resultado <= 8)
            setIcv("D, até 8 km/l")
        
        else if(resultado <= 4)
            setIcv("E, até 4 km/l")
        
    }, [])
    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.text}>Resultado {resultado} km por litro</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Indicação de Consumo de Veículos:</Text>
                <Text style={styles.text}>Classe {icv}</Text>
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
        fontSize: 20,
        fontWeight: "bold"
    }
});