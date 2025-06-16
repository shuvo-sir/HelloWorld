import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions} from "react-native";



export default function App() {
    const [dimensions, setDimensions] = useState({
        window: Dimensions.get("window"),
    });

    useEffect(() => {
        const subscription = Dimensions.addEventListener("change", ({window}) => {
            setDimensions({window});
        });
        return () => subscription?.remove();
    });

    const {window} = dimensions;
    const windoWidth = window.width;
    const windowHeight = window.height;


    return(
        <View style={styles.container}>
            <View style= {[styles.box, {
                width: windoWidth > 500 ? "70%" : "90%",
                height: windowHeight > 600 ? "60%" : "90%",
                }]}>
                <Text style={{ fontSize: windoWidth > 500 ? 50 : 24,}}>Welcome</Text>
            </View>
        </View>
    );
}

// const windoWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap",
        borderWidth: 6,
        borderColor: "red",
        alignItems: "flex-end",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 10,
    },
    box: {
        // width: windoWidth > 500 ? "70%" : "90%",
        // height: windowHeight > 600 ? "60%" : "90%",
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    // text: {
    //     fontSize: windoWidth > 500 ? 50 : 24,

    // },
});