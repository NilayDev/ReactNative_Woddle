import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Responsive from '../../utils/Responsive'
import Colors from '../../utils/Colors'
import { AppFont } from '../../utils/Fonts'

export const CategoryItem = ({ item }: any) => {
    return (
        <View style={{ ...styles.container, backgroundColor: item.color }}>
            <Text style={styles.typeTextContainer}>{item.type}</Text>
            <Text style={styles.titleContainer}>{item.title}</Text>
            <Text style={styles.dateContainer}>{item.desc}</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: { width: "47%", height: Responsive.hp(18), marginBottom: Responsive.hp(2), borderRadius: Responsive.hp(2) },
    typeTextContainer: { marginLeft: Responsive.wp(5), color: Colors.black, marginTop: Responsive.hp(2), ...AppFont.Roboto_12_400 },
    titleContainer: { marginLeft: Responsive.wp(5), color: Colors.black, marginTop: Responsive.hp(1), ...AppFont.Roboto_32_300 },
    dateContainer: { position: "absolute", left: Responsive.wp(5), bottom: Responsive.hp(2), color: Colors.subTitleGrey, ...AppFont.Roboto_10_400 },
})
