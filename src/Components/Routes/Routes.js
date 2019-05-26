import React, { Component } from 'react'
import Router from 'react-native-easy-router'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import EventsList from '../Screens/EventsList/EventsList'
import NavBar from '../../Components/UI/NavBar/NavBar'
import EventPage from '../Screens/EventPage/EventPage'

const Screen = ({ children, color }) => {

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: color,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}
    >
      {children}
    </View>
  )
}

const List = ({ router }) => (
  <React.Fragment>
    <EventsList router={router} />
    <NavBar router={router}/>
  </React.Fragment>
)

const Event = ({ router, event }) => (
  <React.Fragment>
    <EventPage router={router}  event={event}/>
    <NavBar router={router}/>
  </React.Fragment>
)



const Addition = ({ router }) => (
  <React.Fragment>
    <Text onPress={() => router.replace.List()}>Go back to screen 1 {/* Stack will be [Screen1] */}</Text>
    <NavBar router={router}/>
  </React.Fragment>
)

const animations = { type: 'fade', duration: 200, easing: 'ease-in-out' }

export default () => 
  <Router 
    routes={{ List, Addition, Event }} 
    initialRoute="List"
    animations={animations}
/>