import React, { Component } from 'react'
import { Text, View, TouchableOpacity} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

export class ListItem extends Component {

    reformatDate = (timestamt) => {
        const 
            date = new Date(parseInt(timestamt)),
            day = `${date.getDate()}`.length > 1 ? date.getDate() : '0' + date.getDate(),
            month = `${date.getMonth()}`.length > 1 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
            year = date.getFullYear(),
            hours = date.getHours(),
            minutes = date.getMinutes()
        console.log(date)
        return `${day}.${month}.${year} в ${hours}:${minutes}`
    }

    render() {
        const { event } = this.props

        return (
            <View style={styles.event}>
                <TouchableOpacity style={styles.eventButton}>
                    <View style={styles.header}>
                        <Text style={styles.start}>{this.reformatDate(event.start)}</Text>
                        <Text style={styles.cName}>{event.cName}</Text>
                    </View>
                    <Text style={styles.name}>{event.name}</Text>
                    <View style={styles.footer}>
                        <View style={styles.likes}>
                            <Icon 
                                name="thumbs-up" 
                                size={14} 
                                color="#49bf78" 
                                style={styles.thumbIcon}
                                /> 
                            <Text style={styles.likeText}>
                                {event.likes}
                            </Text>
                        </View>
                        <View style={styles.dislikes}>
                            <Icon 
                                name="thumbs-down" 
                                size={14} 
                                color="#b8554a" 
                                style={styles.thumbIcon}
                                /> 
                            <Text style={styles.disText}>
                                {event.dislikes}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mapButton}>
                    <Icon 
                        name="map-marker" 
                        size={28} 
                        color="#ffffff" 
                        style={styles.mapIcon}
                        /> 
                </TouchableOpacity>
            </View>
        )
    }
}

export default ListItem
