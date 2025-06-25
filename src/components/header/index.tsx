import { Feather, Ionicons } from '@expo/vector-icons';
import { Image, Pressable, Text, View , TextInput} from 'react-native';
import { Link } from 'expo-router';

export function Header(){
    return(
        <View className='flex flex-row items-center justify-center '>
            <View className='py-4 px-20 rounded-b-full bg-slate-100 w-full'>
                <View className='flex-row items-center justify-center'>
                    <Link href={'/mesas'}>
                        <Image className="w-10 h-10 flex justify-center items-center" source={ require('../../assets/images/teste3.png')}/>
                    </Link>
                </View>
                <View className="px-11 my-2 w-full flex-row border border-transparent h-10 rounded-full items-center bg-white">
                        <Feather name="search" size={16} color="#BF3131"/>
                        <TextInput placeholder="Buscar Sabores" className=" h-full w-full flex-1 bg-transparent color-slate-500"/>
                </View>
            </View>
        </View>
    );
}

interface NavProps{
    name: string;
}

export function Navegation({name}: NavProps){
    return(
        <View className='flex-row flex justify-between items-center py-4 px-4'>
            <Pressable>
                <Link href={"/"}>
                    <Ionicons name='arrow-back' size={20} color={"#06161C"}/>
                </Link>
            </Pressable>
            <Text className='font-semibold text-lg color-[#06161C]'>
                {name}
            </Text>
            <Pressable>
                <Ionicons name='search' size={20} color={"#06161C"}/>
            </Pressable>
        </View>
    );
}

export function Choose(){
    return(
        <View className='bg-slate-100 rounded-b-full'>
            <View className='flex-row flex justify-between items-center px-4 py-4'>                
                <Pressable className='bg-white h-10 w-10 justify-center items-center rounded-full'>
                    <Link href={'/'}>
                        <Feather  name='arrow-left' size={20} color={"#06161C"}/>
                    </Link>
                </Pressable>
                <Pressable  className='bg-white h-10 w-10 justify-center items-center rounded-full'>
                    <Ionicons name='search' size={20} color={"#06161C"}/>
                </Pressable>
            </View>
            <View className='justify-center items-center mb-10'>
                <Image source={require('../../assets/images/Pizza.png')}/>
            </View>
        </View>
    );
}