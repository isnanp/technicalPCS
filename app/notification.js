import { Stack } from "expo-router";
import { FlatList, Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import coins from "../assets/images/coins.png"
import meds from "../assets/images/meds.png"
import check from "../assets/images/check.png"
import decline from "../assets/images/decline.png"
import arrow from "../assets/images/arrow.png"

const data = [{
    title : "Reimbursement",
    image : coins,
    detail : "lorem ipsum dolor sit amet, consectetur adipiscing",
    status : check
}, {
    title : "Reimbursement",
    image : coins,
    detail : "lorem ipsum dolor sit amet, consectetur adipiscing",
    status : decline
}, {
    title : "Reimbursement",
    image : coins,
    detail : "lorem ipsum dolor sit amet, consectetur adipiscing",
    status : arrow
}, {
    title : "Reimbursement",
    image : meds,
    detail : "lorem ipsum dolor sit amet, consectetur adipiscing",
    status : check
}, {
    title : "Reimbursement",
    image : meds,
    detail : "lorem ipsum dolor sit amet, consectetur adipiscing",
    status : decline
}]


export default function Notification() {
    return (
        <View className="bg-white">
            <Stack.Screen 
            options={{
                headerTitle: () => <Text className="text-red-600 text-2xl font-semibold">Notification</Text>
            }}
            />
            <FlatList 
            ItemSeparatorComponent={<View></View>}
            data={data}
            renderItem={({item})=> (
                <TouchableOpacity className="p-5" >
                <View className="flex flex-row gap-3">
                    <View className="w-16 h-16 bg-red-800 rounded-md flex justify-center ">
                        <Image source={item.image} className="w-5/6 h-5/6 mx-auto" />
                        <Image source={item.status} className="absolute w-7 h-7 -bottom-1 -right-1" />
                    </View>
                    <View>
                        <Text className="font-semibold">{item.title}</Text>
                        <Text className="w-11/12">{item.detail}</Text>
                    </View>
                    <Text className="absolute top-0 right-0">Today</Text>
                </View>
            </TouchableOpacity>
            )}
            />
        </View>
    )
}