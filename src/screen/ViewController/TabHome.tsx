import TabHomeViewModel from "../ViewModel/TabHome"

export default function TabHomeViewController() {
    const tabHomeViewModel = TabHomeViewModel()

    const categoryList = () => {
        return tabHomeViewModel.arrData()
    }

    const slideList = () => {
        return tabHomeViewModel.slideData()
    }

    return {
        categoryList,
        slideList
    }
}