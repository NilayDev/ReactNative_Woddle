import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Responsive from '../../utils/Responsive'
import Colors from '../../utils/Colors'
import { AppFont } from '../../utils/Fonts'
import { LocalImages } from '../../utils/LocalImages'

export const CarouselItem = ({ item }: any) => {
    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.imageBg} />
            <View style={styles.blurContainer}>
                <View style={styles.titleBgContainer}>
                    <Text style={styles.titleContainer}>{item.name}</Text>
                    <Image source={LocalImages.arrow} style={styles.arrow} />
                </View>
                <Text style={styles.dateContainer}>{item.year}</Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: Responsive.hp(2),
    },
    imageBg: { width: Responsive.wp(92), height: Responsive.hp(22), resizeMode: "cover", borderRadius: Responsive.hp(2) },
    blurContainer: { height: Responsive.hp(6), backgroundColor: Colors.whiteBlur, left: Responsive.wp(4), top: Responsive.hp(2), borderRadius: Responsive.hp(2), position: "absolute" },
    titleBgContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: Responsive.wp(4), marginTop: Responsive.hp(0.9) },
    titleContainer: { color: Colors.darkBlack, ...AppFont.Cabin_14_700, marginRight: Responsive.wp(3) },
    arrow: { width: Responsive.hp(1.4), height: Responsive.hp(1.4), resizeMode: "contain" },
    dateContainer: { marginLeft: Responsive.wp(4), color: Colors.darkBlack, marginTop: Responsive.hp(0.5), ...AppFont.Cabin_14_400 },
})