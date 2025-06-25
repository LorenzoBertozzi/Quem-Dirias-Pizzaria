import { View , Image, Text, ScrollView, Pressable} from "react-native";
import { Header, Navegation } from "../components/header";
import { Link } from "expo-router";

export default function Mesas(){
    return(
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <Navegation name="Mesas"/>
            <View className="flex-row flex-wrap justify-center gap-2 my-4">
                <Link href={'/'}>
                    <Pressable className="w-40 h-40 rounded-2xl bg-slate-100 justify-center items-center ">
                        <Image source={require('./../assets/images/14960251 1.png')}/>
                        <Text className="font-semibold">Mesa 01</Text>  
                    </Pressable>
                </Link>
                <Link href={'/'}>
                    <Pressable className="w-40 h-40 rounded-2xl bg-slate-100 justify-center items-center ">
                        <Image source={require('./../assets/images/14960251 1.png')}/>
                        <Text className="font-semibold">Mesa 02</Text>  
                    </Pressable>
                </Link>
                <Link href={'/'}>
                    <Pressable className="w-40 h-40 rounded-2xl bg-slate-100 justify-center items-center ">
                        <Image source={require('./../assets/images/14960251 1.png')}/>
                        <Text className="font-semibold">Mesa 03</Text>  
                    </Pressable>
                </Link>
                <Link href={'/'}>
                    <Pressable className="w-40 h-40 rounded-2xl bg-slate-100 justify-center items-center ">
                        <Image source={require('./../assets/images/14960251 1.png')}/>
                        <Text className="font-semibold">Mesa 04</Text>  
                    </Pressable>
                </Link>
                <Link href={'/'}>
                    <Pressable className="w-40 h-40 rounded-2xl bg-slate-100 justify-center items-center ">
                        <Image source={require('./../assets/images/14960251 1.png')}/>
                        <Text className="font-semibold">Mesa 05</Text>  
                    </Pressable>
                </Link>
                <Link href={'/'}>
                    <Pressable className="w-40 h-40 rounded-2xl bg-slate-100 justify-center items-center ">
                        <Image source={require('./../assets/images/14960251 1.png')}/>
                        <Text className="font-semibold">Mesa 06</Text>  
                    </Pressable>
                </Link>
                <Link href={'/'}>
                    <Pressable className="w-40 h-40 rounded-2xl bg-slate-100 justify-center items-center ">
                        <Image source={require('./../assets/images/14960251 1.png')}/>
                        <Text className="font-semibold">Mesa 07</Text>  
                    </Pressable>
                </Link>
                <Link href={'/'}>
                    <Pressable className="w-40 h-40 rounded-2xl bg-slate-100 justify-center items-center ">
                        <Image source={require('./../assets/images/14960251 1.png')}/>
                        <Text className="font-semibold">Mesa 08</Text>  
                    </Pressable>
                </Link>
            </View>
        </ScrollView>       
    );
}