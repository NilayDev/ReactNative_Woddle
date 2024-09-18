import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Responsive from '../../utils/Responsive'
import { LocalImages } from '../../utils/LocalImages'

export const Banner = () => {
    return (
        <View style={styles.container}>
            <Image source={LocalImages.banner} style={styles.imageContainer} />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: { height: Responsive.hp(9.3), marginHorizontal: Responsive.wp(4), marginTop: Responsive.hp(0.5), borderRadius: Responsive.hp(2) },
    imageContainer: { width: "100%", height: "100%", resizeMode: "contain" },
})