import { View, Pressable, Text, Image } from "react-native";
import {FoodProps} from '..'
import {Ionicons} from '@expo/vector-icons'
import { Link } from "expo-router";

export function CardHorizontal({food}: {food: FoodProps}){
    return(
        <Link href={"/choose-detail"}  className="flex flex-col rounded-xl bg-slate-100 p-1 mr-3" onPress={() => console.log("clicou no card")}>
            <Image source={{uri:food.image}} className="w-40 h-40 rounded-xl"/>
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

