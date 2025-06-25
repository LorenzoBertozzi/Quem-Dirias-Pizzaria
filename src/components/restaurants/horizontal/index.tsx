import { View, Pressable, Text, Image } from "react-native";
import { RestaurantsProps } from "..";

export function RestaurantItems({item}: {item: RestaurantsProps}){
    return(
        <Pressable className="flex flex-col items-center justify-center" onPress={() => console.log("clicou no restaurante" + item.name)}>
            <View className="bg-slate-100 h-14 w-14 rounded-full justify-center items-center">
                <Image style={{height:30, width:30}} source={{uri: item.image}}/>
            </View>
            <Text className="text-xs font-semibold mt-2 w-20 text-center leading-4 text-black" numberOfLines={2}>{item.name}</Text>
        </Pressable>
    );
}