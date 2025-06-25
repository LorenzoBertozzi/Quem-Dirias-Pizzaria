import { Image, Text, View , ScrollView, Dimensions} from "react-native";
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
const screenHeight = Dimensions.get('window').height;

export default function Index() {
  return (
    <View className="flex-1">
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <Header />
        <Section
          link={"/menu"}
          label=""
          name="Categorias"
          action={() => console.log("Clicou no Veja Mais")}
          size="text-lg"
        />
        <Restaurants />
        <Section
          name="Sabores"
          link={"/menu"}
          label="Ver todos"
          action={() => console.log("Clicou no Veja Mais")}
          size="text-lg"
        />
        <TrendingFoods />
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 bg-white">
        <Footer />
      </View>
    </View>
  );
}

