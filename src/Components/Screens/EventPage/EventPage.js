import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import styles from './styles'
import endpoint from '../../../config/endpoint'

export class EventPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
        };
    };


    render() {
        // const { events } = this.state
        console.log(this.props)
        return (
            <ScrollView >
                
            </ScrollView>
        )
    }
}

export default EventPage
