import React, { Component } from 'react'
import Router from 'react-native-easy-router'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import EventsList from '../Screens/EventsList/EventsList'
// import Mapbox from '@mapbox/react-native-mapbox-gl';


const Screen = ({ children, color }) => {
  // MapboxGL.setAccessToken(config.get('accessToken'));
  return (
    <ScrollView
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
    </ScrollView>
  )
}

const Screen1 = ({ router }) => (
  <EventsList />
)

const Screen2 = ({ router }) => (
  <Screen color="pink">
    <Text onPress={() => router.replace.Screen1()}>Go back to screen 1 {/* Stack will be [Screen1] */}</Text>
  </Screen>
)

export default () => <Router routes={{ Screen1, Screen2 }} initialRoute="Screen1" />