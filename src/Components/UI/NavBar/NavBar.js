import React, {
    Component
} from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';


class NavBar extends Component {

    constructor(props) {
        super(props)
    }
    
    openList = () => {
        this.props.router.replace.List()
    }
    
    openAddition = () => {
        this.props.router.replace.Addition()
        
    }

    render() {
        return ( 
            <View style={styles.NavBar}>
                <TouchableOpacity onPress={()=>this.openList()}>
                    <View style={styles.MenuButton}>
                        <Icon name="list" size={24} color="#ffffff" /> 
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.openAddition()}>
                    <View style={styles.MenuButton}>
                        <Icon name="plus" size={24} color="#ffffff" /> 
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.MenuButton}>
                        <Icon name="user" size={24} color="#ffffff" /> 
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NavBar