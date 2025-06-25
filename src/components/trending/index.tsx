import { FlatList, View , Dimensions} from "react-native";
import { useEffect, useState } from "react";
import { CardHorizontal } from "./food";

export interface FoodProps{
    id:string;
    name:string;
    price: number;
    time:string;
    delivery:number;
    rating:number;
    image:string;
    restaurantId: string;
}

const screenWidth = Dimensions.get('window').width;
const cardWidth = 14; // ou a largura do seu CardHorizontal
const spacing = 14;
const totalSpace = spacing * 2;

export function TrendingFoods(){
    const[foods, setFoods] = useState<FoodProps[]>([])
    useEffect(()=> {
        async function getFoods() {
            const response = await fetch("http://200.18.136.189:3000/foods")
            const data = await response.json()
            console.log(data);
            setFoods(data);
        }
        getFoods();
    }, [])
    return(
        <View className="flex-row flex-wrap justify-center">
            {foods.map((item, index) => (
                <CardHorizontal key={index} food={item}/>
            ))}
        </View>
    );
}