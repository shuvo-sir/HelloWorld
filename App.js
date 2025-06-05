import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App(){
    return (
        <View style={style.container}>
            <Text>My name is Shuvo Halder</Text>
            <StatusBar style='auto'></StatusBar>
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});