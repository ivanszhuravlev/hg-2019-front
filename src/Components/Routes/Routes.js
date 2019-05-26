import React, { Component } from 'react'
import Router from 'react-native-easy-router'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import EventsList from '../Screens/EventsList/EventsList'
import EventPage from '../Screens/EventPage/EventPage'

const List = ({ router }) => (
  <React.Fragment>
    <EventsList router={router} />
  </React.Fragment>
)

const Event = ({ router, event }) => (
  <React.Fragment>
    <EventPage router={router}  event={event}/>
  </React.Fragment>
)

const Addition = ({ router }) => (
  <React.Fragment>
    <Text onPress={() => router.replace.List()}>Go back to screen 1 {/* Stack will be [Screen1] */}</Text>
  </React.Fragment>
)
export class Routes extends Component {

  popRouter = (router) => {
    this.props.popRouter(router)
  }
  
  render() {
    const animations = { type: 'fade', duration: 200, easing: 'ease-in-out' }
    return (
      <Router 
          routes={{ List, Addition, Event }} 
          initialRoute="List"
          animations={animations}
          router={router => this.popRouter(router)}
      />
    )
  }
}

export default Routes
