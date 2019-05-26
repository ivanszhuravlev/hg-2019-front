import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import NavBar from './src/Components/UI/NavBar/NavBar'
import Routes from "./src/Components/Routes/Routes";


export default class App extends Component<Props> {

  constructor(props) {
    super(props)
  
    this.state = {
       router: null
    };
  };
  

  getRouter = (router) => {
    this.setState({
      ...this.state,
      router
    })
  }

  render() {
    return (
      <React.Fragment>
        <Routes popRouter={(router) => this.getRouter(router)} />
        <NavBar router={this.state.router}/>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
