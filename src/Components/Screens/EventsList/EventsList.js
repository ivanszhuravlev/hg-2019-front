import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import styles from './styles'
import ListItem from '../../UI/ListItem/ListItem';
import endpoint from '../../../config/endpoint'

export class EventsList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            events: null
        };
    };

    componentWillMount() {
        const query = {
            method: "test_getEvent",
            payload: "true"
        }
        fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            this.setState({
                ...this.state,
                events: data
            })
        })
    }

    render() {
        const { events } = this.state

        return (
            <ScrollView style={styles.listWrap}>
                <FlatList
                    data={events}
                    renderItem={({item}) => <ListItem event={item} />}
                    keyExtractor={item => item.eid}
                    style={styles.list}
                />
            </ScrollView>
        )
    }
}

export default EventsList
