import { View, Pressable, Text, ScrollView } from "react-native";
import { Navegation } from "../components/header";
import { TrendingFoods } from "../components/trending";

export default function Menu(){
    return(
        <ScrollView style={{flex:1}} className="gb-slate-200" showsVerticalScrollIndicator={false}>
            <View>
                <Navegation name="Cardapio"/>
                <TrendingFoods/>
            </View>
        </ScrollView>
    );
}