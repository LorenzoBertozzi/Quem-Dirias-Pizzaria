import { View , Text, Pressable, Image, ScrollView, FlatList} from "react-native";
import { Choose } from "../components/header";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function chooseDetail(){
    return(
        <ScrollView>
            <Choose/>
            <View className="flex flex-row justify-between items-center px-4 py-4">
                <Text className="text-lg font-bold ">Pepperoni</Text>
                <View className="flex flex-row items-center">
                    <Pressable className="bg-[#F1F1F5] h-8 w-8 rounded-full justify-center items-center">
                        <Ionicons name="remove-outline" size={20} color={"#979899"}/>
                    </Pressable>
                    <Text className="font-bold px-2 " > 1 </Text>
                    <Pressable className="bg-[#7D0A0A] h-8 w-8 rounded-full justify-center items-center">
                        <Ionicons name="add" size={20} color={"#fff"}/>
                    </Pressable>
                </View>
            </View>
            <View className="px-4">
                <Text className="color-[#FF5E5E] text-lg font-semibold">R$ 23,00</Text>
                <Text className="color-slate-400 text-sm text-justify font-semibold mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tempora sed voluptates assumenda ut, error vero corrupti in delectus esse rerum asperiores dignissimos illum officiis nulla. Cum deserunt voluptatibus modi?
                </Text>
                <View className="flex-row flex-wrap justify-center gap-2 my-4">
                    <View className="flex-row justify-center border rounded-2xl border-slate-400 items-center w-40 ">
                        <Image source={require('../assets/images/Group 36850.png')}/>
                        <View className="px-2 py-2">
                            <Text className="color-[#FF5E5E] text-lg font-semibold">100%</Text>
                            <Text className="color-slate-400 text-sm text-justify font-semibold">Organica</Text>
                        </View>
                    </View>
                    <View className="flex flex-row justify-center  border rounded-2xl border-slate-400 items-center w-40 ">
                        <Image source={require('../assets/images/Group 36850 (1).png')}/>
                        <View className="px-2 py-2">
                            <Text className="color-[#FF5E5E] text-lg font-semibold">40 min</Text>
                            <Text className="color-slate-400 text-sm text-justify font-semibold">Preparo</Text>
                        </View>
                    </View>
                    <View className="flex flex-row justify-center  border rounded-2xl border-slate-400 items-center w-40 ">
                        <Image source={require('../assets/images/favourites.png')}/>
                        <View className="px-2 py-2">
                            <Text className="color-[#FF5E5E] text-lg font-semibold">4.8</Text>
                            <Text className="color-slate-400 text-sm text-justify font-semibold">Avaliação</Text>
                        </View>
                    </View>
                    <View className="flex flex-row justify-center  border rounded-2xl border-slate-400 items-center w-40 ">
                        <Image source={require('../assets/images/matches 1.png')}/>
                        <View className="px-2 py-1">
                            <Text className="color-[#FF5E5E] text-lg font-semibold">480 Kcal</Text>
                            <Text className="color-slate-400 text-sm text-justify font-semibold">350 Kg</Text>
                        </View>
                    </View>
                </View>
                <View  className="bg-red-900 w-full justify-center items-center h-14 rounded-full">
                    <Link href={'/carrinho'} onPress={() => console.log('Adcionado no carrinho')}>
                        <Text className="font-bold color-white">Adicionar no Carrinho</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>        
    );
}