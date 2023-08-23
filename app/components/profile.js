import { Image, Text, View } from "react-native";
import profileimg from "../../assets/images/60111.jpg"

export default function Profile() {
    return (
        <View style={{backgroundColor:"orangered", width:"100%", height:150, borderRadius:20, padding:20, marginTop:16, elevation:20, shadowColor:"black"}}>
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <View style={{display:"flex", flexDirection:"row"}}>
                    <Image source={profileimg} resizeMode='cover' style={{height:50, width:50, borderRadius:100, marginEnd:10}} />
                    <View>
                        <Text style={{fontSize:18, color:"white", fontWeight:700}}>Tabay</Text>
                        <Text style={{color:"white", fontStyle:"italic"}}>UI/UX Desainer</Text>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{color:"white", fontStyle:"italic", marginStart:15}}>Member since</Text>
                    <Text style={{color:"white", fontSize:18, fontWeight:700}}>01 Juni 2021</Text>
                </View>
            </View>
            <View style={{marginTop:15, display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <View>
                    <Text style={{color:"white"}}>Location</Text>
                    <Text style={{color:"white", fontSize:18, fontWeight:"700"}}>Kantor Sahid</Text>
                </View>
                <Text style={{color:"white", marginTop:25}}>ICO</Text>
            </View>
        </View>
    )
}