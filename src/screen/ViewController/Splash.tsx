import Routes from "../../navigation/Routes"

export default function SplashViewController() {

    const navigateToNextScreen = (navigation: any) => {
        setTimeout(() => {
            navigation.navigate(Routes.BottomNavigation)
        }, 3000);
    }

    return {
        navigateToNextScreen,
    }
}