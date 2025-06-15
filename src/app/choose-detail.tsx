import { View , Text, Pressable, Image, ScrollView} from "react-native";
import { Choose } from "../components/header";
import { Ionicons, Feather } from "@expo/vector-icons";

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
                <Text className="color-[#F1F1F5] text-sm text-justify font-semibold mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tempora sed voluptates assumenda ut, error vero corrupti in delectus esse rerum asperiores dignissimos illum officiis nulla. Cum deserunt voluptatibus modi?
                </Text>
                <View className="flex flex-row border items-center w-1/2 ">
                    <Image source={require('../assets/images/Group 36850.png')}/>
                    <View>
                        <Text className="color-[#FF5E5E] text-lg font-semibold">100%</Text>
                        <Text className="color-[#F1F1F5] text-sm text-justify font-semibold mt-2">Organica</Text>
                    </View>
                </View>
                <View className="flex flex-row border items-center w-1/2 ">
                    <Image source={require('../assets/images/Group 36850 (1).png')}/>
                    <View>
                        <Text className="color-[#FF5E5E] text-lg font-semibold">40 min</Text>
                        <Text className="color-[#F1F1F5] text-sm text-justify font-semibold mt-2">Preparo</Text>
                    </View>
                </View>
                <View className="flex flex-row border items-center w-1/2 ">
                    <Image source={require('../assets/images/favourites.png')}/>
                    <View>
                        <Text className="color-[#FF5E5E] text-lg font-semibold">4.8</Text>
                        <Text className="color-[#F1F1F5] text-sm text-justify font-semibold mt-2">Avaliação</Text>
                    </View>
                </View>
                <View className="flex flex-row border items-center w-1/2 ">
                    <Image source={require('../assets/images/matches 1.png')}/>
                    <View>
                        <Text className="color-[#FF5E5E] text-lg font-semibold">480 Kcal</Text>
                        <Text className="color-[#F1F1F5] text-sm text-justify font-semibold mt-2">350 Kg</Text>
                    </View>
                </View>
                <Pressable className="bg-red-900 w-full justify-center items-center h-14 rounded-full" onPress={() => console.log('Adcionado no carrinho')}>
                    <Text className="font-bold color-white">Adicionar no Carrinho</Text>
                </Pressable>
            </View>
        </ScrollView>        
    );
}