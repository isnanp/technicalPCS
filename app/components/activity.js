import { Image, Text, View } from "react-native";
import clock from "../../assets/images/clock.png"
import clock2 from "../../assets/images/wall-clock.png"

export default function Activity() {
    return (
        <View style={{marginTop:20}}>
            <Text style={{fontSize:20, fontWeight:500}}>Today's activity</Text>
            <View style={{marginVertical:15, display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <View className="items-center">
                    <Image source={clock} resizeMode="cover" style={{width:40, height:40, marginBottom:10}} />
                    <Text style={{textAlign:"center", fontWeight:"600",fontSize:20}}>08:30</Text>
                    <Text style={{textAlign:"center"}}>Check In</Text>
                </View>
                <View  style={{display:"flex", alignItems:"center"}}>
                    <Image source={clock2} resizeMode="cover" style={{width:40, height:40, marginBottom:10}} />
                    <Text style={{textAlign:"center", fontWeight:"600",fontSize:20, color:"orangered"}}>08:30:00</Text>
                    <Text style={{textAlign:"center"}}>Working Hours</Text>
                </View>
                <View className="items-center">
                    <Image source={clock} resizeMode="cover" style={{width:40, height:40, marginBottom:10}} />
                    <Text style={{textAlign:"center", fontWeight:"600",fontSize:20}}>--:--</Text>
                    <Text style={{textAlign:"center"}}>Check Out</Text>
                </View>
            </View>
        </View>
    )
}