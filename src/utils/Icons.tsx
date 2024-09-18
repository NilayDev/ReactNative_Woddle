import { View } from "react-native";
import Octicons from 'react-native-vector-icons/Octicons';

export const home = ({ size, color }: any) => (
    <View>
        <Octicons name={"home"} size={size} color={color} />
    </View>
);