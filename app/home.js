import { Stack, useRouter } from "expo-router"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import images from "../assets/images/notification.png"
import HeaderBtn from "./components/headerbtn"
import Profile from "./components/profile"
import Activity from "./components/activity"
import News from "./components/news"
import Online from "./components/online"
import Navigation from "./components/navigation"

const Home = () => {
    const router = useRouter()
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
            <ScrollView>
            <Stack.Screen 
            options={{
                headerStyle : { backgroundColor: "white"},
                headerShadowVisible : false,
                headerLeft : () => (
                    <Text style={{fontSize:23, fontWeight:"800", color:"#fa3216"}}>KerjaYuk!</Text>
                ),
                headerRight : () => (
                    <HeaderBtn handlePress={()=> router.push("notification")} iconUrl={images} dimension='60%' />
                ),
                headerTitle: ""
            }}
            />

            <View style={{paddingHorizontal:17}}>
                <Text style={{fontSize:16}}>Hi, Good Morning!</Text>
                <Profile />
                <Activity />
                <News />
                <Online />
            </View>
            </ScrollView>
            <Navigation />
        </SafeAreaView>
    )
}


export default Home