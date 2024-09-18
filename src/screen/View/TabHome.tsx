import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Responsive from '../../utils/Responsive';
import TabHomeViewController from '../ViewController/TabHome';
import Category from '../Model/Category';
import { LocalImages } from '../../utils/LocalImages';
import { AppFont } from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import Carousel from 'react-native-reanimated-carousel';
import { Header } from '../Component/Header';
import { CarouselList } from '../Component/CarouselList';
import { CategoryView } from '../Component/CategoryView';
import { Banner } from '../Component/Banner';
import { InformationView } from '../Component/InformationView';
import { styles } from '../Style/TabHome';
import { PageControlAleppo } from 'react-native-chi-page-control';


const TabHome = () => {
    const tabHomeViewController = TabHomeViewController()

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <CarouselList sliderList={tabHomeViewController.slideList()} />
                <CategoryView categoryList={tabHomeViewController.categoryList()} />
                <Banner />
                <InformationView />
            </ScrollView>
        </SafeAreaView >
    )
}

export default TabHome;
