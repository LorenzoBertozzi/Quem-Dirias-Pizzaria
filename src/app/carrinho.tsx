import { View , ScrollView, Pressable, Text, Image} from "react-native";
import { Navegation } from "../components/header";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Carrinho(){
    return(
        <View className="flex-1">
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                <Navegation name="Carrinho"/>
                <View className="flex flex-row justify-between items-center px-4 py-4">
                    <View className="flex-row items-center justify-center">
                        <Image className="mx-2" style={{width:50, height:50}} source={require('../assets/images/Pizza.png')}/>
                        <View>
                            <Text className="text-mg font-bold ">Pepperoni</Text>
                            <Text className="text-mg font-bold ">R$ 23,00</Text>
                        </View>
                    </View>
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
                <hr className="mx-4"/>
                <View className="flex flex-row justify-between items-center px-4 py-4">
                    <View className="flex-row items-center justify-center">
                        <Image className="mx-2" style={{width:50, height:50}} source={require('../assets/images/Pizza.png')}/>
                        <View>
                            <Text className="text-mg font-bold ">Pepperoni</Text>
                            <Text className="text-mg font-bold ">R$ 23,00</Text>
                        </View>
                    </View>
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
                <hr className="mx-4"/>
                <View className="flex flex-row justify-between items-center px-4 py-4">
                    <View className="flex-row items-center justify-center">
                        <Image className="mx-2" style={{width:50, height:50}} source={require('../assets/images/Pizza.png')}/>
                        <View>
                            <Text className="text-mg font-bold ">Pepperoni</Text>
                            <Text className="text-mg font-bold ">R$ 23,00</Text>
                        </View>
                    </View>
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
                <hr className="mx-4"/>
                <View className="flex flex-row justify-between items-center px-4 py-4">
                    <View className="flex-row items-center justify-center">
                        <Image className="mx-2" style={{width:50, height:50}} source={require('../assets/images/Pizza.png')}/>
                        <View>
                            <Text className="text-mg font-bold ">Pepperoni</Text>
                            <Text className="text-mg font-bold ">R$ 23,00</Text>
                        </View>
                    </View>
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
                <hr className="mx-4"/>

            </ScrollView>
            <View className="absolute bottom-0 left-0 right-0 bg-white">
                <Pressable className=" h-14 bg-[#7D0A0A] rounded-full mx-4 my-4 justify-center items-center">
                    <Link href={'/mesas'}>
                        <Text className="font-semibold text-lg text-white">Finalizar Pedido</Text>
                    </Link>
                </Pressable>
            </View>
        </View>
    );
}