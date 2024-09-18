import { StyleSheet } from "react-native"
import Responsive from "./Responsive"

export const Fonts = {
    Cabin: "Cabin-Variable",
    Ribeye: "Ribeye-Regular",
    Roboto_Medium: "Roboto-Medium",
    Roboto_Regular: "Roboto-Regular",
    Roboto_Light: "Roboto-Light",
    Roboto_Thin: "Roboto-Thin"
}

export const AppFont = StyleSheet.create({
    Roboto_10_400: { fontSize: Responsive.hp(1.2), fontFamily: Fonts.Roboto_Regular, fontWeight: "400" },
    Roboto_12_400: { fontSize: Responsive.hp(1.3), fontFamily: Fonts.Roboto_Regular, fontWeight: "400" },
    Roboto_32_300: { fontSize: Responsive.hp(3.2), fontFamily: Fonts.Roboto_Light, fontWeight: "300" },
    Ribeye_40_400: { fontSize: Responsive.hp(4.2), fontFamily: Fonts.Ribeye, fontWeight: "400" },
    Cabin_14_700: { fontSize: Responsive.hp(1.6), fontFamily: Fonts.Cabin, fontWeight: "700" },
    Cabin_14_400: { fontSize: Responsive.hp(1.6), fontFamily: Fonts.Cabin, fontWeight: "400" },
})