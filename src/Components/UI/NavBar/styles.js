import {
    StyleSheet
} from 'react-native';

const menuColor = '#666666'

const styles = StyleSheet.create({
    NavBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        
        width: '100%',

        backgroundColor: '#ffd06e',
    },
    NavBarOpened: {
        left: 0,
    },
    NavBarClosed: {
        left: -200,
    },
    MenuButton: {
        marginVertical: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: 24,
    },
    MenuButtonText: {
        color: '#ffffff',
        fontSize: 16
    },
    ToggleMenu: {
        alignSelf: 'flex-start',
        backgroundColor: menuColor,
        paddingVertical: 12,
        paddingHorizontal: 9
    },
    ToggleMenuImage: {
        height: 16,
        width: 28
    },
});

export default styles;