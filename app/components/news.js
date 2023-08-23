import { ActivityIndicator, BackHandler, Dimensions, FlatList, Image, Text, View } from "react-native";
import account from "../../assets/images/60111.jpg"
import Carousel from "react-native-reanimated-carousel";
import Index from "..";

const data = [{
    name : "Ana Riswati",
    message : ` kailimat 1 - lorem ipsum dolor sit amet consec \n kalimat 2 - lorem ipsum dolor sit amet consec \n kalimat 3 - lorem ipsum dolor sit amet consec \n kalimat 4 - lorem ipsum dolor sit amet consec`
}, {
    name : "Ana Riswati",
    message : ` kailimat 1 - lorem ipsum dolor sit amet consec \n kalimat 2 - lorem ipsum dolor sit amet consec \n kalimat 3 - lorem ipsum dolor sit amet consec \n kalimat 4 - lorem ipsum dolor sit amet consec`
}, {
    name : "Ana Riswati",
    message : ` kailimat 1 - lorem ipsum dolor sit amet consec \n kalimat 2 - lorem ipsum dolor sit amet consec \n kalimat 3 - lorem ipsum dolor sit amet consec \n kalimat 4 - lorem ipsum dolor sit amet consec`
}, {
    name : "Ana Riswati",
    message : ` kailimat 1 - lorem ipsum dolor sit amet consec \n kalimat 2 - lorem ipsum dolor sit amet consec \n kalimat 3 - lorem ipsum dolor sit amet consec \n kalimat 4 - lorem ipsum dolor sit amet consec`
}, ]

export default function News() {
    const width = Dimensions.get('screen').width
    return (
        <View>
            <Text style={{fontSize:20, fontWeight:500}}>PCS News</Text>
            <Carousel 
            mode="parallax" 
            pagingEnabled
            
            snapEnabled={true}            
            width={width*0.9}
            height={width/2}
            data={data}
            renderItem={({item}) => (
                <View style={{elevation:20, shadowColor:"black", marginTop:-10}} >
                    <View className="p-4 rounded-lg shadow-sm">
                        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginBottom:10}}>
                            <View style={{display:"flex", flexDirection:"row", }}> 
                                <Image className="h-10 w-10 rounded-full col" source={account} />
                                <Text style={{marginStart:10, fontSize:18, marginTop:7, fontWeight:600, color:"orangered"}}>{item.name}</Text>
                            </View>
                            <View>
                                <Text style={{textAlign:"right"}}>Senin</Text>
                                <Text>30 mei 2022</Text>
                            </View>
                        </View>
                            <Text className="mx-auto text-sm">
                                {item.message}
                            </Text>
                    </View>
                </View>
            )}
            />
            
        </View>
    )
}