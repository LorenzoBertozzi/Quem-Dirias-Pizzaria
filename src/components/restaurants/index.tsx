import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { RestaurantItems} from './horizontal'

export interface RestaurantsProps{
    if:string;
    name:string;
    image:string;
}

export function Restaurants(){
    const[restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(()=> {
        async function getFoods() {
            const response = await fetch("http://200.18.136.189:3000/restaurants")
            const data = await response.json()
            console.log(data);
            setRestaurants(data);
        }
        getFoods();
    }, [])
    return(
        <FlatList
            data={restaurants}
            renderItem={({item})=> <RestaurantItems item={item}/>}
            horizontal={true}
            contentContainerStyle={{gap:14, paddingLeft:14, paddingRight:14}}
            showsHorizontalScrollIndicator = {false}
        />
    );
}