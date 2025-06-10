import { View, Text, StyleSheet} from "react-native";

export default function App() {
    return(
        <View style={styles.container}>
           <View style={[styles.box, styles.lightblueBg]}> 
                 <Text >Lightblue</Text>
           </View>
           <View style={[styles.box, styles.lightgreenBg]}>
                 <Text >Lightgreen</Text>
           </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "plum", padding: 60},
    box: {
        width: 100,
        height: 100,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: "purple",
        borderRadius: 5,
    },    
    lightblueBg: {
        backgroundColor: "lightblue",
    },
    lightgreenBg: {
        backgroundColor: "lightgreen",
    }
});

