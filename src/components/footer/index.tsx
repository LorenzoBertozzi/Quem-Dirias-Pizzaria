import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export function Footer(){
    return(
        <View className="flex-row w-full flex-wrap items-center justify-between my-1 px-4">
            <Pressable>
                <Ionicons name="home" size={24} color="#000"/>
            </Pressable>
            <Pressable>
                <Ionicons name="calendar" size={24} color="#f1f1f1"/>
            </Pressable>
            <View className="bg-[#7D0A0A] h-10 w-10 rounded-full justify-center items-center">
                <Link href={'/carrinho'} onPress={() => console.log('Clicou no carrtinho')}>                
                    <Ionicons name="cart" size={24} color="#fff"/>
                </Link>
            </View>
            <Pressable>
                <Ionicons name="calendar" size={24} color="#f1f1f1"/>
            </Pressable>
            <Pressable>
              <Ionicons name="people" size={24} color="#000"/>
            </Pressable>
        </View>
    );
}