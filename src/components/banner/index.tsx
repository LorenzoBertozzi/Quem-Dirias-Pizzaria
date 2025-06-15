import { Image, Pressable, Text, View } from 'react-native';
import PagerView from "react-native-pager-view";

export function Banner(){
    return(
        <View className='w-full h-36 rounded-2xl mt-5 mb-4'>
            <PagerView style={{flex:1}} initialPage={0} pageMargin={14}>
                <Pressable className='w-full h-36 md:h-60 rounded-2xl' key={1} onPress={() => console.log("clicou no banner1")}>
                    <Image source={require("../../assets/images/banner.png")} className='md:h-60 w-full h-35 rounded-2xl'/>
                </Pressable>
                <Pressable className='w-full h-36 md:h-60 rounded-2xl' key={2} onPress={() => console.log("clicou no banner1")}>
                    <Image source={require("../../assets/images/banner1.png")} className='md:h-60 w-full h-35 rounded-2xl'/>
                </Pressable>
            </PagerView>
            <Text></Text>
        </View>
    );
}