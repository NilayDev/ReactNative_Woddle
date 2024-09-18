import { StyleSheet } from "react-native";
import Responsive from "../../utils/Responsive";
import Colors from "../../utils/Colors";

export const styles = StyleSheet.create({
    imageContainer: {
        width: Responsive.wp(72),
        height: Responsive.wp(16),
        resizeMode: "contain"
    },
    container: { backgroundColor: Colors.white, alignItems: "center", justifyContent: "center", flex: 1 },
})