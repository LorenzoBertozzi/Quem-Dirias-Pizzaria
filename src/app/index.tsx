import { Image, Text, View , ScrollView} from "react-native";
import { Link } from "expo-router";
import Constants from 'expo-constants'

import {Header} from "../components/header"
import {Banner} from "../components/banner"
import {Search} from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { Footer } from "../components/footer";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{flex:1}} className="gb-slate-200" showsVerticalScrollIndicator={false}>
        <View className="w-full">
          <Header/>
        </View>
        <Section link={"/menu"} label="" name="Categorias" action={() => console.log("Clicou no Veja Mais")} size="text-lg"/>
        <Restaurants/>
        <Section  name="Sabores" link={"/menu"} label="Ver todos" action={() => console.log("Clicou no Veja Mais")} size="text-lg"/>
        <TrendingFoods/>
        <View>
          <Footer/>
        </View>
    </ScrollView>
  );
}

