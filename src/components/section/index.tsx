import { Href, Link } from 'expo-router';
import {Pressable, View, Text} from 'react-native'

interface Props{
    name: string;
    size: "text-lg" | "text-x1" | "text-2xl";
    link : Href;
    label : string;
    action: () => void;
}

export function Section({name, size, link, label, action}: Props){
    if(label!= null || link != null){
        return(
        <View className='w-full flex flex-row items-center justify-between px-4'>
            <Text className={`${size} font-semibold my-4 self-start `}>
                {name}
            </Text>
            <Link href={link}><Text className='color-red-600 font-semibold'>{label}</Text></Link>
        </View>
        );
    }
    else{
        return(
            <View className='w-full flex flex-row items-center justify-between px-4'>
                <Text className={`${size} font-semibold my-4 self-start `}>
                    {name}
                </Text>
            </View>
        );
    }; 
}