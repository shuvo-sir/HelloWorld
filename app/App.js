import { View, Image, ScrollView, Text, Button} from "react-native";

export default function App(){
  return (
    <View style={{ flex: 1, backgroundColor: "plum", justifyContent: "center", alignItems: "center", padding: 40}}>
      <ScrollView>

      
      <Image 
        source={require("../assets/images/adaptive-icon.png")} 
        style={{ width: 300, height: 300 }} 
      />

      <Text style={{justifyContent: "center", padding: 2}}>
        এক কোটি বছর হয় তোমাকে দেখি না
        একবার তোমাকে দেখতে পাবো
        এই নিশ্চয়তাটুকু পেলে-
        বিদ্যাসাগরের মতো আমিও সাঁতরে পার
        হবো ভরা দামোদর
        … কয়েক হাজার বার পাড়ি দেবো ইংলিশ চ্যানেল;
        তোমাকে একটিবার দেখতে পাবো এটুকু ভরসা পেলে
        অনায়াসে ডিঙাবো এই কারার প্রাচীর,
        ছুটে যবো নাগরাজ্যে পাতালপুরীতে
        কিংবা বোমারু বিমান ওড়া
        শঙ্কিত শহরে।
        যদি জানি একবার দেখা পাবো তাহলে উত্তপ্ত মরুভূমি
        অনায়াসে হেঁটে পাড়ি দেবো,
        কাঁটাতার ডিঙাবো সহজে, লোকলজ্জা ঝেড়ে মুছে
        ফেলে যাবো যে কোনো সভায়
        কিংবা পার্কে ও মেলায়;
        একবার দেখা পাবো শুধু এই আশ্বাস পেলে
        এক পৃথিবীর এটুকু দূরত্ব
        আমি অবলীলাক্রমে পাড়ি দেবো।
        তোমাকে দেখেছি কবে, সেই কবে, কোন বৃহস্পতিবার
        আর এক কোটি বছর হয় তোমাকে দেখি না।
      </Text>
      <Image 
        source={require("../assets/images/adaptive-icon.png")} 
        style={{ width: 300, height: 300 }} 
      />
      <Button
        title="Press"
        onPress={() => console.log("Button Pressed")}
        color="midnightblue"    
      />
      </ScrollView>
    </View>
  );
}
