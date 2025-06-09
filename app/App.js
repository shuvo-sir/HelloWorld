import React, { lazy, use, useState } from "react";
import Greet from "../components/Greet";
import { View, Image, ScrollView, Text, Button, Modal, StatusBar, ActivityIndicator} from "react-native";

export default function ModalScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 40 }}>
     <Greet name="Shuvo"></Greet>
      <ScrollView contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="midnightblue" animating={false}/>
        <Image
          source={require("../assets/images/adaptive-icon.png")}
          style={{ width: 300, height: 300 }}
        />

        <Button
          title="Press"
          onPress={() => setIsModalVisible(true)}
          color="midnightblue"
        />


        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={false}
        >
          <View style={{ flex: 1, backgroundColor: "lightblue", padding: 20 }}>
            <ScrollView>
              <ActivityIndicator size="large" color="black" animating={true}/>
              <Text style={{ fontSize: 16, lineHeight: 24 }}>
                এক কোটি বছর হয় তোমাকে দেখি না
                একবার তোমাকে দেখতে পাবো...
                {/* [rest of your poem here] */}
              </Text>

              <View style={{ marginTop: 20 }}>
                <Button
                  title="Close"
                  color="midnightblue"
                  onPress={() => setIsModalVisible(false)}
                />
              </View>
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
