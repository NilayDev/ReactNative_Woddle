
import React from 'react'
import Responsive from '../../utils/Responsive'
import { StyleSheet, View } from 'react-native'
import Category from '../Model/Category'
import { CategoryItem } from './CategoryItem'

export const CategoryView = ({ categoryList }: any) => {
    return (
        <View style={styles.container}>
            {
                categoryList.map((element: Category) => {
                    return (<CategoryItem item={element} />)
                })
            }
        </View>
    )
}


export const styles = StyleSheet.create({
    container: { marginHorizontal: Responsive.wp(4), marginTop: Responsive.hp(2), flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
})
