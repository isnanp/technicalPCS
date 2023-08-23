import { Image, Text, View } from "react-native";
import account from "../../assets/images/60111.jpg"
import { FlatList } from "react-native-gesture-handler";

export default function Online() {
    return (
        <View style={{marginTop:-25, elevation:20, shadowColor:"black", marginBottom:100}}>
            <Text style={{fontSize:20, fontWeight:500,}}>Online</Text>
            <View className="shadow-md flex flex-row w-min mx-auto mt-2">
                
                <View className="flex w-14 items-center ">
                    <View className="w-min h-min rounded-full border-solid border-4 border-white">
                        <Image className="h-16 w-16 object-cover rounded-full border" source={account} />
                    </View>
                    <Text className="text-xs">Nama</Text>
                    <Text className="text-xs">Location</Text>
                </View>
                
                <View className="flex w-14 items-center ">
                    <View className="w-min h-min rounded-full border-solid border-4 border-white">
                        <Image className="h-16 w-16 object-cover rounded-full" source={account} />
                    </View>
                    <Text className="text-xs">Nama</Text>
                    <Text className="text-xs">Location</Text>
                </View>

                <View className="flex w-14 items-center ">
                    <View className="w-min h-min rounded-full border-solid border-4 border-white">
                        <Image className="h-16 w-16 object-cover rounded-full" source={account} />
                    </View>
                    <Text className="text-xs">Nama</Text>
                    <Text className="text-xs">Location</Text>
                </View>

                <View className="flex w-14 items-center ">
                    <View className="w-min h-min rounded-full border-solid border-4 border-white">
                        <Image className="h-16 w-16 object-cover rounded-full" source={account} />
                    </View>
                    <Text className="text-xs">Nama</Text>
                    <Text className="text-xs">Location</Text>
                </View>

                <View className="flex w-14 items-center z-10">
                    <View className="w-min h-min rounded-full border-solid border-4 border-white">
                        <Image className="h-16 w-16 object-cover rounded-full" source={account} />
                    </View>
                    <Text className="text-xs">Nama</Text>
                    <Text className="text-xs">Location</Text>
                </View>

                <View className="flex w-14 items-center z-0">
                    <View className="mt-2 w-16 h-16 rounded-full border-solid border-4 border-white bg-red-500">
                        <Text className="text-center my-auto font-semibold text-xl">10+</Text>
                    </View>
                </View>
                
            </View>
        </View>
        
    )
}