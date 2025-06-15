import { FlatList } from "react-native";
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

export function TrendingFoods(){
    const[foods, setFoods] = useState<FoodProps[]>([])
    useEffect(()=> {
        async function getFoods() {
            const response = await fetch("http://10.0.0.48:3000/foods")
            const data = await response.json()
            console.log(data);
            setFoods(data);
        }
        getFoods();
    }, [])
    return(
        <FlatList
            data={foods}
            renderItem={({item})=> <CardHorizontal food={item}/>}
            contentContainerStyle={{gap:14, paddingLeft:14, paddingRight:14}}
            numColumns={2}
        />
    );
}