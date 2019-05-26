import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import styles from './styles'
import ListItem from '../../UI/ListItem/ListItem';
import endpoint from '../../../config/endpoint'
import MapModal from '../../UI/MapModal/MapModal';

export class EventsList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            events: null,
            showModal: false
        };
    };

    componentWillMount() {
        const query = {
            method: "getEvents",
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

    openMap = place => {

        this.setState({
            ...this.state,
            showModal: place
        })
    }

    render() {
        const { events } = this.state
        console.log(this.props)
        return (
            <ScrollView style={styles.listWrap}>
                <FlatList
                    data={events}
                    renderItem={({item}) => 
                        <ListItem 
                            event={item} 
                            openMap={(place)=>this.openMap(place)} 
                            router={this.props.router}
                        />}
                    keyExtractor={item => item.eid}
                    style={styles.list}
                />
                <MapModal mapToShow={this.state.showModal} />
            </ScrollView>
        )
    }
}

export default EventsList
