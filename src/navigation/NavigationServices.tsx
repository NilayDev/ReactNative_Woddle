import { CommonActions } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
    _navigator = navigatorRef;
}

function navigateAndReset(name: any) {
    _navigator.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: name }],
        }),
    );
}

function navigateToNext(name: any, data: any) {
    _navigator.navigate(name, data);
}

function navigateGoBack() {
    _navigator.goBack();
}

function navigateToOpenDrawer() {
    _navigator.openDrawer();
}

function navigateToCloseDrawer() {
    _navigator.dispatch(DrawerActions.closeDrawer());
}

function navigateToToggleDrawer() {
    _navigator.dispatch(DrawerActions.toggleDrawer());
}

export default {
    setTopLevelNavigator,
    navigateAndReset,
    navigateToNext,
    navigateToOpenDrawer,
    navigateToCloseDrawer,
    navigateToToggleDrawer,
    navigateGoBack,
};
