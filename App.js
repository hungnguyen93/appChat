import React, { Component } from 'react';

import LogIn from './components/LogIn';
import Resgister from './components/Resgister';
import ResgisterDone from './components/ResgisterDone';
import Chat1 from './components/Chat1';
import { Actions, Scene, Router } from 'react-native-router-flux';
export default class App extends Component {
  render() {
    return (
    <Router scenes={scenes}>
    <LogIn></LogIn>
    </Router>
   
   // <Chat1/>
    );
  }
}
const scenes = Actions.create(
  <Scene key="root" hideNavBar hideTabBar>
    <Scene key="Login" component={LogIn} initial={true}/>
    <Scene key="Resgister" component={Resgister}/>
    <Scene key="ResgisterDone" component={ResgisterDone}/>
    <Scene key="Chat1" component={Chat1}/>
  </Scene>
)
