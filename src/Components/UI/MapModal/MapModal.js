import React, {
    Component
} from 'react'
import { Modal, Text, TouchableHighlight } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

class MapModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            place: null
        }
    }

    closeModal = () => {
        this.setState({
            modalVisible: false,
            place: null
        })
    }

    showMap = (place) => {
        console.log(place)
        this.setState({
            modalVisible: true,
            place: place
        })
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.mapToShow) this.showMap(nextProps.mapToShow)
    };


    render() {
        const { mark } = this.props
        return (
            <Modal
                style={styles.modal}
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
                <TouchableHighlight
                    onPress={() => {
                        this.closeModal();
                    }}
                    style={styles.closeButton}
                >
                    <Icon
                        name="times"
                        size={28}
                        color="#222222"
                    />
                </TouchableHighlight>
            </Modal>
        )
    }
}

export default MapModal