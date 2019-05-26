import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    event: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 4,
    },
    eventButton: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 12,
        paddingVertical: 6,
        flexGrow: 1,
    },
    mapButton: {
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd257',
    },
    mapIcon: {
        margin: 0
    },
    header: {
        flexDirection: 'row'
    },
    footer: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 19,
        marginTop: 2,
        marginBottom: 8, 
    },
    start: {
        color: "#bbbbbb",
        flexGrow: 1,
        fontSize: 15
    },
    cName: {
        marginLeft: 12,
        paddingVertical: 2,
        paddingHorizontal: 6,
        backgroundColor: '#ffd06e',
        borderRadius: 3,
        fontSize: 14
    },
    likes: {
        fontSize: 14,
        marginRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dislikes: {
        fontSize: 14,
        flexDirection: 'row',
        alignItems: 'center',        
    },
    thumbIcon: {
        marginRight: 4,
    },
    disText: {
        color: "#b8554a"
    },
    likeText: {
        color: "#49bf78"
    }
});

export default styles;