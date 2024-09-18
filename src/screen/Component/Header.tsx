import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Responsive from '../../utils/Responsive'
import { AppFont } from '../../utils/Fonts'
import { LocalImages } from '../../utils/LocalImages'
import Colors from '../../utils/Colors'
import Strings from '../../utils/Strings'

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>{Strings.Logo}</Text>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.inboxContainer}>
                    <Image source={LocalImages.inbox} style={styles.inboxImage} />
                    <View style={styles.notificationDot} />
                </TouchableOpacity>
                <Image source={LocalImages.profile} style={styles.profileContainer} />
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: { marginHorizontal: Responsive.wp(4), marginTop: Responsive.hp(1), flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    textContainer: { color: Colors.black, ...AppFont.Ribeye_40_400 },
    inboxContainer: { height: Responsive.hp(3.6), width: Responsive.hp(3.6), justifyContent: "center", alignItems: "center" },
    inboxImage: {
        width: Responsive.hp(3.2), height: Responsive.hp(3.2),
        resizeMode: "contain",
    },
    notificationDot: { position: "absolute", backgroundColor: Colors.red, width: Responsive.hp(1.0), height: Responsive.hp(1.0), right: Responsive.wp(0.5), top: Responsive.hp(0.5), borderRadius: Responsive.hp(1) },
    profileContainer: {
        width: Responsive.hp(3.6), height: Responsive.hp(3.6),
        resizeMode: "contain", marginLeft: Responsive.wp(2), borderRadius: Responsive.wp(4)
    },
})