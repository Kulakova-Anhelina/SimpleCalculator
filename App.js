import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import CalculatorScreen from './CalculatorScreen';
import HistoryScreen from './HistoryScreen';




const MyApp= createStackNavigator
({Calculator:{screen:CalculatorScreen},
  History:{screen:HistoryScreen}});

  const AppContainer =  createAppContainer(MyApp);
  export default function App() {return(<AppContainer/>)};





