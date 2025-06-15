import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function Footer(){
    return(
        <View className="flex-row w-full flex-wrap items-center justify-between my-4 px-4">
            <Pressable>
                <Ionicons name="home" size={24} color="#000"/>
            </Pressable>
            <Pressable>
                <Ionicons name="calendar" size={24} color="#f1f1f1"/>
            </Pressable>
            <Pressable className="bg-red-700 h-10 w-10 justify-center items-center rounded-full ">                
                <Ionicons name="cart" size={24} color="#fff"/>
            </Pressable>
            <Pressable>
                <Ionicons name="calendar" size={24} color="#f1f1f1"/>
            </Pressable>
            <Pressable>
              <Ionicons name="people" size={24} color="#000"/>
            </Pressable>
        </View>
    );
}