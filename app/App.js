import { StyleSheet, View } from "react-native";
import Box from "../constants/Box";

export default function App() {
    return(
        <View style={styles.container}>
            <Box style={{backgroundColor: "#8e9b00", flexShrink: 1,}}>Box 1 shrink</Box>
            <Box style={{backgroundColor: "#f39c12", flexShrink: 1,}}>Box 2 shrink</Box>
            {/* <Box style={{backgroundColor: "#e74c3c"}}>Box 3</Box>
            <Box style={{backgroundColor: "#2ecc71"}}>Box 4</Box>
            <Box style={{backgroundColor: "#3498db"}}>Box 5</Box>
            <Box style={{backgroundColor: "#9b59b6"}}>Box 6</Box>
            <Box style={{backgroundColor: "#1abc9c"}}>Box 7</Box>
            <Box style={{backgroundColor: "#e67e22"}}>Box 8</Box>
            <Box style={{backgroundColor: "#34495e"}}>Box 9</Box> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        width: 300,
        borderWidth: 6,
        borderColor: "red",
        borderRadius: 30,
    },
});