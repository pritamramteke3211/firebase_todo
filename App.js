import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/login/Login'
import GetData from './src/screens/firebase/GetData'

const App = () => {
  return (
    <>
      {/* <Login/> */}
      <GetData/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})