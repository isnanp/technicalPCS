import { Image, Text, TouchableOpacity, View } from "react-native";
import home from "../../assets/images/home.png";
import date from "../../assets/images/date.png";
import logout from "../../assets/images/logout.png";
import form from "../../assets/images/form.png";
import setting from "../../assets/images/setting.png";

export default function Navigation() {
    return (
        <View className="absolute bottom-0 left-0 right-0">    
        <View className="shadow border-t-2 pt-2 pb-2" style={{elevation:30, shadowColor:"black"}}>
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <TouchableOpacity>
                <View style={{width:65, display:"flex", alignItems:"center"}}>
                    <Image source={home} className="h-8 w-8 object-cover " /> 
                    <Text className="text-xs">Home</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={{width:65, display:"flex", alignItems:"center"}}>
                    <Image source={date} className="h-8 w-8 object-cover " /> 
                    <Text className="text-xs">Attendance</Text>
                </View>
                </TouchableOpacity>

                <View className="text-xs flex align-middle">
                    <TouchableOpacity className=" absolute bottom-5">
                        <Image className="h-16 w-16 object-cover" source={logout} /> 
                    </TouchableOpacity>
                    <Text className="mt-7">Check Out</Text>
                </View>

                <TouchableOpacity>
                <View style={{width:65, display:"flex", alignItems:"center"}}>
                    <Image source={form} className="h-8 w-8 object-cover " /> 
                    <Text className="text-xs">Form</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={{width:65, display:"flex", alignItems:"center"}}>
                    <Image source={setting} className="h-8 w-8 object-cover " /> 
                    <Text className="text-xs">Setting</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}