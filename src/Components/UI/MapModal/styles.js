import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        marginTop: 12,
        marginRight: 12,
    },
    modal: {
        paddingTop: 52,
        paddingBottom: 12,
        paddingHorizontal: 12,
        position: 'relative',
        flexDirection: 'column',
    },
    map: {
        height: '100%',
        position: 'relative',

    }
});

export default styles;