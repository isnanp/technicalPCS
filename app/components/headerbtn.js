import { Image, StyleSheet, TouchableOpacity } from "react-native";


const HeaderBtn = ({ iconUrl, dimension, handlePress }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimension)}/>
        </TouchableOpacity>
    )
}

export default HeaderBtn

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 1.25,
  }),
});
