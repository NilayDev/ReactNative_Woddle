import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { LocalImages } from '../../utils/LocalImages'
import Responsive from '../../utils/Responsive'
import Colors from '../../utils/Colors'
import { AppFont } from '../../utils/Fonts'
import Strings from '../../utils/Strings'

export const InformationView = () => {
    return (
        <View style={styles.container}>
            <Image source={LocalImages.mileStone} style={styles.imageContainer} />
            <View style={styles.bottomContainer}>
                <Text style={styles.titleContainer}>{Strings.Milestones}</Text>
                <View style={styles.textBgContainer}>
                    <Text style={styles.textContainer}>{Strings.Month12}</Text>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Image source={LocalImages.nextArrow} style={styles.iconImageContainer} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: { height: Responsive.hp(26), marginHorizontal: Responsive.wp(4), marginTop: Responsive.hp(2), borderRadius: Responsive.hp(2), marginBottom: Responsive.hp(9), borderColor: Colors.black, borderWidth: 1 },
    imageContainer: { width: "100%", height: Responsive.hp(15), resizeMode: "cover", borderTopLeftRadius: Responsive.hp(2), borderTopRightRadius: Responsive.hp(2) },
    bottomContainer: { flex: 1, borderBottomLeftRadius: Responsive.hp(2), borderBottomRightRadius: Responsive.hp(2) },
    titleContainer: { marginLeft: Responsive.wp(5), color: Colors.black, marginTop: Responsive.hp(2), ...AppFont.Roboto_12_400 },
    textBgContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: Responsive.wp(5) },
    textContainer: { color: Colors.black, marginTop: Responsive.hp(1), ...AppFont.Roboto_32_300 },
    iconContainer: { height: Responsive.hp(3.6), width: Responsive.hp(3.6), justifyContent: "center", alignItems: "center" },
    iconImageContainer: { width: Responsive.hp(3.4), height: Responsive.hp(3.4), resizeMode: "contain" },
})