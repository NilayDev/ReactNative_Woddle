import { LocalImages } from "../../utils/LocalImages";
import Category from "../Model/Category"
import SliderModel from "../Model/SliderModel";

export default function TabHomeViewModel() {

    const arrData = (): Category[] => {
        return [
            {
                type: "Weight",
                title: "15 lbs\n3 oz",
                desc: "1:00 PM Dec 05 2023",
                color: "#FFF5DC"
            },
            {
                type: "Diaper",
                title: "Pee\nMedium",
                desc: "2h 55m ago",
                color: "#EFF1FF"
            },
            {
                type: "Feeding",
                title: "Formula\n5oz",
                desc: "2h 30m ago",
                color: "#FFEEE7"
            },
            {
                type: "Sleep",
                title: "2h 20m",
                desc: "3h 35m ago",
                color: "#F8EEFF"
            }
        ];
    };

    const slideData = (): SliderModel[] => {
        return [
            {
                image: LocalImages.slide1,
                name: "Christian Bowen",
                year: "1y 2m",
            },
            {
                image: LocalImages.slide2,
                name: "James Marley",
                year: "0y 9m",
            },

        ];
    };

    return {
        arrData,
        slideData
    }
}