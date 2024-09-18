import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import { LocalImages } from '../../utils/LocalImages';
import { styles } from '../Style/Splash';
import SplashViewController from '../ViewController/Splash';

const Splash = ({ navigation }: any) => {
    const viewcontroller = SplashViewController()

    useEffect(() => {
        viewcontroller.navigateToNextScreen(navigation)
    }, [])

    return (
        <View style={styles.container}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={LocalImages.logo} style={styles.imageContainer} />
            </View>
        </View>
    )
}

export default Splash;

