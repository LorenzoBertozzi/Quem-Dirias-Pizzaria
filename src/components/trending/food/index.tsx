import { View, Pressable, Text, Image } from "react-native";
import {FoodProps} from '..'
import {Ionicons} from '@expo/vector-icons'
import { Link } from "expo-router";

export function CardHorizontal({food}: {food: FoodProps}){
    return(
        <Link href={"/choose-detail"}  className="w-40 my-1 mx-1 flex flex-col rounded-xl bg-slate-100 p-2" onPress={() => console.log("clicou no card")}>
            <View>
                <Image source={{uri:food.image}} className="w-36 h-36 rounded-full bg-white items-center"/>
            </View>
            <View className="flex flex-row bg-neutral-900/90 gap-1 rounded-full absolute top-2 right-2 px-2 items-center justify-center">
                <Ionicons name="star" size={14} color="#ca8a04"/>
                <text className="text-white text-sm">{food.rating}</text>
            </View>
            <Text className="text-black text-md font-semibold mt-1">{food.name}</Text>
            <View className="flex-row justify-between">
                <Text className="text-red-700 font-medium text-md">R$ {food.price}</Text>
                <Pressable className="bg-red-700 w-8 h-8 items-center justify-center rounded-full" >
                    <Ionicons name="add" size={20} color="#fff" onPress={() => console.log("Adicionou  no carrinho "+food.name)}/>  
                </Pressable>
            </View>
        </Link>
    );
}

