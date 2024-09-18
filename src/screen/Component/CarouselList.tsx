import React, { useState } from 'react'
import Carousel from 'react-native-reanimated-carousel'
import Responsive from '../../utils/Responsive'
import { StyleSheet, View } from 'react-native'
import { CarouselItem } from './CarouselItem'
import Colors from '../../utils/Colors'
import SliderModel from '../Model/SliderModel'

export const CarouselList = ({ sliderList }: any) => {
    const width = Responsive.wp(92)

    const [current, setCurrent] = useState(0)
    return (
        <View style={styles.container}>
            <Carousel
                loop={false}
                width={width}
                height={Responsive.hp(22)}
                autoPlay={false}
                data={sliderList}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => {
                    setCurrent(index)
                }}
                renderItem={({ item, index }) => (
                    <CarouselItem item={item} index={index} />
                )}
            />
            <View style={styles.pageContainer}>
                {sliderList.map((element: SliderModel, index: any) => {
                    return (
                        <View style={{ ...styles.PageInContainer, backgroundColor: (current == index) ? Colors.black : Colors.trasparent }} />
                    )
                })}
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: { height: Responsive.hp(22), marginHorizontal: Responsive.wp(4), marginTop: Responsive.hp(2), borderRadius: Responsive.hp(2) },
    pageContainer: { bottom: 10, marginHorizontal: Responsive.hp(2), alignItems: "center", flexDirection: "row", justifyContent: "center" },
    PageInContainer: { height: Responsive.hp(1.2), width: Responsive.hp(1.2), marginRight: Responsive.hp(0.5), borderWidth: Responsive.wp(0.3), borderRadius: Responsive.hp(1) }
})